import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import core from '../data/core';
import { buildBank } from '../lib/bank';
import { parseDump, parseJsonBank } from '../lib/parseDump';
import * as store from '../lib/store';

const AppState = createContext(null);

const DEFAULT_SETTINGS = {
  theme: 'day',
  shuffleOptions: true,
  instantFeedback: true,
  practiceLength: 40,
  timerMinutes: 0
};

async function fetchText(url) {
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) return null;
    const text = await res.text();
    if (!text || /^\s*</.test(text)) return null;
    return text;
  } catch (err) {
    return null;
  }
}

export function AppStateProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState(() => ({ ...DEFAULT_SETTINGS, ...store.load('settings', {}) }));
  const [stats, setStats] = useState(() => store.load('stats', {}));
  const [history, setHistory] = useState(() => store.load('history', []));
  const [bookmarks, setBookmarks] = useState(() => store.load('bookmarks', []));
  const [imported, setImported] = useState(() => store.load('imported', []));
  const [session, setSessionState] = useState(() => store.load('session', null));
  const [lastResult, setLastResult] = useState(() => store.load('lastResult', null));
  const [remote, setRemote] = useState({ json: [], dump: [], issues: [] });

  useEffect(() => {
    let alive = true;
    const base = process.env.PUBLIC_URL || '';
    (async () => {
      const issues = [];
      const jsonText = await fetchText(base + '/questions.json');
      const dumpText = await fetchText(base + '/az900_raw.txt');
      let json = [];
      let dump = [];
      if (jsonText) {
        try { json = parseJsonBank(jsonText); }
        catch (err) { issues.push({ file: 'public/questions.json', message: err.message }); }
      }
      if (dumpText) {
        const parsed = parseDump(dumpText);
        dump = parsed.items;
        if (!parsed.items.length) issues.push({ file: 'public/az900_raw.txt', message: 'No parseable questions found in this file.' });
      }
      if (!alive) return;
      setRemote({ json, dump, issues });
      setReady(true);
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => { store.save('settings', settings); }, [settings]);
  useEffect(() => { store.save('stats', stats); }, [stats]);
  useEffect(() => { store.save('history', history); }, [history]);
  useEffect(() => { store.save('bookmarks', bookmarks); }, [bookmarks]);
  useEffect(() => { store.save('imported', imported); }, [imported]);
  useEffect(() => { store.save('lastResult', lastResult); }, [lastResult]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', settings.theme === 'night' ? '#050e1c' : '#f7f4ee');
  }, [settings.theme]);

  const bank = useMemo(() => buildBank([
    { name: 'core', items: core },
    { name: 'questions.json', items: remote.json },
    { name: 'az900_raw.txt', items: remote.dump },
    { name: 'imported', items: imported }
  ]), [remote, imported]);

  const setSession = useCallback((next) => {
    setSessionState(next);
    if (next) store.save('session', next);
    else store.remove('session');
  }, []);

  const toggleBookmark = useCallback((uid) => {
    setBookmarks((prev) => (prev.includes(uid) ? prev.filter((x) => x !== uid) : prev.concat(uid)));
  }, []);

  const commitResult = useCallback((result) => {
    setStats((prev) => store.recordAnswers(prev, result.summary.rows));
    setHistory((prev) => [result].concat(prev).slice(0, 12));
    setLastResult(result);
    setSession(null);
  }, [setSession]);

  const addImported = useCallback((items) => {
    setImported((prev) => prev.concat(items));
  }, []);

  const clearImported = useCallback(() => setImported([]), []);

  const resetProgress = useCallback(() => {
    setStats({});
    setHistory([]);
    setLastResult(null);
    setSession(null);
  }, [setSession]);

  const value = useMemo(() => ({
    ready, bank, issues: remote.issues, settings, setSettings,
    stats, history, bookmarks, toggleBookmark, imported, addImported, clearImported,
    session, setSession, lastResult, setLastResult, commitResult, resetProgress
  }), [ready, bank, remote.issues, settings, stats, history, bookmarks, toggleBookmark,
    imported, addImported, clearImported, session, setSession, lastResult, commitResult, resetProgress]);

  return <AppState.Provider value={value}>{children}</AppState.Provider>;
}

export function useApp() {
  const ctx = useContext(AppState);
  if (!ctx) throw new Error('useApp must be used inside AppStateProvider');
  return ctx;
}
