import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import stanfordLogo from '../assets/images/stanford-logo.png';
import { useRevealAll } from '../hooks/useReveal';

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
  useRevealAll('.reveal');

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-name reveal">Matthew Torre</h1>

          <div className="hero-credential reveal reveal-delay-1">
            <img src={stanfordLogo} alt="Stanford University" className="hero-credential-icon" />
            <div>
              <span className="hero-credential-primary">
                Stanford University &mdash; B.S. &amp; M.S. Computer Science, Artificial Intelligence
              </span>
              <span className="hero-credential-sub">
                GPA 3.74 &middot; Expected June 2026 / 2027 &middot; Seeking MTS
              </span>
            </div>
          </div>

          <p className="hero-profile reveal reveal-delay-2">
            Matthew designs and empirically evaluates probabilistic ML systems at the intersection
            of reliable inference, evaluation methodology, and scalable experimentation. His work
            spans stochastic simulation engines with rigorous statistical validation, POMDP and
            bandit frameworks for decision-making under partial observability, and data-grounded
            calibration pipelines that replace hand-specified priors with empirically fit
            distributions.
          </p>
          <div className="hero-currently reveal reveal-delay-3">
            <span className="hero-currently-label">Currently</span>
            <ul className="hero-currently-items">
              <li className="hero-currently-item">
                Product Engineering Intern at Lasso
              </li>
              <li className="hero-currently-item">
                Research in probabilistic ML systems and evaluation methodology
              </li>
            </ul>
          </div>
          <div className="hero-actions reveal reveal-delay-4">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <a
              href="https://github.com/MatthewTorre"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
            <a href="/Matthew_Torre_Research_CV.pdf" download className="btn btn-outline">
              Resume
            </a>
            <a href="mailto:mtorre04@stanford.edu" className="btn btn-ghost">
              mtorre04@stanford.edu
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured Project</span>
            <h2>Invariant</h2>
            <p>
              The primary systems artifact: a domain-agnostic Monte Carlo simulation platform
              for probabilistic operational planning, built with zero external dependencies.
            </p>
          </div>
          <ProjectCard project={featured} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Research Focus</span>
            <h2>What I Think About</h2>
          </div>

          <div className="research-interests reveal reveal-delay-1">
            <p className="research-interest-text">
              My research interests span the mathematical foundations of modern ML and the
              systems infrastructure that makes it tractable at scale. I am particularly
              drawn to interpretability as a lens: understanding what representations models
              learn, how they use them, and where they fail informs both better architectures
              and better evaluation methodology.
            </p>
            <p className="research-interest-text">
              More broadly, I am fascinated by what can be learned from weak or indirect
              supervision, how architectural choices shape the solution space, and what role
              data curation plays in determining model behavior. On the systems side, I am
              most interested in the feedback loop between AI research and systems design:
              how we build software and hardware to run these models, and how that
              infrastructure in turn constrains and shapes the research.
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

          <div style={{ marginTop: '2rem' }} className="reveal reveal-delay-3">
            <Link to="/projects" className="btn btn-outline">
              View all 7 projects &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
