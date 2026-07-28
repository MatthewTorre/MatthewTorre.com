import { useState, useEffect } from 'react';

/**
 * Theme state, seeded from whatever the pre-paint script in index.html
 * already resolved. Reading the attribute rather than recomputing keeps
 * React and that script from disagreeing on the first render.
 */
export function useTheme() {
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    document.getElementById('themeColor')?.setAttribute('content', dark ? '#0c0c0c' : '#ffffff');
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {
      /* private mode — the theme just won't persist */
    }
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
