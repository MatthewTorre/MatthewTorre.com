import { useEffect } from 'react';

const REVEAL_OPTIONS = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' };

export function useRevealAll(selector: string, container?: HTMLElement | null) {
  useEffect(() => {
    const root = container ?? document;
    const els = root.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      REVEAL_OPTIONS
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, container]);
}
