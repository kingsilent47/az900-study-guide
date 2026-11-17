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
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;

  const drill = (uids, title) => {
    if (!uids.length) return;
    const test = createTest({ bank, mode: 'practice', uids, count: uids.length, shuffleOptions: true, instantFeedback: true, title });
    setSession({ test, answers: {}, revealed: [], flagged: [], index: 0, elapsedMs: 0, paused: false, startedAt: Date.now() });
    navigate('/quiz');
  };

  return (
    <div className="page dash">
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
        <Stat label="Overall accuracy" value={answered ? accuracy + '%' : 'no data'} sub={correct + ' of ' + answered + ' answers'} tone={accuracy >= 70 ? 'ok' : answered ? 'no' : undefined} />
        <Stat label="Bank coverage" value={Math.round((seen / Math.max(1, bank.size)) * 100) + '%'} sub={seen + ' of ' + bank.size + ' questions seen'} />
        <Stat label="Study streak" value={streak + (streak === 1 ? ' day' : ' days')} sub={history.length + ' tests completed'} />
        <Stat label="Time on task" value={time ? formatDuration(time) : '0 min'} sub="from completed tests" />
      </div>

      <section className="section dash-two">
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
              {history.length ? (
                <>
                  <span>Latest {history[0].summary.percent}%</span>
                  <span>Best {Math.max.apply(null, history.map((h) => h.summary.percent))}%</span>
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
          {weak.length ? (
            <button type="button" className="btn btn-primary btn-sm" onClick={() => drill(weak, 'Weak spot drill')}>
              Drill these {weak.length} <IconArrowRight width={16} height={16} />
            </button>
          ) : null}
        </div>
        {weak.length ? (
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
        {history.length ? (
          <div className="history">
            <div className="history-row history-head">
              <span>Test</span><span>Mode</span><span>Score</span><span>Time</span><span>Date</span><span />
            </div>
            {history.map((h) => (
              <div key={h.id} className="history-row">
                <span className="h-title">{h.title}</span>
                <span className="h-mode">{h.mode === 'exam' ? 'Exam' : 'Practice'}</span>
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
