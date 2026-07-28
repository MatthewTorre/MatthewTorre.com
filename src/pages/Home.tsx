import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import GitHubStrip from '../components/GitHubStrip';
import OrgMark from '../components/OrgMark';
import { projects } from '../data/projects';
import { papers } from '../data/papers';
import { experience } from '../data/experience';
import { domains } from '../data/foundation';
import { leadershipRoles } from '../data/leadership';
import stanfordLogo from '../assets/images/stanford-logo.png';
import { useRevealAll } from '../hooks/useReveal';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

const truthComputingWork = [
  {
    title: 'Human-in-the-loop, sitewide',
    desc: 'Set the company-wide stance: every output carries its sources, holds up to an audit after the fact, and waits on a person before anything consequential happens.',
  },
  {
    title: 'Designing for the failure case first',
    desc: 'In a regulated healthcare build, automated messages are classified by consequence and the highest class can never leave without a licensed human releasing it. The default is to not send.',
  },
  {
    title: 'A product spec defined by its refusals',
    desc: 'I own the requirements for a homelessness-coordination platform. It states plainly what it will not do: allocate housing, override prioritization policy, replace a system of record, or decide eligibility.',
  },
  {
    title: 'A security posture written in three states',
    desc: 'Every platform I own carries a safety plan that grades each control as in place, partial, or required before production — and no real regulated data enters a system until that third list is empty.',
  },
  {
    title: 'Grounded by construction, not by checking',
    desc: 'System-generated briefs are assembled from records at read time and every claim carries the record it came from, rather than being a stored summary that can drift from its source.',
  },
  {
    title: 'An editorial standard with failure modes',
    desc: 'I wrote the brand and voice standard: a banned-phrase list, a rewrite pattern with worked examples, and a rule that unflattering facts get stated once, plainly, and are not repeated.',
  },
];

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
              Co-founder, Chief Executive Officer, and Chief Technology Officer, leading a
              team of twelve. Where this work is heading: systems that hold their claims to a
              measurable standard. truth-computing.com
            </span>
          </a>

          <div className="hero-credential">
            <img src={stanfordLogo} alt="" className="hero-credential-icon" />
            <div>
              <span className="hero-credential-primary">
                Stanford University &mdash; B.S. &amp; M.S. Computer Science, Artificial Intelligence
                and Theoretical Computer Science
              </span>
              <span className="hero-credential-sub">
                B.S. conferred June 2026, with distinction &middot; GPA 3.8 &middot; M.S. in
                progress, currently on leave &middot; GPA 4.0
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
                Co-founder, Chief Executive Officer, and Chief Technology Officer at Truth
                Computing
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
            <span className="section-label">Truth Computing</span>
            <h2>What I am building now</h2>
            <p>
              I started Truth Computing to build AI that helps people reason more clearly and
              close the gap between what is true and what is believed to be true. Most of what
              I own there is about constraining a system so it cannot overstate itself.
            </p>
          </div>

          <div className="pillars-grid reveal reveal-delay-1">
            {truthComputingWork.map((w) => (
              <div key={w.title} className="pillar-card">
                <span className="pillar-title">{w.title}</span>
                <p className="pillar-desc">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="home-cta-row reveal reveal-delay-2">
            <a
              href="https://www.truth-computing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              truth-computing.com <span className="arw">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

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
            <span className="section-label">Leadership</span>
            <h2>Teams I have been responsible for</h2>
            <p>
              Most of what I have built was built with other people, and the number in each
              line is the number I was actually accountable for. I love my community, and the
              work I want to spend my life on is turning Southern California into the next tech
              capital of the world.
            </p>
          </div>

          <div className="leadership-block reveal reveal-delay-1">
            <div className="leadership-list">
              {leadershipRoles.slice(0, 4).map((r) => (
                <div key={`${r.org}-${r.role}`} className="leadership-row">
                  <OrgMark name={r.org} logo={r.logo} className="leadership-logo" />
                  <div className="leadership-body">
                    <div className="leadership-head">
                      <span className="leadership-role">{r.role}</span>
                      {r.dates && <span className="leadership-dates">{r.dates}</span>}
                    </div>
                    <p className="leadership-org">{r.org}</p>
                    <p className="leadership-scope">{r.scope}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="home-cta-row reveal reveal-delay-2">
            <Link to="/about#leadership" className="btn btn-outline">
              All {leadershipRoles.length} roles <span className="arw">&rarr;</span>
            </Link>
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
