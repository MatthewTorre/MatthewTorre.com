import { Link } from 'react-router-dom';
import { skillGroups } from '../data/skills';
import { domains } from '../data/foundation';
import { mentors } from '../data/mentors';
import { reading } from '../data/reading';
import { leadershipRoles } from '../data/leadership';
import OrgMark from '../components/OrgMark';
import { useRevealAll } from '../hooks/useReveal';
import portrait from '../assets/images/MATT_NEW.jpg';
import stanfordLogo from '../assets/images/stanford-logo.png';


/**
 * Split on whether a real headcount exists, not on importance. The intro
 * promises a number, and a role that led no one cannot supply one; giving
 * those their own group is more honest than leaving a blank column that reads
 * as missing data. Order inside each group is preserved from the data file.
 */
const leadershipGroups = [
  {
    label: 'Teams',
    note: 'People who answered to me',
    roles: leadershipRoles.filter((r) => r.count),
  },
  {
    label: 'Other roles',
    note: 'Leadership without direct reports',
    roles: leadershipRoles.filter((r) => !r.count),
  },
];

const honors = [
  { label: 'Rising Bird Fellowship', url: 'https://careered.stanford.edu/risingbirdfellows' },
  { label: 'Russell A. Berman Award for Excellence', url: 'https://introsems.stanford.edu/teach/introsem-excellence-award' },
  { label: 'MLT Fellow (Management Leaders for Tomorrow)', url: 'https://mlt.org/' },
  { label: 'BOSP: Stanford in Florence', url: 'https://florence.stanford.edu/' },
];

