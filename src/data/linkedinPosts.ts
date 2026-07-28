/**
 * `essay` is first-person writing that stands on its own. `note` is a
 * reflection on someone else's talk, paper, or idea. They are rendered as
 * separate sections because the second one promises the reader a particular
 * thing — notes from the Stanford AI ecosystem — that the first would break.
 */
export type PostKind = 'essay' | 'note';

export interface LinkedInPost {
  id: string;
  kind: PostKind;
  /** Display label. Month precision, which is all LinkedIn reliably gives. */
  date: string;
  /**
   * Sort key, never displayed. LinkedIn reports a post's age relatively
   * ("1w"), so the day component here is derived from that and is approximate
   * to within a few days. Nothing user-facing depends on it: `date` stays at
   * month precision, which the derivation cannot get wrong. Ties keep their
   * array order, since Array.prototype.sort is stable.
   */
  iso: string;
  title: string;
  tags: string[];
  excerpt: string;
  fullText: string;
  impressions: number;
  link?: { label: string; url: string };
}

export const linkedinPosts: LinkedInPost[] = [
  {
    id: 'tech-genius',
    kind: 'essay',
    title: "What “Tech Genius” Leaves Out: On Imposter Syndrome and Untangling Worth From Work",
    date: 'July 2026',
    iso: '2026-07-21',
    tags: ['First-Generation', 'Imposter Syndrome', 'Stanford'],
    impressions: 3302,
    excerpt: `Tech Genius are two words I've heard thrown at me the last few weeks. I don't think that is the case at all. I had a 1220 SAT in high school. I got a 1 on my AP Calculus AB exam. And before stepping onto Stanford's campus, I had never written a single line of code in my life.`,
    fullText: `Tech Genius are two words I've heard thrown at me the last few weeks. "Matthew has an IQ of 160-180", "He is on a different planet in terms of AI", "You are the next Elon Musk". "I can't even understand half the things you say". "You must be so proud of yourself".

I don't think that is the case at all.

I had a 1220 SAT in high school.
I got a 1 on my AP Calculus AB exam. And before stepping onto Stanford's campus, I had never written a single line of code in my life.

By every standard higher-education metric, I wasn't supposed to make it here. I didn't have the pedigree, the early tech camps, or the generational blueprint. I failed my first midterms and was scared I was going to drop out. I was a first-generation low income student working 20-30 hours a week just to fix up my car and keep money in my pocket for a rainy day. Sometimes I would only sleep 3-4 hours, others I would pull all nighters, isolated, alone, away from friends, and away from family and anything that made me feel at home. I did this everyday and would tell no one. Because the happiness and service that I could provide others always meant more to me than my personal wellbeing. I dealt with immense pressure everyday of my life to this point. Lots of grief, loss, and pain.

When I got to Stanford CS, the imposter syndrome did not just knock on the door, it lived with me. I was sitting in lecture halls next to peers who had been coding since elementary school, while I was still trying to understand the basic alphabet of computer science. I had to put in double the time just to survive. I knew even one bad week could kill it all. That one slip up that would kill any potential for social stratification.

There were so many nights I wanted to quit. Times where I had less than $100 to my name, trying to balance my family's survival back home with the brutal pace of work, research, and coursework at Stanford.

But I didn't quit.
Today, I'm a Stanford CS BS/MS candidate. I'm the Co-founder of Truth Computing. And we built Feynman; an AI tool designed explicitly to break down advanced coursework into K-12 lessons, because no kid should be gatekept from their potential just because they don't have a parent who can teach them calculus at the kitchen table.

But if I'm being completely honest, the hardest part of this journey wasn't the code or the math. It was untangling my worth from my work.
When you fight that hard to prove you belong, you accidentally build a trap where you only feel loved when you are useful. You start believing you are only worth the titles you carry or the infrastructure you build.

To anyone out there who is starting a new journey or with their own mind: You are not a machine. Your human worth is not tied to your output, your GPA, or your funding rounds.

I'm proud of what we are building at Truth Computing. But I'm learning to be prouder of the resilience it took to get here.

Ideas over hierarchy. Community over credentials. Let's keep building.`,
  },
  {
    id: 'ceo-humility',
    kind: 'essay',
    title: 'Your Job as CEO Is to Make Your Team More Capable Than You',
    date: 'July 2026',
    iso: '2026-07-21',
    tags: ['Leadership', 'Company Building', 'Truth Computing'],
    impressions: 731,
    excerpt: `A great leader is there with their team no matter what. They are not perfect and they should never be the smartest. Your whole job as a CEO is to make your team MORE capable than yourself. This takes humility and absence of ego.`,
    fullText: `A great leader is there with their team no matter what. Through the bad times and through the good times, they are strong. They are not perfect and they should never be the smartest. Your whole job as a CEO is to make your team MORE capable than yourself. This takes humility and absence of ego. My team at Truth Computing believes that and they are learning and executing at a rate I haven't seen before.

Truth Computing is not just a business to me, it's a philosophy that I believe in very ardently. Jobs did it: he believed in personal computing and knew it would be difficult to convince people of what this new technology is capable of. But in spite of that challenge, he achieved and brought computing to the world, undeniably and forever. His leadership is something I admire but I know he had his faults; short-tempered, apathetic, and overbearing. I learn about their weaknesses so I can understand their challenge and see how I can improve upon the principles they laid out. I learn from the best and combine the best traits and qualities of the leaders and technologists I admire into a cohesive whole

I believe in what I am fighting for. I want to usher in a new era where people are less scared of technology. Where they can use it to empower themselves. I was highly dissatisfied with the leadership in the Silicon Valley. My outlook on the world is that it is filled with communities with people who want to give their kids a better future. I don't see a bright future for generations ahead without a change. It is on the leadership in technology and especially those from Stanford to carry forward this mission of improvement of the human condition.`,
  },
  {
    id: 'first-car',
    kind: 'essay',
    title: 'A 2002 Mustang, a Junkyard, and What Persistence Actually Costs',
    date: 'July 2026',
    iso: '2026-07-14',
    tags: ['Resourcefulness', 'Entrepreneurship', 'First-Generation'],
    impressions: 1161,
    excerpt: `At the beginning of my journey, I was working to buy my first car — 20-30 hours a week alongside a full course load and wrestling. I ended up with an old 2002 Mustang New Edge. It had a lot of problems, but I took pride fixing it up with my dad with parts from the junkyard.`,
    fullText: `At the beginning of my journey, I was working to buy my first car. I worked 20-30 hours a week, whilst managing a full course load and being a committed wrestler. I ended up buying an old 2002 Mustang New Edge. It had a lot of problems but I took pride fixing it up with my dad with parts from the junkyard. We worked on that car together every weekend. It was never much, but I was so proud that this car was mine and I earned it.

I've always had to be resourceful. During college, I had no more than $100 dollars to my name at any time. I was working to support myself and support my family back home. Every internship and job I worked: I saved. I did everything I could to make this dream possible. One thing persisted in my head, many times I was ready to quit: that if I put in my time, that I would live the rest of my life doing what I love. By the end of Stanford, I put in double the amount of time needed to become a master at my craft. I want other entrepreneurs on this journey to know that nothing else matters except your persistence and your willingness to fight everyday for what you believe in. For me, I plan to empower my community with the necessary resources and support, for the rest of my life.`,
  },
  {
    id: 'max-nikias',
    kind: 'note',
    title: 'On Institutions That Last: A Conversation With Max Nikias',
    date: 'July 2026',
    iso: '2026-07-25',
    tags: ['AI Ethics', 'Institutions', 'Leadership'],
    impressions: 816,
    excerpt: `Had a very impassioned discussion with Chrysostomos L. "Max" Nikias, former president of USC. He is a leading scholar on AI ethics and one of the most intelligent men I have run into on this journey.`,
    fullText: `Had a very impassioned discussion with Chrysostomos L Max Nikias, former president of USC. He is a leading scholar on AI ethics and one of the most intelligent men I have run into on this Journey. Excited to continue building relationships with the men who built respected institutions that last.`,
  },
  {
    id: 'jeff-dean-gemini',
    kind: 'note',
    title: '15 Years of ML Progress in 90 Minutes: What Jeff Dean Shared at Stanford',
    date: 'December 2025',
    iso: '2025-12-01',
    tags: ['ML Systems', 'Google DeepMind', 'AI'],
    impressions: 1358,
    link: { label: 'View on LinkedIn', url: 'https://www.linkedin.com/in/mtorrestanford/recent-activity/all/' },
    excerpt: `Jeff Dean was on campus the same week Google DeepMind rolled out Gemini 3, and he basically walked us through the last 15 years of progress in ML that led to this moment. I came away understanding modern AI wasn't just one breakthrough. It was hundreds of them stacking on top of each other across hardware, training systems, and architectures.`,
    fullText: `Jeff Dean was on campus yesterday, the same week Google DeepMind rolled out Gemini 3, and he basically walked us through the last 15 years of progress in ML that led to this moment.

I came away understanding modern AI wasn't just one breakthrough. It was hundreds of them stacking on top of each other across hardware, training systems, and architectures.

A few things that stand out:

1. Scale + architecture have been the driver since the early 2010s. DistBelief let Google train 200+ replicas asynchronously before GPUs were common. That alone made 15–100× bigger models possible.

2. Unsupervised learning quietly changed everything. Millions of unlabeled YouTube frames led to models that learned "cat detectors" and "face detectors" on their own. That was the early signal for today's self-supervised wave.

3. Embeddings reshaped how machines represent meaning. Jeff highlighted the shift to semantic vector spaces (king − man + woman = queen). That math is the backbone of every LLM today.

4. TPUs were the hardware turning point. Google realized a better speech model would require doubling the entire CPU fleet. TPUs became the only path forward. Efficiency became the differentiator.

5. Transformers changed the field forever. Attention lets models reference all prior states instead of cramming everything into one vector. Less compute, fewer parameters, better results. Everything since has followed that pattern.

6. Sparse MoE is the frontier. Gemini activates ~1–5% of its parameters per token. You get massive capacity without paying the full compute cost.

7. Reinforcement learning is where the real gains show up. Human feedback, model feedback, and verifiable tasks (math proofs, code that compiles) are pushing reasoning way past pretraining alone.

8. Gemini 3 feels like the first true multimodal leap: blueprint to rendering, intermediate visual reasoning, WebDev generation, huge context windows.

9. Google shaped the entire modern ML developer stack. TensorFlow opened the door for large-scale ML inside and outside Google, JAX pushed the frontier of functional ML with insane performance, and even PyTorch's rise benefited from the ecosystem shift TF created. Most of today's ML workflows trace back to ideas Google shipped early.`,
  },
  {
    id: 'cs238-bounded-rationality',
    kind: 'note',
    title: 'Bounded Rationality: My CS238 Project on Decision Fatigue in AI Agents',
    date: 'December 2025',
    iso: '2025-12-01',
    tags: ['ML Research', 'Decision Making', 'POMDP'],
    impressions: 6610,
    link: { label: 'View on LinkedIn', url: 'https://www.linkedin.com/in/mtorrestanford/recent-activity/all/' },
    excerpt: `Just finished my final paper for Stanford's CS238: Decision Making Under Uncertainty, focused on how bounded rationality shapes the way real agents make decisions when they don't have unlimited compute, time, or perfect information. Our key finding: contextual bandits show human-like decision fatigue, while context-free algorithms keep deliberating until fatigue saturates.`,
    fullText: `Just finished a fun one this quarter!

For Stanford's CS238: Decision Making Under Uncertainty, I wrote a final paper on how bounded rationality shapes the way real agents make decisions when they don't have unlimited compute, time, or perfect information.

Humans and autonomous agents alike rarely act in a conventionally or mathematically optimal manner because of attention, time, and computational constraints. This project studies how an agent should allocate cognitive effort between low-effort habitual choices, high-effort deliberation, and strategic rest when fatigue accumulates over time.

We built a stochastic decision-making environment with latent fatigue tied to varying task difficulty. There are two action modes, habitual and deliberate, that incur different effort-reward tradeoffs and influence fatigue dynamics. We compared four bandit policies against simple baselines, including rest-heavy schedules, across 25 episodes of horizon 150.

Our key finding: contextual bandits (LinUCB) show human-like decision fatigue, while context-free algorithms keep deliberating until fatigue saturates. Full POMDP solvers are the planned next step rather than something we ran. This framework provides a reproducible testbed for studying computational models of bounded rationality and decision fatigue.

Special thanks to Kim Ngo for her awesome contributions to this project.`,
  },
  {
    id: 'llm-rationality-nlp',
    kind: 'note',
    title: 'Can Language Models Actually Be Rational? Notes from Stanford NLP',
    date: 'December 2025',
    iso: '2025-12-01',
    tags: ['LLMs', 'AI Research', 'NLP'],
    impressions: 1882,
    link: { label: 'Read the paper', url: 'https://arxiv.org/abs/2406.03442' },
    excerpt: `This past week I sat in with members of the Stanford NLP group. We read a paper that asks a question more people in AI should take seriously: can language models count as rational agents? The authors focus on one narrow part of rationality, coherence, not truthfulness in general, but whether a model's beliefs actually fit together.`,
    fullText: `This past week, I had the wonderful opportunity to sit in with members of the Stanford NLP group. In this last discussion we read a paper that asks a question more people in AI should take seriously: Can language models actually count as rational agents?

The authors look at one narrow part of rationality: coherence. Not truthfulness in general, but whether a model's "beliefs" actually fit together.

A few points to take away:

1. Pretrained models don't "believe" anything. They're optimized for next-token prediction with no built-in commitment to truth.

2. But once you fine-tune a model for truthfulness or tie it to real-world signals, you give it something belief-like, and now coherence actually matters.

3. The Minimal Assent Connection (MAC) is their way of measuring belief strength. Ask whether p is true and compare the probability of "yes" to "no." That ratio becomes the model's "credence." Very clean idea.

Shoutout to Amir Zur and the Stanford NLP community who have been pushing some really interesting discussions around model behavior and reasoning.

Paper: "Are language models rational? The case of coherence norms and belief revision" by Hofweber, Hase, Stengel-Eskin, Bansal (arXiv:2406.03442)`,
  },
  {
    id: 'pat-gelsinger-leadership',
    kind: 'note',
    title: 'What Pat Gelsinger Taught Me About Leading Through Uncertainty',
    date: 'March 2026',
    iso: '2026-03-01',
    tags: ['Tech Leadership', 'Semiconductors', 'Strategy'],
    impressions: 1036,
    link: { label: 'View on LinkedIn', url: 'https://www.linkedin.com/in/mtorrestanford/recent-activity/all/' },
    excerpt: `Getting to hear from Pat Gelsinger was a rare privilege for anyone who cares about technology, leadership, and meaning at work. What struck me most was how he makes principled decisions when he is only 70% sure, drawing on four decades of building and shipping technologies like USB and Wi-Fi, and still being willing to act before every variable is de-risked.`,
    fullText: `Getting to hear from Pat Gelsinger yesterday was a rare privilege for anyone who cares about technology, leadership, and meaning at work.

My biggest takeaways:

How he makes principled decisions when he is only "70% sure," drawing on four decades of building and shipping technologies like USB and Wi-Fi, and still being willing to act before every variable is de-risked.

His strategic, global view of the semiconductor industry, from geopolitics intertwined with supply chains to national competitiveness, and what that means for the next generation of technologists and founders who want to build at global scales.

What technology leadership looks like when you have gone from early Intel employee to CEO, and now chair and investor across frontier companies, without losing the curiosity and urgency of an engineer.

How he integrates faith, values, and ambition in the workplace, refusing to silo them, and instead letting conviction shape how he leads, hires, and makes the hardest calls.`,
  },
  {
    id: 'felicis-aydin-senkut',
    kind: 'note',
    title: 'Asymmetric Risk and the AI Venture Shift: Notes from Aydin Senkut at Stanford GSB',
    date: 'December 2025',
    iso: '2025-12-01',
    tags: ['Venture', 'AI', 'Startups'],
    impressions: 4476,
    link: { label: 'View post', url: 'https://www.instagram.com/p/DRQ6SW9Edny/' },
    excerpt: `I had the chance to hear Aydin Senkut speak at the Stanford GSB. Founder of Felicis, 12x Midas List, 10 IPOs, early backer of Shopify, Canva, and Google's first PM. The talk was packed with clarity and honesty about risk, ambition, and the realities of venture. His core thesis: great careers come from taking asymmetric risks early.`,
    fullText: `I had the chance to hear Aydin Senkut speak at the Stanford GSB this week: Founder of Felicis, 12x Midas List, 10 IPOs. Early backer of Shopify, Canva, and Google's first PM. The talk was packed with clarity and honesty about risk, ambition, and the realities of venture.

Here are a few ideas I'm still thinking about:

Great careers come from taking asymmetric risks early. When Aydin joined Google, it was the lowest-paying offer he had but by far the smartest and most ambitious team.

You need exposure to outliers. You can't calibrate on exceptional founders unless you've been around exceptional people.

Differentiation is the only real edge. His early strategy was simple: find unique angles and double down. Becoming the first ex-Google angel was his shortcut into elite deal flow.

Founder families shouldn't be an afterthought. Felicis contractually commits to voting shares with founders. It's rare, and it builds deep trust between parties.

AI is changing venture in ways that haven't happened before. Companies hitting $100M in revenue in 12 months with 10–20 people is a completely new dynamic, and VCs are watching every move.`,
  },
];
