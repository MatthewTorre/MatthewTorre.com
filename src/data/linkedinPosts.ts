export interface LinkedInPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  fullText: string;
  impressions: number;
}

export const linkedinPosts: LinkedInPost[] = [
  {
    id: 'jeff-dean-gemini',
    title: '15 Years of ML Progress in 90 Minutes: What Jeff Dean Shared at Stanford',
    date: 'December 2025',
    tags: ['ML Systems', 'Google DeepMind', 'AI'],
    impressions: 1358,
    excerpt: `Jeff Dean was on campus the same week Google DeepMind rolled out Gemini 3, and he basically walked us through the last 15 years of progress in ML that led to this moment. I came away understanding modern AI wasn't just one breakthrough — it was hundreds of them stacking on top of each other across hardware, training systems, and architectures.`,
    fullText: `Jeff Dean was on campus yesterday — the same week Google DeepMind rolled out Gemini 3 — and he basically walked us through the last 15 years of progress in ML that led to this moment.

I came away understanding modern AI wasn't just one breakthrough. It was hundreds of them stacking on top of each other across hardware, training systems, and architectures.

A few things that stand out:

1. Scale + architecture have been the driver since the early 2010s. DistBelief let Google train 200+ replicas asynchronously before GPUs were common. That alone made 15–100× bigger models possible.

2. Unsupervised learning quietly changed everything. Millions of unlabeled YouTube frames led to models that learned "cat detectors" and "face detectors" on their own. That was the early signal for today's self-supervised wave.

3. Embeddings reshaped how machines represent meaning. Jeff highlighted the shift to semantic vector spaces (king − man + woman = queen). That math is the backbone of every LLM today.

4. TPUs were the hardware turning point. Google realized a better speech model would require doubling the entire CPU fleet. TPUs became the only path forward. Efficiency became the differentiator.

5. Transformers changed the field forever. Attention lets models reference all prior states instead of cramming everything into one vector. Less compute, fewer parameters, better results. Everything since has followed that pattern.

6. Sparse MoE is the frontier. Gemini activates ~1–5% of its parameters per token. You get massive capacity without paying the full compute cost.

7. Reinforcement learning is where the real gains show up. Human feedback, model feedback, and verifiable tasks (math proofs, code that compiles) are pushing reasoning way past pretraining alone.

8. Gemini 3 feels like the first true multimodal leap — blueprint→rendering, intermediate visual reasoning, WebDev generation, huge context windows.

9. Google shaped the entire modern ML developer stack. TensorFlow opened the door for large-scale ML inside and outside Google, JAX pushed the frontier of functional ML with insane performance, and even PyTorch's rise benefited from the ecosystem shift TF created. Most of today's ML workflows trace back to ideas Google shipped early.`,
  },
  {
    id: 'cs238-bounded-rationality',
    title: 'Bounded Rationality: My CS238 Project on Decision Fatigue in AI Agents',
    date: 'December 2025',
    tags: ['ML Research', 'Decision Making', 'POMDP'],
    impressions: 6610,
    excerpt: `Just finished my final paper for Stanford's CS238: Decision Making Under Uncertainty — focused on how bounded rationality shapes the way real agents make decisions when they don't have unlimited compute, time, or perfect information. Our key finding: contextual bandits show human-like decision fatigue, while context-free algorithms fail to discover strategic rest patterns.`,
    fullText: `Just finished a fun one this quarter!

For Stanford's CS238: Decision Making Under Uncertainty, I wrote a final paper on how bounded rationality shapes the way real agents make decisions when they don't have unlimited compute, time, or perfect information.

Humans and autonomous agents alike rarely act in a conventionally or mathematically optimal manner because of attention, time, and computational constraints. This project studies how an agent should allocate cognitive effort between low-effort habitual choices, high-effort deliberation, and strategic rest when fatigue accumulates over time.

We built a stochastic decision-making environment with latent fatigue tied to varying task difficulty. There are three action modes (habitual, deliberate, rest) that incur different effort-reward tradeoffs and influence fatigue dynamics. We systematically compared 4 bandit algorithms and 2 POMDP solvers across 50 episodes of 200 timesteps each.

Our key finding: contextual bandits (LinUCB) show human-like decision fatigue, while context-free algorithms fail to discover strategic rest patterns. This framework provides a reproducible testbed for studying computational models of bounded rationality and decision fatigue.

Special thanks to Kim Ngo for her awesome contributions to this project.`,
  },
  {
    id: 'llm-rationality-nlp',
    title: 'Can Language Models Actually Be Rational? Notes from Stanford NLP',
    date: 'December 2025',
    tags: ['LLMs', 'AI Research', 'NLP'],
    impressions: 1882,
    excerpt: `This past week I sat in with members of the Stanford NLP group. We read a paper that asks a question more people in AI should take seriously: can language models count as rational agents? The authors focus on one narrow part of rationality — coherence — not truthfulness in general, but whether a model's "beliefs" actually fit together.`,
    fullText: `This past week, I had the wonderful opportunity to sit in with members of the Stanford NLP group. In this last discussion we read a paper that asks a question more people in AI should take seriously: Can language models actually count as rational agents?

The authors look at one narrow part of rationality: coherence. Not truthfulness in general, but whether a model's "beliefs" actually fit together.

A few points to take away:

1. Pretrained models don't "believe" anything. They're optimized for next-token prediction with no built-in commitment to truth.

2. But once you fine-tune a model for truthfulness or tie it to real-world signals, you give it something belief-like — and now coherence actually matters.

3. The Minimal Assent Connection (MAC) is their way of measuring belief strength. Ask whether p is true and compare the probability of "yes" to "no." That ratio becomes the model's "credence." Very clean idea.

Shoutout to Amir Zur and the Stanford NLP community who have been pushing some really interesting discussions around model behavior and reasoning.

Paper: "Are language models rational? The case of coherence norms and belief revision" — Hofweber, Hase, Stengel-Eskin, Bansal (arXiv:2406.03442)`,
  },
  {
    id: 'pat-gelsinger-leadership',
    title: 'What Pat Gelsinger Taught Me About Leading Through Uncertainty',
    date: 'March 2026',
    tags: ['Tech Leadership', 'Semiconductors', 'Strategy'],
    impressions: 1036,
    excerpt: `Getting to hear from Pat Gelsinger was a rare privilege for anyone who cares about technology, leadership, and meaning at work. What struck me most was how he makes principled decisions when he is only "70% sure" — drawing on four decades of building and shipping technologies like USB and Wi-Fi, and still being willing to act before every variable is de-risked.`,
    fullText: `Getting to hear from Pat Gelsinger yesterday was a rare privilege for anyone who cares about technology, leadership, and meaning at work.

My biggest takeaways:

How he makes principled decisions when he is only "70% sure" — drawing on four decades of building and shipping technologies like USB and Wi-Fi, and still being willing to act before every variable is de-risked.

His strategic, global view of the semiconductor industry — from geopolitics intertwined with supply chains to national competitiveness — and what that means for the next generation of technologists and founders who want to build at global scales.

What technology leadership looks like when you've gone from early Intel employee to CEO, and now chair and investor across frontier companies, without losing the curiosity and urgency of an engineer.

How he integrates faith, values, and ambition in the workplace — refusing to silo them, and instead letting conviction shape how he leads, hires, and makes the hardest calls.`,
  },
  {
    id: 'felicis-aydin-senkut',
    title: 'Asymmetric Risk and the AI Venture Shift: Notes from Aydin Senkut at Stanford GSB',
    date: 'December 2025',
    tags: ['Venture', 'AI', 'Startups'],
    impressions: 4476,
    excerpt: `I had the chance to hear Aydin Senkut speak at the Stanford GSB — Founder of Felicis, 12× Midas List, 10 IPOs, early backer of Shopify, Canva, and Google's first PM. The talk was packed with clarity and honesty about risk, ambition, and the realities of venture. His core thesis: great careers come from taking asymmetric risks early.`,
    fullText: `I had the chance to hear Aydin Senkut speak at the Stanford GSB this week — Founder of Felicis, 12× Midas List, 10 IPOs. Early backer of Shopify, Canva, and Google's first PM. The talk was packed with clarity and honesty about risk, ambition, and the realities of venture.

Here are a few ideas I'm still thinking about:

Great careers come from taking asymmetric risks early. When Aydin joined Google, it was the lowest-paying offer he had — but by far the smartest and most ambitious team.

You need exposure to outliers. You can't calibrate on exceptional founders unless you've been around exceptional people.

Differentiation is the only real edge. His early strategy was simple: find unique angles and double down. Becoming the first ex-Google angel was his shortcut into elite deal flow.

Founder families shouldn't be an afterthought. Felicis contractually commits to voting shares with founders. It's rare, and it builds deep trust between parties.

AI is changing venture in ways that haven't happened before. Companies hitting $100M in revenue in 12 months with 10–20 people is a completely new dynamic — and VCs are watching every move.`,
  },
];
