const PREFIX = 'az900.v1.';

export function load(key, fallback) {
  try {
    const raw = window.localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  } catch (err) {
    return fallback;
  }
}

export function save(key, value) {
  try {
    window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
    return true;
  } catch (err) {
    return false;
  }
}

export function remove(key) {
  try { window.localStorage.removeItem(PREFIX + key); } catch (err) { /* storage unavailable */ }
}

export const emptyStats = {};

export function recordAnswers(stats, rows) {
  const next = { ...stats };
  const now = Date.now();
  rows.forEach((row) => {
    if (!row.answered) return;
    const prev = next[row.uid] || { a: 0, c: 0, last: 0, t: 0 };
    next[row.uid] = {
      a: prev.a + 1,
      c: prev.c + (row.correct ? 1 : 0),
      last: row.correct ? 1 : 0,
      t: now
    };
  });
  return next;
}

export function domainMastery(stats, bank) {
  const out = {};
  Object.keys(bank.byDomain).forEach((id) => {
    let a = 0; let c = 0; let seen = 0;
    bank.byDomain[id].forEach((q) => {
      const s = stats[q.uid];
      if (s) { a += s.a; c += s.c; seen += 1; }
    });
    out[id] = {
      attempts: a,
      correct: c,
      seen,
      coverage: bank.byDomain[id].length ? seen / bank.byDomain[id].length : 0,
      accuracy: a ? c / a : 0
    };
  });
  return out;
}

export function weakUids(stats, bank, limit) {
  const scored = bank.items
    .map((q) => {
      const s = stats[q.uid];
      if (!s || s.a === 0) return null;
      return { uid: q.uid, rate: s.c / s.a, attempts: s.a, last: s.last };
    })
    .filter(Boolean)
    .filter((r) => r.rate < 0.75)
    .sort((a, b) => (a.rate - b.rate) || (b.attempts - a.attempts));
  return scored.slice(0, limit || 30).map((r) => r.uid);
}

export function studyStreak(history) {
  if (!history.length) return 0;
  const days = new Set(history.map((h) => new Date(h.finishedAt).toDateString()));
  let streak = 0;
  const cursor = new Date();
  for (let i = 0; i < 400; i += 1) {
    if (days.has(cursor.toDateString())) streak += 1;
    else if (i > 0) break;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
