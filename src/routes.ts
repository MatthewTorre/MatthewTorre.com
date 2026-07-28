// The one route table. `App.tsx` renders from it, `DocumentMeta` titles the page
// from it, and `vite.config.ts` emits sitemap.xml from it at build time, so a new
// page cannot exist without a title, a share preview, and a sitemap entry.

export const SITE_URL = 'https://matthewtorre.com';

export interface RouteMeta {
  path: string;
  /** Shown in the tab and as the share-preview headline. Not suffixed with the site name. */
  title: string;
  /** Meta description and share-preview body. Under ~160 characters. */
  description: string;
  /** Weekly-ish edit cadence relative to the rest of the site, for the sitemap. */
  priority: number;
}

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Matthew Torre',
    description:
      'I design and empirically evaluate probabilistic machine learning systems, and I care most about the point where a result stops being plausible and starts being measured.',
    priority: 1.0,
  },
  {
    path: '/work',
    title: 'Work — Matthew Torre',
    description:
      'Simulation engines, distributed systems, applied ML, and products, with the results stated as they came out rather than as they were hoped for.',
    priority: 0.9,
  },
  {
    path: '/foundation',
    title: 'Foundation — Matthew Torre',
    description:
      'The coursework the systems rest on: modules across machine learning, systems, theory, mathematics, and physics, each labeled by where it was studied.',
    priority: 0.7,
  },
  {
    path: '/writing',
    title: 'Writing — Matthew Torre',
    description:
      'Course papers, independent research, and technical reports across distributed systems, machine learning, quantum computing, and AI policy.',
    priority: 0.8,
  },
  {
    path: '/experience',
    title: 'Experience — Matthew Torre',
    description:
      'Roles ordered by relevance to ML systems and research work, one technical bullet per position.',
    priority: 0.8,
  },
  {
    path: '/about',
    title: 'About — Matthew Torre',
    description:
      'Co-founder and CEO of Truth Computing, building AI for high-consequence work in healthcare and law. Stanford CS coterm in AI and theoretical computer science, currently on leave.',
    priority: 0.9,
  },
];

const NOT_FOUND: RouteMeta = {
  path: '*',
  title: 'Not found — Matthew Torre',
  description: 'That page does not exist.',
  priority: 0,
};

const BY_PATH = new Map(ROUTES.map((r) => [r.path, r]));

export function metaForPath(pathname: string): RouteMeta {
  // Trailing slashes reach the SPA verbatim; treat /work/ and /work as one page.
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return BY_PATH.get(normalized) ?? NOT_FOUND;
}
