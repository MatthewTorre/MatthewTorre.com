import { useEffect, useState } from 'react';
import { papers, Paper } from '../data/papers';
import { paperSizeMB } from '../data/paperSizes';
import { linkedinPosts, LinkedInPost } from '../data/linkedinPosts';
import { useRevealAll } from '../hooks/useReveal';

/** Above this, the PDF opens in a new tab instead of loading into the modal. */
const INLINE_LIMIT_MB = 8;

/** Only ever rendered for papers that actually have a PDF. */
type ReadablePaper = Paper & { pdf: string };

function PaperModal({ paper, onClose }: { paper: ReadablePaper; onClose: () => void }) {
  const size = paperSizeMB[paper.pdf];
  const heavy = size !== undefined && size > INLINE_LIMIT_MB;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

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
        {heavy ? (
          <div className="paper-modal-heavy">
            <p>
              This paper is {size} MB — large enough that loading it inline would stall the
              page. Open it in a new tab or download it instead.
            </p>
            <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="paper-download-btn">
              Open in a new tab
            </a>
          </div>
        ) : (
          <iframe src={paper.pdf} className="paper-modal-iframe" title={paper.title} />
        )}
        <div className="paper-modal-footer">
          <a href={paper.pdf} download className="paper-download-btn">
            Download PDF{size ? ` · ${size} MB` : ''}
          </a>
        </div>
      </div>
    </div>
  );
}

function PaperCard({ paper, onOpen }: { paper: Paper; onOpen: (p: ReadablePaper) => void }) {
  const { pdf } = paper;

  return (
    <article className="paper-card">
      <div className="paper-card-meta">
        <span className="paper-card-course">{paper.course}</span>
        <span className="paper-card-year">{paper.year}</span>
      </div>
      <h3 className="paper-card-title">{paper.title}</h3>
      {paper.coauthors && (
        <p className="paper-card-authors">
          With {paper.coauthors.join(', ')}
          {paper.contribution ? ` · My part: ${paper.contribution.replace(/\.$/, '')}` : ''}
        </p>
      )}
      <p className="paper-card-desc">{paper.description}</p>
      <div className="paper-card-tags">
        {paper.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="paper-card-actions">
        {pdf ? (
          <>
            <button className="paper-read-btn" onClick={() => onOpen({ ...paper, pdf })}>
              Read paper <span className="arw">&rarr;</span>
            </button>
            <a href={pdf} download className="paper-dl-link">
              PDF{paperSizeMB[pdf] ? ` · ${paperSizeMB[pdf]} MB` : ''}
            </a>
          </>
        ) : (
          <p className="paper-card-unavailable">{paper.unavailableNote}</p>
        )}
      </div>
    </article>
  );
}

function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function PostCard({ post }: { post: LinkedInPost }) {
  const [expanded, setExpanded] = useState(false);
  /**
   * Short posts carry an excerpt equal to the whole post. Rendering the toggle
   * for those gives the reader a control that visibly does nothing.
   */
  const hasMore = post.fullText.length > post.excerpt.length;

  return (
    <article className="post-card">
      <div className="post-card-meta">
        <span className="post-card-date">{post.date}</span>
        <span className="post-card-impressions">
          {readingTime(post.fullText)} &middot; {post.impressions.toLocaleString()} impressions
        </span>
      </div>
      <h3 className="post-card-title">{post.title}</h3>
      <div className="post-card-body">
        <p className="post-card-text">{expanded && hasMore ? post.fullText : post.excerpt}</p>
      </div>
      <div className="post-card-footer">
        <div className="post-card-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="post-card-actions">
          {post.link && (
            <a href={post.link.url} target="_blank" rel="noopener noreferrer" className="post-link-btn">
              {post.link.label} &#8599;
            </a>
          )}
          {hasMore && (
            <button className="post-expand-btn" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * Newest first. `iso` is compared as a string, which is correct for
 * zero-padded YYYY-MM-DD and avoids constructing dates in the visitor's
 * timezone for a value that is only ever a sort key.
 */
const byNewest = (a: LinkedInPost, b: LinkedInPost) => b.iso.localeCompare(a.iso);

const essays = linkedinPosts.filter((p) => p.kind === 'essay').sort(byNewest);
const notes = linkedinPosts.filter((p) => p.kind === 'note').sort(byNewest);

export default function Writing() {
  const [active, setActive] = useState<ReadablePaper | null>(null);
  useRevealAll('.reveal');

  return (
    <>
      {active && <PaperModal paper={active} onClose={() => setActive(null)} />}

      <header className="page-header">
        <div className="frame">
          <p className="page-eyebrow">Writing</p>
          <h1 className="page-title">Papers, essays, and notes.</h1>
          <p className="page-desc">
            Course papers, independent research, and technical reports across distributed
            systems, machine learning, quantum computing, and AI policy. Most open in place
            and download directly. Co-authors are named where the work was not solo. Below
            them, essays written in my own voice and notes on other people's work.
          </p>
        </div>
      </header>

      <section>
        <div className="frame" style={{ paddingBottom: '56px' }}>
          <div className="papers-grid">
            {papers.map((paper, i) => (
              <div key={paper.id} className={`reveal reveal-delay-${Math.min(i + 1, 7)}`}>
                <PaperCard paper={paper} onOpen={setActive} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="frame" style={{ padding: '56px 48px 0' }}>
          <div className="section-header reveal">
            <span className="section-label">Essays</span>
            <h2>In my own voice</h2>
            <p>
              Writing on leadership, building, and the road to Stanford as a
              first-generation student. Originally posted on LinkedIn.
            </p>
          </div>

          <div className="posts-list">
            {essays.map((post, i) => (
              <div key={post.id} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="frame" style={{ padding: '56px 48px' }}>
          <div className="section-header reveal">
            <span className="section-label">Notes</span>
            <h2>Field notes</h2>
            <p>
              Reflections on talks, papers, and ideas from the Stanford AI ecosystem,
              originally posted on LinkedIn.
            </p>
          </div>

          <div className="posts-list">
            {notes.map((post, i) => (
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
