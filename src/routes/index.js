import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';
import Quiz from '../pages/Quiz';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz/:topicId" element={<Quiz />} />
    </Routes>
  );
}

export default AppRoutes;
