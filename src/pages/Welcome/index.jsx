import React, { useMemo, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../../state/AppState';
import { DOMAINS } from '../../data/domains';
import { createTest, EXAM_LENGTH, formatDuration } from '../../lib/testEngine';
import { domainMastery, weakUids } from '../../lib/store';
import { Reveal, Stat, DomainBar, Toggle } from '../../components/ui';
import { IconArrowRight, IconShuffle, IconTarget, IconClock, IconFlag, IconBookmark } from '../../components/Icons';

export default function Welcome() {
  const navigate = useNavigate();
  const { bank, ready, settings, setSettings, stats, history, bookmarks, session, setSession } = useApp();
  const [length, setLength] = useState(settings.practiceLength || 40);
  const [picked, setPicked] = useState(DOMAINS.map((d) => d.id));
  const [timer, setTimer] = useState(settings.timerMinutes || 0);
  const heroRef = useRef(null);

  const mastery = useMemo(() => domainMastery(stats, bank), [stats, bank]);
  const weak = useMemo(() => weakUids(stats, bank, 30), [stats, bank]);
  const answeredTotal = useMemo(() => Object.values(stats).reduce((n, s) => n + s.a, 0), [stats]);
  const correctTotal = useMemo(() => Object.values(stats).reduce((n, s) => n + s.c, 0), [stats]);
  const accuracy = answeredTotal > 0 ? Math.round((correctTotal / answeredTotal) * 100) : 0;
  const poolSize = picked.reduce((n, id) => n + bank.byDomain[id].length, 0);
  const examShort = Math.max(0, EXAM_LENGTH - bank.size);
  const sliderMax = Math.max(10, bank.size);
  const sliderValue = Math.min(Math.max(5, length), sliderMax);
  const lastMistakes = useMemo(
    () => (history.length ? history[0].summary.rows.filter((r) => r.answered && !r.correct).map((r) => r.uid) : []),
    [history]
  );

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
    // Navigate directly to the quiz with the topic ID in the URL
    // The Quiz component will read this param and filter the questions
    navigate('/quiz/' + id);
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
            <h1>Train every AZ-900 objective, then sit the full 60.</h1>
            <p className="lede">
              Four topic tests built from your own bank, a weighted mock exam that mirrors the published objective split,
              and a fresh shuffle of questions and answer options every time you start.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary btn-lg" onClick={startExam} disabled={!ready || !bank.size}>
                <IconTarget width={18} height={18} />
                Start the 60-question mock exam
                <IconArrowRight width={18} height={18} />
              </button>
              <Link className="btn btn-ghost btn-lg" to="/bank">
                Browse the bank
                <IconArrowRight width={18} height={18} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="hero-stats">
              <Stat 
                label="Unique questions" 
                value={ready ? bank.size.toLocaleString() : '...'} 
                sub={bank.duplicates > 0 ? bank.duplicates + ' duplicates merged' : 'Bank ready'} 
              />
              <Stat 
                label="Answers logged" 
                value={answeredTotal.toLocaleString()} 
                sub={answeredTotal > 0 ? accuracy + '% accuracy' : 'No data yet'} 
              />
              <Stat 
                label="Tests completed" 
                value={history.length} 
                sub={history.length > 0 ? 'Last ' + formatDuration(history[0].summary.durationMs) : 'No history yet'} 
              />
              <Stat 
                label="Bookmarked" 
                value={bookmarks.length} 
                sub={bookmarks.length > 0 ? 'for targeted drills' : 'None yet'} 
              />
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
                    <span className="mix-note">{d.band}, {have} in bank</span>
                  </li>
                );
              })}
            </ul>
            {examShort > 0 ? (
              <div className="panel-alert" style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '12px 14px', borderRadius: 'var(--r-sm)', fontSize: '13px', background: 'color-mix(in srgb, var(--warn) 12%, var(--surface))', border: '1px solid color-mix(in srgb, var(--warn) 36%, transparent)' }}>
                <strong>{examShort} questions short of 60.</strong>
                <span>
                  The exam runs on everything currently in <code>src/questions.json</code>. Paste more question text on the
                  data page to close the gap, and every new item joins the next shuffle.
                </span>
                <Link className="btn btn-mini" to="/import" style={{ alignSelf: 'flex-start', marginTop: '4px' }}>Open the data page</Link>
              </div>
            ) : (
              <div className="panel-ok" style={{ padding: '10px 14px', borderRadius: 'var(--r-sm)', fontSize: '13px', background: 'color-mix(in srgb, var(--ok) 12%, var(--surface))', border: '1px solid color-mix(in srgb, var(--ok) 34%, transparent)' }}>
                Full 60 available. Every start reshuffles questions and options.
              </div>
            )}
          </aside>
        </Reveal>
      </section>

      {session && session.test ? (
        <Reveal>
          <div className="resume">
            <div>
              <strong>Test in progress: {session.test.title}</strong>
              <span>{Object.keys(session.answers).length} of {session.test.count} answered, {formatDuration(session.elapsedMs)} elapsed</span>
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
              <label className="field" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="field-label" style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', display: 'flex', justifyContent: 'space-between' }}>Length <b style={{ fontFamily: 'var(--font-mono)', color: 'var(--orange)', fontSize: '14px' }}>{Math.min(sliderValue, Math.max(1, poolSize))}</b></span>
                <input
                  type="range"
                  min={5}
                  max={sliderMax}
                  step={5}
                  value={sliderValue}
                  onChange={(e) => setLength(Number(e.target.value))}
                  style={{ width: '100%', height: '8px', borderRadius: '5px', background: 'var(--track)', outline: 'none', appearance: 'none' }}
                />
                <span className="field-hint" style={{ fontSize: '12px', color: 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>{poolSize} questions match the selected topics.</span>
              </label>

              <label className="field" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span className="field-label" style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Clock</span>
                <select value={timer} onChange={(e) => setTimer(Number(e.target.value))} style={{ background: 'var(--surface-2)', border: '1px solid var(--line-2)', borderRadius: 'var(--r-sm)', padding: '10px 12px', width: '100%', cursor: 'pointer' }}>
                  <option value={0}>Untimed practice</option>
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes, real exam length</option>
                  <option value={60}>60 minutes</option>
                  <option value={120}>120 minutes</option>
                </select>
                <span className="field-hint" style={{ fontSize: '12px', color: 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}><IconClock width={14} height={14} /> The test submits itself when the clock reaches zero.</span>
              </label>
            </div>

            <div className="builder-col">
              <span className="field-label" style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Topics</span>
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
            <button
              type="button"
              className="quick"
              onClick={() => launch({ mode: 'practice', uids: weak, count: weak.length, title: 'Weak spot drill', shuffleOptions: true, instantFeedback: true })}
              disabled={!weak.length}
            >
              <IconTarget width={18} height={18} />
              <strong>Weak spot drill</strong>
              <span>{weak.length > 0 ? weak.length + ' questions you keep missing' : 'Answer questions to unlock this drill'}</span>
            </button>
          </Reveal>
          <Reveal delay={70}>
            <button
              type="button"
              className="quick"
              onClick={() => launch({ mode: 'practice', uids: bookmarks, count: bookmarks.length, title: 'Bookmarked drill', shuffleOptions: true, instantFeedback: true })}
              disabled={!bookmarks.length}
            >
              <IconBookmark width={18} height={18} />
              <strong>Bookmarked drill</strong>
              <span>{bookmarks.length > 0 ? bookmarks.length + ' saved questions' : 'Bookmark questions during a test'}</span>
            </button>
          </Reveal>
          <Reveal delay={140}>
            <button
              type="button"
              className="quick"
              onClick={() => launch({ mode: 'practice', uids: lastMistakes, count: lastMistakes.length, title: 'Retry last mistakes', shuffleOptions: true, instantFeedback: true })}
              disabled={!lastMistakes.length}
            >
              <IconFlag width={18} height={18} />
              <strong>Retry last mistakes</strong>
              <span>{lastMistakes.length > 0 ? lastMistakes.length + ' from your last test' : 'Finish a test to unlock'}</span>
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
