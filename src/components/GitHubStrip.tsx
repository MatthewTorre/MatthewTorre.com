import { useEffect, useState } from 'react';

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function GitHubStrip() {
  const [weeks, setWeeks] = useState<Day[][]>([]);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/MatthewTorre?y=last')
      .then((r) => r.json())
      .then((json) => {
        const days: Day[] = json.contributions.slice(-182); // last 26 weeks
        const grouped: Day[][] = [];
        for (let i = 0; i < days.length; i += 7) {
          grouped.push(days.slice(i, i + 7));
        }
        setWeeks(grouped);
        // Count only the days actually drawn. `json.total` is keyed by calendar
        // year, so summing it would cover a different span than the grid shows.
        setTotal(days.reduce((n, d) => n + d.count, 0));
      })
      .catch(() => {}); // silent fail — strip just doesn't render
  }, []);

  if (!weeks.length) return null;

  return (
    <div className="gh-strip">
      <div className="frame">
        <div className="gh-strip-header">
          <span className="gh-strip-label">
            {total !== null
              ? `${total.toLocaleString()} contributions in the last 26 weeks`
              : 'GitHub activity'}
          </span>
          <a
            href="https://github.com/MatthewTorre"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-strip-link"
          >
            github.com/MatthewTorre ↗
          </a>
        </div>
        <div className="gh-grid" aria-label="GitHub contribution graph">
          {weeks.map((week, wi) => (
            <div key={wi} className="gh-week">
              {week.map((day) => (
                <div
                  key={day.date}
                  className={`gh-day gh-level-${day.level}`}
                  title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
