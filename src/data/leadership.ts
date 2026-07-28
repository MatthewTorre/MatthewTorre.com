/**
 * Leadership is tracked separately from `experience` because the unit is
 * different: an experience entry is a position, a leadership entry is a group
 * of people someone was answerable to. Every `scope` line here states the size
 * of that group, and every figure is one already claimed on the Experience
 * page — nothing is rounded up on the way over.
 */
export interface LeadershipRole {
  org: string;
  role: string;
  /** Omitted where the range is not yet confirmed; see experience.ts. */
  dates?: string;
  /** Who was led and how many, in one line. */
  scope: string;
  logo?: string;
}

export const leadershipRoles: LeadershipRole[] = [
  {
    org: 'Truth Computing',
    role: 'Co-founder, Chief Executive Officer, Chief Technology Officer',
    dates: 'May 2026 – Present',
    scope:
      'Lead a team of twelve building Feynman and the Truth Computing platform, and carry both the company and the technical direction.',
    logo: '/images/logos/truth-computing.png',
  },
  {
    org: 'Stanford Undergraduate Research Association',
    role: 'Research Conference Co-Director',
    dates: 'Oct 2023 – Sep 2024',
    scope:
      'Ran the largest undergraduate research conference at Stanford over 24 weeks: four sub-committees, 15 student interns, and 90+ researchers from 40+ institutions presenting to a keynote panel that included a Nobel Laureate.',
    logo: '/images/logos/sura.jpeg',
  },
  {
    org: 'Stanford Undergraduate Research Association',
    role: 'Professional Development Chair',
    scope:
      'Built the programming that got undergraduates into research: workshops, advising, and the path from interested to placed.',
    logo: '/images/logos/sura.jpeg',
  },
  {
    org: 'Stanford Management Group',
    role: 'Project Manager',
    scope:
      'Led six consultants through an eight-week engagement for an education technology client, holding the team to deliverables through 30+ user interviews and 140+ survey responses.',
    logo: '/images/logos/stanford-marketing.jpeg',
  },
  {
    org: 'Stanford Healthcare Consulting Group',
    role: 'Project Lead',
    scope:
      'Led five consultants on Stanford Health Care’s catheter-associated infection reduction initiative, synthesizing 15+ physician interviews into three evidence-based interventions.',
    logo: '/images/logos/stanford-health.jpeg',
  },
  {
    org: 'Sigma Phi Epsilon',
    role: 'Brother Mentor',
    scope:
      'Mentored incoming members one to one through their first year in the chapter.',
    logo: '/images/logos/sigep.jpeg',
  },
  {
    org: 'Perplexity',
    role: 'Campus Ambassador',
    dates: 'Sep – Dec 2025',
    scope:
      'Stanford campus partner for Perplexity AI, responsible for adoption and community across the Stanford technical community.',
    logo: '/images/logos/perplexity-new.jpeg',
  },
  {
    org: 'Journalismera',
    role: 'Founder and Producer',
    scope:
      'Founded and ran a digital content production business: strategy, client sourcing, scheduling, and four media platforms.',
    logo: '/images/logos/journalismera.jpeg',
  },
];

/*
 * The pre-Stanford record — class rank 1/552, a 4.63 weighted GPA, thirteen
 * high school honors — used to live here and render on the About and Home
 * pages. It came off for three reasons, and it is in git history if any of
 * them stop applying.
 *
 * It identified him too precisely. A district, a county, and a graduating
 * class of 552 name one high school, which is more than a public page needs
 * to give away about where someone grew up.
 *
 * "First Stanford admit in district history" is a superlative about a third
 * party's records that nobody can produce on request, which is the shape of
 * claim that costs the most when it is challenged and returns the least when
 * it is not.
 *
 * And it argued against him. This site is read by clients deciding whether to
 * hand a regulated workflow to a founder. High school standing is the record
 * of a promising student; the pitch is a CEO with shipped systems. The second
 * is undercut by leading with the first.
 */
