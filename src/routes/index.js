import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import Quiz from '../pages/Quiz';
import Review from '../pages/Review';
import Dashboard from '../pages/Dashboard';
import Bank from '../pages/Bank';
import Import from '../pages/Import';

export default function AppRoutes() {
  return React.createElement(
    Routes,
    null,
    React.createElement(Route, { path: '/', element: React.createElement(Welcome) }),
    React.createElement(Route, { path: '/quiz', element: React.createElement(Quiz) }),
    React.createElement(Route, { path: '/review', element: React.createElement(Review) }),
    React.createElement(Route, { path: '/dashboard', element: React.createElement(Dashboard) }),
    React.createElement(Route, { path: '/bank', element: React.createElement(Bank) }),
    React.createElement(Route, { path: '/import', element: React.createElement(Import) }),
    React.createElement(Route, { path: '*', element: React.createElement(Navigate, { to: '/', replace: true }) })
  );
}
