import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { DOMAIN_BY_ID } from '../data/domains';

// --- ICONS ---
const S = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' };
export const Icon = {
  Cloud: (p) => (<svg {...S} {...p}><path d="M6.5 18h11a3.5 3.5 0 0 0 .3-7 5.5 5.5 0 0 0-10.6-1.4A3.8 3.8 0 0 0 6.5 18Z" /></svg>),
  Grid: (p) => (<svg {...S} {...p}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>),
  Chart: (p) => (<svg {...S} {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>),
  Layers: (p) => (<svg {...S} {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>),
  Sun: (p) => (<svg {...S} {...p}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>),
  Moon: (p) => (<svg {...S} {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>),
  Undo: (p) => (<svg {...S} {...p}><path d="M4 9h11a5 5 0 0 1 0 10h-6" /><path d="m4 9 4-4M4 9l4 4" /></svg>),
  Cross: (p) => (<svg {...S} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>),
  Download: (p) => (<svg {...S} {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>),
  Trash: (p) => (<svg {...S} {...p}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>),
  ArrowRight: (p) => (<svg {...S} {...p}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>),
  Shuffle: (p) => (<svg {...S} {...p}><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>),
  Target: (p) => (<svg {...S} {...p}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>),
  Clock: (p) => (<svg {...S} {...p}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>),
  Flag: (p) => (<svg {...S} {...p}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>),
  Bookmark: (p) => (<svg {...S} {...p}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>)
};

// --- THEME TOGGLE ---
export function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 
             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      type="button" 
      className="icon-btn" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Icon.Moon /> : <Icon.Sun />}
    </button>
  );
}

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
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.34" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path d={line} fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {coords.map((c, i) => <circle key={i} cx={c[0]} cy={c[1]} r="2.6" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="1.6" />)}
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

// --- SHELL COMPONENT ---
const LINKS = [
  { to: '/', label: 'Study', key: 'Grid', end: true },
  { to: '/dashboard', label: 'Progress', key: 'Chart' },
  { to: '/bank', label: 'Bank', key: 'Layers' }
];

export function Shell({ children }) {
  const loc = useLocation();
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="app">
      <div className="bg" aria-hidden="true"><span className="bg-mesh" /><span className="bg-grain" /></div>
      <header className={'shell' + (loc.pathname === '/quiz' ? ' is-quiet' : '')}>
        <div className="shell-inner">
          <NavLink to="/" className="brand" aria-label="AZ-900 Trainer home">
            <span className="brand-mark"><Icon.Cloud width={20} height={20} /></span>
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
            {isOffline && <span className="offline-badge">Offline</span>}
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <main className="main">{children}</main>
      
      {loc.pathname !== '/quiz' && (
        <footer className="legal-bar">
          <p className="legal-bar-note">
            AZ-900 Trainer is an independent revision tool. Microsoft, Microsoft Azure and AZ-900 are
            trademarks of Microsoft Corporation. This site is not affiliated with or endorsed by Microsoft.
            <span style={{ display: 'block', marginTop: '8px', opacity: 0.8 }}>
              Questions are study material, not live exam content. Weighting follows the published AZ-900 objective split.
            </span>
          </p>
          <nav className="legal-bar-nav" aria-label="Legal">
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/terms">Terms and conditions</Link>
            <a href="https://github.com/kingsilent47/az900-study-guide" target="_blank" rel="noreferrer">Source</a>
          </nav>
        </footer>
      )}
    </div>
  );
}
