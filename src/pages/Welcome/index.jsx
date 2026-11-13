import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Welcome() {
  const navigate = useNavigate();

  const totalQuestions = 501;

  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <div className="welcome-badge">AZ-900</div>
        <h1 className="welcome-title">Microsoft Azure Fundamentals</h1>
        <p className="welcome-subtitle">
          A comprehensive study guide to help you prepare for the AZ-900 certification exam.
        </p>
      </div>

      <div className="welcome-stats">
        <div className="stat-card">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Practice Questions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3</div>
          <div className="stat-label">Exam Topics</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">100%</div>
          <div className="stat-label">Free Access</div>
        </div>
      </div>

      <div className="welcome-actions">
        <button className="btn-primary" onClick={() => navigate('/quiz')}>
          Start Full Quiz
        </button>
        <button className="btn-secondary" onClick={() => navigate('/dashboard')}>
          View Dashboard
        </button>
      </div>

      <div className="welcome-topics">
        <h2 className="topics-heading">Exam Topics Covered</h2>
        <div className="topic-list">
          <div className="topic-item">
            <div className="topic-number">01</div>
            <div className="topic-info">
              <div className="topic-name">Understand Cloud Concepts</div>
              <div className="topic-desc">Cloud models, benefits, and consumption-based pricing</div>
            </div>
          </div>
          <div className="topic-item">
            <div className="topic-number">02</div>
            <div className="topic-info">
              <div className="topic-name">Understand Azure Services</div>
              <div className="topic-desc">Core services, networking, storage, and compute</div>
            </div>
          </div>
          <div className="topic-item">
            <div className="topic-number">03</div>
            <div className="topic-info">
              <div className="topic-name">Understand Security, Privacy & Pricing</div>
              <div className="topic-desc">Identity, governance, compliance, and cost management</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="welcome-footer">
        <p>Built for exam preparation. Questions sourced from official AZ-900 study materials.</p>
      </footer>
    </div>
  );
}

export default Welcome;
