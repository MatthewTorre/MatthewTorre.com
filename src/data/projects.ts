/**
 * `text` is rendered as text, never as markup. An `html` escape hatch used to
 * exist here for one subscript; it was removed so the card has no raw-HTML
 * sink at all rather than a disused one waiting to be reused carelessly.
 */
export interface ResultItem {
  text: string;
  metric?: string;
}

export interface ProjectTldr {
  summary: string;
  signals: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  oneliner: string;
  problem: string;
  /**
   * The setting the work was done in. Omitted where that is not settled — the
   * badge then does not render, which is quieter and more credible than a
   * card telling a visiting client that its own author has not filled it in.
   */
  context?: string;
  year: string;
  results: ResultItem[];
  tags: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
  tldr: ProjectTldr;
  /** Named when the work was not solo. */
  coauthors?: string[];
  /** What Matthew specifically owned on a team project. */
  contribution?: string;
  /** Caveats about provenance, scope, or what is not published. */
  note?: string;
}

export const projects: Project[] = [
  {
    id: 'truth-computing',
    title: 'Truth Computing',
    oneliner: "Approval-gated infrastructure for automated client communication in professional settings, where the message goes out under a person's name.",
    problem: 'What has to be true before a professional will let an AI system speak to their client in their name?',
    context: 'Co-founder and CEO',
    year: '2025–2026',
    results: [
      {
        text: 'Designed an approval-gated architecture for high-consequence automated communication: the system prepares the communication, and a human approval step stands between the model and the client',
      },
      {
        text: 'Model output is verified against the source documents it draws from before delivery rather than checked after the fact',
      },
      {
        text: 'Applied the same architecture to a second, unrelated vertical, which tested whether the approval and verification structure was general or specific to the first domain',
      },
      {
        text: 'Wrote an engineering testing standard organized around claim-level invariants, so tests assert properties that must hold of what the system claims rather than spot-checking sampled outputs',
      },
    ],
    tags: ['Applied AI', 'Verification', 'Human Approval', 'Product', 'Company Building'],
    links: [
      { label: 'truth-computing.com', url: 'https://www.truth-computing.com/' },
    ],
    note: 'The work is proprietary and not published here. This card stays at case-study altitude on purpose: no architecture detail, no thresholds, no customer names, and no figures. The company site is the place to go for anything further.',
    tldr: {
      summary: "Infrastructure for letting an AI system communicate with a professional's clients under that professional's name, built around human approval before delivery and verification of output against source documents.",
      signals: [
        'Treated approval as architecture rather than as a review habit, so nothing reaches a client without a person clearing it',
        'Verification runs against the source documents before delivery, which is where a wrong claim is still cheap to catch',
        'Ported the same structure to a second, unrelated vertical to test whether it generalized',
        'Wrote a testing standard around claim-level invariants instead of output sampling',
      ],
      skills: ['Systems Architecture', 'Applied AI', 'Verification Design', 'Product Leadership', 'Company Building'],
    },
  },
  {
    id: 'invariant',
    title: 'Invariant',
    oneliner: 'Domain-agnostic Monte Carlo simulation platform for probabilistic operational planning; pure Python, zero external dependencies.',
    problem: 'How can probabilistic operational planning be made rigorous, reproducible, and empirically grounded at the level of a statistical experiment?',
    context: 'Founder and Lead Engineer',
    year: '2025',
    featured: true,
    results: [
      {
        text: 'Discrete-event simulation engine using min-heap priority queue; supports task DAGs with stochastic durations, resource parallelism caps, WIP limits, review queues, and context-switch penalties',
      },
      {
        text: 'Five parametric duration families (constant, normal, lognormal, uniform, triangular); lognormal log-space parameters derived via moment matching: ',
        metric: 'mu = log(mean) - sigma^2/2',
      },
      {
        text: 'Monte Carlo harness: N in [10, 10,000] simulations per scenario; ',
        metric: 'P10/P50/P90 with bootstrap confidence intervals on all percentile estimates',
      },
      {
        text: "Variance reduction via Common Random Numbers (CRN) across policy comparisons; Cohen's d effect-size filtering and bootstrap CI overlap test suppress spurious lever recommendations",
      },
      {
        text: 'Empirical calibration: GitHub REST API and Linear GraphQL API pipeline fits lognormal distributions to observed PR/issue cycle times, grouped by label and size category',
      },
      {
        text: '9-file pytest suite; deterministic Q&A router (zero LLM calls) maps natural-language queries to traceable computations over simulation outputs',
      },
    ],
    tags: ['Monte Carlo', 'Python', 'Statistical Inference', 'Bootstrap CI', 'Discrete-Event Simulation', 'Empirical Calibration', 'CRN'],
    links: [],
    note: 'The source repository for this project is not currently public, so the figures above cannot be checked against an artifact from here.',
    tldr: {
      summary: 'Built a Monte Carlo simulation engine in pure Python — no external dependencies. Rigorous statistical methodology throughout: bootstrap confidence intervals, variance reduction, and empirically calibrated distributions from real API data.',
      signals: [
        'Designed a complete discrete-event engine from scratch: min-heap scheduler, DAG task graphs, 5 distribution families with moment-matched parameters',
        "Applied bootstrap CIs on all P10/P50/P90 estimates; CRN variance reduction; Cohen's d + CI overlap to suppress spurious results",
        'Calibration pipeline pulls real cycle-time data from GitHub and Linear APIs to fit distributions — no hand-specified priors',
        'Deterministic Q&A router maps natural-language queries to traceable computations over simulation outputs',
      ],
      skills: ['Systems Design', 'Statistical Rigor', 'Monte Carlo Methods', 'Bootstrap CI', 'API Integration', 'Pure Python'],
    },
  },
  {
    id: 'cs224r',
    title: 'RL Fine-Tuning of Language Models',
    oneliner: 'SFT, IPO, and online RLOO on a verifier-checked arithmetic reasoning task, extended with an Elo-rated curriculum over training prompts.',
    problem: 'In verifier-based RL fine-tuning, most early rollouts earn zero reward. Does ordering training prompts by measured difficulty recover more signal per step than sampling them uniformly?',
    context: 'Deep Reinforcement Learning',
    year: '2025',
    coauthors: ['Donnie Raymond'],
    contribution: 'the SFT training pipeline and the design and implementation of the Elo-based curriculum sampler for RLOO',
    results: [
      {
        text: 'Fine-tuned Qwen 2.5 0.5B on the Countdown arithmetic task across three post-training methods — supervised fine-tuning, IPO preference optimization, and online RLOO — scored by a rule-based verifier that checks formatting, single use of each provided number, and arithmetic equality with the target',
      },
      {
        text: 'The extension replaces uniform prompt sampling in RLOO with an Elo curriculum: every training prompt carries its own rating and the agent carries one moving rating, updated from the fraction of a sampled rollout group that solved the prompt. The verifier, rollout generation, and RLOO loss are left unchanged, which isolates the effect of prompt ordering from everything else',
      },
      {
        text: 'SFT checkpoint evaluated on 50 held-out Countdown prompts at 16 samples each, 800 rollouts in total: ',
        metric: 'pass@1 0.36, pass@8 0.68, pass@16 0.78',
      },
      {
        text: 'Across those 800 rollouts, sample-level exact correctness was 0.311 and the mean verifier score was 0.371, so the pass@16 figure reflects sampling breadth rather than per-attempt reliability',
      },
    ],
    tags: ['RLOO', 'IPO', 'Curriculum Learning', 'Elo Rating', 'Qwen 2.5', 'PyTorch', 'Verifier-Based Reward', 'LLM Post-Training'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/RL-Fine-Tuning-of-Language-Models-Torre-Raymond' },
    ],
    note: 'The repository holds the proposal, the SFT milestone write-up, and per-checkpoint evaluation outputs for the SFT baseline, IPO, uniform RLOO, and the curriculum runs. It carries no final write-up of the curriculum comparison, so the pass@k figures above are the SFT baseline and the curriculum result is not stated here.',
    tldr: {
      summary: 'Post-trained a 0.5B language model on a verifier-checked arithmetic task through SFT, IPO, and online RLOO, then replaced uniform prompt sampling with an Elo-rated difficulty curriculum to test whether ordering the data improves sample efficiency.',
      signals: [
        'Built the full post-training stack — SFT, IPO, and online RLOO against a rule-based verifier — on Qwen 2.5 0.5B',
        'Designed the extension to change only the sampling distribution, holding verifier, rollouts, and loss fixed so the comparison isolates data ordering',
        'Rated prompts and the agent on a shared Elo scale updated from group solve fraction, so difficulty is measured against the current policy rather than assigned by hand',
        'SFT baseline reported at pass@1 0.36 and pass@16 0.78 over 800 rollouts, with per-attempt correctness stated alongside it',
      ],
      skills: ['Reinforcement Learning', 'LLM Post-Training', 'RLOO', 'Curriculum Design', 'PyTorch', 'Experimental Control'],
    },
  },
  {
    id: 'cs238',
    title: 'Cognitive Effort Allocation Under Bounded Rationality',
    oneliner: 'A POMDP testbed for decision fatigue, comparing bandit policies on how they trade deliberation against accumulated effort.',
    problem: 'How should an agent allocate cognitive effort between low-effort habitual choices and high-effort deliberation when fatigue accumulates over a time horizon?',
    context: 'Decision Making Under Uncertainty',
    year: '2025',
    coauthors: ['Kim Ngo'],
    results: [
      {
        text: 'Built a stochastic decision-making environment with a latent fatigue state tied to varying task difficulty; two action modes (habitual and deliberate) carry different effort-reward tradeoffs, and each mode feeds back into fatigue',
      },
      {
        text: 'Compared four bandit policies — epsilon-greedy, LinUCB, Thompson Sampling, and UCB — logging reward, fatigue, and efficiency trajectories across episodes of roughly 140 time steps',
      },
      {
        text: 'Efficiency (reward per unit effort) separated the policies: Thompson Sampling converged near 1.9, LinUCB near 1.7, and epsilon-greedy settled around 1.5',
      },
      {
        text: 'Epsilon-greedy drove fatigue to saturation near 1.0, indicating over-deliberation without recovery; LinUCB stabilized slightly below saturation, reflecting more balanced action selection',
      },
      {
        text: 'Limitations stated in the report rather than omitted: a minimal belief representation with no full particle filter, binary task difficulty, and no explicit rest or delegation actions',
      },
    ],
    tags: ['POMDP', 'Contextual Bandits', 'LinUCB', 'Thompson Sampling', 'Python', 'Decision Theory', 'Behavioral Modeling'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/cs238_final' },
      { label: 'Paper', url: '/papers/bounded-rationality.pdf' },
    ],
    tldr: {
      summary: 'Modeled decision fatigue as a partially observable environment and compared four bandit policies on how efficiently each spends effort as fatigue accumulates.',
      signals: [
        'Built the environment from scratch: latent fatigue state, varying task difficulty, and habitual versus deliberate action modes with distinct effort costs',
        'Compared epsilon-greedy, LinUCB, Thompson Sampling, and UCB on reward, fatigue, and efficiency — Thompson Sampling held the highest efficiency near 1.9',
        'Named the limits plainly in the write-up: no particle filter, binary difficulty, and no rest action, each listed as future work',
      ],
      skills: ['Reinforcement Learning', 'POMDP Theory', 'Contextual Bandits', 'Experimental Design', 'Behavioral Modeling', 'Python'],
    },
  },
  {
    id: 'cs244c',
    title: 'Distributed Rate Limiter: Flow Proportional Share',
    oneliner: 'Full C++ replication of Cloud Control distributed rate limiting (Raghavan et al., SIGCOMM 2007), with analysis of convergence failure modes.',
    problem: 'Can the FPS and GRD algorithms from Raghavan et al. be faithfully reproduced in C++, and what implementation gaps does replication expose?',
    context: 'Advanced Networking and Distributed Systems',
    year: '2025',
    coauthors: ['Amy Chang', 'Andy Wang'],
    results: [
      {
        text: 'Reimplemented all four algorithms in C++: Central Token Bucket (CTB), Global Token Bucket (GTB), Global Random Drop (GRD), Flow Proportional Share (FPS); gossip via UDP datagrams; Redis-based peer discovery; NFQUEUE packet verdicts',
      },
      {
        text: "Reproduced the paper's Figure 3 setup under Mininet: a 10 Mbps global limit across two relays, seven unbottlenecked flows to relay 1 and three to relay 2, at 40 ms inter-relay RTT",
      },
      {
        text: 'FPS converged to ',
        metric: '6.2 Mbps (Relay 1) and 3.6 Mbps (Relay 2)',
      },
      {
        text: 'GRD initial overshoot to ',
        metric: '~20 Mbps',
      },
      {
        text: 'GRD stabilization required EWMA smoothing (alpha=0.3), early-drop at 90% of limit, and a 50% more aggressive drop rate; gossip lag identified as root cause of oscillation via convergence timeline analysis',
      },
      {
        text: 'GRD achieved better per-flow Jain fairness than FPS, matching the paper; FPS achieved smoother convergence with a more stable inter-limiter split',
      },
      {
        text: 'Gossip scalability: branching factor 2 gives O(log N) convergence; 1,000 relays converge in ~10 rounds at 100ms each',
      },
    ],
    tags: ['C++', 'Distributed Systems', 'Rate Limiting', 'FPS', 'GRD', 'Mininet', 'Gossip Protocol', 'NFQUEUE', 'Replication Study'],
    links: [
      { label: 'Paper', url: '/papers/distributed-rate-limiter.pdf' },
    ],
    tldr: {
      summary: 'Replicated a SIGCOMM 2007 distributed rate-limiting paper in C++ end-to-end — real UDP gossip, Redis peer discovery, kernel-level packet verdicts. Diagnosed why GRD oscillated and fixed it.',
      signals: [
        'Implemented all 4 algorithms from the paper with production-level networking: UDP gossip, Redis, NFQUEUE packet verdicts in Linux',
        "FPS converged correctly to 6.2/3.6 Mbps; traced GRD's ~20 Mbps overshoot to gossip lag via convergence timeline analysis",
        'Fixed oscillation with EWMA smoothing (α=0.3) and early-drop at 90% — understood the paper deeply enough to improve on it',
      ],
      skills: ['C++', 'Distributed Systems', 'Network Protocols', 'Root Cause Analysis', 'Replication Study', 'Linux Networking'],
    },
  },
  {
    id: 'cs131',
    title: 'Transfer Learning for Mars Surface Image Classification',
    oneliner: 'VGG-16 fine-tuned on NASA MSL Curiosity rover imagery; ablation study on handcrafted vs. learned features.',
    problem: 'Does incorporating handcrafted keypoint features (SIFT, ORB) improve or constrain learned representations of a pre-trained CNN for out-of-domain planetary imagery?',
    context: 'Computer Vision',
    year: '2025',
    results: [
      {
        text: 'VGG-16 (ImageNet pre-trained), custom classifier head: 25,088 -> 1,024 -> 256 -> 25 classes; dataset: 3,746 training images, 1,640 validation images across 25 NASA MSL Curiosity surface and instrument classes',
      },
      {
        text: 'Grid search across lr in {0.001, 0.0005, 0.0001}, dropout in {0.5, 0.6, 0.7}, batch in {16, 32, 64}; best config: lr=0.0005, dropout=0.7, batch=32, weight decay=1e-4',
      },
      {
        text: 'Results: 91.6% training accuracy, 74.3% validation accuracy, ',
        metric: '63.6% test accuracy',
      },
      {
        text: 'SIFT: 413 keypoints; ORB: 379 keypoints; both converted to heat-map channels concatenated with RGB',
      },
      {
        text: 'Ablation finding: handcrafted feature channels constrained VGG-16 representations; CNN-only outperformed feature-augmented architecture',
      },
    ],
    tags: ['VGG-16', 'Transfer Learning', 'SIFT', 'ORB', 'CNNs', 'PyTorch', 'Ablation Study', 'Computer Vision'],
    links: [],
    note: 'Neither the report nor the source for this project is published here, so the figures above cannot be checked against an artifact.',
    tldr: {
      summary: 'Fine-tuned VGG-16 on out-of-domain NASA rover imagery. The ablation finding is the result: adding SIFT and ORB keypoint channels hurt performance, showing handcrafted features constrain learned representations rather than augmenting them.',
      signals: [
        'Grid search across 27 hyperparameter configs (lr × dropout × batch size); systematic, not guessed',
        'Ablation study: CNN-only outperformed feature-augmented architecture — clean negative result with an interpretable mechanism',
        'Demonstrates transfer learning judgment: knowing when pre-trained features are sufficient and when additions hurt',
      ],
      skills: ['Computer Vision', 'Transfer Learning', 'Ablation Studies', 'PyTorch', 'VGG-16', 'Hyperparameter Search'],
    },
  },
  {
    id: 'cs230',
    title: 'ProdPrepAI: Adaptive Interview Evaluation via BERT and Deep RL',
    oneliner: 'BERT multi-label classifier feeding a reinforcement learning agent that chooses adaptive follow-ups during PM interview practice.',
    problem: 'Can a language classifier and a reinforcement learning agent be combined to produce adaptive, multi-dimensional evaluation of open-ended interview responses?',
    context: 'Deep Learning',
    year: '2024',
    coauthors: ['Tanaya Yadav', 'Arpit Ranasaria'],
    contribution: 'model fine-tuning, hyperparameter optimization, research, and report writing',
    results: [
      {
        text: 'BERT fine-tuned for 4-head multi-label classification across clarity, completeness, product thinking, and feasibility on a 1-5 scale',
      },
      {
        text: 'Per-label F1: completeness 0.859, product thinking 0.855, clarity 0.827, feasibility 0.766',
      },
      {
        text: 'The RL agent (Stable-Baselines3) takes the BERT embedding plus the four classifier scores as state and selects follow-up actions such as asking for details, reframing, or moving on; mean episode reward rose from ',
        metric: '-34.7 at episode 4 to 41.3 at episode 72',
      },
      {
        text: 'Agent F1 = 0.749; the classifier predicted extreme scores (1 and 5) reliably and struggled with intermediate labels (3 and 4), which the report attributes to overlapping feature representations and limited training data',
      },
    ],
    tags: ['BERT', 'Multi-Label Classification', 'PyTorch', 'Stable-Baselines3', 'NLP', 'Reinforcement Learning'],
    links: [
      { label: 'Paper', url: '/papers/prodprepai.pdf' },
    ],
    tldr: {
      summary: 'A fine-tuned BERT classifier scores interview answers on four dimensions, and a reinforcement learning agent uses those scores to decide what to ask next. Two models, one system.',
      signals: [
        'BERT fine-tuned for 4-head multi-label classification; F1 from 0.766 to 0.859 across the four dimensions',
        'Classifier output feeds the agent as state, so language understanding drives the follow-up decision',
        'Report is explicit about where the model is weak: intermediate scores confuse it, and the training set was small',
      ],
      skills: ['NLP', 'BERT Fine-tuning', 'Multi-Label Classification', 'PyTorch', 'Deep Reinforcement Learning'],
    },
  },
  {
    id: 'cs221',
    title: 'Benchmarking ML Models for UFC Fight Outcome Prediction',
    oneliner: 'Replication of the Hitkul et al. (2019) logistic regression baseline on 4,896 UFC fights, benchmarked against feed-forward networks.',
    problem: 'Can the Hitkul et al. baseline be faithfully replicated, and do deeper architectures provide a generalization advantage at this dataset scale?',
    context: 'Artificial Intelligence',
    year: '2024',
    coauthors: ['Luis Arizmendi', 'Austin Salcedo', 'Saba Weatherspoon'],
    results: [
      {
        text: "Dataset: 4,896 UFC fights, 119 attributes (physical attributes, records, rankings, fight odds); label encoding, NA imputation, and normalization following the reference paper's feature engineering",
      },
      {
        text: 'Logistic regression accuracy: ',
        metric: '66.4% (reference paper: 66.7%)',
      },
      {
        text: 'Feed-forward NN (128->64 ReLU): 63.4%; the same network with dropout layers: 65.2%; logistic regression outperformed both deeper architectures',
      },
      {
        text: 'Comparing training against validation loss indicated some overfitting, which the report flags rather than sets aside',
      },
      {
        text: 'Finding: at n=4,896 the dataset size, not the architecture, is the binding constraint on accuracy',
      },
    ],
    tags: ['Logistic Regression', 'Neural Networks', 'Replication Study', 'PyTorch', 'Python', 'Evaluation Methodology'],
    links: [
      { label: 'Paper', url: '/papers/cs221-final-report.pdf' },
    ],
    note: 'The report gives two different accuracies for logistic regression — 66.4% in its results table and 63.4% in its discussion. The table value is used here.',
    tldr: {
      summary: 'Replicated a published ML baseline and showed a deeper network does not generalize better when dataset size is the binding constraint.',
      signals: [
        'Reproduced the Hitkul et al. logistic regression baseline at 66.4% against a 66.7% reference',
        'Tested a feed-forward net and a dropout-regularized variant; both underperformed the linear baseline',
        'Right conclusion drawn: at n=4,896 the answer is more data, not more layers',
      ],
      skills: ['Evaluation Methodology', 'Replication Study', 'Logistic Regression', 'PyTorch', 'Statistical Thinking', 'Python'],
    },
  },
  {
    id: 'strabismus',
    title: 'Strabismus Baseline Classifier',
    oneliner: 'Baseline computer vision classifier for strabismus screening from eye images, written as research code inside a Stanford School of Medicine effort on differentiating normal eye movements from cranial nerve palsies.',
    problem: 'What baseline does a straightforward image classifier establish for detecting ocular misalignment, and what would have to be true before such a model belonged anywhere near a clinic?',
    context: 'AI Researcher, Stanford Medicine',
    year: '2025',
    results: [
      {
        text: 'Part of a wider effort developing deep learning solutions to differentiate between normal eye movements and cranial nerve palsies',
      },
      {
        text: 'Built and trained a baseline image classifier for strabismus (ocular misalignment) as part of computer vision research at Stanford Medicine',
      },
      {
        text: 'Implemented as an annotated notebook so preprocessing, the training loop, and evaluation are readable end to end rather than hidden behind a framework',
      },
      {
        text: 'Scoped deliberately as a baseline: the purpose is to establish a floor that later work has to beat, not to claim a clinical result',
      },
    ],
    tags: ['Computer Vision', 'Medical Imaging', 'Classification', 'PyTorch', 'Jupyter', 'Research Code'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/Strabismus-Baseline-Classifier' },
    ],
    note: 'Research code. Not a medical device, not FDA-cleared, and not for clinical use. The repository carries no write-up, so no performance figures are claimed here.',
    tldr: {
      summary: 'A baseline classifier for detecting strabismus from eye images, written as research code at Stanford Medicine inside a broader effort to tell normal eye movements apart from cranial nerve palsies, and published with explicit limits on how it may be used.',
      signals: [
        'Sits under a wider research aim: deep learning that differentiates normal eye movements from cranial nerve palsies',
        'Computer vision applied to a real clinical screening question, built inside a medical research setting',
        'Published as a readable notebook rather than an opaque pipeline',
        'Carries an explicit non-clinical disclaimer instead of implying medical validity it does not have',
      ],
      skills: ['Computer Vision', 'Medical Imaging', 'Research Code', 'PyTorch', 'Responsible Scoping'],
    },
  },
  {
    id: 'swish',
    title: 'Swish: Shot Outcome Classification from Video',
    oneliner: 'A ResNet-18 video classifier that labels a basketball clip made or missed, served behind a FastAPI inference endpoint.',
    problem: 'Can a small video model decide whether a shot went in from the clip alone, without ball tracking, pose estimation, or court geometry?',
      year: '2025–2026',
    results: [
      {
        text: 'ResNet-18 backbone applied per frame with temporal average pooling: 16 frames sampled evenly across the clip, resized to 224x224 and ImageNet-normalized, pooled to a single 512-dimensional feature, then classified made or missed',
      },
      {
        text: 'PyTorch training loop over a directory of made/ and missed/ clips read with OpenCV, using an 80/20 train/validation split, Adam, and cross-entropy loss, with dataset path and hyperparameters set through environment variables so the same script runs locally and in Colab',
      },
      {
        text: 'Served with FastAPI: a /predict endpoint accepts an uploaded .mp4 or .mov and returns a label with a confidence score; the model loads once and is reused across requests, and a /health endpoint reports device and load state',
      },
      {
        text: 'Trained weights are committed to the repository, so the endpoint runs without a training step first',
      },
    ],
    tags: ['Video Classification', 'ResNet-18', 'Temporal Pooling', 'PyTorch', 'FastAPI', 'OpenCV', 'Inference API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/swish-backend' },
    ],
    note: 'The repository carries no write-up and no reported accuracy, so no performance figures are claimed here. The architecture and serving details above are read from the source rather than from a report.',
    tldr: {
      summary: 'A binary video classifier for basketball shot outcome — ResNet-18 features averaged over 16 sampled frames — packaged as a FastAPI service with the trained weights checked in.',
      signals: [
        'Chose the simplest architecture that fits the task: per-frame CNN features with temporal average pooling rather than a video-specific backbone',
        'Shipped the model as a service, not a notebook: upload endpoint, single model load, health check',
        'Configured through environment variables so the training script runs unchanged locally and on a hosted GPU',
      ],
      skills: ['Computer Vision', 'Video Classification', 'PyTorch', 'Model Serving', 'FastAPI'],
    },
  },
  {
    id: 'syncedin',
    title: 'Synced-In: Embedding-Based Expert Search',
    oneliner: "A retrieval system that finds the right internal expert from a plain-language question, built during Synchrony's generative AI incubation.",
    problem: 'Inside a large organization the person who can answer your question is usually findable in principle and unfindable in practice. Can embedding retrieval beat keyword search at locating them?',
    context: 'Enterprise Architect (BLP), Synchrony',
    year: '2025',
    results: [
      {
        text: 'Built an embedding-based retrieval system that maps a natural-language question to the internal experts most likely to be able to answer it',
      },
      {
        text: 'Implemented in Flask with semantic ranking over profile embeddings, exposed through modular APIs designed for integration into existing enterprise tooling',
      },
      {
        text: 'Benchmarked retrieval quality against a keyword-search baseline rather than assessing the system on its own terms',
      },
      // The internal hackathon placing, field size, and attendance were here.
      // Those are the employer's numbers about the employer's event, and a
      // standard intern agreement covers them. The system is the credential.
      {
        text: 'Exposed through modular APIs so the retrieval layer could be integrated into existing tooling rather than shipped as a standalone demo',
      },
    ],
    tags: ['RAG', 'Embeddings', 'Semantic Search', 'Flask', 'Python', 'Enterprise Integration'],
    links: [],
    note: 'Built internally at Synchrony; the source is not publicly available.',
    tldr: {
      summary: 'An expert-search system for a large enterprise: ask a question in plain language, get the people who can answer it, ranked by embedding similarity rather than keyword overlap.',
      signals: [
        'Chose the right baseline to beat — keyword search — and measured against it instead of reporting absolute numbers alone',
        'Designed modular APIs for integration rather than building a standalone demo',
        'Built inside a regulated financial institution, where a retrieval system has to clear review before it reaches anyone',
      ],
      skills: ['RAG', 'Embedding Retrieval', 'Evaluation Design', 'Flask', 'Enterprise Software'],
    },
  },
  {
    id: 'tech-assessment',
    title: 'Technology Assessment Optimization',
    oneliner: 'A retrieval system that automates the evidence-extraction step of a technology assessment against SOC 2 compliance reports. Python.',
    problem: 'Can retrieval replace manual evidence-gathering in a domain where a wrong citation is not a bad answer but an audit finding?',
      year: '2025',
    results: [
      {
        text: 'Retrieval-augmented pipeline over SOC 2 compliance reports, automating the step where a reviewer reads the report to find the passage that evidences a given control. Implemented in Python',
      },
    ],
    tags: ['RAG', 'Retrieval', 'Evidence Extraction', 'SOC 2', 'Compliance', 'Python'],
    links: [],
    note: 'The source for this project is not public, so nothing above can be checked against an artifact from here.',
    tldr: {
      summary: 'A retrieval system for pulling control evidence out of SOC 2 reports, built for a setting where citing the wrong passage is an audit finding rather than a minor error.',
      signals: [
        'Targets the specific manual step that consumes reviewer time: locating the passage that evidences a control',
        'Built on a corpus where precision of the citation matters more than fluency of the answer',
      ],
      skills: ['RAG', 'Retrieval Systems', 'Evaluation Design', 'Compliance Domain', 'Python'],
    },
  },
  {
    id: 'feynman',
    title: 'Feynman',
    oneliner: 'A free AI learning platform that rebuilds university-level coursework as a five-rung Learning Ladder, built for first-generation and low-income students.',
    problem: 'University-level material is gated less by difficulty than by access: who explains it to you, how many times you are allowed to ask, and whether anyone notices when you fall behind.',
    context: 'Founder · A Truth Computing mission project',
    year: '2026',
    results: [
      {
        text: 'Rebuilds university-level coursework as a five-rung "Learning Ladder", so a learner climbs from first exposure to fluency in defined steps rather than being handed a syllabus',
      },
      {
        text: 'Built for first-generation and low-income students, the group least likely to have someone at home who has already taken the course',
      },
      {
        text: 'Free to use, and carried forward as a mission project under Truth Computing rather than run as a commercial product',
      },
    ],
    tags: ['Education', 'Applied AI', 'Access', 'Product', 'Web'],
    links: [
      { label: 'learn-feynman.com', url: 'https://learn-feynman.com' },
    ],
    tldr: {
      summary: 'A free platform that rebuilds university coursework into a five-step ladder from first exposure to fluency, built for students without a household expert to ask.',
      signals: [
        'Structures material as a ladder with defined rungs instead of shipping another content library',
        'Targets a specific population — first-generation and low-income students — rather than a general audience',
        'Kept free and run as a mission project rather than converted into a product',
      ],
      skills: ['Product Design', 'Applied AI', 'Education Technology', 'Web Engineering'],
    },
  },
  {
    id: 'ezrecruit',
    title: 'EzRecruit',
    oneliner: 'Recruit-management MVP for university varsity coaches, scoped from interviews with Stanford coaching staff.',
    problem: 'Varsity coaches work 12-hour days and spend a large share of them filtering inbound recruit interest across email, forms, and spreadsheets — time that comes directly out of coaching.',
    context: 'Technology Entrepreneurship',
    year: '2024',
    coauthors: ['Austin Salcedo', 'Nick Walker', 'Chloe Widner'],
    results: [
      {
        // The interviewee is described by category, not by a title that names one
        // living person. The figures are what carry the point; the identity does
        // not, and publishing it attributes a private statement to someone who
        // agreed to a student interview, not to a public quote.
        text: 'Defined the problem space through interviews with Stanford varsity coaches, one of whom described receiving 220 emails a day of which 140 came from recruits',
      },
      {
        text: 'Enumerated the specific manual steps consuming coach time: filtering inbound forms and emails, transferring information into tracking spreadsheets, keeping track of last contact, reaching high school coaches for game schedules, and updating call notes',
      },
      {
        text: 'Scoped an MVP against those named inefficiencies rather than an assumed feature list, establishing target customer, goals, and needs before proposing any product',
      },
    ],
    tags: ['Product', 'User Research', 'MVP Scoping', 'Entrepreneurship'],
    links: [
      { label: 'MVP document', url: '/papers/mvp-stanford.pdf' },
    ],
    tldr: {
      summary: 'A recruit-management tool for college coaches, scoped from direct interviews rather than assumptions about what coaches need.',
      signals: [
        'Grounded the problem in interviews with actual varsity coaches, quoting the volume of inbound recruit email directly',
        'Wrote down the manual steps consuming time before designing anything to replace them',
        'Scoped the MVP against named inefficiencies instead of a speculative feature list',
      ],
      skills: ['User Research', 'Product Scoping', 'Problem Framing', 'Venture Design'],
    },
  },
  {
    id: 'qaoa',
    title: 'Quantum Approximate Optimization for the Traveling Salesman Problem',
    oneliner: 'QAOA implemented in Google Cirq for small TSP instances, written as an introduction to how the algorithm navigates a combinatorial landscape.',
    problem: 'How does the QAOA cost-mixer alternating structure navigate a combinatorial optimization landscape, and what are its practical limits at small instance sizes?',
    context: 'Quantum Computing',
    year: '2024',
    coauthors: ['Kai Roybal'],
    results: [
      {
        text: 'QAOA circuit in Google Cirq: cost Hamiltonian H_C over pairwise city distances, alternating with a mixer Hamiltonian at p=1, simulated at 1,000 shots',
      },
      {
        text: 'Run on n=4, n=8, and n=15 city instances, alongside a survey of classical and quantum approaches to TSP and the complexity results that motivate them',
      },
      {
        text: 'The n=8 and n=15 runs returned an all-ones bitstring, which decodes to the identity ordering rather than a solved tour — a limit of the one-qubit-per-city encoding at p=1, not a result',
      },
      {
        text: 'Related the formulation to logistics routing and economic optimization, where the same combinatorial structure appears',
      },
    ],
    tags: ['QAOA', 'Google Cirq', 'Quantum Computing', 'Combinatorial Optimization', 'Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/Quantum-Approximate-Optimization-Algorithm-As-Applied-to-Traveling-Salesman-Problem' },
      { label: 'Paper', url: '/papers/qaoa-tsp.pdf' },
    ],
    note: 'An introductory course project. It demonstrates the algorithm rather than benchmarking it against classical solvers.',
    tldr: {
      summary: 'Implemented QAOA in Google Cirq for small TSP instances and traced how the cost-mixer structure explores the landscape — including where the encoding breaks down.',
      signals: [
        'Built the circuit from scratch: cost Hamiltonian over pairwise distances, alternating unitaries, Cirq simulation at 1,000 shots',
        'Reported the degenerate all-ones output at n=8 and n=15 as an encoding limit instead of presenting it as a solved tour',
        'Connected the formulation to logistics routing and economic optimization',
      ],
      skills: ['Quantum Computing', 'Combinatorial Optimization', 'Algorithm Analysis', 'Google Cirq', 'Python'],
    },
  },
];
