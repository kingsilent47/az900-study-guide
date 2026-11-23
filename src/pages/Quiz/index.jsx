import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDomainByTopic } from '../../data/domains';
import ProgressBar from '../../components/ProgressBar';
import bank from '../../questions.json';

const SESSION_KEY = 'az900-session-v3';
const LEGACY_KEY = 'az900-progress';
const STATS_KEY = 'az900.v2.stats';
const EXAM_CAP = 60;
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function readJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : fallback;
  } catch (err) {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    /* storage full or unavailable, the run continues in memory */
  }
}

function dropKey(key) {
  try { window.localStorage.removeItem(key); } catch (err) { /* ignore */ }
}

function rng(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(list, rand) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    const t = out[i]; out[i] = out[j]; out[j] = t;
  }
  return out;
}

function answerIndices(answer, length) {
  let list = [];
  if (typeof answer === 'number') list = [answer];
  else if (typeof answer === 'string') {
    const s = answer.trim().toUpperCase();
    if (/^[A-F](\s*[, ]?\s*[A-F])*$/.test(s)) list = s.replace(/[^A-F]/g, '').split('').map((c) => c.charCodeAt(0) - 65);
    else if (/^\d+$/.test(s)) list = [Number(s)];
  } else if (Array.isArray(answer)) {
    list = answer.map((a) => (typeof a === 'string' && /[A-F]/i.test(a) ? a.toUpperCase().charCodeAt(0) - 65 : Number(a)));
  }
  return [...new Set(list.filter((n) => Number.isInteger(n) && n >= 0 && n < length))].sort((a, b) => a - b);
}

function usable(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const question = typeof raw.question === 'string' ? raw.question.trim() : '';
  const options = Array.isArray(raw.options) ? raw.options.map((o) => String(o == null ? '' : o).trim()) : [];
  if (question.length < 12 || options.length < 2 || options.length > 6) return null;
  if (options.some((o) => !o || /^(not\s+)?mastered$/i.test(o))) return null;
  const answer = answerIndices(raw.answer, options.length);
  if (!answer.length) return null;
  return {
    uid: String(raw.id != null ? raw.id : question.slice(0, 48)),
    topic: typeof raw.topic === 'string' && raw.topic ? raw.topic : 'Uncategorised',
    question,
    options,
    answer,
    explanation: typeof raw.explanation === 'string' ? raw.explanation.trim() : ''
  };
}

function buildOrder(topic, seed, cap) {
  const rand = rng(seed);
  const seen = new Set();
  const pool = [];
  
  (Array.isArray(bank) ? bank : []).forEach((raw) => {
    const q = usable(raw);
    if (!q) return;
    
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 160);
    if (seen.has(key)) return;
    seen.add(key);
    
    // FIX: Use the helper to match the JSON topic string to the domain ID
    if (topic) {
      const qDomain = getDomainByTopic(q.topic);
      if (qDomain !== topic) return; 
    }
    
    pool.push(q);
  });
  
  const picked = shuffle(pool, rand).slice(0, cap ? Math.min(cap, pool.length) : pool.length);
  return picked.map((q) => {
    const order = shuffle(q.options.map((_, i) => i), rand);
    return {
      uid: q.uid,
      topic: q.topic,
      question: q.question,
      options: order.map((i) => q.options[i]),
      answer: q.answer.map((a) => order.indexOf(a)).sort((a, b) => a - b),
      multi: q.answer.length > 1,
      explanation: q.explanation
    };
  });
}

function sameSet(a, b) {
  const x = (a || []).slice().sort((m, n) => m - n);
  const y = b.slice().sort((m, n) => m - n);
  return x.length === y.length && x.every((v, i) => v === y[i]);
}

function clock(ms) {
  const t = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? h + ':' + pad(m) + ':' + pad(s) : pad(m) + ':' + pad(s);
}