const certs = [
  { name: 'Neural Networks and Deep Learning', date: 'Oct 2024' },
  { name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization', date: 'Oct 2024' },
  { name: 'Structuring Machine Learning Projects', date: 'Oct 2024' },
  { name: 'Convolutional Neural Networks', date: 'Nov 2024' },
];

const practice = [
  {
    principle: 'Systems fail closed.',
    detail:
      'When a candidate output violates a hard constraint, it is suppressed, not ranked lower. The default state of a system I build is to do nothing.',
  },
  {
    principle: 'Consequential outputs wait on a person.',
    detail:
      'In a clinical communication pipeline I designed, the highest-consequence class of message cannot be sent automatically under any configuration. It waits for a licensed clinician to release it.',
  },
  {
    principle: 'Every claim carries its source.',
    detail:
      'Generated briefs are assembled from records at read time, and each claim cites the record it came from, so the output is auditable line by line and cannot drift from what is on file.',
  },
  {
    principle: 'History cannot be edited silently.',
    detail:
      'Audit trails are append-only and tamper-evident, so any edit or deletion of history is detectable after the fact rather than trusted not to happen.',
  },
  {
    principle: 'I write the non-goals first.',
    detail:
      'The coordination platform I own the requirements for states plainly what it will never do: it does not allocate housing, override prioritization policy, replace the system of record, or make eligibility determinations. Knowing what a system must refuse is the design.',
  },
  {
    principle: 'The objective function is a policy document, not a hyperparameter.',
    detail:
      'The learning layer that selects client messages optimizes a reward whose weights encode what the firm is willing to do to a client in exchange for engagement: an opt-out is scored at −25 against a reply at +1, so roughly twenty-five successful replies are needed to justify one opt-out in expectation. Silence is a scored action rather than a skipped one, so “say nothing this period” is something the policy can learn rather than an option it can never choose. Changing those weights is a question for counsel, not for whoever is tuning the model that week.',
  },
  {
    principle: 'The security posture is graded, not asserted.',
    detail:
      'I write our safety plans with a three-state vocabulary: in place, partial, and required before production. A control is never described as done because it is planned, and real patient data does not enter a system until the third list is empty.',
  },
];

/**
 * `partner` is named only where the partner has cleared being named. It is a
 * separate field rather than a clause inside `note` so that removing a name is
 * a one-line deletion that leaves the description standing, and so the status
 * word — which is verbatim and never upgraded — is never rewritten to carry it.
 */
const arms = [
  {
    name: 'Truth Computing Legal',
    field: 'Law',
    status: 'Near production',
    note: 'The furthest along of anything we are building. Details held close for now.',
  },
  {
    name: 'Truth Computing Health',
    field: 'Vision care',
    status: 'Design partnership',
    partner: 'Affordable Family Vision',
    note: 'Human-gated clinical AI across intake, imaging workflows, and clinical documentation, each reviewed by a clinician before it enters the record.',
  },
  {
    name: 'Truth Computing Concierge',
    field: 'Automotive',
    status: 'Design partnership',
    // Held generic for now: the partner is not named publicly, and naming the
    // marque would identify them to anyone who knows the market. A dealership,
    // not a manufacturer — no relationship with any automaker is implied.
    partner: 'A luxury car dealership',
    note: 'Constraint-driven inventory matching and customer communication.',
  },
  {
    name: 'Truth Computing Logistics',
    field: 'Freight',
    status: 'In research',
    note: 'An orchestration layer over the ELD, load board, and accounting systems an owner-operator already runs.',
  },
  {
    name: 'Truth Computing Create',
    field: 'Brand',
    status: 'In research',
    note: 'Narrative and media work supporting the practice.',
  },
];


export default function About() {
  useRevealAll('.reveal');

  const moduleCount = domains.flatMap((d) => d.modules).length;

  return (
    <>
      <header className="page-header">
        <div className="frame">
          <p className="page-eyebrow">About</p>
          <h1 className="page-title">Matthew Torre</h1>
          <p className="page-desc">
            Co-founder, Chief Executive Officer, and Chief Technology Officer of Truth
            Computing. I build AI for high-consequence work in healthcare and law, where every
            output carries its sources and waits on a human before anything happens. Stanford
            CS coterm in artificial intelligence and theoretical computer science, currently
            on leave.
          </p>
        </div>
      </header>

      {/* The work I am proudest of, placed above everything else on the page for
          that reason. The status word is "Live" because the site is live; if that
          ever stops being true this block comes down rather than being softened. */}
      <section id="feynman-banner">
        <div className="frame">
          <a
            className="feynman-banner"
            href="https://learn-feynman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="feynman-banner-eyebrow">
              <span className="feynman-live" aria-hidden="true" />
              Live at learn-feynman.com &middot; The work I am proudest of
            </span>
            <h2 className="feynman-banner-title">Feynman</h2>
            <p className="feynman-banner-lede">
              A free platform that rebuilds university-level AI coursework as a five-rung
              Learning Ladder, built for first-generation and low-income students. I believe
              understanding technology should not be gated by who you know or what you can
              pay for, and this is the most direct thing I have built about that.
            </p>
            <div className="feynman-banner-facts">
              <span className="feynman-fact">Free, always</span>
              <span className="feynman-fact">On-device AI tutor</span>
              <span className="feynman-fact">University coursework, K-12 ready</span>
            </div>
            <span className="feynman-banner-cta">
              Visit the site <span className="arw" aria-hidden="true">&rarr;</span>
            </span>
          </a>
        </div>
      </section>

      <section id="bio">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="about-bio-row">
            <img src={portrait} alt="Matthew Torre" className="about-portrait" />
            <div className="about-bio-text">
              <p>
                I am the co-founder, Chief Executive Officer, and Chief Technology Officer of
                Truth Computing, where we go into businesses in
                regulated fields, take on the workflows they cannot afford to get wrong, and rebuild
                them around AI that stays traceable, auditable, and gated on a person. I am also a
                Stanford CS coterm in artificial intelligence and theoretical computer science,
                currently on leave from the program. My work sits at the intersection of
                research, engineering, product, and system design, and I care about building tools
                that are technically rigorous, intuitive, and reproducible.
              </p>
              <p>
                Before Truth Computing I worked on large-scale data filtration and cybersecurity
                mid-training for language models at the Stanford AI Laboratory, and built computer
                vision systems for strabismus classification as an AI researcher at Stanford
                Medicine. I built Feynman, a free platform that rebuilds university-level AI
                coursework as a five-rung Learning Ladder for first-generation and low-income
                students, now running as a Truth Computing mission project.
              </p>
              <p>
                I am interested in the mechanics of reasoning under reinforcement learning:
                how reward signals during post-training shape the internal computations a
                model uses to solve problems. Deciphering when chain-of-thought reflects
                genuine intermediate reasoning and when it is post-hoc rationalization is a
                question worth grappling with. The one I keep returning to is how we know
                whether a model has learned to reason or learned to produce outputs that look
                like reasoning, and what it would take to design training and evaluation
                regimes that enforce the distinction.
              </p>
              <p>
                I am a first-generation college student and a member of the AAPI community.
                Access and opportunity are embedded in everything I am and everything I do.
                Feynman is the most direct expression of that: the same coursework, met at
                whatever height a student can reach today, free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Research interests</span>
            <h2>Whether a model&rsquo;s stated reason is its actual reason</h2>
          </div>
          <div className="research-interests reveal reveal-delay-1">
            <p className="research-interest-text">
              This is the question I keep returning to, and it has held my attention longer
              than anything else I work on. Chain-of-thought reads like intermediate work,
              and sometimes it is. Sometimes it is a fluent account assembled after the fact,
              and from the outside the two are difficult to tell apart. A process reward model
              scores the reasoning rather than the answer, which only helps if the signal can
              separate genuine intermediate computation from its appearance.
            </p>
            <p className="research-interest-text">
              I have not seen convincing evidence that current methods make that separation. A
              good deal of published faithfulness work measures whether an explanation is
              plausible to a human reader and reports the result as faithfulness, which are
              different properties with different failure modes. The same gap shows up in
              probing: a classifier recovering a feature from activations establishes that the
              information is present, and establishing that the model uses it to produce the
              output takes a causal intervention rather than a correlation.
            </p>
            <p className="research-interest-text">
              What follows from that is a preference for methods that can be checked. Ablations
              over narratives, interventions over correlations, and evaluation frameworks that
              state their own limits. It is also why reward modeling interests me: a reward
              model is an evaluation function, and optimizing hard against an imperfect metric
              carries the same structural risk at far higher stakes.
            </p>
          </div>

          <div className="thread-block reveal reveal-delay-2">
            <span className="section-label">The thread</span>
            <p className="thread-intro">
              The coursework was assigned; the question I brought to it was not. Read in order,
              the projects on this site are one investigation.
            </p>
            <div className="thread-list">
              <div className="thread-row">
                <span className="thread-year">2024</span>
                <p className="thread-text">
                  Replicating a published UFC prediction baseline to within 0.3pp, and finding
                  that dataset size rather than architecture was the binding constraint. The
                  useful result was about where the explanatory power actually lived, not about
                  the model.
                </p>
              </div>
              <div className="thread-row">
                <span className="thread-year">2025</span>
                <p className="thread-text">
                  Ablating handcrafted SIFT and ORB keypoint channels against a fine-tuned
                  VGG-16 on Mars imagery. The features constrained the learned representation
                  rather than augmenting it, which is a claim about what the network had
                  already encoded internally.
                </p>
              </div>
              <div className="thread-row">
                <span className="thread-year">2025</span>
                <p className="thread-text">
                  Building a POMDP testbed where the interesting quantity was the gap between
                  optimal and actual behavior under bounded compute, rather than the reward
                  total on its own.
                </p>
              </div>
              <div className="thread-row">
                <span className="thread-year">2025</span>
                <p className="thread-text">
                  Invariant, built around bootstrap intervals and variance reduction so the
                  simulation reports what it can support and no more.
                </p>
              </div>
            </div>
            <p className="thread-close">
              Different courses, one habit: distrust the stated explanation until something
              causal backs it.
            </p>
          </div>

          <div className="limits-block reveal reveal-delay-3">
            <span className="section-label">What I do not claim</span>
            <p className="limits-text">
              I have not published in interpretability, and none of the above is a result in
              the field. This is a reading and reasoning position, held for several years and
              argued from the literature, not from my own experiments. Where my work touches
              these questions it does so through evaluation methodology and ablation, which are
              the parts I can actually defend.
            </p>
          </div>
        </div>
      </section>

      <section id="practice">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">How I build</span>
            <h2>Working on systems that cannot be wrong</h2>
          </div>
          <div className="practice-block reveal reveal-delay-1">
            <p className="practice-intro">
              Most of my work now is in fields where a software mistake reaches a patient, a
              client, or a court. These are the rules I hold to, and each one is load-bearing
              in something already built.
            </p>
            <div className="practice-list">
              {practice.map((p) => (
                <div key={p.principle} className="practice-row">
                  <p className="practice-principle">{p.principle}</p>
                  <p className="practice-detail">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="truth-computing">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Truth Computing</span>
            <h2>What I am building now</h2>
          </div>
          <div className="arms-block reveal reveal-delay-1">
            <p className="arms-intro">
              Truth Computing is a forward-deployed practice. We embed with teams in high
              stakes fields and rebuild the workflows they cannot afford to get wrong. I am
              co-founder, Chief Executive Officer, and Chief Technology Officer, and I have
              written every line of the public practice to date. Two engagements are formal
              design partnerships.
            </p>
            <div className="arms-list">
              {arms.map((a) => (
                <div key={a.name} className="arm-row">
                  <div className="arm-head">
                    <span className="arm-name">{a.name}</span>
                    <span className="arm-status">{a.status}</span>
                  </div>
                  <p className="arm-field">
                    {a.field}
                    {a.partner && (
                      <>
                        <span className="arm-sep" aria-hidden="true">·</span>
                        <span className="arm-partner">{a.partner}</span>
                      </>
                    )}
                  </p>
                  <p className="arm-note">{a.note}</p>
                </div>
              ))}
            </div>
            <a
              className="arms-link"
              href="https://www.truth-computing.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See the practice <span className="arw" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section id="reading">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Reading trail</span>
            <h2>What the position is built on</h2>
            <p>
              Oldest first. The order is the argument, and the note on each says why it
              earned a place rather than what it contains.
            </p>
          </div>
          <div className="reading-list reveal reveal-delay-1">
            {reading.map((r) => (
              <div key={r.id} className="reading-item">
                <div className="reading-item-meta">
                  <span className="reading-item-venue">
                    {r.venue} &middot; {r.year}
                  </span>
                </div>
                <p className="reading-item-title">{r.title}</p>
                <p className="reading-item-authors">{r.authors}</p>
                <p className="reading-item-annotation">{r.note}</p>
                <div className="reading-item-links">
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="reading-link">
                    Source
                  </a>
                  {r.pdf && (
                    <a href={r.pdf} target="_blank" rel="noopener noreferrer" className="reading-link">
                      PDF
                    </a>
                  )}
                  {/* Attribution for the re-hosted copy, required by its license. */}
                  {r.pdf && r.license && (
                    <span className="reading-license">
                      Copy hosted here under{' '}
                      <a
                        href={r.license.url}
                        target="_blank"
                        rel="noopener noreferrer license"
                        className="reading-link"
                      >
                        {r.license.label}
                      </a>
                      , unmodified.
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Leadership</span>
            <h2>Teams I have been responsible for</h2>
          </div>

          <div className="leadership-block reveal reveal-delay-1">
            <p className="leadership-intro">
              Most of what I have built was built with other people. Where a line carries a
              number, that is the number I was actually accountable for, not the size of the
              room it reached. The habit started at home. I love my community, and the work I
              want to spend my life on is turning Southern California into the next tech
              capital of the world.
            </p>

            {leadershipGroups.map((group) => (
              <div key={group.label} className="leadership-group">
                <div className="leadership-group-head">
                  <span className="leadership-group-label">{group.label}</span>
                  <span className="leadership-group-note">{group.note}</span>
                </div>

                <div className="leadership-list">
                  {group.roles.map((r) => (
                    <div key={`${r.org}-${r.role}`} className="leadership-row">
                      <OrgMark name={r.org} logo={r.logo} className="leadership-logo" />
                      <div className="leadership-body">
                        <p className="leadership-role">{r.role}</p>
                        <p className="leadership-meta">
                          {r.org}
                          {r.dates && (
                            <>
                              <span className="leadership-sep" aria-hidden="true">·</span>
                              <span className="leadership-dates">{r.dates}</span>
                            </>
                          )}
                        </p>
                        <p className="leadership-scope">{r.scope}</p>
                      </div>
                      {r.count && (
                        <p className="leadership-count">
                          <span className="leadership-count-n">{r.count.n}</span>
                          <span className="leadership-count-unit">{r.count.unit}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="education">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Education</span>
            <h2>Stanford University</h2>
          </div>

          <div className="education-block reveal reveal-delay-1">
            <div className="education-block-header">
              <img src={stanfordLogo} alt="" className="education-logo" loading="lazy" decoding="async" />
              <p className="education-school">Stanford University</p>
            </div>
            <div className="education-degrees">
              <div className="education-degree-row">
                <span className="education-degree-title">B.S. Computer Science</span>
                <span className="education-degree-detail">
                  Artificial Intelligence Concentration, with a minor focus in data science
                  and systems &middot; Conferred June 2026, with distinction &middot; GPA 3.8 / 4.00
                </span>
              </div>
              <div className="education-degree-row">
                <span className="education-degree-title">M.S. Computer Science</span>
                <span className="education-degree-detail">
                  Artificial Intelligence and Theoretical Computer Science &middot; In progress,
                  currently on leave &middot; GPA 4.0 / 4.00
                </span>
              </div>
            </div>
            <div className="education-meta">
              <span className="education-gpa">Stanford, CA</span>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }} className="reveal reveal-delay-2">
            <span className="section-label">Coursework</span>
            <p className="page-desc" style={{ marginTop: '4px' }}>
              All {moduleCount} modules, across six domains and labeled by where each was
              studied, are mapped on the Foundation page.
            </p>
            <p className="coursework-note">
              Each module is labeled by where it was studied, Stanford core, Stanford depth, or
              self-taught, so the weaker parts of the claim are visible alongside the stronger ones.
            </p>
            <Link to="/foundation" className="btn btn-outline">
              See the foundation <span className="arw">&rarr;</span>
            </Link>
          </div>

          <div style={{ marginTop: '2.5rem' }} className="reveal reveal-delay-3">
            <span className="section-label">Additional training</span>
            <p className="page-desc" style={{ marginTop: '4px', marginBottom: '16px' }}>
              Deep learning foundations, completed before Stanford graduate coursework.
            </p>
            <div className="cert-grid">
              {certs.map((cert) => (
                <div key={cert.name} className="cert-row">
                  <img src="/images/logos/deeplearningai.jpeg" alt="" className="cert-logo" loading="lazy" decoding="async" />
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-meta">
                      DeepLearning.AI &middot; Andrew Ng &middot; {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }} className="reveal reveal-delay-4">
            <span className="section-label">Honors</span>
            <div className="honors-tags">
              {honors.map((h) => (
                <a
                  key={h.label}
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-tag skill-tag--link"
                >
                  {h.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mentors">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">People</span>
            <h2>Mentors and advisors</h2>
          </div>
          <div className="mentors-block reveal reveal-delay-1">
            <p className="mentors-intro">
              I am grateful to the researchers, educators, and practitioners who have shaped
              how I think about research, engineering, and strategy.
            </p>
            <p className="ack-disclaimer" style={{ margin: '0 0 18px' }}>
              Named with their knowledge as advisors of record. Nothing here implies their
              endorsement of Truth Computing or of any claim on this site.
            </p>
            <ul className="mentors-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {mentors.map((m) => (
                <li key={m.name} className="mentor-row">
                  <span className="mentor-name">
                    <a href={m.url} target="_blank" rel="noopener noreferrer" className="mentor-link">
                      {m.name}
                    </a>
                  </span>
                  <p className="mentor-role">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="conversations">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">
              <a
                href="https://www.truth-computing.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mentor-link"
              >
                Truth Computing
              </a>
            </span>
            <h2>In conversation with</h2>
          </div>
          <div className="ack-block reveal reveal-delay-1">
            <p className="ack-lead">
              Stanford Technology Ventures Program &middot; Association for Computing
              Machinery &middot; researchers and leaders with whom we have discussed the
              novelty and ethics of our work.
            </p>
            <p className="ack-disclaimer">
              Listing reflects those conversations, not a formal relationship or endorsement.
            </p>
          </div>
        </div>
      </section>


      <section id="skills">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Technical skills</span>
            <h2>Skills</h2>
          </div>
          <div className="skills-grid reveal reveal-delay-1">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <span className="skill-group-label">{group.label}</span>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
