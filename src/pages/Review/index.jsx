import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../../state/AppState';
import { DOMAINS, DOMAIN_BY_ID } from '../../data/domains';
import { createTest, formatDuration } from '../../lib/testEngine';
import { DomainChip, Empty, Stat } from '../../components/ui';
import { IconCheck, IconCross, IconFlag, IconArrowRight } from '../../components/Icons';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'wrong', label: 'Incorrect' },
  { id: 'flagged', label: 'Flagged' },
  { id: 'blank', label: 'Unanswered' },
  { id: 'right', label: 'Correct' }
];

export default function Review() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { bank, history, lastResult, setSession } = useApp();
  const [filter, setFilter] = useState('wrong');
  const [open, setOpen] = useState(null);

  const id = params.get('id');
  const result = useMemo(() => {
    if (id) return history.find((h) => h.id === id) || null;
    return lastResult;
  }, [id, history, lastResult]);

  if (!result) {
    return (
      <div className="page">
        <Empty title="Nothing to review yet" body="Finish a test and the full breakdown lands here." action={<Link className="btn btn-primary" to="/">Start a test</Link>} />
      </div>
    );
  }

  const s = result.summary;
  const passed = s.scaled >= 700;
  const rows = s.rows.filter((r) => {
    if (filter === 'wrong') return r.answered && !r.correct;
    if (filter === 'flagged') return r.flagged;
    if (filter === 'blank') return !r.answered;
    if (filter === 'right') return r.correct;
    return true;
  });

  const startRetry = (uids, title) => {
    if (!uids.length) return;
    const test = createTest({ bank, mode: 'practice', uids, count: uids.length, shuffleOptions: true, instantFeedback: true, title });
    setSession({ test, answers: {}, revealed: [], flagged: [], index: 0, elapsedMs: 0, paused: false, startedAt: Date.now() });
    navigate('/quiz');
  };

  const wrongUids = s.rows.filter((r) => r.answered && !r.correct).map((r) => r.uid);
  const flaggedUids = s.rows.filter((r) => r.flagged).map((r) => r.uid);

  return (
    <div className="page review">
      <section className={'score-hero ' + (passed ? 'is-pass' : 'is-fail')}>
        <div className="score-main">
          <span className="eyebrow">{result.title} · {new Date(result.finishedAt).toLocaleString()}</span>
          <div className="score-figure">
            <span className="score-pct">{s.percent}<i>%</i></span>
            <span className={'score-verdict ' + (passed ? 'ok' : 'no')}>{passed ? 'Above the 700 pass mark' : 'Below the 700 pass mark'}</span>
          </div>
          <p className="score-note">
            Indicative scaled score {s.scaled} / 1000. Microsoft reports AZ-900 on a scaled range with a 700 pass mark, so treat this as a guide rather than an official conversion.
          </p>
          <div className="score-actions">
            <button type="button" className="btn btn-primary" onClick={() => startRetry(wrongUids, 'Retry incorrect')} disabled={!wrongUids.length}>
              Retry {wrongUids.length} incorrect <IconArrowRight width={16} height={16} />
            </button>
            <button type="button" className="btn btn-outline" onClick={() => startRetry(flaggedUids, 'Flagged drill')} disabled={!flaggedUids.length}>
              Drill {flaggedUids.length} flagged
            </button>
            <Link className="btn btn-ghost" to="/dashboard">See progress</Link>
          </div>
        </div>
        <div className="score-side">
          <Stat label="Correct" value={s.correct} tone="ok" />
          <Stat label="Incorrect" value={s.incorrect} tone="no" />
          <Stat label="Unanswered" value={s.unanswered} />
          <Stat label="Time" value={formatDuration(s.durationMs)} />
        </div>
      </section>

      {result.shortfall > 0 ? (
        <div className="banner">
          This run held {s.total} of the {result.target} requested questions because the bank does not yet hold enough unique items.
          <Link to="/import"> Add more on the data page</Link>.
        </div>
      ) : null}

      <section className="section">
        <div className="section-head"><h2>Objective breakdown</h2><p>Where the marks came from and where they leaked.</p></div>
        <div className="break-grid">
          {DOMAINS.map((d) => {
            const b = s.byDomain[d.id];
            if (!b || !b.total) return null;
            const pct = Math.round((b.correct / b.total) * 100);
            return (
              <div key={d.id} className="break" style={{ '--hue': d.hex }}>
                <div className="break-head"><span>{d.short}</span><b>{b.correct}/{b.total}</b></div>
                <div className="break-track"><span style={{ width: pct + '%' }} /></div>
                <div className="break-foot">{pct}% · {b.answered} answered</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Question review</h2>
          <p>Open any row to read the key and the explanation.</p>
        </div>
        <div className="filters">
          {FILTERS.map((f) => {
            const count = s.rows.filter((r) => (
              f.id === 'wrong' ? r.answered && !r.correct
                : f.id === 'flagged' ? r.flagged
                  : f.id === 'blank' ? !r.answered
                    : f.id === 'right' ? r.correct : true
            )).length;
            return (
              <button key={f.id} type="button" className={'filter' + (filter === f.id ? ' is-on' : '')} onClick={() => setFilter(f.id)}>
                {f.label} <b>{count}</b>
              </button>
            );
          })}
        </div>

        <div className="review-list">
          {rows.length === 0 ? <Empty title="Nothing in this filter" body="Switch filters to inspect the rest of the test." /> : null}
          {rows.map((row, i) => {
            const q = bank.byId.get(row.uid);
            const isOpen = open === row.uid;
            if (!q) {
              return <div key={row.uid} className="rrow is-missing">Question {i + 1} is no longer in the bank.</div>;
            }
            const d = DOMAIN_BY_ID[row.domain];
            return (
              <div key={row.uid} className={'rrow' + (isOpen ? ' is-open' : '')} style={{ '--hue': d.hex }}>
                <button type="button" className="rrow-head" onClick={() => setOpen(isOpen ? null : row.uid)} aria-expanded={isOpen}>
                  <span className={'rrow-state ' + (row.correct ? 'ok' : row.answered ? 'no' : 'idle')}>
                    {row.correct ? <IconCheck width={14} height={14} /> : row.answered ? <IconCross width={14} height={14} /> : <span className="dash" />}
                  </span>
                  <span className="rrow-q">{q.question}</span>
                  {row.flagged ? <span className="rrow-flag"><IconFlag width={14} height={14} /></span> : null}
                  <DomainChip id={row.domain} small />
                </button>
                {isOpen ? (
                  <div className="rrow-body">
                    <ul className="rrow-options">
                      {q.options.map((opt, oi) => {
                        const key = q.answer.includes(oi);
                        const chose = row.selected.includes(oi);
                        return (
                          <li key={oi} className={(key ? 'is-key ' : '') + (chose && !key ? 'is-picked-wrong' : '') + (chose && key ? ' is-picked-right' : '')}>
                            <span className="letter">{LETTERS[oi]}</span>
                            <span>{opt}</span>
                            {key ? <em>key</em> : null}
                            {chose ? <em className="yours">your pick</em> : null}
                          </li>
                        );
                      })}
                    </ul>
                    {q.explanation ? <p className="rrow-explain">{q.explanation}</p> : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
