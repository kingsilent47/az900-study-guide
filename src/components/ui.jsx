import React, { useEffect, useRef, useState, memo } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { useApp } from '../state/AppState';
import { DOMAIN_BY_ID } from '../data/domains';

// --- ICONS ---
const S = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' };
export const Icon = {
  cloud: (p) => (<svg {...S} {...p}><path d="M6.5 18h11a3.5 3.5 0 0 0 .3-7 5.5 5.5 0 0 0-10.6-1.4A3.8 3.8 0 0 0 6.5 18Z" /></svg>),
  grid: (p) => (<svg {...S} {...p}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>),
  chart: (p) => (<svg {...S} {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>),
  layers: (p) => (<svg {...S} {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>),
  sun: (p) => (<svg {...S} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></svg>),
  moon: (p) => (<svg {...S} {...p}><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" /></svg>),
  undo: (p) => (<svg {...S} {...p}><path d="M4 9h11a5 5 0 0 1 0 10h-6" /><path d="m4 9 4-4M4 9l4 4" /></svg>),
  cross: (p) => (<svg {...S} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>)
};

// --- EXISTING COMPONENTS ---
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return undefined; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={'reveal ' + (shown ? 'is-in ' : '') + className} style={{ transitionDelay: delay + 'ms' }}>
      {children}
    </div>
  );
}

export function Stat({ label, value, sub, tone }) {
  return (
    <div className={'stat' + (tone ? ' stat-' + tone : '')}>
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
      {sub ? <span className="stat-sub">{sub}</span> : null}
    </div>
  );
}

export function DomainChip({ id, small }) {
  const d = DOMAIN_BY_ID[id];
  if (!d) return null;
  return (
    <span className={'chip' + (small ? ' chip-sm' : '')} style={{ '--chip': d.hex }}>
      <i className="chip-dot" />
      {d.short}
    </span>
  );
}

export function DomainBar({ id, accuracy, coverage, attempts, compact }) {
  const d = DOMAIN_BY_ID[id];
  const pct = Math.round((accuracy || 0) * 100);
  const cov = Math.round((coverage || 0) * 100);
  return (
    <div className={'dbar' + (compact ? ' dbar-compact' : '')} style={{ '--hue': d.hex }}>
      <div className="dbar-head">
        <span className="dbar-name">{d.short}</span>
        <span className="dbar-num">{attempts ? pct + '%' : 'no data'}</span>
      </div>
      <div className="dbar-track" role="img" aria-label={d.short + ' accuracy ' + pct + ' percent, coverage ' + cov + ' percent'}>
        <span className="dbar-cov" style={{ width: cov + '%' }} />
        <span className="dbar-fill" style={{ width: pct + '%' }} />
      </div>
      {!compact ? <div className="dbar-foot">{attempts} answers logged, {cov}% of the topic seen</div> : null}
    </div>
  );
}

export function Sparkline({ points, width = 260, height = 56 }) {
  if (!points || points.length < 2) {
    return <div className="spark-empty">Complete two tests to plot your accuracy trend.</div>;
  }
  const max = 100;
  const step = width / (points.length - 1);
  const coords = points.map((p, i) => [i * step, height - (p / max) * (height - 8) - 4]);
  const line = coords.map((c, i) => (i ? 'L' : 'M') + c[0].toFixed(1) + ' ' + c[1].toFixed(1)).join(' ');
  const area = line + ' L' + width + ' ' + height + ' L0 ' + height + ' Z';
  return (
    <svg className="spark" viewBox={'0 0 ' + width + ' ' + height} width="100%" height={height} role="img" aria-label="Accuracy trend">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.34" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {coords.map((c, i) => <circle key={i} cx={c[0]} cy={c[1]} r="2.6" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.6" />)}
    </svg>
  );
}

export function Toggle({ checked, onChange, label, hint, id }) {
  return (
    <label className="toggle" htmlFor={id}>
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="toggle-track"><span className="toggle-knob" /></span>
      <span className="toggle-copy">
        <span className="toggle-label">{label}</span>
        {hint ? <span className="toggle-hint">{hint}</span> : null}
      </span>
    </label>
  );
}

export function Empty({ title, body, action }) {
  return (
    <div className="empty">
      <h3>{title}</h3>
      <p>{body}</p>
      {action}
    </div>
  );
}

export function useToast() {
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);
  const node = toast ? <div className={'toast toast-' + (toast.tone || 'info')} role="status">{toast.message}</div> : null;
  return [node, setToast];
}

// --- NEW SHELL COMPONENT (Fixes Layout) ---
const LINKS = [
  { to: '/', label: 'Study', key: 'grid', end: true },
  { to: '/dashboard', label: 'Progress', key: 'chart' },
  { to: '/bank', label: 'Bank', key: 'layers' }
];

export function Shell({ children }) {
  const { bank, settings, setSettings, notice, setNotice } = useApp();
  const loc = useLocation();
  return (
    <div className="app">
      <div className="bg" aria-hidden="true"><span className="bg-mesh" /><span className="bg-grain" /></div>
      <header className={'shell' + (loc.pathname === '/quiz' ? ' is-quiet' : '')}>
        <div className="shell-inner">
          <NavLink to="/" className="brand" aria-label="AZ-900 Trainer home">
            <span className="brand-mark"><Icon.cloud width={20} height={20} /></span>
            <span className="brand-copy"><strong>AZ-900</strong><small>Exam trainer</small></span>
          </NavLink>
          <nav className="shell-nav" aria-label="Primary">
            {LINKS.map((l) => {
              const I = Icon[l.key];
              return (
                <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => 'shell-link' + (isActive ? ' is-active' : '')}>
                  <I width={16} height={16} /><span>{l.label}</span>
                </NavLink>
              );
            })}
          </nav>
          <div className="shell-right">
            <span className="shell-count"><i className="pulse" />{bank.size.toLocaleString()} questions</span>
            <button type="button" className="icon-btn" onClick={() => setSettings((s) => ({ ...s, theme: s.theme === 'night' ? 'day' : 'night' }))} aria-label={settings.theme === 'night' ? 'Switch to day theme' : 'Switch to night theme'}>
              {settings.theme === 'night' ? <Icon.sun /> : <Icon.moon />}
            </button>
          </div>
        </div>
      </header>
      <main className="main">{children}</main>
      {loc.pathname !== '/quiz' && (
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
      {notice ? (
        <div className={'notice notice-' + (notice.tone || 'info')} role="status">
          <span>{notice.message}</span>
          {notice.undo ? <button type="button" className="btn btn-mini" onClick={notice.undo}><Icon.undo width={14} height={14} /> Undo</button> : null}
          <button type="button" className="icon-btn tiny" onClick={() => setNotice(null)} aria-label="Dismiss"><Icon.cross width={14} height={14} /></button>
        </div>
      ) : null}
    </div>
  );
}
