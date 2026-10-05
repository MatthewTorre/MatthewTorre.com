import { useState, useEffect } from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  forceTldr?: boolean;
}

/**
 * Status and its as-of date render as words in the badge row, in both views,
 * so maturity is never something a reader has to open a toggle to find.
 */
function StatusBadge({ project }: { project: Project }) {
  if (!project.status) return null;
  return (
    <span className="badge badge-status">
      <span className="sr-only">Status: </span>
      {project.status}
      {project.asOf && <span className="badge-status-date">{` · as of ${project.asOf}`}</span>}
    </span>
  );
}

export default function ProjectCard({ project, forceTldr = false }: ProjectCardProps) {
  const [showTldr, setShowTldr] = useState(forceTldr);

  useEffect(() => {
    setShowTldr(forceTldr);
  }, [forceTldr]);

  return (
    <article id={project.id} className={`project-card${project.featured ? ' featured' : ''}`}>
      {/* Old ids keep resolving, so a link shared before a rename still lands here. */}
      {project.legacyIds?.map((id) => (
        <span key={id} id={id} className="anchor-alias" aria-hidden="true" />
      ))}

      {/* ── toggle button ── */}
      <button
        className={`tldr-toggle${showTldr ? ' tldr-toggle--active' : ''}`}
        onClick={() => setShowTldr((v) => !v)}
        aria-pressed={showTldr}
      >
        {showTldr ? 'Detail' : 'Summary'}
      </button>

      {/* ── DETAILS view ── */}
      {!showTldr && (
        <>
          <div className="project-card-badges">
            {project.featured && <span className="badge badge-featured">Featured</span>}
            <StatusBadge project={project} />
            {project.context && (
              <span className="badge badge-course">{project.context}</span>
            )}
            <span className="badge badge-year">{project.year}</span>
          </div>

          <div>
            <h3 className="project-title">{project.title}</h3>
            {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
            <p className="project-oneliner">{project.oneliner}</p>
          </div>

          {project.coauthors && (
            <p className="project-authors">
              Team project with {project.coauthors.join(', ')}
              {project.contribution ? `. My part: ${project.contribution}` : ''}
            </p>
          )}
          {!project.coauthors && project.contribution && (
            <p className="project-authors">My part: {project.contribution}</p>
          )}

          <p className="project-problem">{project.problem}</p>

          <ul className="project-results">
            {project.results.map((result, i) => (
              <li key={i} className="project-result">
                <span className="result-bullet" aria-hidden="true" />
                <span>
                  {result.text}
                  {result.metric && <strong className="metric">{result.metric}</strong>}
                </span>
              </li>
            ))}
          </ul>

          {project.sections && (
            <div className="project-sections">
              {project.sections.map((s) => (
                <div key={s.heading} className="project-section">
                  <h4 className="project-section-heading">
                    {s.heading}
                    {s.status && <span className="project-section-status">{s.status}</span>}
                  </h4>
                  <p className="project-section-body">{s.body}</p>
                </div>
              ))}
            </div>
          )}

          {project.limits && (
            <div className="project-limits">
              <span className="project-limits-label">What this does not claim</span>
              <ul>
                {project.limits.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          )}

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

          {project.note && <p className="project-note">{project.note}</p>}
        </>
      )}

      {/* ── TL;DR view ── */}
      {showTldr && (
        <div className="tldr-body">
          <div className="tldr-header">
            <span className="tldr-label">TL;DR</span>
            <h3 className="project-title">{project.title}</h3>
            {project.status && (
              <div className="project-card-badges">
                <StatusBadge project={project} />
              </div>
            )}
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
