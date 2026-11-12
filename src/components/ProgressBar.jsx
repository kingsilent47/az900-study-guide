import React from 'react';

function ProgressBar({ currentIndex, totalQuestions }) {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  
  return (
    <div className="progress-section">
      <div className="progress-badge">{Math.round(progress)}%</div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
