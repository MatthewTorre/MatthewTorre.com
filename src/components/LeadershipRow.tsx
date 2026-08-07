import OrgMark from './OrgMark';
import { LeadershipRole } from '../data/leadership';

/**
 * One leadership row, rendered on both Home and About.
 *
 * This markup used to be written out twice, once per page. Restyling About's
 * copy renamed two classes and silently broke Home, because nothing tied the
 * two together — the pages agreed only by convention. Keeping the structure in
 * one place is what makes a class rename a compile-time concern instead of a
 * visual regression noticed after deploy.
 *
 * `count` renders only where a real headcount exists. The third grid track is
 * `auto`, so a row without one closes the column rather than leaving a gap
 * that reads as missing data.
 */
export default function LeadershipRow({ role }: { role: LeadershipRole }) {
  return (
    <div className="leadership-row">
      <OrgMark name={role.org} logo={role.logo} className="leadership-logo" />
      <div className="leadership-body">
        <p className="leadership-role">{role.role}</p>
        <p className="leadership-meta">
          {role.org}
          {role.dates && (
            <>
              <span className="leadership-sep" aria-hidden="true">·</span>
              <span className="leadership-dates">{role.dates}</span>
            </>
          )}
        </p>
        <p className="leadership-scope">{role.scope}</p>
      </div>
      {role.count && (
        <p className="leadership-count">
          <span className="leadership-count-n">{role.count.n}</span>
          <span className="leadership-count-unit">{role.count.unit}</span>
        </p>
      )}
    </div>
  );
}
