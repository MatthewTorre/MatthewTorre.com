import { useState, useEffect } from 'react';

const ITEMS = [
  { icon: '⬡', label: 'Projects', desc: 'Research systems with quantitative results' },
  { icon: '◎', label: 'Writing', desc: 'Course papers and technical reports' },
  { icon: '◈', label: 'Experience', desc: 'Work history and activities' },
  { icon: '◷', label: 'About', desc: 'Background, coursework, and mentors' },
];

export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('welcomed')) {
      const t = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem('welcomed', '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="welcome-overlay" onClick={dismiss}>
      <div className="welcome-modal" onClick={(e) => e.stopPropagation()}>
        <div className="welcome-header">
          <div>
            <h2 className="welcome-title">Matthew Torre</h2>
            <p className="welcome-sub">Stanford CS · AI &amp; Machine Learning</p>
          </div>
          <button className="welcome-close" onClick={dismiss} aria-label="Close">✕</button>
        </div>

        <p className="welcome-intro">
          This site documents my research, engineering work, and technical writing.
          Here's what you'll find:
        </p>

        <div className="welcome-grid">
          {ITEMS.map((item) => (
            <div key={item.label} className="welcome-item">
              <span className="welcome-icon">{item.icon}</span>
              <div>
                <span className="welcome-item-label">{item.label}</span>
                <span className="welcome-item-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="welcome-footer">
          <span className="welcome-tip">
            💬 Ask the chat bubble anything about my background
          </span>
          <button className="welcome-cta" onClick={dismiss}>
            Explore the site →
          </button>
        </div>
      </div>
    </div>
  );
}
