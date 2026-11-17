import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../state/AppState';
import QuestionCard from '../../components/QuestionCard';
import Navigator from '../../components/Navigator';
import ProgressBar from '../../components/ProgressBar';
import { Empty } from '../../components/ui';
import { isCorrect, summarize, formatClock } from '../../lib/testEngine';
import {
  IconArrowLeft, IconArrowRight, IconCheck, IconClock,
  IconPause, IconPlay, IconGrid, IconCross
} from '../../components/Icons';

export default function Quiz() {
  const navigate = useNavigate();
  const { bank, session, setSession, commitResult, bookmarks, toggleBookmark } = useApp();

  const test = session && session.test ? session.test : null;
  const items = useMemo(() => (test && Array.isArray(test.items) ? test.items : []), [test]);

  const [answers, setAnswers] = useState(() => (session && session.answers) || {});
  const [revealed, setRevealed] = useState(() => (session && session.revealed) || []);
  const [flagged, setFlagged] = useState(() => (session && session.flagged) || []);
  const [index, setIndex] = useState(() => (session && session.index) || 0);
  const [elapsed, setElapsed] = useState(() => (session && session.elapsedMs) || 0);
  const [paused, setPaused] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const startedAtRef = useRef(session && session.startedAt ? session.startedAt : Date.now());
  const submittingRef = useRef(false);

  const item = items[index] || null;
  const selected = useMemo(() => (item ? answers[item.uid] || [] : []), [item, answers]);
  const isRevealed = item ? revealed.indexOf(item.uid) !== -1 : false;
  const examMode = test ? test.mode === 'exam' : false;
  const instant = test ? Boolean(test.instantFeedback) : true;
  const limitMs = test && test.timerMinutes ? test.timerMinutes * 60000 : 0;
  const remaining = limitMs ? Math.max(0, limitMs - elapsed) : 0;
  const answeredCount = useMemo(
    () => items.reduce((n, q) => n + ((answers[q.uid] || []).length > 0 ? 1 : 0), 0),
    [items, answers]
  );

  const liveRef = useRef(null);
  liveRef.current = { test, answers, revealed, flagged, index, elapsed };

  const persist = useCallback(() => {
    const s = liveRef.current;
    if (!s || !s.test || submittingRef.current) return;
    setSession({
      test: s.test,
      answers: s.answers,
      revealed: s.revealed,
      flagged: s.flagged,
      index: s.index,
      elapsedMs: s.elapsed,
      paused: false,
      startedAt: startedAtRef.current
    });
  }, [setSession]);

  useEffect(() => {
    if (!test) navigate('/', { replace: true });
  }, [test, navigate]);

  useEffect(() => {
    if (!test) return undefined;
    const id = window.setTimeout(persist, 300);
    return () => window.clearTimeout(id);
  }, [test, answers, revealed, flagged, index, persist]);

  useEffect(() => {
    if (!test) return undefined;
    const id = window.setInterval(persist, 10000);
    return () => window.clearInterval(id);
  }, [test, persist]);

  useEffect(() => persist, [persist]);

  useEffect(() => {
    if (!test || paused || confirming) return undefined;
    const id = window.setInterval(() => setElapsed((e) => e + 1000), 1000);
    return () => window.clearInterval(id);
  }, [test, paused, confirming]);

  const submit = useCallback(() => {
    if (!test || submittingRef.current) return;
    submittingRef.current = true;
    const summary = summarize(test, answers, flagged, elapsed);
    commitResult({
      id: test.id,
      title: test.title,
      mode: test.mode,
      finishedAt: Date.now(),
      target: test.target,
      shortfall: test.shortfall,
      summary
    });
    navigate('/review');
  }, [test, answers, flagged, elapsed, commitResult, navigate]);

  useEffect(() => {
    if (limitMs && remaining <= 0) submit();
  }, [limitMs, remaining, submit]);

  const toggleOption = useCallback((i) => {
    if (!item || isRevealed) return;
    setAnswers((prev) => {
      const current = prev[item.uid] || [];
      let next;
      if (item.multi) {
        next = current.indexOf(i) !== -1
          ? current.filter((x) => x !== i)
          : current.concat(i).sort((a, b) => a - b);
      } else {
        next = [i];
      }
      return { ...prev, [item.uid]: next };
    });
  }, [item, isRevealed]);

  const check = useCallback(() => {
    if (!item || !selected.length || isRevealed) return;
    setRevealed((prev) => (prev.indexOf(item.uid) !== -1 ? prev : prev.concat(item.uid)));
  }, [item, selected, isRevealed]);

  const go = useCallback((next) => {
    if (!items.length) return;
    setIndex(Math.min(items.length - 1, Math.max(0, next)));
    setShowNav(false);
  }, [items.length]);

  const flag = useCallback(() => {
    if (!item) return;
    setFlagged((prev) => (prev.indexOf(item.uid) !== -1
      ? prev.filter((x) => x !== item.uid)
      : prev.concat(item.uid)));
  }, [item]);

  useEffect(() => {
    const onKey = (e) => {
      if (!item || confirming || paused) return;
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key >= '1' && e.key <= '6') {
        const i = Number(e.key) - 1;
        if (i < item.options.length) { e.preventDefault(); toggleOption(i); }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (instant && !isRevealed && selected.length) check();
        else if (index < items.length - 1) go(index + 1);
      } else if (e.key === 'ArrowRight') {
        go(index + 1);
      } else if (e.key === 'ArrowLeft') {
        go(index - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        flag();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, confirming, paused, instant, isRevealed, selected, index, items.length, toggleOption, check, go, flag]);

  if (!test) return null;

  if (!item) {
    return (
      <div className="page">
        <Empty
          title="This test has no questions"
          body="The selected topic returned an empty set. Pick another topic or run the full bank."
          action={<button type="button" className="btn btn-primary" onClick={() => navigate('/')}>Back to study</button>}
        />
      </div>
    );
  }

  const bankItem = bank.byId.get(item.uid);
  const explanation = bankItem ? bankItem.explanation : '';
  const correct = isRevealed ? isCorrect(item, selected) : false;
  const isLast = index === items.length - 1;

  return (
    <div className="page quiz">
      <div className="quiz-bar">
        <div className="quiz-bar-left">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setConfirming(true)}>
            <IconCross width={15} height={15} /> Exit
          </button>
          <div className="quiz-title">
            <strong>{test.title}</strong>
            <span>{examMode ? 'Exam conditions, answers at the end' : instant ? 'Instant feedback' : 'Blind run, answers at the end'}</span>
          </div>
        </div>
        <div className="quiz-bar-right">
          <span className={'clock' + (limitMs && remaining < 60000 ? ' is-low' : '')}>
            <IconClock width={15} height={15} />
            {limitMs ? formatClock(remaining) : formatClock(elapsed)}
          </span>
          <button type="button" className="icon-btn" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Resume clock' : 'Pause clock'}>
            {paused ? <IconPlay width={16} height={16} /> : <IconPause width={16} height={16} />}
          </button>
          <button
            type="button"
            className={'icon-btn nav-toggle' + (showNav ? ' is-on' : '')}
            onClick={() => setShowNav((s) => !s)}
            aria-label="Toggle question navigator"
            aria-pressed={showNav}
          >
            <IconGrid width={16} height={16} />
          </button>
        </div>
      </div>

      <ProgressBar value={answeredCount} total={items.length} label={answeredCount + ' of ' + items.length + ' answered'} />

      <div className={'quiz-body' + (showNav ? ' nav-open' : '')}>
        <div className="quiz-main">
          {paused ? (
            <div className="paused">
              <h2>Paused</h2>
              <p>The clock is stopped. Your answers are saved.</p>
              <button type="button" className="btn btn-primary" onClick={() => setPaused(false)}>
                <IconPlay width={16} height={16} /> Resume
              </button>
            </div>
          ) : (
            <QuestionCard
              item={item}
              index={index}
              total={items.length}
              selected={selected}
              onToggle={toggleOption}
              revealed={isRevealed}
              correct={correct}
              flagged={flagged.indexOf(item.uid) !== -1}
              onFlag={flag}
              bookmarked={bookmarks.indexOf(item.uid) !== -1}
              onBookmark={() => toggleBookmark(item.uid)}
              explanation={explanation}
            />
          )}

          <div className="quiz-actions">
            <button type="button" className="btn btn-ghost" onClick={() => go(index - 1)} disabled={index === 0}>
              <IconArrowLeft width={16} height={16} /> Previous
            </button>
            <div className="quiz-actions-right">
              {instant && !isRevealed ? (
                <button type="button" className="btn btn-primary" onClick={check} disabled={!selected.length}>
                  <IconCheck width={16} height={16} /> Check answer
                </button>
              ) : null}
              {!isLast ? (
                <button type="button" className={'btn ' + (instant && !isRevealed ? 'btn-ghost' : 'btn-primary')} onClick={() => go(index + 1)}>
                  Next <IconArrowRight width={16} height={16} />
                </button>
              ) : (
                <button type="button" className="btn btn-primary" onClick={() => setConfirming(true)}>Finish test</button>
              )}
              <button type="button" className="btn btn-outline" onClick={() => setConfirming(true)}>Submit now</button>
            </div>
          </div>

          <p className="keys">Keys: 1-6 pick an option, Enter checks or advances, F flags, arrow keys move.</p>
        </div>

        <aside className={'quiz-nav' + (showNav ? ' is-open' : '')}>
          <div className="quiz-nav-head">
            <strong>Navigator</strong>
            <span>{flagged.length} flagged</span>
          </div>
          <Navigator
            items={items}
            answers={answers}
            revealedUids={revealed}
            flagged={flagged}
            current={index}
            onJump={go}
            examMode={examMode || !instant}
          />
        </aside>
      </div>

      {confirming ? (
        <div className="modal-scrim" role="dialog" aria-modal="true" aria-label="Submit test">
          <div className="modal">
            <h2>Submit this test?</h2>
            <p>
              You answered <b>{answeredCount}</b> of <b>{items.length}</b> questions
              {answeredCount < items.length ? ', so ' + (items.length - answeredCount) + ' will be marked unanswered' : ''}.
              Results are saved to your progress.
            </p>
            <div className="modal-actions">
              <button type="button" className="btn btn-ghost" onClick={() => setConfirming(false)}>Keep going</button>
              <button type="button" className="btn btn-primary" onClick={submit}>Submit and review</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
