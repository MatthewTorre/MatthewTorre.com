import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useRevealAll } from '../hooks/useReveal';

type Category = 'All' | 'ML & AI' | 'Systems' | 'Quantum';

const CATEGORIES: { label: Category; ids: string[] }[] = [
  { label: 'All', ids: [] },
  { label: 'ML & AI', ids: ['cs238', 'cs230', 'cs131', 'cs221'] },
  { label: 'Systems', ids: ['invariant', 'cs244c'] },
  { label: 'Quantum', ids: ['qaoa'] },
];

export default function Projects() {
  useRevealAll('.reveal');
  const [active, setActive] = useState<Category>('All');

  const category = CATEGORIES.find((c) => c.label === active)!;
  const filtered = active === 'All' ? projects : projects.filter((p) => category.ids.includes(p.id));

  return (
    <section>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Research Projects</span>
          <h2>Projects</h2>
          <p>
            Rigorous systems built and empirically evaluated across probabilistic simulation,
            distributed systems, and applied ML. Each project is anchored by a research
            question and measured against quantitative results.
          </p>
        </div>

        <div className="projects-filters reveal">
          <div className="projects-tag-filters">
            {CATEGORIES.map(({ label }) => (
              <button
                key={label}
                className={`filter-tag${active === label ? ' filter-tag--active' : ''}`}
                onClick={() => setActive(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${Math.min(i + 1, 7)}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
