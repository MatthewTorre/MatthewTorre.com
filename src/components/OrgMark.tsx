import { useState } from 'react';

/**
 * Organization logo with a monogram fallback.
 *
 * Some orgs have no logo file in /public/images/logos yet. Rather than render a
 * broken image, fall back to initials drawn in the site's own hairline style —
 * clearly a placeholder, not a stand-in for the org's real mark. Drop the real
 * file in and the fallback disappears on its own.
 */
export default function OrgMark({
  name,
  logo,
  className,
}: {
  name: string;
  logo?: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    return (
      <img
        src={logo}
        alt=""
        className={className}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  const initials = name
    .replace(/[^A-Za-z ]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <span className={`${className} org-mark-fallback`} aria-hidden="true">
      {initials || name.slice(0, 1).toUpperCase()}
    </span>
  );
}
