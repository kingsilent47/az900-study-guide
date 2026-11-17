import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../state/AppState';
import { DOMAINS } from '../../data/domains';
import { createTest, EXAM_LENGTH, formatDuration } from '../../lib/testEngine';
import { domainMastery, weakUids } from '../../lib/store';
import { Reveal, Stat, DomainBar, Toggle } from '../../components/ui';
import { IconArrowRight, IconShuffle, IconTarget, IconClock, IconFlag, IconBookmark } from '../../components/Icons';

function readAccuracy() {
  try {
    const raw = window.localStorage.getItem('az900-progress');
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (!p || typeof p.totalAnswered !== 'number' || p.totalAnswered < 1) return null;
    const correct = typeof p.correct === 'number' ? p.correct : 0;
    return Math.round((correct / p.totalAnswered) * 100);
  } catch (err) {
    return null;
  }
}

export default function Welcome() {
  const navigate = useNavigate();
  const accuracy = readAccuracy();
  const { bank, ready, settings, setSettings, stats, history, bookmarks, session, setSession } = useApp();
  const [length, setLength] = useState(settings.practiceLength || 40);
  const [picked, setPicked] = useState(DOMAINS.map((d) => d.id));
  const [timer, setTimer] = useState(settings.timerMinutes || 0);
  const heroRef = useRef(null);

  const mastery = useMemo(() => domainMastery(stats, bank), [stats, bank]);
  const weak = useMemo(() => weakUids(stats, bank, 30), [stats, bank]);
  const answeredTotal = useMemo(() => Object.values(stats).reduce((n, s) => n + s.a, 0), [stats]);
  const correctTotal = useMemo(() => Object.values(stats).reduce((n, s) => n + s.c, 0), [stats]);
  const accuracy = answeredTotal ? Math.round((correctTotal / answeredTotal) * 100) : 0;
  const poolSize = picked.reduce((n, id) => n + bank.byDomain[id].length, 0);
  const examShort = Math.max(0, EXAM_LENGTH - bank.size);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const node = heroRef.current;
        if (!node) return;
        const y = Math.min(window.scrollY, 420);
        node.style.setProperty('--drift', (y * 0.06).toFixed(2) + 'px');
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  const launch = (config) => {
    const test = createTest({ bank, ...config });
    if (!test.count) return;
    setSession({
      test,
      answers: {},
      revealed: [],
      flagged: [],
      index: 0,
      elapsedMs: 0,
      paused: false,
      startedAt: Date.now()
    });
    navigate('/quiz');
  };

  const startExam = () => launch({
    mode: 'exam',
    count: EXAM_LENGTH,
    shuffleOptions: true,
    instantFeedback: false,
    timerMinutes: Math.round(EXAM_LENGTH * 0.9),
    title: 'Full mock exam'
  });

  const startTopic = (id) => {
    const d = DOMAINS.find((x) => x.id === id);
    launch({
      mode: 'practice',
      domainIds: [id],
      count: bank.byDomain[id].length,
      shuffleOptions: settings.shuffleOptions,
      instantFeedback: settings.instantFeedback,
      timerMinutes: 0,
      title: d.short + ' test'
    });
  };

  const startCustom = () => {
    setSettings((s) => ({ ...s, practiceLength: length, timerMinutes: timer }));
    launch({
      mode: 'practice',
      domainIds: picked.length === DOMAINS.length ? null : picked,
      count: Math.min(length, poolSize),
      shuffleOptions: settings.shuffleOptions,
      instantFeedback: settings.instantFeedback,
      timerMinutes: timer,
      title: 'Custom practice test'
    });
  };

  const toggleDomain = (id) => {
    setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : prev.concat(id)));
  };

  return (
    <div className="page welcome">
      <section className="hero" ref={heroRef}>
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow">Microsoft Azure Fundamentals</span>
            <h1>Train every AZ-900 objective, then sit the full 501.</h1>
            <p className="lede">
              Four topic tests built from your own bank, a weighted mock exam that mirrors the published objective split,
              and a fresh shuffle of questions and answer options every time you start.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={startExam} disabled={!ready || !bank.size}>
                <IconTarget width={18} height={18} />
                Start the 501-question mock exam
                <IconArrowRight width={18} height={18} />
              </button>
              <Link className="btn btn-ghost btn-lg" to="/bank">Browse the bank</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="hero-stats">
              <Stat label="Unique questions" value={ready ? bank.size.toLocaleString() : '...'} sub={bank.duplicates + ' duplicates merged'} />
              <Stat label="Answers logged" value={answeredTotal.toLocaleString()} sub={answeredTotal ? accuracy + '% accuracy' : 'no attempts yet'} />
              <Stat label="Tests completed" value={history.length} sub={history.length ? 'last ' + formatDuration(history[0].summary.durationMs) : 'start your first'} />
              <Stat label="Bookmarked" value={bookmarks.length} sub="for targeted drills" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="hero-panel-wrap">
          <aside className="hero-panel">
            <h2>Exam composition</h2>
            <p className="panel-note">The mock exam samples without replacement, weighted to the official objective bands.</p>
            <ul className="mix">
              {DOMAINS.map((d) => {
                const want = Math.round(EXAM_LENGTH * d.weight);
                const have = bank.byDomain[d.id].length;
                return (
                  <li key={d.id} style={{ '--hue': d.hex }}>
                    <div className="mix-head">
                      <span className="mix-name">{d.short}</span>
                      <span className="mix-num">{Math.min(want, have)} / {want}</span>
                    </div>
                    <div className="mix-track">
                      <span className="mix-fill" style={{ width: Math.min(100, (have / Math.max(1, want)) * 100) + '%' }} />
                    </div>
                    <span className="mix-note">{d.note} · {have} in bank</span>
                  </li>
                );
              })}
            </ul>
            {examShort > 0 ? (
              <div className="panel-alert">
                <strong>{examShort} questions short of 501.</strong>
                <span>Move your data files into <code>public/</code> or paste the PDF text on the Data page. The exam runs on everything available until then.</span>
                <Link className="btn btn-mini" to="/import">Open the data page</Link>
              </div>
            ) : (
              <div className="panel-ok">Full 501 available. Every start reshuffles questions and options.</div>
            )}
          </aside>
        </Reveal>
      </section>

      {session && session.test ? (
        <Reveal>
          <div className="resume">
            <div>
              <strong>Test in progress: {session.test.title}</strong>
              <span>{Object.keys(session.answers).length} of {session.test.count} answered · {formatDuration(session.elapsedMs)} elapsed</span>
            </div>
            <div className="resume-actions">
              <button type="button" className="btn btn-primary" onClick={() => navigate('/quiz')}>Resume</button>
              <button type="button" className="btn btn-ghost" onClick={() => setSession(null)}>Discard</button>
            </div>
          </div>
        </Reveal>
      ) : null}

      <section className="section">
        <Reveal><div className="section-head">
          <h2>Topic tests</h2>
          <p>Each test uses every question in that topic, reshuffled on each run.</p>
        </div></Reveal>
        <div className="topic-grid">
          {DOMAINS.map((d, i) => {
            const m = mastery[d.id];
            const count = bank.byDomain[d.id].length;
            return (
              <Reveal key={d.id} delay={i * 70}>
                <article className="topic" style={{ '--hue': d.hex }}>
                  <header>
                    <span className="topic-index">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{d.label}</h3>
                    <p>{d.blurb}</p>
                  </header>
                  <DomainBar id={d.id} accuracy={m.accuracy} coverage={m.coverage} attempts={m.attempts} compact />
                  <div className="topic-foot">
                    <span className="topic-count">{count} questions</span>
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => startTopic(d.id)} disabled={!count}>
                      Start test <IconArrowRight width={16} height={16} />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section">
        <Reveal><div className="section-head">
          <h2>Build a test</h2>
          <p>Set the length, topics, feedback style and clock, then start.</p>
        </div></Reveal>
        <Reveal delay={80}>
          <div className="builder">
            <div className="builder-col">
              <label className="field">
                <span className="field-label">Length <b>{Math.min(length, Math.max(1, poolSize))}</b></span>
                <input
                  type="range"
                  min={5}
                  max={Math.max(10, bank.size)}
                  step={5}
                  value={Math.min(length, Math.max(10, bank.size))}
                  onChange={(e) => setLength(Number(e.target.value))}
                />
                <span className="field-hint">{poolSize} questions match the selected topics.</span>
              </label>

              <label className="field">
                <span className="field-label">Clock</span>
                <select value={timer} onChange={(e) => setTimer(Number(e.target.value))}>
                  <option value={0}>Untimed practice</option>
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes (real exam length)</option>
                  <option value={60}>60 minutes</option>
                  <option value={120}>120 minutes</option>
                </select>
                <span className="field-hint"><IconClock width={14} height={14} /> The test submits itself when the clock reaches zero.</span>
              </label>
            </div>

            <div className="builder-col">
              <span className="field-label">Topics</span>
              <div className="pick-grid">
                {DOMAINS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    className={'pick' + (picked.includes(d.id) ? ' is-on' : '')}
                    style={{ '--hue': d.hex }}
                    onClick={() => toggleDomain(d.id)}
                    aria-pressed={picked.includes(d.id)}
                  >
                    <i className="pick-dot" />
                    <span>{d.short}</span>
                    <b>{bank.byDomain[d.id].length}</b>
                  </button>
                ))}
              </div>
              <Toggle
                id="opt-shuffle"
                checked={settings.shuffleOptions}
                onChange={(v) => setSettings((s) => ({ ...s, shuffleOptions: v }))}
                label="Shuffle answer options"
                hint="Question order always shuffles. This also reorders A, B, C, D."
              />
              <Toggle
                id="opt-feedback"
                checked={settings.instantFeedback}
                onChange={(v) => setSettings((s) => ({ ...s, instantFeedback: v }))}
                label="Reveal answers as I go"
                hint="Turn off to sit the test blind and review at the end."
              />
              <button type="button" className="btn btn-primary btn-block" onClick={startCustom} disabled={!poolSize || !picked.length}>
                <IconShuffle width={18} height={18} /> Start custom test
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="quick-grid">
          <Reveal>
            <button type="button" className="quick" onClick={() => launch({ mode: 'practice', uids: weak, count: weak.length, title: 'Weak spot drill', shuffleOptions: true, instantFeedback: true })} disabled={!weak.length}>
              <IconTarget />
              <strong>Weak spot drill</strong>
              <span>{weak.length ? weak.length + ' questions you keep missing' : 'Answer questions to unlock this drill'}</span>
            </button>
          </Reveal>
          <Reveal delay={70}>
            <button type="button" className="quick" onClick={() => launch({ mode: 'practice', uids: bookmarks, count: bookmarks.length, title: 'Bookmarked drill', shuffleOptions: true, instantFeedback: true })} disabled={!bookmarks.length}>
              <IconBookmark />
              <strong>Bookmarked drill</strong>
              <span>{bookmarks.length ? bookmarks.length + ' saved questions' : 'Bookmark questions during a test'}</span>
            </button>
          </Reveal>
          <Reveal delay={140}>
            <button
              type="button"
              className="quick"
              onClick={() => {
                const rows = history.length ? history[0].summary.rows.filter((r) => r.answered && !r.correct).map((r) => r.uid) : [];
                launch({ mode: 'practice', uids: rows, count: rows.length, title: 'Retry last mistakes', shuffleOptions: true, instantFeedback: true });
              }}
              disabled={!history.length || !history[0].summary.rows.some((r) => r.answered && !r.correct)}
            >
              <IconFlag />
              <strong>Retry last mistakes</strong>
              <span>{history.length ? history[0].summary.incorrect + ' from your last test' : 'Finish a test to unlock'}</span>
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
