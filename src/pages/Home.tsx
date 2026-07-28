import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import GitHubStrip from '../components/GitHubStrip';
import { projects } from '../data/projects';
import { papers } from '../data/papers';
import { experience } from '../data/experience';
import { domains } from '../data/foundation';
import stanfordLogo from '../assets/images/stanford-logo.png';
import { useRevealAll } from '../hooks/useReveal';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

const pillars = [
  {
    title: 'Probabilistic Systems',
    desc: 'Stochastic simulation, Monte Carlo methods, bootstrap confidence intervals, and variance reduction via Common Random Numbers.',
  },
  {
    title: 'Decision Under Uncertainty',
    desc: 'POMDP frameworks, contextual bandit algorithms, partial observability, and behavioral modeling.',
  },
  {
    title: 'Evaluation Methodology',
    desc: 'Ablation studies, replication studies, effect-size estimation, and reproducibility pipelines.',
  },
  {
    title: 'Systems Engineering',
    desc: 'Distributed systems in C++, gossip protocols, rate limiting convergence analysis, and UNIX systems programming.',
  },
];

export default function Home() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const [copied, setCopied] = useState(false);
  useRevealAll('.reveal');

  const stats = useMemo(
    () => [
      { n: projects.length, l: 'research systems built' },
      { n: papers.length, l: 'papers and reports' },
      { n: domains.flatMap((d) => d.modules).length, l: 'modules of coursework' },
      { n: experience.length, l: 'roles held' },
    ],
    []
  );

  function copyEmail() {
    navigator.clipboard.writeText('mtorre04@stanford.edu').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      <header className="hero">
        <div className="frame">
          <p className="hero-greeting">{greeting()}</p>
          <h1 className="hero-name">Matthew Torre</h1>
          <p className="hero-standfirst">
            I design and empirically evaluate probabilistic machine learning systems, and I
            care most about the point where a result stops being plausible and starts being
            measured.
          </p>

          <a
            href="https://www.truth-computing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-focus"
          >
            <span className="hero-focus-label">Primary focus</span>
            <span className="hero-focus-name">
              Truth Computing <span className="arw">&rarr;</span>
            </span>
            <span className="hero-focus-desc">
              Co-founder, CEO, and CTO. Where this work is heading: systems that hold their
              claims to a measurable standard. truth-computing.com
            </span>
          </a>

          <div className="hero-credential">
            <img src={stanfordLogo} alt="" className="hero-credential-icon" />
            <div>
              <span className="hero-credential-primary">
                Stanford University &mdash; B.S. &amp; M.S. Computer Science, Artificial Intelligence
              </span>
              <span className="hero-credential-sub">
                B.S. conferred June 2026, with distinction &middot; GPA 3.8 &middot; M.S. expected
                June 2027 &middot; GPA 4.0
              </span>
            </div>
          </div>

          <p className="hero-profile">
            My work spans stochastic simulation engines with rigorous statistical validation,
            POMDP and bandit frameworks for decision-making under partial observability, and
            data-grounded calibration pipelines that replace hand-specified priors with
            empirically fit distributions.
          </p>

          <div className="hero-currently">
            <span className="hero-currently-label">Currently</span>
            <ul className="hero-currently-items">
              <li className="hero-currently-item">
                Co-founder, CEO, and CTO at Truth Computing
              </li>
              <li className="hero-currently-item">
                XFund Ethics Fellow, Stanford Technology Ventures Program
              </li>
              <li className="hero-currently-item">
                Co-founder, Truth Computing Media
              </li>
            </ul>
          </div>

          <div className="hero-actions">
            <a
              href="https://calendar.app.google/LQAMNbiZ6fCzmfLx9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 10h18M8 3v4M16 3v4" />
              </svg>
              Book a meeting
            </a>
            <Link to="/work" className="btn btn-outline">View the work</Link>
            <a
              href="https://github.com/MatthewTorre"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
            <button className="btn btn-ghost" onClick={copyEmail}>
              {copied ? '✓ Copied' : 'mtorre04@stanford.edu'}
            </button>
          </div>
        </div>
      </header>

      <section>
        <div className="frame" style={{ paddingTop: '8px', paddingBottom: '44px' }}>
          <div className="stat-strip reveal">
            {stats.map((s) => (
              <div key={s.l} className="stat-cell">
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GitHubStrip />

      <section className="home-section">
        <div className="frame">
          <div className="section-header reveal">
            <span className="section-label">Featured</span>
            <h2>{featured.title}</h2>
            <p>{featured.oneliner}</p>
          </div>
          <div className="reveal reveal-delay-1">
            <ProjectCard project={featured} />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="frame">
          <div className="section-header reveal">
            <span className="section-label">Research focus</span>
            <h2>What I think about</h2>
          </div>

          <div className="research-interests reveal reveal-delay-1">
            <p className="research-interest-text">
              My interests span the mathematical foundations of modern ML and the systems
              infrastructure that makes it tractable at scale. Interpretability is the lens I
              keep returning to: understanding what representations models learn, how they use
              them, and where they fail informs both better architectures and better evaluation
              methodology.
            </p>
            <p className="research-interest-text">
              More broadly, I am drawn to what can be learned from weak or indirect supervision,
              how architectural choices shape the solution space, and what role data curation
              plays in determining model behavior. On the systems side, the feedback loop between
              AI research and systems design interests me most: how we build software and hardware
              to run these models, and how that infrastructure in turn constrains the research.
            </p>
          </div>

          <div className="pillars-grid reveal reveal-delay-2" style={{ marginTop: '2.5rem' }}>
            {pillars.map((p) => (
              <div key={p.title} className="pillar-card">
                <span className="pillar-title">{p.title}</span>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="home-cta-row reveal reveal-delay-3">
            <Link to="/work" className="btn btn-outline">
              All {projects.length} projects <span className="arw">&rarr;</span>
            </Link>
            <Link to="/foundation" className="btn btn-outline">
              The coursework underneath <span className="arw">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
