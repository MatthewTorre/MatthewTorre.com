import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

function SunIcon() {
  return (
    <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/foundation', label: 'Foundation' },
  { to: '/writing', label: 'Writing' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close the drawer on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll, move focus into the panel, and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      menuBtnRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <Link to="/" className="site-brand" aria-label="Matthew Torre, home">
        Matthew Torre
      </Link>
      <div className="site-bar" aria-hidden="true" />

      <nav className="tabs" aria-label="Primary">
        <div className="tabs-rail">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="tab"
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.truth-computing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="tab tab--cta tab--focus"
          >
            Truth Computing
          </a>
        </div>
      </nav>

      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <MoonIcon />
        <SunIcon />
      </button>

      <button
        ref={menuBtnRef}
        className="menu-btn"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navPanel"
      >
        <span className="menu-label">Menu</span>
        <span className="menu-btn-lines" aria-hidden="true" />
      </button>

      <div
        className={`nav-scrim${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="navPanel"
        className={`nav-panel${menuOpen ? ' open' : ''}`}
        aria-label="Site navigation"
        aria-hidden={!menuOpen}
      >
        <div className="nav-panel-head">
          <span className="nav-panel-brand">Menu</span>
          <button ref={closeBtnRef} className="nav-panel-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="1" y1="1" x2="19" y2="19" /><line x1="19" y1="1" x2="1" y2="19" />
            </svg>
          </button>
        </div>
        <nav className="nav-panel-links" aria-label="Primary">
          <NavLink
            to="/"
            className="nav-panel-link"
            tabIndex={menuOpen ? 0 : -1}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </NavLink>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="nav-panel-link"
              tabIndex={menuOpen ? 0 : -1}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.truth-computing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-panel-link nav-panel-link--focus"
            tabIndex={menuOpen ? 0 : -1}
          >
            Truth Computing <span className="arw">&rarr;</span>
          </a>
        </nav>
      </aside>
    </>
  );
}
