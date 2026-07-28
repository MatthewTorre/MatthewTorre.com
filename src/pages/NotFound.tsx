import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes';

/**
 * Replaces a silent redirect to the homepage. A mistyped or stale URL should say
 * what happened and offer the real routes, rather than leaving the reader to
 * wonder whether the page they were sent to still exists.
 */
export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <header className="page-header">
      <div className="frame">
        <p className="page-eyebrow">404</p>
        <h1 className="page-title">That page isn't here.</h1>
        <p className="page-desc">
          Nothing is published at <code className="notfound-path">{pathname}</code>. It may have been renamed, or the
          link may have been mistyped. Everything on the site is one of these:
        </p>
        <ul className="notfound-routes">
          {ROUTES.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>
                {route.path === '/' ? 'Home' : route.title.replace(' — Matthew Torre', '')}
              </Link>
              <span>{route.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
