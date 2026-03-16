import { skillGroups } from '../data/skills';
import { useRevealAll } from '../hooks/useReveal';
import portrait from '../assets/images/MATT_NEW.jpg';
import stanfordLogo from '../assets/images/stanford-logo.png';

const graduateCourses = [
  { label: 'CS238 Decision Making Under Uncertainty', url: 'https://aa228.stanford.edu/' },
  { label: 'CS244C Advanced Networking and Distributed Systems', url: 'https://www.scs.stanford.edu/26wi-cs244c/' },
  { label: 'CS230 Deep Learning', url: 'https://cs230.stanford.edu/' },
  { label: 'CS221 Artificial Intelligence', url: 'https://cs221.stanford.edu/' },
];

const undergraduateCourses = [
  { label: 'CS131 Computer Vision', url: 'https://cs131.stanford.edu/' },
  { label: 'CS107 Computer Organization and Systems', url: 'https://web.stanford.edu/class/cs107/' },
  { label: 'CS124 From Languages to Information', url: 'https://web.stanford.edu/class/cs124/' },
  { label: 'CS161 Algorithms', url: 'https://web.stanford.edu/class/cs161/' },
  { label: 'CS103 Mathematical Foundations of Computing', url: 'https://web.stanford.edu/class/cs103/' },
  { label: 'CS111 Operating Systems Principles', url: 'https://web.stanford.edu/class/cs111/' },
  { label: 'CS106A/B Programming Methodology and Abstractions', url: 'https://cs106b.stanford.edu/' },
  { label: 'CS80E Dissecting the Modern Computer', url: 'https://web.stanford.edu/class/cs80e/' },
  { label: 'MATH 51 Linear Algebra', url: 'https://web.stanford.edu/class/math51/' },
  { label: 'CS109 Probability for Computer Scientists', url: 'https://web.stanford.edu/class/cs109/' },
  { label: 'MS&E211DS Optimization for Data Science', url: 'https://web.stanford.edu/class/msande211x/' },
  { label: 'CEE250 Product Management Fundamentals for the Real Economy', url: 'https://online.stanford.edu/courses/cee250-product-management-fundamentals-real-economy' },
];

