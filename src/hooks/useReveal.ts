import { useEffect } from 'react';

const REVEAL_OPTIONS = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' };

/**
 * Fades `.reveal` elements in as they enter the viewport.
 *
 * `.reveal` starts at opacity 0 and blurred, so anything the observer never
 * reaches would be stranded invisible. Two guards prevent that: if
 * IntersectionObserver is missing we reveal everything immediately, and
 * `deps` lets a page re-run the query after it renders new content.
 */
export function useRevealAll(selector: string, deps: unknown[] = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, REVEAL_OPTIONS);

    els.forEach((el) => {
      if (!el.classList.contains('in')) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, ...deps]);
}