export default function Quiz() {
  const navigate = useNavigate();
  const params = useParams();
  const topic = params.topic ? decodeURIComponent(params.topic) : null;

  const [boot] = useState(() => {
    const saved = readJson(SESSION_KEY, null);
    if (!saved || !Array.isArray(saved.order) || !saved.order.length) return null;
    if ((saved.topic || null) !== topic) return null;
    return saved;
  });

  const [order, setOrder] = useState(() => (boot ? boot.order : buildOrder(topic, Date.now(), topic ? 0 : EXAM_CAP)));
  const [answers, setAnswers] = useState(() => (boot && boot.answers) || {});
  const [revealed, setRevealed] = useState(() => (boot && boot.revealed) || []);
  const [flagged, setFlagged] = useState(() => (boot && boot.flagged) || []);
  const [index, setIndex] = useState(() => (boot && typeof boot.index === 'number' ? boot.index : 0));
  const [elapsed, setElapsed] = useState(() => (boot && boot.elapsedMs) || 0);
  const [instant, setInstant] = useState(() => (boot ? boot.instant !== false : true));
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(null);
  const [reviewMode, setReviewMode] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const startedAt = useRef(boot && boot.startedAt ? boot.startedAt : Date.now());
  const submitted = useRef(false);
  const live = useRef(null);
  live.current = { order, answers, revealed, flagged, index, elapsed, instant, topic, startedAt: startedAt.current };

  const item = order[index] || null;
  const selected = useMemo(() => {
    if (!item) return [];
    return answers[item.uid] || [];
  }, [item, answers]);
  const isRevealed = item ? revealed.indexOf(item.uid) !== -1 : false;
  const answeredCount = order.reduce((n, q) => n + ((answers[q.uid] || []).length ? 1 : 0), 0);

  const persist = useCallback(() => {
    const s = live.current;
    if (!s || !s.order.length || submitted.current) return;
    writeJson(SESSION_KEY, {
      order: s.order, answers: s.answers, revealed: s.revealed, flagged: s.flagged,
      index: s.index, elapsedMs: s.elapsed, instant: s.instant, topic: s.topic, startedAt: s.startedAt
    });
  }, []);

  useEffect(() => {
    const t = window.setTimeout(persist, 400);
    return () => window.clearTimeout(t);
  }, [order, answers, revealed, flagged, index, instant, persist]);

  useEffect(() => {
    const id = window.setInterval(persist, 12000);
    return () => window.clearInterval(id);
  }, [persist]);

  useEffect(() => persist, [persist]);

  useEffect(() => {
    if (paused || finished || confirming) return undefined;
    const id = window.setInterval(() => setElapsed((e) => e + 1000), 1000);
    return () => window.clearInterval(id);
  }, [paused, finished, confirming]);

  const commitProgress = useCallback((rows) => {
    const legacy = readJson(LEGACY_KEY, {});
    const aggregate = {
      totalAnswered: Number(legacy.totalAnswered) || 0,
      correct: Number(legacy.correct) || 0,
      incorrect: Number(legacy.incorrect) || 0,
      byTopic: legacy.byTopic && typeof legacy.byTopic === 'object' ? legacy.byTopic : {}
    };
    const perQuestion = readJson(STATS_KEY, {});
    const now = Date.now();

    rows.forEach((row) => {
      if (!row.answered) return;
      aggregate.totalAnswered += 1;
      if (row.correct) aggregate.correct += 1; else aggregate.incorrect += 1;
      const bucket = aggregate.byTopic[row.topic] && typeof aggregate.byTopic[row.topic] === 'object'
        ? aggregate.byTopic[row.topic]
        : { total: 0, correct: 0 };
      bucket.total += 1;
      if (row.correct) bucket.correct += 1;
      aggregate.byTopic[row.topic] = bucket;

      const prev = perQuestion[row.uid] && typeof perQuestion[row.uid] === 'object'
        ? perQuestion[row.uid]
        : { a: 0, c: 0, last: 0, t: 0 };
      perQuestion[row.uid] = {
        a: (Number(prev.a) || 0) + 1,
        c: (Number(prev.c) || 0) + (row.correct ? 1 : 0),
        last: row.correct ? 1 : 0,
        t: now
      };
    });

    writeJson(LEGACY_KEY, aggregate);
    writeJson(STATS_KEY, perQuestion);
  }, []);

  const submit = useCallback(() => {
    if (submitted.current || !order.length) return;
    submitted.current = true;
    const rows = order.map((q) => {
      const picked = answers[q.uid] || [];
      const answered = picked.length > 0;
      return {
        uid: q.uid, topic: q.topic, selected: picked, answered,
        correct: answered && sameSet(picked, q.answer),
        flagged: flagged.indexOf(q.uid) !== -1
      };
    });
    commitProgress(rows);
    dropKey(SESSION_KEY);
    const correct = rows.filter((r) => r.correct).length;
    const answered = rows.filter((r) => r.answered).length;
    const byTopic = {};
    rows.forEach((r) => {
      const b = byTopic[r.topic] || { total: 0, correct: 0 };
      b.total += 1;
      if (r.correct) b.correct += 1;
      byTopic[r.topic] = b;
    });
    setFinished({
      rows, byTopic, total: rows.length, answered, correct,
      incorrect: answered - correct, unanswered: rows.length - answered,
      percent: rows.length ? Math.round((correct / rows.length) * 100) : 0,
      durationMs: elapsed
    });
  }, [order, answers, flagged, elapsed, commitProgress]);

  const pick = useCallback((i) => {
    if (!item || isRevealed) return;
    setAnswers((prev) => {
      const cur = prev[item.uid] || [];
      const next = item.multi
        ? (cur.indexOf(i) !== -1 ? cur.filter((x) => x !== i) : cur.concat(i).sort((a, b) => a - b))
        : [i];
      return { ...prev, [item.uid]: next };
    });
  }, [item, isRevealed]);

  const check = useCallback(() => {
    if (!item || !selected.length || isRevealed) return;
    setRevealed((p) => (p.indexOf(item.uid) !== -1 ? p : p.concat(item.uid)));
  }, [item, selected, isRevealed]);

  const go = useCallback((n) => {
    setIndex(Math.min(order.length - 1, Math.max(0, n)));
  }, [order.length]);

  const toggleFlag = useCallback(() => {
    if (!item) return;
    setFlagged((p) => (p.indexOf(item.uid) !== -1 ? p.filter((x) => x !== item.uid) : p.concat(item.uid)));
  }, [item]);

  const restart = useCallback((subset, label) => {
    submitted.current = false;
    startedAt.current = Date.now();
    const next = subset && subset.length ? subset : buildOrder(topic, Date.now(), topic ? 0 : EXAM_CAP);
    setOrder(next);
    setAnswers({});
    setRevealed([]);
    setFlagged([]);
    setIndex(0);
    setElapsed(0);
    setFinished(null);
    setReviewMode(Boolean(subset && subset.length));
    setPaused(false);
    setConfirming(false);
    writeJson(SESSION_KEY, {
      order: next, answers: {}, revealed: [], flagged: [], index: 0,
      elapsedMs: 0, instant: true, topic, startedAt: startedAt.current, label: label || null
    });
  }, [topic]);

  useEffect(() => {
    const onKey = (e) => {
      if (!item || finished || confirming || paused) return;
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key >= '1' && e.key <= '6') {
        const i = Number(e.key) - 1;
        if (i < item.options.length) { e.preventDefault(); pick(i); }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (instant && !isRevealed && selected.length) check();
        else if (index < order.length - 1) go(index + 1);
      } else if (e.key === 'ArrowRight') go(index + 1);
      else if (e.key === 'ArrowLeft') go(index - 1);
      else if (e.key === 'f' || e.key === 'F') toggleFlag();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, finished, confirming, paused, instant, isRevealed, selected, index, order.length, pick, check, go, toggleFlag]);

  if (!order.length) {
    return (
      <div className="qz">
        <div className="qz-empty">
          <h2>No questions available</h2>
          <p>{topic ? 'Nothing in the bank is tagged ' + topic + '.' : 'The question bank is empty or every entry failed validation.'}</p>
          <button type="button" className="qz-btn qz-btn-primary" onClick={() => navigate('/')}>Back to study</button>
        </div>
      </div>
    );
  }

  if (finished) {
    const wrong = finished.rows.filter((r) => r.answered && !r.correct);
    const wrongItems = order.filter((q) => wrong.some((r) => r.uid === q.uid));
    const passed = finished.percent >= 70;
    return (
      <div className="qz">
        <section className={'qz-result ' + (passed ? 'is-pass' : 'is-fail')}>
          <span className="qz-eyebrow">{reviewMode ? 'Review run' : topic || 'Full bank run'}, {new Date().toLocaleString()}</span>
          <div className="qz-score">
            <strong>{finished.percent}<i>%</i></strong>
            <span className={'qz-verdict ' + (passed ? 'ok' : 'no')}>{passed ? 'At or above the 70 percent mark' : 'Below the 70 percent mark'}</span>
          </div>
          <p className="qz-note">{finished.correct} correct, {finished.incorrect} incorrect, {finished.unanswered} unanswered, in {clock(finished.durationMs)}. Scaled indicator {Math.round(finished.percent * 10)} / 1000 against the 700 pass mark.</p>
          <div className="qz-result-actions">
            <button type="button" className="qz-btn qz-btn-primary" disabled={!wrongItems.length} onClick={() => restart(wrongItems, 'Retry incorrect')}>Retry {wrongItems.length} incorrect</button>
            <button type="button" className="qz-btn qz-btn-outline" onClick={() => restart(null)}>New shuffled run</button>
            <button type="button" className="qz-btn qz-btn-ghost" onClick={() => navigate('/dashboard')}>See progress</button>
          </div>
        </section>

        <section className="qz-block">
          <h3>Objective breakdown</h3>
          <div className="qz-breaks">
            {Object.keys(finished.byTopic).map((t) => {
              const b = finished.byTopic[t];
              const pct = Math.round((b.correct / b.total) * 100);
              return (
                <div key={t} className="qz-break">
                  <div className="qz-break-head"><span>{t}</span><b>{b.correct}/{b.total}</b></div>
                  <div className="qz-break-track"><span style={{ width: pct + '%' }} /></div>
                  <div className="qz-break-foot">{pct} percent</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="qz-block">
          <h3>Answer review</h3>
          <div className="qz-review">
            {finished.rows.map((row, i) => {
              const q = order.find((x) => x.uid === row.uid);
              if (!q) return null;
              return (
                <details key={row.uid + '-' + i} className={'qz-rrow ' + (row.correct ? 'ok' : row.answered ? 'no' : 'idle')}>
                  <summary>
                    <span className="qz-rmark">{row.correct ? 'Correct' : row.answered ? 'Wrong' : 'Blank'}</span>
                    <span className="qz-rq">{q.question}</span>
                  </summary>
                  <ul className="qz-ropts">
                    {q.options.map((opt, oi) => {
                      const key = q.answer.indexOf(oi) !== -1;
                      const chose = row.selected.indexOf(oi) !== -1;
                      return (
                        <li key={oi} className={(key ? 'is-key ' : '') + (chose && !key ? 'is-bad' : '')}>
                          <span className="qz-letter">{LETTERS[oi]}</span>
                          <span>{opt}</span>
                          {key ? <em>key</em> : null}
                          {chose ? <em className="yours">your pick</em> : null}
                        </li>
                      );
                    })}
                  </ul>
                  {q.explanation ? <p className="qz-rexp">{q.explanation}</p> : null}
                </details>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  const correct = isRevealed ? sameSet(selected, item.answer) : false;
  const isLast = index === order.length - 1;

  return (
    <div className="qz">
      <div className="qz-bar">
        <div className="qz-bar-side">
          <button type="button" className="qz-btn qz-btn-ghost qz-btn-sm" onClick={() => setConfirming(true)}>Exit</button>
          <div className="qz-title">
            <strong>{reviewMode ? 'Reviewing mistakes' : topic || 'Full bank run'}</strong>
            <span>{instant ? 'Instant feedback' : 'Blind run, answers at the end'}</span>
          </div>
        </div>
        <div className="qz-bar-side">
          <span className="qz-clock">{clock(elapsed)}</span>
          <button type="button" className="qz-btn qz-btn-outline qz-btn-sm" onClick={() => setInstant((v) => !v)}>{instant ? 'Hide answers' : 'Show answers'}</button>
          <button type="button" className="qz-btn qz-btn-outline qz-btn-sm" onClick={() => setPaused((p) => !p)}>{paused ? 'Resume' : 'Pause'}</button>
        </div>
      </div>

      <ProgressBar value={answeredCount} total={order.length} label={answeredCount + ' of ' + order.length + ' answered'} />

      {paused ? (
        <div className="qz-empty">
          <h2>Paused</h2>
          <p>The clock is stopped and your answers are saved on this device.</p>
          <button type="button" className="qz-btn qz-btn-primary" onClick={() => setPaused(false)}>Resume</button>
        </div>
      ) : (
        <article className="qz-card">
          <div className="qz-card-top">
            <div className="qz-card-meta">
              <span className="qz-topic">{item.topic}</span>
              <span className="qz-count">Question {index + 1} of {order.length}</span>
              {item.multi ? <span className="qz-multi">Select {item.answer.length}</span> : null}
            </div>
            <button type="button" className={'qz-flag' + (flagged.indexOf(item.uid) !== -1 ? ' is-on' : '')} onClick={toggleFlag} aria-pressed={flagged.indexOf(item.uid) !== -1}>
              {flagged.indexOf(item.uid) !== -1 ? 'Flagged' : 'Flag'}
            </button>
          </div>

          <h2 className="qz-question">{item.question}</h2>

          <div className="qz-options" role={item.multi ? 'group' : 'radiogroup'} aria-label="Answer options">
            {item.options.map((opt, i) => {
              const sel = selected.indexOf(i) !== -1;
              const key = item.answer.indexOf(i) !== -1;
              let cls = 'qz-option';
              if (sel) cls += ' is-selected';
              if (isRevealed && key) cls += ' is-correct';
              if (isRevealed && sel && !key) cls += ' is-wrong';
              return (
                <button key={i} type="button" className={cls} onClick={() => pick(i)} disabled={isRevealed}
                  role={item.multi ? 'checkbox' : 'radio'} aria-checked={sel}>
                  <span className="qz-mark">{LETTERS[i]}</span>
                  <span className="qz-text">{opt}</span>
                </button>
              );
            })}
          </div>

          {isRevealed ? (
            <div className={'qz-explain ' + (correct ? 'ok' : 'no')}>
              <div className="qz-explain-head">
                <strong>{correct ? 'Correct' : 'Not correct'}</strong>
                <span>Answer: {item.answer.map((a) => LETTERS[a]).join(', ')}</span>
              </div>
              <p>{item.explanation || 'No explanation came with this item. Compare your pick with the key above.'}</p>
            </div>
          ) : null}
        </article>
      )}

      <div className="qz-actions">
        <button type="button" className="qz-btn qz-btn-ghost" onClick={() => go(index - 1)} disabled={index === 0}>Previous</button>
        <div className="qz-actions-right">
          {instant && !isRevealed ? (
            <button type="button" className="qz-btn qz-btn-primary" onClick={check} disabled={!selected.length}>Check answer</button>
          ) : null}
          {isLast
            ? <button type="button" className="qz-btn qz-btn-primary" onClick={() => setConfirming(true)}>Finish test</button>
            : <button type="button" className={'qz-btn ' + (instant && !isRevealed ? 'qz-btn-ghost' : 'qz-btn-primary')} onClick={() => go(index + 1)}>Next</button>}
          <button type="button" className="qz-btn qz-btn-outline" onClick={() => setConfirming(true)}>Submit now</button>
        </div>
      </div>

      <p className="qz-keys">Keys: 1-6 pick an option, Enter checks or advances, F flags, arrow keys move.</p>

      {confirming ? (
        <div className="qz-scrim" role="dialog" aria-modal="true" aria-label="Submit test">
          <div className="qz-modal">
            <h2>Submit this test?</h2>
            <p>You answered <b>{answeredCount}</b> of <b>{order.length}</b> questions{answeredCount < order.length ? ', so ' + (order.length - answeredCount) + ' will be marked unanswered' : ''}. Results are written to your progress on this device.</p>
            <div className="qz-modal-actions">
              <button type="button" className="qz-btn qz-btn-ghost" onClick={() => setConfirming(false)}>Keep going</button>
              <button type="button" className="qz-btn qz-btn-primary" onClick={submit}>Submit and review</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
