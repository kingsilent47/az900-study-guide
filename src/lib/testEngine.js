import { DOMAINS } from '../data/domains';

export const EXAM_LENGTH = 501;

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle(list, rnd) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = out[i]; out[i] = out[j]; out[j] = tmp;
  }
  return out;
}

function weightedPick(bank, count, rnd) {
  const total = Math.min(count, bank.size);
  const quota = {};
  const taken = {};
  let assigned = 0;
  DOMAINS.forEach((d) => {
    const want = Math.round(total * d.weight);
    const have = bank.byDomain[d.id].length;
    taken[d.id] = Math.min(want, have);
    quota[d.id] = taken[d.id];
    assigned += taken[d.id];
  });

  let guard = 0;
  while (assigned < total && guard < 500) {
    guard += 1;
    let progressed = false;
    for (const d of DOMAINS) {
      if (assigned >= total) break;
      if (taken[d.id] < bank.byDomain[d.id].length) { taken[d.id] += 1; assigned += 1; progressed = true; }
    }
    if (!progressed) break;
  }
  guard = 0;
  while (assigned > total && guard < 5000) {
    guard += 1;
    for (const d of DOMAINS.slice().reverse()) {
      if (assigned <= total) break;
      if (taken[d.id] > 0) { taken[d.id] -= 1; assigned -= 1; }
    }
  }

  let picked = [];
  DOMAINS.forEach((d) => {
    picked = picked.concat(shuffle(bank.byDomain[d.id], rnd).slice(0, taken[d.id]));
  });
  return shuffle(picked, rnd);
}

export function createTest(options) {
  const {
    bank,
    mode = 'practice',
    domainIds = null,
    uids = null,
    count = 40,
    shuffleOptions = true,
    instantFeedback = true,
    timerMinutes = 0,
    title = null,
    seed = (Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0
  } = options;

  const rnd = mulberry32(seed);
  let picked;

  if (uids && uids.length) {
    const set = new Set(uids);
    picked = shuffle(bank.items.filter((q) => set.has(q.uid)), rnd);
    if (count && count < picked.length) picked = picked.slice(0, count);
  } else if (mode === 'exam') {
    picked = weightedPick(bank, count, rnd);
  } else {
    const pool = domainIds && domainIds.length
      ? bank.items.filter((q) => domainIds.includes(q.domain))
      : bank.items;
    picked = shuffle(pool, rnd).slice(0, Math.min(count, pool.length));
  }

  const items = picked.map((q) => {
    const order = shuffleOptions ? shuffle(q.options.map((_, i) => i), rnd) : q.options.map((_, i) => i);
    return {
      uid: q.uid,
      domain: q.domain,
      question: q.question,
      options: order.map((i) => q.options[i]),
      answer: q.answer.map((a) => order.indexOf(a)).sort((a, b) => a - b),
      multi: q.answer.length > 1
    };
  });

  return {
    id: 't' + seed.toString(36) + Math.floor(rnd() * 1e6).toString(36),
    seed,
    mode,
    title: title || (mode === 'exam' ? 'Full mock exam' : 'Practice test'),
    domainIds: domainIds || null,
    target: count,
    count: items.length,
    shortfall: Math.max(0, count - items.length),
    shuffleOptions,
    instantFeedback: mode === 'exam' ? false : instantFeedback,
    timerMinutes,
    createdAt: Date.now(),
    items
  };
}

export function isCorrect(item, selected) {
  const a = (selected || []).slice().sort((x, y) => x - y);
  const b = item.answer.slice().sort((x, y) => x - y);
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

export function summarize(test, answers, flagged, durationMs) {
  const byDomain = {};
  DOMAINS.forEach((d) => { byDomain[d.id] = { total: 0, correct: 0, answered: 0 }; });
  const rows = test.items.map((item) => {
    const selected = answers[item.uid] || [];
    const answered = selected.length > 0;
    const correct = answered && isCorrect(item, selected);
    const bucket = byDomain[item.domain];
    bucket.total += 1;
    if (answered) bucket.answered += 1;
    if (correct) bucket.correct += 1;
    return { uid: item.uid, domain: item.domain, selected, answered, correct, flagged: flagged.includes(item.uid) };
  });

  const correct = rows.filter((r) => r.correct).length;
  const answered = rows.filter((r) => r.answered).length;
  return {
    rows,
    byDomain,
    total: rows.length,
    answered,
    correct,
    incorrect: answered - correct,
    unanswered: rows.length - answered,
    percent: rows.length ? Math.round((correct / rows.length) * 100) : 0,
    scaled: rows.length ? Math.round((correct / rows.length) * 1000) : 0,
    durationMs: durationMs || 0
  };
}

export function formatClock(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? h + ':' + pad(m) + ':' + pad(s) : pad(m) + ':' + pad(s);
}

export function formatDuration(ms) {
  const mins = Math.round(ms / 60000);
  if (mins < 1) return 'under a minute';
  if (mins < 60) return mins + ' min';
  const h = Math.floor(mins / 60);
  return h + ' h ' + (mins % 60) + ' min';
}
