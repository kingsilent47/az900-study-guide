import React from 'react';

export default function ProgressBar({ value, total, currentIndex, totalQuestions, label }) {
  const done = typeof value === 'number'
    ? value
    : typeof currentIndex === 'number' ? currentIndex + 1 : 0;
  const count = typeof total === 'number'
    ? total
    : typeof totalQuestions === 'number' ? totalQuestions : 0;

  const pct = count > 0 ? Math.min(100, Math.max(0, (done / count) * 100)) : 0;
  const anchor = Math.min(94, Math.max(6, pct));

  return (
    <div className="progress progress-section">
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={count || 100}
        aria-valuenow={count ? done : Math.round(pct)}
        aria-label="Test progress"
      >
        <span className="progress-fill" style={{ width: pct + '%' }} />
        <span className="progress-badge" style={{ left: anchor + '%' }}>{Math.round(pct)}%</span>
      </div>
      {label ? <div className="progress-label">{label}</div> : null}
    </div>
  );
}
