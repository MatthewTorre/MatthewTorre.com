import { useState, useEffect } from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  forceTldr?: boolean;
}

export default function ProjectCard({ project, forceTldr = false }: ProjectCardProps) {
  const [showTldr, setShowTldr] = useState(forceTldr);

  useEffect(() => {
    setShowTldr(forceTldr);
  }, [forceTldr]);

  return (
    <article className={`project-card${project.featured ? ' featured' : ''}`}>

      {/* ── toggle button ── */}
      <button
        className={`tldr-toggle${showTldr ? ' tldr-toggle--active' : ''}`}
        onClick={() => setShowTldr((v) => !v)}
        aria-pressed={showTldr}
      >
        {showTldr ? '← Details' : 'TL;DR →'}
      </button>

      {/* ── DETAILS view ── */}
      {!showTldr && (
        <>
          <div className="project-card-badges">
            {project.featured && <span className="badge badge-featured">Featured</span>}
            <span className="badge badge-course">{project.context}</span>
            <span className="badge badge-year">{project.year}</span>
          </div>

          <div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-oneliner">{project.oneliner}</p>
          </div>

          <p className="project-problem">{project.problem}</p>

          <ul className="project-results">
            {project.results.map((result, i) => (
              <li key={i} className="project-result">
                <span className="result-bullet" aria-hidden="true" />
                {result.html ? (
                  <span dangerouslySetInnerHTML={{ __html: result.text }} />
                ) : (
                  <span>
                    {result.text}
                    {result.metric && <strong className="metric">{result.metric}</strong>}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── TL;DR view ── */}
      {showTldr && (
        <div className="tldr-body">
          <div className="tldr-header">
            <span className="tldr-label">TL;DR</span>
            <h3 className="project-title">{project.title}</h3>
          </div>

          <p className="tldr-summary">{project.tldr.summary}</p>

          <ul className="tldr-signals">
            {project.tldr.signals.map((s, i) => (
              <li key={i} className="tldr-signal">
                <span className="result-bullet" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <div className="tldr-skills">
            <span className="tldr-skills-label">Core competencies</span>
            <div className="project-tags">
              {project.tldr.skills.map((skill) => (
                <span key={skill} className="tag tag--highlight">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      )}

    </article>
  );
}