const reading = [
  {
    id: 'cot',
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    authors: 'Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, Denny Zhou',
    venue: 'NeurIPS 2022',
    year: '2022',
    annotation:
      'Foundational paper showing that prompting LLMs with intermediate reasoning steps dramatically improves performance on arithmetic, commonsense, and symbolic reasoning tasks — directly relevant to understanding when models reason vs. pattern-match.',
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

export default function About() {
  useRevealAll('.reveal');

  return (
    <>
      <section id="bio">
        <div className="container">
          <div className="section-header">
            <span className="section-label">About</span>
            <h2>Matthew Torre</h2>
          </div>
          <div className="about-bio-row">
            <img
              src={portrait}
              alt="Matthew Torre"
              className="about-portrait"
            />
            <div className="about-bio-text">
              <p>
                I study computer science and data science at Stanford, with a focus on AI and
                machine learning. My work sits at the intersection of research, engineering,
                product, and system design: I care about building tools that are technically rigorous, intuitive, 
                and reproducible.
              </p>
              <p>
                I am interested in the mechanics of reasoning under reinforcement learning: how
                reward signals during post-training shape the internal computations a model uses
                to solve problems. Deciphering when chain-of-thought reflects genuine intermediate reasoning
                versus post-hoc rationalization is a question worth grappling with. The core question I keep returning to is how we know
                whether a model has learned to reason or learned to produce outputs that look like
                reasoning, and what it would take to design training and evaluation regimes that
                enforce the distinction.
              </p>
              <p>
                I am a first-generation college student and member of the AAPI community. Access
                and opportunity are not background values for me; they are embedded into everything I am and that I do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Research Interests</span>
            <h2>What I Think About</h2>
          </div>
          <div className="research-interests reveal reveal-delay-1">
            <p className="research-interest-text">
              My research interests span the mathematical foundations of modern ML and the
              systems infrastructure that makes it tractable at scale. I am drawn to
              interpretability as a lens: understanding what representations models learn,
              how they use them, and where they fail informs both better architectures and
              better evaluation methodology. More broadly, an emerging research interest of mine is in meta-learning and deep multi-task learning, as exemplified by CS330: Deep Multi-Task and Meta Learning, where the goal is to design algorithms that learn to learn so models can quickly adapt to new tasks from very limited data by exploiting the structure induced by many related tasks, including through self-supervised pretraining, optimization-based meta-learning, and lifelong learning.
            </p>
            <p className="research-interest-text">
              A direction I am actively moving toward: how reward model failures propagate
              into downstream behavior, and whether the signals used in post-training actually
              measure what they intend to. This connects directly to work I have already done.
              Invariant was built around the gap between optimal and actual behavior under
              constraint, and how to design evaluation frameworks honest about what they can
              and cannot measure. Those same questions reappear at the heart of RLHF: a reward
              model is an evaluation function, and optimizing against an imperfect metric
              carries the same structural risks at much higher stakes. The foundational
              questions feel familiar. I want to go deeper.
            </p>
          </div>
        </div>
      </section>

      <section id="reading">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Currently Reading</span>
            <h2>On the Desk</h2>
          </div>
          <div className="reading-list reveal reveal-delay-1">
            {reading.map((r) => (
              <div key={r.id} className="reading-item">
                <div className="reading-item-meta">
                  <span className="reading-item-venue">{r.venue} &middot; {r.year}</span>
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
        <div className="container">
          <div className="section-header">
            <span className="section-label">Education</span>
            <h2>Stanford University</h2>
          </div>

          <div className="education-block">
            <div className="education-block-header">
              <img src={stanfordLogo} alt="Stanford University" className="education-logo" />
              <p className="education-school">Stanford University</p>
            </div>
            <div className="education-degrees">
              <div className="education-degree-row">
                <span className="education-degree-title">B.S. Computer Science</span>
                <span className="education-degree-detail">Artificial Intelligence Concentration &middot; Expected June 2026</span>
              </div>
              <div className="education-degree-row">
                <span className="education-degree-title">M.S. Computer Science</span>
                <span className="education-degree-detail">Artificial Intelligence Concentration &middot; Expected June 2027</span>
              </div>
            </div>
            <div className="education-meta">
              <span className="education-gpa">GPA: 3.74 / 4.00</span>
              <span>Stanford, CA</span>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <span className="section-label">Relevant Coursework</span>
            <div className="coursework-grid">
              <div>
                <span className="coursework-category">Graduate and Advanced</span>
                {graduateCourses.map((c) => (
                  <p key={c.label} className="coursework-item">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="coursework-link">{c.label}</a>
                  </p>
                ))}
              </div>
              <div>
                <span className="coursework-category">Undergraduate</span>
                {undergraduateCourses.map((c) => (
                  <p key={c.label} className="coursework-item">
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="coursework-link">{c.label}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <span className="section-label">Additional Training</span>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', marginTop: '0.25rem' }}>
              Deep learning foundations completed prior to Stanford graduate coursework.
            </p>
            <div className="cert-grid">
              {certs.map((cert) => (
                <div key={cert.name} className="cert-chip">
                  <img src="/images/logos/deeplearningai.jpeg" alt="DeepLearning.AI" className="cert-logo" />
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-meta">DeepLearning.AI &middot; Andrew Ng &middot; {cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <span className="section-label">Honors</span>
            <div className="honors-tags">
              {honors.map((h) => (
                h.url ? (
                  <a key={h.label} href={h.url} target="_blank" rel="noopener noreferrer" className="skill-tag skill-tag--link">
                    {h.label}
                  </a>
                ) : (
                  <span key={h.label} className="skill-tag">
                    {h.label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mentors">
        <div className="container">
          <div className="section-header">
            <span className="section-label">People</span>
            <h2>Mentors and Advisors</h2>
          </div>
          <div className="mentors-block">
            <p className="mentors-intro">
              I am grateful to the researchers, educators, and practitioners who have shaped how
              I think about research, engineering, and strategy. Their guidance has been formative.
            </p>
            <ul className="mentors-list">
              <li>
                <span className="mentor-name">
                  <a href="https://vitercik.github.io/" target="_blank" rel="noopener noreferrer" className="mentor-link">Ellen Vitercik</a>
                </span>
                <span className="mentor-role">Assistant Professor, MS&amp;E and CS, Stanford · BS and MS Advisor · Algorithms and Machine Learning</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://www.cs.stanford.edu/people/jerry-cain" target="_blank" rel="noopener noreferrer" className="mentor-link">Jerry Cain</a>
                </span>
                <span className="mentor-role">Senior Lecturer, CS, Stanford · Foundational CS Teaching and Mentorship</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://mykel.kochenderfer.com/" target="_blank" rel="noopener noreferrer" className="mentor-link">Mykel J. Kochenderfer</a>
                </span>
                <span className="mentor-role">Professor, Aeronautics &amp; Astronautics, Stanford · Director, SISL · Decision Making Under Uncertainty and AI Systems</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://sites.google.com/site/marywootters/" target="_blank" rel="noopener noreferrer" className="mentor-link">Mary Wootters</a>
                </span>
                <span className="mentor-role">Associate Professor, CS and EE, Stanford · Theoretical CS and Information Theory</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://davidajoku.com/" target="_blank" rel="noopener noreferrer" className="mentor-link">David Ajoku</a>
                </span>
                <span className="mentor-role">AI Strategist, Product Leader, and Founder · AI Strategy, Product Thinking, and Career Navigation</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://www.reforge.com/profiles/anand-subramani" target="_blank" rel="noopener noreferrer" className="mentor-link">Anand Subramani</a>
                </span>
                <span className="mentor-role">SVP of Product, Path · Previously VP of Product at Pilot, Product Leadership at Gusto, Dropbox, and Zynga · Teaches Product Management at Stanford · Advisor to ~50 Startups</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://web.stanford.edu/~cgregg/chris-gregg/" target="_blank" rel="noopener noreferrer" className="mentor-link">Chris Gregg</a>
                </span>
                <span className="mentor-role">Senior Lecturer, CS, Stanford · Research Advisor and Teaching Mentor</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://www.linkedin.com/in/ali-lauer-cliff-144baa1a/" target="_blank" rel="noopener noreferrer" className="mentor-link">Ali Cliff</a>
                </span>
                <span className="mentor-role">Partner, Adams Street Partners · Career and Professional Development Mentorship</span>
              </li>
              <li>
                <span className="mentor-name">
                  <a href="https://www.linkedin.com/in/wangfred/" target="_blank" rel="noopener noreferrer" className="mentor-link">Fred Wang</a>
                </span>
                <span className="mentor-role">Investor and Venture Advisor · Product and Career Strategy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technical Skills</span>
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
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
