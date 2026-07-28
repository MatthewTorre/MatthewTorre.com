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

// Truth Computing's acknowledgments. Each entry describes a category of the
// honors, roles, and institutions the people behind that work carry — the
// people themselves are held privately and not named.
const gratitude = [
  {
    label: 'Building and scaling businesses',
    body: (
      <>
        A product leader who built and scaled multi-billion-dollar businesses at Google,
        across payments (Google Wallet and Google Pay), the AdMob mobile-app monetization
        platform, and AI-powered conversational products, and earlier at Siebel, Netscape,
        and Oracle. Recipient of the Google Founders&rsquo; Award; Stanford MBA. From him we
        learn how to build the repeatable processes that carry a business forward, and how
        to scale what works without breaking it.
      </>
    ),
  },
  {
    label: 'Honors & national academies',
    body: (
      <>
        The A.M. Turing Award, the National Medal of Science, the Kyoto Prize, and the
        Presidential Early Career Award for Scientists and Engineers &middot; members and
        fellows of the National Academy of Sciences, the National Academy of Engineering,
        the Royal Society, the French Academy of Sciences, and the Canadian Academy of
        Engineering.
      </>
    ),
  },
  {
    label: 'Fellowships & research awards',
    body: (
      <>
        Sloan Research Fellowship &middot; Schmidt Sciences AI2050 Fellowship &middot;
        Miller Fellowship &middot; NSF CAREER Awards &middot; DARPA Young Faculty Award
        &middot; Google Research Scholar &middot; IEEE Fellow, and Fellows of SIAM and the
        American Mathematical Society.
      </>
    ),
  },
  {
    label: 'Where they studied and teach',
    body: (
      <>
        Stanford &middot; MIT &middot; Caltech &middot; Carnegie Mellon &middot; Cambridge
        &middot; Edinburgh &middot; Michigan &middot; Toronto &middot; Columbia &middot;
        Swarthmore &middot; Johns Hopkins &middot; Harvard &middot; USC.
      </>
    ),
  },
  {
    label: 'Research & public-service leadership',
    body: (
      <>
        DARPA&rsquo;s Information Technology Office &middot; MIT Lincoln Laboratory &middot;
        the National Science Foundation &middot; Stanford&rsquo;s Intelligent Systems
        Laboratory, Center for AI Safety, and Institute for Human-Centered AI.
      </>
    ),
  },
  {
    label: 'Bodies of work we learn from',
    body: (
      <>
        Foundational texts on the analysis of algorithms and digital typesetting &middot;
        coding and information theory &middot; decision-making under uncertainty and
        aircraft collision avoidance &middot; active networks &middot; a lifetime of
        computer-science teaching.
      </>
    ),
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
            Stanford coterm in Computer Science, Artificial Intelligence concentration.
            Research, engineering, and product, with a bias toward work that can be
            reproduced.
          </p>
        </div>
      </header>

      <section id="bio">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="about-bio-row">
            <img src={portrait} alt="Matthew Torre" className="about-portrait" />
            <div className="about-bio-text">
              <p>
                I study computer science at Stanford with a focus on AI and machine learning.
                My work sits at the intersection of research, engineering, product, and
                system design: I care about building tools that are technically rigorous,
                intuitive, and reproducible.
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

      <section id="gratitude">
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Truth Computing</span>
            <h2>With gratitude</h2>
          </div>

          <div className="ack-block reveal reveal-delay-1">
            <p className="ack-lead">
              The teachers, mentors, and colleagues who shaped us. We hold these
              relationships privately and do not name them here, but their work, and the
              traditions they come from, set the standard we build to. Among the honors,
              fellowships, and institutions they carry:
            </p>
          </div>

          <div className="ack-groups reveal reveal-delay-2">
            {gratitude.map((g) => (
              <div key={g.label} className="ack-group">
                <span className="ack-group-label">{g.label}</span>
                <p className="ack-group-body">{g.body}</p>
              </div>
            ))}
          </div>

          <div className="ack-block reveal reveal-delay-3" style={{ marginTop: '2.5rem' }}>
            <span className="section-label">Friends &amp; early advisors</span>
            <p className="ack-lead" style={{ marginTop: '8px' }}>
              Sanjay Swamy, best friend and early advisor.
            </p>
            <p className="ack-disclaimer">
              Held here in gratitude. These honors, roles, and affiliations describe each
              person&rsquo;s own history and do not imply an advisory, financial, or
              employment relationship with Truth Computing, nor an endorsement of Truth
              Computing, its products, or any offering.
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
