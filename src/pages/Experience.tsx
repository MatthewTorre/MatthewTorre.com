import { experience, activities } from '../data/experience';
import { useRevealAll } from '../hooks/useReveal';

export default function Experience() {
  useRevealAll('.reveal');
  return (
    <>
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industry Experience</span>
            <h2>Experience</h2>
            <p>
              Ordered by relevance to ML systems and research roles. One technical bullet per
              position; download the CV for full detail.
            </p>
          </div>

          <div className="experience-list">
            {experience.map((item, i) => (
              <div key={item.company} className={`experience-row reveal reveal-delay-${Math.min(i + 1, 7)}`}>
                <div className="experience-left">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="experience-logo"
                    />
                  )}
                  <p className="experience-dates">{item.dates}</p>
                  {item.location && (
                    <p className="experience-location">{item.location}</p>
                  )}
                </div>
                <div>
                  <p className="experience-role">{item.role}</p>
                  <p className="experience-company">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="experience-company-link">
                        {item.company}
                      </a>
                    ) : item.company}
                  </p>
                  <p className="experience-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <a href="/Matthew_Torre_Research_CV.pdf" download className="btn btn-outline">
              Download CV for full detail
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Campus</span>
            <h2>Activities</h2>
          </div>

          <div className="activities-list">
            {activities.map((item) => (
              <div key={item.org} className="activity-row">
                {item.logo && (
                  <img src={item.logo} alt={item.org} className="activity-logo" />
                )}
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
