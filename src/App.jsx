import React from 'react';
import Shell from './components/Shell';
import AppRoutes from './routes';

export default function App() {
  return (
    <Shell>
      <AppRoutes />
    </Shell>
  );
}
