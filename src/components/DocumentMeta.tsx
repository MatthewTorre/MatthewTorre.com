import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaForPath, SITE_URL } from '../routes';

/**
 * Keeps the tab title, meta description, share preview, and canonical URL in step
 * with the current route. Without this every page shares as the homepage, which is
 * what a link pasted into Slack or LinkedIn actually shows.
 *
 * Mounted once in Layout rather than called from each page, so a new route inherits
 * correct metadata from `routes.ts` with no second edit.
 */
export default function DocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    const url = SITE_URL + (pathname === '/' ? '' : pathname.replace(/\/+$/, ''));

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [pathname]);

  return null;
}

function setMeta(keyAttr: 'name' | 'property', key: string, value: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${keyAttr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(keyAttr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
}
