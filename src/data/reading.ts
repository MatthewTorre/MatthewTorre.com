export interface ReadingEntry {
  id: string;
  title: string;
  authors: string;
  venue: string;
  /** Year the work was published, not the year it was read. */
  year: string;
  /** Why this one earned a place. One or two sentences, in the first person. */
  note: string;
  url: string;
  /** Local copy, when one is kept. */
  pdf?: string;
}

/**
 * The reading trail behind the interpretability position on the About page.
 *
 * Oldest first: the order is the argument. Every entry is public work, so this
 * list discloses nothing beyond what has been read and why it mattered.
 *
 * Add entries here rather than in the page. api/_prompt.ts reads this module,
 * so anything added is also available to the site's chat assistant.
 */
export const reading: ReadingEntry[] = [
  {
    id: 'cot',
    title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
    authors:
      'Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, Denny Zhou',
    venue: 'NeurIPS',
    year: '2022',
    note: 'The paper that made intermediate reasoning steps a lever rather than a curiosity. It is also where my question starts: the steps improve the answer, which is not the same as the steps being the reason for the answer.',
    url: 'https://arxiv.org/abs/2201.11903',
    pdf: '/papers/reading/cot.pdf',
  },
];
