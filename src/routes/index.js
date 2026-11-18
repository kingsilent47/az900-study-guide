import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Quiz from '../pages/Quiz';
import Review from '../pages/Review';
import Dashboard from '../pages/Dashboard';
import Bank from '../pages/Bank';
import Import from '../pages/Import';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
