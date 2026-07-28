import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useRevealAll } from '../hooks/useReveal';

type Category = 'All' | 'ML & AI' | 'Systems' | 'Product' | 'Quantum';

const CATEGORIES: { label: Category; ids: string[] }[] = [
  { label: 'All', ids: [] },
  { label: 'ML & AI', ids: ['cs238', 'cs230', 'cs131', 'cs221', 'strabismus', 'syncedin'] },
  { label: 'Systems', ids: ['invariant', 'cs244c'] },
  { label: 'Product', ids: ['feynman', 'ezrecruit'] },
  { label: 'Quantum', ids: ['qaoa'] },
];

export default function Work() {
  const [active, setActive] = useState<Category>('All');
  const [allTldr, setAllTldr] = useState(false);

  const category = CATEGORIES.find((c) => c.label === active)!;
  const filtered =
    active === 'All' ? projects : projects.filter((p) => category.ids.includes(p.id));

  useRevealAll('.reveal', [active, allTldr]);

  return (
    <>
      <header className="page-header">
        <div className="frame">
          <p className="page-eyebrow">Work</p>
          <h1 className="page-title">Systems built and measured.</h1>
          <p className="page-desc">
            Simulation engines, distributed systems, applied ML, and products, with the
            results stated as they came out rather than as they were hoped for. Team projects
            name their collaborators, and anything I cannot point you to an artifact for says
            so on the card.
          </p>
        </div>
      </header>

      <section>
        <div className="frame" style={{ paddingBottom: '64px' }}>
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
