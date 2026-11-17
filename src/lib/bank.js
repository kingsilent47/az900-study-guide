import { classify, domainFromLabel, DOMAIN_BY_ID } from '../data/domains';
import { stripBoilerplate } from './parseDump';

function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i += 1) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return 'q' + (h >>> 0).toString(36);
}

const keyText = (s) => String(s || '').toLowerCase()
  .replace(/this question requires that you evaluate[\s\S]*?correct\./g, '')
  .replace(/instructions:[\s\S]*?correct\./g, '')
  .replace(/note: this question is part of a series[\s\S]*?review screen\./g, '')
  .replace(/each correct (selection|match|answer) is worth one point/g, '')
  .replace(/[^a-z0-9]/g, '');

function toLetters(answer, length) {
  let list = [];
  if (typeof answer === 'number') list = [answer];
  else if (typeof answer === 'string') {
    const raw = answer.trim().toUpperCase();
    if (/^[A-E](\s*[, ]?\s*[A-E])*$/.test(raw)) list = raw.replace(/[^A-E]/g, '').split('').map((c) => c.charCodeAt(0) - 65);
    else if (/^\d+$/.test(raw)) list = [Number(raw)];
  } else if (Array.isArray(answer)) {
    list = answer.map((a) => (typeof a === 'string' && /[A-E]/i.test(a) ? a.toUpperCase().charCodeAt(0) - 65 : Number(a)));
  }
  return [...new Set(list.filter((n) => Number.isInteger(n) && n >= 0 && n < length))].sort((a, b) => a - b);
}

export function sanitize(raw, source) {
  if (!raw || typeof raw !== 'object') return null;
  const options = Array.isArray(raw.options) ? raw.options.map((o) => String(o == null ? '' : o).replace(/\s+/g, ' ').trim()) : [];
  if (options.length < 2 || options.length > 6) return null;
  if (options.some((o) => !o || /^(not\s+)?mastered$/i.test(o))) return null;

  const question = stripBoilerplate(raw.question);
  if (question.length < 15) return null;
  if (/^(for each of the following statements|to complete the sentence|select the answer that correctly|match the)/i.test(question) && question.length < 190) return null;

  const answer = toLetters(raw.answer, options.length);
  if (!answer.length) return null;

  const tagged = domainFromLabel(raw.topic || raw.domain);
  const domain = tagged || classify([question, options.join(' '), raw.explanation].join(' '));
  const explanation = String(raw.explanation || '').replace(/\s+/g, ' ').trim();

  return {
    uid: hash(keyText(question) + '|' + options.map(keyText).join('|')),
    ref: raw.id != null ? String(raw.id) : null,
    source,
    domain: DOMAIN_BY_ID[domain] ? domain : 'arch',
    question,
    options,
    answer,
    multi: answer.length > 1,
    explanation
  };
}

export function buildBank(sources) {
  const map = new Map();
  const report = [];
  let dropped = 0;
  let duplicates = 0;

  sources.forEach(({ name, items }) => {
    let kept = 0;
    let bad = 0;
    let dup = 0;
    (items || []).forEach((raw) => {
      const clean = sanitize(raw, name);
      if (!clean) { bad += 1; dropped += 1; return; }
      const existing = map.get(clean.uid);
      if (existing) {
        dup += 1; duplicates += 1;
        if ((clean.explanation || '').length > (existing.explanation || '').length) {
          map.set(clean.uid, { ...clean, ref: existing.ref || clean.ref, source: existing.source });
        }
        return;
      }
      map.set(clean.uid, clean);
      kept += 1;
    });
    report.push({ name, provided: (items || []).length, kept, bad, dup });
  });

  const items = [...map.values()];
  const byDomain = {};
  Object.keys(DOMAIN_BY_ID).forEach((id) => { byDomain[id] = []; });
  items.forEach((q) => { byDomain[q.domain].push(q); });

  return { items, byId: map, byDomain, report, dropped, duplicates, size: items.length };
}
