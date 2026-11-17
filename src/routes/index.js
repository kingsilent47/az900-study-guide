import React from 'react';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Quiz from '../pages/Quiz';
import Review from '../pages/Review';
import Dashboard from '../pages/Dashboard';
import Bank from '../pages/Bank';
import Import from '../pages/Import';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

export default function AppRoutes() {
  const location = useLocation();
  const quiet = location.pathname === '/quiz';

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:topic" element={<Quiz />} />
        <Route path="/review" element={<Review />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/import" element={<Import />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {quiet ? null : (
        <footer className="legal-bar">
          <p className="legal-bar-note">
            AZ-900 Trainer is an independent revision tool. Microsoft, Microsoft Azure and AZ-900 are
            trademarks of Microsoft Corporation. This site is not affiliated with or endorsed by Microsoft.
          </p>
          <nav className="legal-bar-nav" aria-label="Legal">
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/terms">Terms and conditions</Link>
            <a href="https://github.com/kingsilent47/az900-study-guide" target="_blank" rel="noreferrer">Source</a>
          </nav>
        </footer>
      )}
    </>
  );
}
