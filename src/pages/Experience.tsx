import { experience, activities } from '../data/experience';
import OrgMark from '../components/OrgMark';
import { useRevealAll } from '../hooks/useReveal';

export default function Experience() {
  useRevealAll('.reveal');

  return (
    <>
      <header className="page-header">
        <div className="frame">
          <p className="page-eyebrow">Experience</p>
          <h1 className="page-title">Where the work has been done.</h1>
          <p className="page-desc">
            Ordered by relevance to ML systems and research roles, one technical bullet per
            position.
          </p>
        </div>
      </header>

      <section>
        <div className="frame" style={{ paddingBottom: '56px' }}>
          <div className="experience-list">
            {experience.map((item, i) => (
              <div
                key={`${item.company}-${item.dates}`}
                className={`experience-row reveal reveal-delay-${Math.min(i + 1, 7)}`}
              >
                <div className="experience-left">
                  <OrgMark name={item.company} logo={item.logo} className="experience-logo" />
                  <p className="experience-dates">{item.dates}</p>
                  {item.location && <p className="experience-location">{item.location}</p>}
                </div>
                <div>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-company">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-company-link"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>
                  <p className="experience-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section>
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Campus</span>
            <h2>Activities</h2>
          </div>

          <div className="activities-list">
            {activities.map((item) => (
              <div key={item.org} className="activity-row">
                <OrgMark name={item.org} logo={item.logo} className="activity-logo" />
                <span className="activity-org">{item.org}</span>
                <span className="activity-role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
