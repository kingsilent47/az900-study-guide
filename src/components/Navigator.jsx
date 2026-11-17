import React, { memo } from 'react';

function Navigator({ items, answers, revealedUids, flagged, current, onJump, examMode }) {
  return (
    <div className="nav-grid-wrap">
      <div className="nav-grid">
        {items.map((item, i) => {
          const answered = (answers[item.uid] || []).length > 0;
          const revealed = revealedUids.includes(item.uid);
          let cls = 'nav-cell';
          if (i === current) cls += ' is-current';
          if (revealed) cls += ' is-graded';
          else if (answered) cls += ' is-answered';
          if (flagged.includes(item.uid)) cls += ' is-flagged';
          return (
            <button key={item.uid} type="button" className={cls} onClick={() => onJump(i)} aria-label={'Go to question ' + (i + 1)} aria-current={i === current}>
              {i + 1}
            </button>
          );
        })}
      </div>
      <div className="nav-legend">
        <span><i className="dot dot-current" />Current</span>
        <span><i className="dot dot-answered" />{examMode ? 'Answered' : 'Checked'}</span>
        <span><i className="dot dot-flagged" />Flagged</span>
        <span><i className="dot dot-idle" />Unseen</span>
      </div>
    </div>
  );
}

export default memo(Navigator);
