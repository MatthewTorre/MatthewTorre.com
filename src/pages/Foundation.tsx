import { Fragment, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { domains, chains, PROVENANCE_LABEL, Provenance } from '../data/foundation';
import { useRevealAll } from '../hooks/useReveal';

type Filter = 'all' | Provenance;

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'core', label: 'Stanford · core' },
  { key: 'depth', label: 'Stanford · depth' },
  { key: 'self', label: 'Self-studied' },
];

export default function Foundation() {
  const [filter, setFilter] = useState<Filter>('all');

  // Every count on this page is derived from the data, so none can drift.
  const stats = useMemo(() => {
    const all = domains.flatMap((d) => d.modules);
    const by = (p: Provenance) => all.filter((m) => m.provenance === p).length;
    return {
      total: all.length,
      stanford: by('core') + by('depth'),
      self: by('self'),
      domains: domains.length,
    };
  }, []);

  const visible = useMemo(
    () =>
      domains
        .map((d) => ({
          ...d,
          modules: filter === 'all' ? d.modules : d.modules.filter((m) => m.provenance === filter),
        }))
        .filter((d) => d.modules.length > 0),
    [filter]
  );

  const shown = visible.reduce((n, d) => n + d.modules.length, 0);

  useRevealAll('.reveal', [filter]);

  return (
    <>
      <header className="page-header">
        <div className="frame">
          <p className="page-eyebrow">The foundation</p>
          <h1 className="page-title">What the work is built on.</h1>
          <p className="page-desc">
            The systems I build rest on specific coursework, not a general sense of rigor.
            Here is all of it: the modules across machine learning, systems, theory,
            mathematics, and physics that form the technical base, each labeled by where
            it was studied.
          </p>

          <div className="stat-strip">
            <div className="stat-cell">
              <div className="stat-n">{stats.total}</div>
              <div className="stat-l">modules mapped</div>
            </div>
            <div className="stat-cell">
              <div className="stat-n">{stats.stanford}</div>
              <div className="stat-l">completed at Stanford</div>
            </div>
            <div className="stat-cell">
              <div className="stat-n">{stats.self}</div>
              <div className="stat-l">studied independently</div>
            </div>
            <div className="stat-cell">
              <div className="stat-n">{stats.domains}</div>
              <div className="stat-l">domains</div>
            </div>
          </div>

          <div className="fdn-note">
            <span className="fdn-note-dot" aria-hidden="true" />
            <p>
              Self-studied modules were worked through outside a classroom, without a grade
              behind them. They are labeled separately for that reason.
            </p>
          </div>
        </div>
      </header>

      <div className="fdn-controls">
        <div className="frame">
          <div className="fdn-controls-inner">
            <span className="fdn-filter-label">Show</span>
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                className="filter-tag"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
            <span className="fdn-count" aria-live="polite">
              Showing <b>{shown}</b> of {stats.total}
            </span>
          </div>
        </div>
      </div>

      <div>
        {visible.map((domain) => (
          <section key={domain.key} className="fdn-domain">
            <div className="frame">
              <div className="fdn-domain-head reveal">
                <p className="fdn-domain-num">{domain.num}</p>
                <h2 className="fdn-domain-title">{domain.title}</h2>
                <p className="fdn-domain-sub">{domain.sub}</p>
              </div>
              <div className="fdn-cards">
                {domain.modules.map((module) => (
                  <div key={module.title} className="fdn-card">
                    <div className="fdn-card-top">
                      <span className="fdn-title">{module.title}</span>
                    </div>
                    <span className={`chip chip-${module.provenance}`}>
                      {PROVENANCE_LABEL[module.provenance]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="fdn-spine">
        <div className="frame">
          <div className="fdn-spine-head reveal">
            <h2 className="fdn-spine-title">Each course holds up the next.</h2>
            <p className="fdn-spine-sub">
              Read each row left to right: the groundwork on the left is what makes the work
              on the right possible. Linear algebra and probability into machine learning.
              Discrete math into algorithms. Operating systems into distributed systems.
            </p>
          </div>

          {chains.map((stages, i) => (
            <div key={i} className="fdn-chain">
              {stages.map((stage, si) => (
                <Fragment key={si}>
                  {si > 0 && (
                    <span className="fdn-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                  {stage.map((node) => (
                    <span
                      key={node}
                      className={`fdn-node${si === stages.length - 1 ? ' is-out' : ''}`}
                    >
                      {node}
                    </span>
                  ))}
                </Fragment>
              ))}
            </div>
          ))}

          <div className="fdn-connect">
            <p className="fdn-connect-label">Why the connections are the point</p>
            <p>
              These six areas are one connected structure, and the hardest problems live
              exactly where they meet. A model is only as trustworthy as the probability
              theory underneath it. A learning system is only as fast as the hardware and
              the compiler beneath it, and only as safe as the distributed system that
              serves it.
            </p>
            <p>
              Read the same way, the advanced work on the right is the groundwork on the
              left, applied.{' '}
              <strong>
                Optimization is analysis put to work. Reinforcement learning is stochastic
                processes put to work. Quantum computing is linear algebra and quantum
                mechanics at once.
              </strong>{' '}
              None of it stands on its own.
            </p>
            <p>
              This is why breadth here is more than a collection of certificates. You cannot
              reason about where an AI system will fail if you have only ever seen its top
              layer. Working across these areas means learning how they connect, not just
              what each one does alone. The connections are where the real understanding,
              and the real engineering, happen.
            </p>
          </div>
        </div>
      </section>

      <section className="fdn-next">
        <div className="frame">
          <h2 className="fdn-next-title">This is the base the work is built on.</h2>
          <div className="fdn-next-links">
            <Link to="/work">See what it produced &rarr;</Link>
            <Link to="/writing">Read the papers &rarr;</Link>
            <Link to="/about">More background &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
