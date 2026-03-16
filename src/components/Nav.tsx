import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const NAV_LINKS = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/writing', label: 'Writing' },
];

export default function Nav() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          Matthew Torre
        </Link>

        {/* Desktop links — hidden on mobile via CSS */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="/Matthew_Torre_Research_CV.pdf" download className="nav-cta">
            CV
          </a>
          {/* Hamburger — visible only on mobile via CSS */}
          <button
            className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer — rendered in DOM always, shown/hidden via CSS */}
      <div className={`nav-drawer${menuOpen ? ' nav-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="nav-drawer-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `nav-drawer-link${isActive ? ' active' : ''}`}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="/Matthew_Torre_Research_CV.pdf"
              download
              className="nav-drawer-link"
              tabIndex={menuOpen ? 0 : -1}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </nav>
  );
}
