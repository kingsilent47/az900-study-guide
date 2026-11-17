import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../state/AppState';
import { IconCloud, IconGrid, IconChart, IconLayers, IconUpload, IconSun, IconMoon } from './Icons';

const LINKS = [
  { to: '/', label: 'Study', Icon: IconGrid, end: true },
  { to: '/dashboard', label: 'Progress', Icon: IconChart },
  { to: '/bank', label: 'Bank', Icon: IconLayers },
  { to: '/import', label: 'Data', Icon: IconUpload }
];

export default function Shell({ children }) {
  const { bank, settings, setSettings, ready } = useApp();
  const location = useLocation();
  const inQuiz = location.pathname === '/quiz';

  return (
    <div className="app">
      <div className="bg" aria-hidden="true">
        <span className="bg-mesh" />
        <span className="bg-grain" />
      </div>

      <header className={'shell' + (inQuiz ? ' shell-quiet' : '')}>
        <div className="shell-inner">
          <NavLink to="/" className="brand" aria-label="AZ-900 Trainer home">
            <span className="brand-mark"><IconCloud width={20} height={20} /></span>
            <span className="brand-copy">
              <strong>AZ-900</strong>
              <small>Exam trainer</small>
            </span>
          </NavLink>

          <nav className="shell-nav" aria-label="Primary">
            {LINKS.map(({ to, label, Icon, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => 'shell-link' + (isActive ? ' is-active' : '')}>
                <Icon width={16} height={16} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="shell-right">
            <span className="shell-count" title="Unique questions available">
              <i className={'pulse' + (ready ? ' is-ready' : '')} />
              {ready ? bank.size.toLocaleString() + ' questions' : 'loading bank'}
            </span>
            <button
              type="button"
              className="icon-btn"
              onClick={() => setSettings((s) => ({ ...s, theme: s.theme === 'night' ? 'day' : 'night' }))}
              aria-label={settings.theme === 'night' ? 'Switch to day theme' : 'Switch to night theme'}
            >
              {settings.theme === 'night' ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="foot">
        <span>Questions are study material, not live exam content. Weighting follows the published AZ-900 objective split.</span>
      </footer>
    </div>
  );
}
