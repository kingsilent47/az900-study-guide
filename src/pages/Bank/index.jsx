import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../state/AppState';
import { DOMAINS, DOMAIN_BY_ID } from '../../data/domains';
import { createTest } from '../../lib/testEngine';
import { DomainChip, Empty } from '../../components/ui';
import { IconSearch, IconBookmark, IconCross, IconArrowRight } from '../../components/Icons';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
const PAGE = 40;

export default function Bank() {
  const navigate = useNavigate();
  const { bank, stats, bookmarks, toggleBookmark, setSession } = useApp();
  const [term, setTerm] = useState('');
  const [domains, setDomains] = useState([]);
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [sort, setSort] = useState('topic');
  const [limit, setLimit] = useState(PAGE);
  const [openUid, setOpenUid] = useState(null);

  const rows = useMemo(() => {
    const needle = term.trim().toLowerCase();
    let list = bank.items.filter((q) => {
      if (domains.length && !domains.includes(q.domain)) return false;
      if (onlyBookmarked && !bookmarks.includes(q.uid)) return false;
      if (!needle) return true;
      return (q.question + ' ' + q.options.join(' ') + ' ' + q.explanation).toLowerCase().includes(needle);
    });
    const rate = (q) => { const s = stats[q.uid]; return s && s.a ? s.c / s.a : 2; };
    list = list.slice().sort((a, b) => {
      if (sort === 'topic') return a.domain.localeCompare(b.domain) || a.question.localeCompare(b.question);
      if (sort === 'weakest') return rate(a) - rate(b);
      if (sort === 'attempts') return ((stats[b.uid] || {}).a || 0) - ((stats[a.uid] || {}).a || 0);
      return a.question.localeCompare(b.question);
    });
    return list;
  }, [bank, term, domains, onlyBookmarked, bookmarks, sort, stats]);

  const visible = rows.slice(0, limit);
  const open = openUid ? bank.byId.get(openUid) : null;

  const drill = (uids, title) => {
    const test = createTest({ bank, mode: 'practice', uids, count: uids.length, shuffleOptions: true, instantFeedback: true, title });
    if (!test.count) return;
    setSession({ test, answers: {}, revealed: [], flagged: [], index: 0, elapsedMs: 0, paused: false, startedAt: Date.now() });
    navigate('/quiz');
  };

  return (
    <div className="page bank">
      <header className="page-head">
        <div>
          <span className="eyebrow">Question bank</span>
          <h1>{bank.size.toLocaleString()} unique questions</h1>
          <p className="lede">Duplicates merged, placeholder items dropped, every item tagged to an AZ-900 objective area.</p>
        </div>
        <div className="page-head-actions">
          <button type="button" className="btn btn-primary" onClick={() => drill(rows.map((r) => r.uid), 'Filtered drill')} disabled={!rows.length}>
            Test these {rows.length} <IconArrowRight width={16} height={16} />
          </button>
        </div>
      </header>

      <div className="bank-controls">
        <label className="search">
          <IconSearch width={16} height={16} />
          <input value={term} onChange={(e) => { setTerm(e.target.value); setLimit(PAGE); }} placeholder="Search questions, options and explanations" aria-label="Search the bank" />
          {term ? <button type="button" className="icon-btn tiny" onClick={() => setTerm('')} aria-label="Clear search"><IconCross width={14} height={14} /></button> : null}
        </label>
        <div className="bank-chips">
          {DOMAINS.map((d) => (
            <button
              key={d.id}
              type="button"
              className={'chip-btn' + (domains.includes(d.id) ? ' is-on' : '')}
              style={{ '--chip': d.hex }}
              onClick={() => { setDomains((p) => (p.includes(d.id) ? p.filter((x) => x !== d.id) : p.concat(d.id))); setLimit(PAGE); }}
              aria-pressed={domains.includes(d.id)}
            >
              <i className="chip-dot" />{d.short} <b>{bank.byDomain[d.id].length}</b>
            </button>
          ))}
          <button type="button" className={'chip-btn' + (onlyBookmarked ? ' is-on' : '')} onClick={() => setOnlyBookmarked((v) => !v)} aria-pressed={onlyBookmarked}>
            <IconBookmark width={14} height={14} /> Bookmarked <b>{bookmarks.length}</b>
          </button>
        </div>
        <label className="sort">
          <span>Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="topic">Objective area</option>
            <option value="weakest">Weakest first</option>
            <option value="attempts">Most attempted</option>
            <option value="alpha">Alphabetical</option>
          </select>
        </label>
      </div>

      <div className="bank-count">{rows.length} matching · showing {visible.length}</div>

      {rows.length === 0 ? (
        <Empty title="No matches" body="Loosen the filters or clear the search to see the rest of the bank." />
      ) : (
        <div className="bank-list">
          {visible.map((q) => {
            const s = stats[q.uid];
            const d = DOMAIN_BY_ID[q.domain];
            return (
              <div key={q.uid} className="brow" style={{ '--hue': d.hex }}>
                <button type="button" className="brow-main" onClick={() => setOpenUid(q.uid)}>
                  <DomainChip id={q.domain} small />
                  <span className="brow-q">{q.question}</span>
                </button>
                <div className="brow-side">
                  <span className="brow-stat">{s && s.a ? Math.round((s.c / s.a) * 100) + '% · ' + s.a : 'unseen'}</span>
                  <button type="button" className={'tool' + (bookmarks.includes(q.uid) ? ' is-on' : '')} onClick={() => toggleBookmark(q.uid)} aria-label="Bookmark">
                    <IconBookmark width={15} height={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {visible.length < rows.length ? (
        <button type="button" className="btn btn-outline btn-block" onClick={() => setLimit((l) => l + PAGE)}>Load {Math.min(PAGE, rows.length - visible.length)} more</button>
      ) : null}

      {open ? (
        <div className="drawer-scrim" onClick={() => setOpenUid(null)}>
          <aside className="drawer" onClick={(e) => e.stopPropagation()} style={{ '--hue': DOMAIN_BY_ID[open.domain].hex }} role="dialog" aria-label="Question detail">
            <header>
              <DomainChip id={open.domain} />
              <button type="button" className="icon-btn" onClick={() => setOpenUid(null)} aria-label="Close"><IconCross /></button>
            </header>
            <h2>{open.question}</h2>
            <ul className="drawer-options">
              {open.options.map((o, i) => (
                <li key={i} className={open.answer.includes(i) ? 'is-key' : ''}>
                  <span className="letter">{LETTERS[i]}</span><span>{o}</span>
                </li>
              ))}
            </ul>
            {open.explanation ? <p className="drawer-explain">{open.explanation}</p> : <p className="drawer-explain muted">No explanation supplied with this item.</p>}
            <div className="drawer-meta">
              <span>Source: {open.source}</span>
              <span>{open.multi ? 'Multiple answers' : 'Single answer'}</span>
              {stats[open.uid] ? <span>{stats[open.uid].c}/{stats[open.uid].a} correct</span> : <span>Not attempted</span>}
            </div>
            <div className="drawer-actions">
              <button type="button" className="btn btn-primary" onClick={() => drill([open.uid], 'Single question drill')}>Drill this question</button>
              <button type="button" className={'btn btn-outline' + (bookmarks.includes(open.uid) ? ' is-on' : '')} onClick={() => toggleBookmark(open.uid)}>
                {bookmarks.includes(open.uid) ? 'Remove bookmark' : 'Bookmark'}
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
