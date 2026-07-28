import { Link } from 'react-router-dom';
import { skillGroups } from '../data/skills';
import { domains } from '../data/foundation';
import { mentors } from '../data/mentors';
import { useRevealAll } from '../hooks/useReveal';
import portrait from '../assets/images/MATT_NEW.jpg';
import stanfordLogo from '../assets/images/stanford-logo.png';

const reading = [
  {
    id: 'cot',
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    authors:
      'Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, Denny Zhou',
    venue: 'NeurIPS 2022',
    year: '2022',
    annotation:
      'Foundational paper showing that prompting LLMs with intermediate reasoning steps improves performance on arithmetic, commonsense, and symbolic reasoning tasks — directly relevant to understanding when models reason and when they pattern-match.',
    arxiv: 'https://arxiv.org/abs/2201.11903',
    pdf: '/papers/reading/cot.pdf',
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
      'In the clinical communication pipeline I designed for our vision care partner, the highest-consequence class of message cannot be sent automatically under any configuration. It waits for a licensed clinician to release it.',
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
    principle: 'The security posture is published honestly.',
    detail:
      'I wrote the security and safety plan for our healthcare platform with a three-state vocabulary: in place, partial, and required before production. It names what is not yet built and forbids real patient data until that list closes.',
  },
];

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
    note: 'Human-gated clinical AI for an optometry practice, spanning intake, imaging workflows, and clinical documentation, each reviewed by a clinician before it enters the record.',
  },
  {
    name: 'Truth Computing Concierge',
    field: 'Automotive',
    status: 'Design partnership',
    note: 'Constraint-driven inventory matching and customer communication for a luxury dealership.',
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
            CS coterm in artificial intelligence.
          </p>
        </div>
      </header>

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
                Stanford CS coterm in artificial intelligence. My work sits at the intersection of
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
            <h2>What I think about</h2>
          </div>
          <div className="research-interests reveal reveal-delay-1">
            <p className="research-interest-text">
              My interests span the mathematical foundations of modern ML and the systems
              infrastructure that makes it tractable at scale. Interpretability is the lens I
              keep returning to: understanding what representations models learn, how they use
              them, and where they fail informs both better architectures and better evaluation
              methodology. Meta-learning and deep multi-task learning are a growing interest,
              where the goal is to design algorithms that learn to learn, so models adapt to new
              tasks from very limited data by exploiting the structure across many related ones.
            </p>
            <p className="research-interest-text">
              A direction I am actively moving toward: how reward model failures propagate into
              downstream behavior, and whether the signals used in post-training measure what
              they intend to. This connects to work I have already done. Invariant was built
              around the gap between optimal and actual behavior under constraint, and around
              designing evaluation frameworks honest about what they can and cannot measure.
              Those questions reappear at the heart of RLHF: a reward model is an evaluation
              function, and optimizing against an imperfect metric carries the same structural
              risks at much higher stakes.
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
                  <p className="arm-field">{a.field}</p>
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
            <span className="section-label">Currently reading</span>
            <h2>On the desk</h2>
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
                <p className="reading-item-annotation">{r.annotation}</p>
                <div className="reading-item-links">
                  <a href={r.arxiv} target="_blank" rel="noopener noreferrer" className="reading-link">arXiv</a>
                  <a href={r.pdf} target="_blank" rel="noopener noreferrer" className="reading-link">PDF</a>
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
              <img src={stanfordLogo} alt="" className="education-logo" />
              <p className="education-school">Stanford University</p>
            </div>
            <div className="education-degrees">
              <div className="education-degree-row">
                <span className="education-degree-title">B.S. Computer Science</span>
                <span className="education-degree-detail">
                  Artificial Intelligence Concentration &middot; Conferred June 2026, with
                  distinction &middot; GPA 3.8 / 4.00
                </span>
              </div>
              <div className="education-degree-row">
                <span className="education-degree-title">M.S. Computer Science</span>
                <span className="education-degree-detail">
                  Artificial Intelligence Concentration &middot; Expected June 2027 &middot; GPA 4.0 / 4.00
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
                  <img src="/images/logos/deeplearningai.jpeg" alt="" className="cert-logo" />
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
