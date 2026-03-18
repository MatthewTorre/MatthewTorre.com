import { useState } from 'react';
import { papers, Paper } from '../data/papers';
import { linkedinPosts, LinkedInPost } from '../data/linkedinPosts';
import { useRevealAll } from '../hooks/useReveal';

function PaperModal({ paper, onClose }: { paper: Paper; onClose: () => void }) {
  return (
    <div className="paper-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={paper.title}>
      <div className="paper-modal" onClick={(e) => e.stopPropagation()}>
        <div className="paper-modal-header">
          <div>
            <span className="paper-modal-course">{paper.course}</span>
            <h3 className="paper-modal-title">{paper.title}</h3>
          </div>
          <button className="paper-modal-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <iframe
          src={paper.pdf}
          className="paper-modal-iframe"
          title={paper.title}
        />
        <div className="paper-modal-footer">
          <a href={paper.pdf} download className="paper-download-btn">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

function PaperCard({ paper, onOpen }: { paper: Paper; onOpen: (p: Paper) => void }) {
  return (
    <article className="paper-card">
      <div className="paper-card-meta">
        <span className="paper-card-course">{paper.course}</span>
        <span className="paper-card-year">{paper.year}</span>
      </div>
      <h3 className="paper-card-title">{paper.title}</h3>
      <p className="paper-card-desc">{paper.description}</p>
      {paper.abstract && (
        <div className="paper-abstract-tip" role="tooltip">
          <span className="paper-abstract-label">Abstract</span>
          <p className="paper-abstract-text">{paper.abstract}</p>
        </div>
      )}
      <div className="paper-card-tags">
        {paper.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="paper-card-actions">
        <button className="paper-read-btn" onClick={() => onOpen(paper)}>
          Read Paper →
        </button>
        <a href={paper.pdf} download className="paper-dl-link">
          ↓ PDF
        </a>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: LinkedInPost }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="post-card">
      <div className="post-card-meta">
        <span className="post-card-date">{post.date}</span>
        <span className="post-card-impressions">{post.impressions.toLocaleString()} impressions</span>
      </div>
      <h3 className="post-card-title">{post.title}</h3>
      <div className="post-card-body">
        {expanded ? (
          <p className="post-card-text">{post.fullText}</p>
        ) : (
          <p className="post-card-text">{post.excerpt}</p>
        )}
      </div>
      <div className="post-card-footer">
        <div className="post-card-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <button
          className="post-expand-btn"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>
      </div>
    </article>
  );
}

export default function Writing() {
  useRevealAll('.reveal');
  const [active, setActive] = useState<Paper | null>(null);

  return (
    <>
      {active && <PaperModal paper={active} onClose={() => setActive(null)} />}

      <section>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Writing</span>
            <h2>Papers & Reports</h2>
            <p>
              Course papers, independent research, and technical reports spanning
              distributed systems, machine learning, quantum computing, and AI planning.
            </p>
          </div>

          <div className="papers-grid">
            {papers.map((paper, i) => (
              <div key={paper.id} className={`reveal reveal-delay-${Math.min(i + 1, 7)}`}>
                <PaperCard paper={paper} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="posts-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Notes</span>
            <h2>Field Notes</h2>
            <p>
              Reflections on talks, papers, and ideas from the Stanford AI ecosystem —
              originally posted on LinkedIn.
            </p>
          </div>

          <div className="posts-list">
            {linkedinPosts.map((post, i) => (
              <div key={post.id} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
