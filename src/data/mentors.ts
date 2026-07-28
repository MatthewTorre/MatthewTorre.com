export interface Mentor {
  name: string;
  url: string;
  role: string;
}

/**
 * The two advisors of record. A longer list of people who have taught or
 * advised Matthew reads as borrowed credibility on a personal page; these two
 * are attribution.
 *
 * Also read by api/_prompt.ts, so the chat assistant names the same two.
 */
export const mentors: Mentor[] = [
  {
    name: 'Ellen Vitercik',
    url: 'https://vitercik.github.io/',
    role: 'Assistant Professor, MS&E and CS, Stanford · B.S. and M.S. advisor · Algorithms and machine learning',
  },
  {
    name: 'Chris Gregg',
    url: 'https://web.stanford.edu/~cgregg/chris-gregg/',
    role: 'Senior Lecturer, CS, Stanford · Research advisor and teaching mentor',
  },
];
