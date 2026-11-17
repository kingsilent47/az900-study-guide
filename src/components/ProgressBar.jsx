import React from 'react';

export default function ProgressBar({ value = 0, total = 1, label }) {
  const pct = total > 0 ? Math.min(100, Math.max(0, (value / total) * 100)) : 0;
  return (
    <div className="progress">
      <div className="progress-track">
        <span className="progress-fill" style={{ width: pct + '%' }} />
        <span className="progress-badge" style={{ left: pct + '%' }}>{Math.round(pct)}%</span>
      </div>
      {label ? <div className="progress-label">{label}</div> : null}
    </div>
  );
}
