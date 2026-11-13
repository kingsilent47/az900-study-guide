import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../../questions.json';
import './styles.css';

const STORAGE_KEY = 'az900-progress';

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalAnswered: 0, correct: 0, incorrect: 0, byTopic: {} });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { setStats(JSON.parse(saved)); } catch (e) { console.error('Failed to parse progress'); }
    }
  }, []);

  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.correct / stats.totalAnswered) * 100) : 0;
  const allTopics = [...new Set(questionsData.map(q => q.topic))];

  const handleReset = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      setStats({ totalAnswered: 0, correct: 0, incorrect: 0, byTopic: {} });
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <button className="btn-back" onClick={() => navigate('/')}><span className="arrow">←</span> Back</button>
        <h1 className="dashboard-title">Dashboard</h1>
      </header>

      <div className="dashboard-overview">
        <div className="overview-card"><div className="overview-label">Questions Answered</div><div className="overview-value">{stats.totalAnswered}</div></div>
        <div className="overview-card"><div className="overview-label">Overall Accuracy</div><div className="overview-value">{accuracy}%</div></div>
        <div className="overview-card"><div className="overview-label">Correct</div><div className="overview-value correct">{stats.correct}</div></div>
        <div className="overview-card"><div className="overview-label">Incorrect</div><div className="overview-value incorrect">{stats.incorrect}</div></div>
      </div>

      <div className="dashboard-actions">
        <button className="btn-primary" onClick={() => navigate('/quiz')}>Start Full Quiz</button>
        <button className="btn-danger" onClick={handleReset}>Reset Progress</button>
      </div>

      <div className="topic-breakdown">
        <h2 className="section-heading">Progress by Exam Domain</h2>
        <div className="topic-rows">
          {allTopics.map((topic) => {
            const data = stats.byTopic[topic] || { total: 0, correct: 0 };
            const topicAccuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            return (
              <div key={topic} className="topic-row" onClick={() => navigate(`/quiz/${encodeURIComponent(topic)}`)} style={{ cursor: 'pointer' }}>
                <div className="topic-row-name">{topic}</div>
                <div className="topic-row-stats">
                  <span>{data.correct} / {data.total} answered</span>
                  <span className="topic-row-accuracy">{topicAccuracy}% accuracy</span>
                </div>
                <div className="topic-row-bar">
                  <div className="topic-row-fill" style={{ width: `${topicAccuracy}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {stats.totalAnswered === 0 && (
        <div className="empty-state">
          <p>No progress yet. Start a quiz to begin tracking your performance.</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
