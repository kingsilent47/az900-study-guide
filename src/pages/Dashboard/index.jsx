import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../state/AppState';
import { DOMAINS } from '../../data/domains';
import { createTest, formatDuration } from '../../lib/testEngine';
import { domainMastery, weakUids, studyStreak, downloadJson } from '../../lib/store';
import { Stat, DomainBar, Sparkline, Reveal, Empty, DomainChip } from '../../components/ui';
import { IconDownload, IconTrash, IconArrowRight } from '../../components/Icons';

export default function Dashboard() {
  const navigate = useNavigate();
  const { bank, stats, history, bookmarks, resetProgress, setSession } = useApp();

  const mastery = useMemo(() => domainMastery(stats, bank), [stats, bank]);
  const weak = useMemo(() => weakUids(stats, bank, 12), [stats, bank]);
  const answered = useMemo(() => Object.values(stats).reduce((n, s) => n + s.a, 0), [stats]);
  const correct = useMemo(() => Object.values(stats).reduce((n, s) => n + s.c, 0), [stats]);
  const seen = useMemo(() => Object.keys(stats).filter((k) => stats[k].a > 0).length, [stats]);
  const time = useMemo(() => history.reduce((n, h) => n + (h.summary.durationMs || 0), 0), [history]);
  const trend = useMemo(() => history.slice(0, 10).map((h) => h.summary.percent).reverse(), [history]);
  const streak = studyStreak(history);
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  const drill = (uids, title) => {
    if (!uids.length) return;
    const test = createTest({ bank, mode: 'practice', uids, count: uids.length, shuffleOptions: true, instantFeedback: true, title });
    setSession({ test, answers: {}, revealed: [], flagged: [], index: 0, elapsedMs: 0, paused: false, startedAt: Date.now() });
    navigate('/quiz');
  };

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <span className="eyebrow">Progress</span>
          <h1>Your AZ-900 readiness</h1>
          <p className="lede">Every answer you submit is stored on this device and feeds the topic mastery, weak spot list and trend below.</p>
        </div>
        <div className="page-head-actions">
          <button type="button" className="btn btn-outline" onClick={() => downloadJson('az900-progress.json', { stats, history, bookmarks })}>
            <IconDownload width={16} height={16} /> Export
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => { if (window.confirm('Erase all answers, history and bookmarks on this device?')) resetProgress(); }}
          >
            <IconTrash width={16} height={16} /> Reset
          </button>
        </div>
      </header>

      <div className="dash-stats">
        <Stat
          label="Overall accuracy"
          value={answered > 0 ? accuracy + '%' : '—'}
          sub={answered > 0 ? correct + ' of ' + answered + ' answers' : 'No data yet'}
          tone={answered > 0 && accuracy >= 70 ? 'ok' : answered > 0 && accuracy < 70 ? 'no' : undefined}
        />
        <Stat
          label="Bank coverage"
          value={seen > 0 ? Math.round((seen / Math.max(1, bank.size)) * 100) + '%' : '—'}
          sub={seen > 0 ? seen + ' of ' + bank.size + ' questions seen' : 'No data yet'}
        />
        <Stat
          label="Study streak"
          value={streak > 0 ? streak + (streak === 1 ? ' day' : ' days') : '—'}
          sub={history.length > 0 ? history.length + ' tests completed' : 'No streak yet'}
        />
        <Stat
          label="Time on task"
          value={time > 0 ? formatDuration(time) : '—'}
          sub={time > 0 ? 'from completed tests' : 'No data yet'}
        />
      </div>

      <section className="section two-col">
        <Reveal>
          <div className="card">
            <div className="card-head"><h2>Topic mastery</h2><span>accuracy over coverage</span></div>
            <div className="dbar-list">
              {DOMAINS.map((d) => (
                <DomainBar key={d.id} id={d.id} accuracy={mastery[d.id].accuracy} coverage={mastery[d.id].coverage} attempts={mastery[d.id].attempts} />
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card">
            <div className="card-head"><h2>Accuracy trend</h2><span>last {trend.length} tests</span></div>
            <Sparkline points={trend} />
            <div className="trend-foot">
              {history.length > 0 ? (
                <>
                  <span>Latest {history[0].summary.percent}%</span>
                  <span>Best {Math.max(...history.map((h) => h.summary.percent))}%</span>
                </>
              ) : <span>Finish a test to start the trend line.</span>}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Weak spots</h2>
          <p>Questions you answer correctly less than 75 percent of the time.</p>
          {weak.length > 0 ? (
            <button type="button" className="btn btn-primary btn-sm" onClick={() => drill(weak, 'Weak spot drill')}>
              Drill these {weak.length} <IconArrowRight width={16} height={16} />
            </button>
          ) : null}
        </div>
        {weak.length > 0 ? (
          <div className="weak-list">
            {weak.map((uid) => {
              const q = bank.byId.get(uid);
              const st = stats[uid];
              if (!q) return null;
              return (
                <div key={uid} className="weak">
                  <DomainChip id={q.domain} small />
                  <span className="weak-q">{q.question}</span>
                  <span className="weak-rate">{Math.round((st.c / st.a) * 100)}% over {st.a}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <Empty title="No weak spots recorded" body="Answer questions in a test and anything you keep missing shows up here automatically." action={<Link className="btn btn-primary" to="/">Start a test</Link>} />
        )}
      </section>

      <section className="section">
        <div className="section-head"><h2>Test history</h2><p>Open any run to re-read its full breakdown.</p></div>
        {history.length > 0 ? (
          <div className="history">
            <div className="hrow hhead">
              <span>Test</span><span>Mode</span><span>Score</span><span>Time</span><span>Date</span><span />
            </div>
            {history.map((h) => (
              <div key={h.id} className="hrow">
                <span className="h-title">{h.title}</span>
                <span>{h.mode === 'exam' ? 'Exam' : 'Practice'}</span>
                <span className={'h-score ' + (h.summary.scaled >= 700 ? 'ok' : 'no')}>{h.summary.percent}%</span>
                <span>{formatDuration(h.summary.durationMs)}</span>
                <span className="h-date">{new Date(h.finishedAt).toLocaleDateString()}</span>
                <Link className="btn btn-mini" to={'/review?id=' + h.id}>Open</Link>
              </div>
            ))}
          </div>
        ) : (
          <Empty title="No tests yet" body="Your completed runs will be listed here with scores, timing and a link back to the full review." action={<Link className="btn btn-primary" to="/">Start your first test</Link>} />
        )}
      </section>
    </div>
  );
}
