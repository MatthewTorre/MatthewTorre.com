import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects, Project } from '../data/projects';
import { useRevealAll } from '../hooks/useReveal';

/**
 * Current work, grouped by the kind of engagement rather than by technique.
 * Each id appears in exactly one place on the page, here or in the archive
 * below, so every card keeps a single anchor for /work#id links.
 */
const CURRENT: { key: string; label: string; title: string; desc: string; ids: string[] }[] = [
  {
    key: 'legal',
    label: 'Legal',
    title: 'Clientlyy and the approval architecture under it',
    desc: 'The flagship product, and the company-level design it was built on.',
    ids: ['clientlyy', 'truth-computing'],
  },
  {
    key: 'client-systems',
    label: 'Client systems',
    title: 'Work for operating businesses',
    desc: 'Engagements with a healthcare practice and a freight operator. Clients are described by sector.',
    ids: ['practice-modernization', 'clinical-workflow', 'haul'],
  },
  {
    key: 'institutional',
    label: 'Institutional',
    title: 'Public education consulting',
    desc: 'Technology and AI consulting for a public school district.',
    ids: ['school-district-consulting'],
  },
  {
    key: 'education',
    label: 'Education',
    title: 'Learning tools and programs',
    desc: 'Feynman, and the program being built around it.',
    ids: ['feynman', 'truth-academy'],
  },
  {
    key: 'research-media',
    label: 'Research and media',
    title: 'Research and media',
    desc: 'Architecture and evaluation research, and the media work that started before the company.',
    ids: ['colossus', 'truth-computing-media'],
  },
];

const CURRENT_IDS = new Set(CURRENT.flatMap((g) => g.ids));
const BY_ID = new Map(projects.map((p) => [p.id, p]));
const archive = projects.filter((p) => !CURRENT_IDS.has(p.id));

type Category = 'All' | 'ML & AI' | 'Systems' | 'Product' | 'Quantum';

const CATEGORIES: { label: Category; ids: string[] }[] = [
  { label: 'All', ids: [] },
  { label: 'ML & AI', ids: ['cs224r', 'cs238', 'cs230', 'cs131', 'cs221', 'strabismus', 'swish', 'syncedin', 'tech-assessment'] },
  { label: 'Systems', ids: ['invariant', 'cs244c'] },
  { label: 'Product', ids: ['ezrecruit'] },
  { label: 'Quantum', ids: ['qaoa'] },
];

/** Case studies with section-level detail take the full row so the detail stays readable. */
const isWide = (p: Project) => Boolean(p.sections?.length);

export default function Work() {
  const [active, setActive] = useState<Category>('All');
  const [allTldr, setAllTldr] = useState(false);

  const category = CATEGORIES.find((c) => c.label === active)!;
  const filtered =
    active === 'All' ? archive : archive.filter((p) => category.ids.includes(p.id));

  useRevealAll('.reveal', [active, allTldr]);

  return (
    <>
      <header className="page-header">
        <div className="frame">
          <p className="page-eyebrow">Work</p>
          <h1 className="page-title">Systems built and measured.</h1>
          <p className="page-desc">
            Current work at Truth Computing first, then the research and project archive.
            Every current entry carries a status and the date it was last checked. Team
            projects name their collaborators, and anything I cannot point you to an artifact
            for says so on the card.
          </p>
        </div>
      </header>

      <section id="current" aria-labelledby="current-heading">
        <div className="frame" style={{ paddingBottom: '56px' }}>
          <div className="section-header reveal">
            <span className="section-label">Current work</span>
            <h2 id="current-heading">At Truth Computing</h2>
            <p>
              Status words mean one thing each: delivered, live, in development, prototype,
              research, or planned. A live artifact is a deployed one; it says nothing about
              results.
            </p>
          </div>

          <div className="projects-filters">
            <div className="projects-filters-row">
              <button
                className="filter-tag"
                aria-pressed={allTldr}
                onClick={() => setAllTldr((v) => !v)}
              >
                {allTldr ? 'Full detail' : 'Quick summary'}
              </button>
            </div>
          </div>

          {CURRENT.map((group) => (
            <div key={group.key} id={`current-${group.key}`} className="work-group">
              <div className="work-group-head reveal">
                <span className="work-group-label">{group.label}</span>
                <h3 className="work-group-title">{group.title}</h3>
                <p className="work-group-desc">{group.desc}</p>
              </div>
              <div className="projects-grid">
                {group.ids
                  .map((id) => BY_ID.get(id))
                  .filter((p): p is Project => Boolean(p))
                  .map((project, i) => (
                    <div
                      key={project.id}
                      className={`reveal reveal-delay-${Math.min(i + 1, 7)}${isWide(project) ? ' project-wide' : ''}`}
                    >
                      <ProjectCard project={project} forceTldr={allTldr} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="archive" aria-labelledby="archive-heading">
        <div className="frame" style={{ paddingTop: '56px', paddingBottom: '64px' }}>
          <div className="section-header work-archive-head reveal">
            <span className="section-label">Archive</span>
            <h2 id="archive-heading">Research and project archive</h2>
            <p>
              Coursework, research, and earlier engineering, most of it from before Truth
              Computing existed. Simulation engines, distributed systems, applied ML, and
              products, with the results stated as they came out.
            </p>
          </div>

          <div className="projects-filters">
            <div className="projects-filters-row">
              <div className="projects-tag-filters">
                {CATEGORIES.map(({ label }) => (
                  <button
                    key={label}
                    className="filter-tag"
                    aria-pressed={active === label}
                    onClick={() => setActive(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                className="filter-tag"
                aria-pressed={allTldr}
                onClick={() => setAllTldr((v) => !v)}
              >
                {allTldr ? 'Full detail' : 'Quick summary'}
              </button>
            </div>
          </div>

          <div className="projects-grid">
            {filtered.map((project, i) => (
              <div key={project.id} className={`reveal reveal-delay-${Math.min(i + 1, 7)}`}>
                <ProjectCard project={project} forceTldr={allTldr} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
