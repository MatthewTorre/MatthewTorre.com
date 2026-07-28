import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import WelcomeBanner from './WelcomeBanner';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 600); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function ScrollRestorer() {
  const location = useLocation();

  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll:${location.key}`);
    if (saved) {
      requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)));
    } else {
      window.scrollTo(0, 0);
    }
    return () => {
      sessionStorage.setItem(`scroll:${location.key}`, String(Math.round(window.scrollY)));
    };
  }, [location.key]);

  return null;
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="reading-progress"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScrollRestorer />
      <ReadingProgress />
      <Nav />
      <WelcomeBanner />
      <main className="page">{children}</main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </>
  );
}
