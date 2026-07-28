export interface ResultItem {
  text: string;
  metric?: string;
  html?: boolean;
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
  context: string;
  year: string;
  results: ResultItem[];
  tags: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
  tldr: ProjectTldr;
}

export const projects: Project[] = [
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
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/Invariant-' },
    ],
    tldr: {
      summary: 'Built a production-quality Monte Carlo simulation engine in pure Python — no external dependencies. Rigorous statistical methodology throughout: bootstrap confidence intervals, variance reduction, and empirically calibrated distributions from real API data.',
      signals: [
        'Designed a complete discrete-event engine from scratch: min-heap scheduler, DAG task graphs, 5 distribution families with moment-matched parameters',
        'Applied bootstrap CIs on all P10/P50/P90 estimates; CRN variance reduction; Cohen\'s d + CI overlap to suppress spurious results',
        'Calibration pipeline pulls real cycle-time data from GitHub and Linear APIs to fit distributions — no hand-specified priors',
        'Deterministic Q&A router maps natural-language queries to traceable computations over simulation outputs',
      ],
      skills: ['Systems Design', 'Statistical Rigor', 'Monte Carlo Methods', 'Bootstrap CI', 'API Integration', 'Pure Python'],
    },
  },
  {
    id: 'cs238',
    title: 'Cognitive Effort Allocation Under Bounded Rationality',
    oneliner: 'POMDP framework for studying decision fatigue; contextual bandits reproduce human behavioral signatures without an explicit fatigue model.',
    problem: 'Can contextual bandit algorithms reproduce human-like decision-fatigue signatures without a fatigue model, and what does this reveal about the minimal inductive bias required for adaptive behavior?',
    context: 'CS238: Decision Making Under Uncertainty',
    year: '2025',
    results: [
      {
        text: 'POMDP environment with latent fatigue state; three action modes (habitual, deliberate, rest) with effort costs, fatigue-driven success penalties, and passive recovery; Gaussian observations (sigma=0.04) enforce partial observability',
      },
      {
        text: 'Benchmarked 6 algorithms across 50 independent episodes x 200 timesteps: LinUCB (alpha=0.5, 1.0, 2.0), UCB, Thompson Sampling, epsilon-greedy, discrete value iteration (20 states), particle filter POMDP (500 particles)',
      },
      {
        text: 'LinUCB (alpha=2.0) achieved ',
        metric: '70% of POMDP-optimal reward (58.86 vs. 83.70)',
      },
      {
        text: 'Reproduced canonical decision-fatigue signature: habitual usage ',
        metric: '+5.1 pp across episode phases',
      },
      {
        text: 'Context-free UCB used 44% more rest actions than LinUCB yet achieved 31% lower reward, isolating context-awareness as the mechanism, not rest frequency',
      },
    ],
    tags: ['POMDP', 'Contextual Bandits', 'LinUCB', 'Thompson Sampling', 'Python', 'Decision Theory', 'Behavioral Modeling'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/cs238_final' },
    ],
    tldr: {
      summary: 'Modeled human decision fatigue as a POMDP and showed contextual bandits reproduce behavioral signatures without ever modeling fatigue explicitly. The key insight: context-awareness, not rest frequency, drives performance.',
      signals: [
        'Ran a controlled experiment: 6 algorithms × 50 independent episodes × 200 timesteps each — results are statistically grounded, not cherry-picked',
        'LinUCB reached 70% of POMDP-optimal; isolated context-awareness as the mechanism by comparing against UCB which rested 44% more but scored 31% lower',
        'Built the POMDP environment from scratch with latent fatigue state, partial observability, and passive recovery dynamics',
      ],
      skills: ['Reinforcement Learning', 'POMDP Theory', 'Contextual Bandits', 'Experimental Design', 'Behavioral Modeling', 'Python'],
    },
  },
  {
    id: 'cs244c',
    title: 'Distributed Rate Limiter: Flow Proportional Share',
    oneliner: 'Full C++ replication of Cloud Control distributed rate limiting (Raghavan et al., SIGCOMM 2007), with analysis of convergence failure modes.',
    problem: 'Can the FPS and GRD algorithms from Raghavan et al. be faithfully reproduced in C++, and what implementation gaps does replication expose?',
    context: 'CS244C: Advanced Networking and Distributed Systems',
    year: '2025',
    results: [
      {
        text: 'Reimplemented all four algorithms in C++: Central Token Bucket (CTB), Global Token Bucket (GTB), Global Random Drop (GRD), Flow Proportional Share (FPS); gossip via UDP datagrams; Redis-based peer discovery; NFQUEUE packet verdicts',
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
        text: 'GRD stabilization required EWMA smoothing (alpha=0.3), early-drop at 90% of limit, 50% more aggressive drop rate; gossip lag identified as root cause of oscillation via convergence timeline analysis',
      },
      {
        text: 'GRD achieved better per-flow Jain fairness index than FPS (confirmed against paper Figure 5); FPS achieved smoother convergence with more stable inter-limiter split',
      },
      {
        text: 'Gossip scalability: branching factor 2 gives O(log N) convergence; 1,000 relays converge in ~10 rounds at 100ms each',
      },
    ],
    tags: ['C++', 'Distributed Systems', 'Rate Limiting', 'FPS', 'GRD', 'Mininet', 'Gossip Protocol', 'NFQUEUE', 'Replication Study'],
    links: [],
    tldr: {
      summary: 'Replicated a SIGCOMM 2007 distributed rate-limiting paper in C++ end-to-end — real UDP gossip, Redis peer discovery, kernel-level packet verdicts. Diagnosed why GRD oscillated and fixed it.',
      signals: [
        'Implemented all 4 algorithms from the paper with production-level networking: UDP gossip, Redis, NFQUEUE packet verdicts in Linux',
        'FPS converged correctly to 6.2/3.6 Mbps; traced GRD\'s ~20 Mbps overshoot to gossip lag via convergence timeline analysis',
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
    context: 'CS131: Computer Vision',
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
    oneliner: 'BERT multi-label classifier and DQN agent for adaptive, multi-dimensional evaluation of PM interview responses.',
    problem: 'Can a jointly trained classifier and RL agent produce adaptive, multi-dimensional evaluation of open-ended interview responses?',
    context: 'CS230: Deep Learning',
    year: '2024',
    results: [
      {
        text: 'BERT fine-tuned (AdamW, lr=2e-5, 128-token max) on 200 labeled PM Q&A pairs; 4-head multi-label classifier across clarity, completeness, product thinking, and feasibility (1-5 scale)',
      },
      {
        text: 'Per-label F1: completeness 0.859, product thinking 0.855, clarity 0.827, feasibility 0.766',
      },
      {
        text: 'DQN (Stable-Baselines3, 10,000 timesteps): state = BERT embedding + 4 classifier scores; episode reward improved from -34.7 (ep 4) to ',
        metric: '41.3 (ep 72), +219% improvement',
      },
      {
        text: 'Agent F1=0.749; class 1 (Reframe) is primary confusion pair due to semantic overlap with Ask for Details',
      },
    ],
    tags: ['BERT', 'DQN', 'Multi-Label Classification', 'PyTorch', 'Stable-Baselines3', 'NLP', 'Reinforcement Learning'],
    links: [
      { label: 'Paper', url: 'https://github.com/MatthewTorre/ALLUNDERGRADPROJECTS-PAPERS/blob/main/ProdPrepAI.pdf' },
    ],
    tldr: {
      summary: 'Fine-tuned BERT for multi-dimensional interview evaluation, then trained a DQN agent that uses those embeddings to make adaptive follow-up decisions. Language understanding feeds directly into RL decision-making.',
      signals: [
        'BERT fine-tuned for 4-head multi-label classification; F1 up to 0.859 on completeness dimension',
        'DQN agent improved episode reward +219% over training — from −34.7 at episode 4 to +41.3 at episode 72',
        'Joint architecture: NLP classifier output feeds as state to the RL agent — two models, one coherent system',
      ],
      skills: ['NLP', 'Deep Reinforcement Learning', 'BERT Fine-tuning', 'Multi-Label Classification', 'PyTorch', 'Stable-Baselines3'],
    },
  },
  {
    id: 'cs221',
    title: 'Benchmarking ML Models for UFC Fight Outcome Prediction',
    oneliner: 'Replication study of Hitkul et al. (2019) logistic regression baseline on 4,896 UFC fights; comparative evaluation against feed-forward neural networks.',
    problem: 'Can the Hitkul et al. baseline be faithfully replicated, and do deeper architectures provide a generalization advantage at this dataset scale?',
    context: 'CS221: Artificial Intelligence',
    year: '2024',
    results: [
      {
        text: 'Dataset: 4,896 UFC fights, 119 features (physical attributes, records, rankings, fight odds); label encoding, NA imputation, StandardScaler normalization',
      },
      {
        text: 'LR accuracy: ',
        metric: '66.4% (reference paper: 66.7%, within 0.3 pp delta)',
      },
      {
        text: 'FF-NN (128->64 ReLU): 63.4%; Dropout-NN: 65.2%; LR outperformed both deeper architectures',
      },
      {
        text: 'Finding: dataset size (n=4,896) insufficient for NN generalization advantage over LR baseline',
      },
    ],
    tags: ['Logistic Regression', 'Neural Networks', 'Replication Study', 'scikit-learn', 'Python', 'Evaluation Methodology'],
    links: [],
    tldr: {
      summary: 'Replicated a published ML baseline to within 0.3pp accuracy. The point was rigorous evaluation, not novelty: showing a deeper NN does not generalize better when dataset size is the binding constraint.',
      signals: [
        'Reproduced Hitkul et al. LR baseline at 66.4% vs. 66.7% reference — close enough to confirm the implementation is faithful',
        'Tested FF-NN (128→64 ReLU) and Dropout-NN; both underperformed LR — result is clean and interpretable',
        'Demonstrates evaluation discipline: the right conclusion here is "architecture doesn\'t matter at n=4,896," not "add more layers"',
      ],
      skills: ['Evaluation Methodology', 'Replication Study', 'Logistic Regression', 'scikit-learn', 'Statistical Thinking', 'Python'],
    },
  },
  {
    id: 'qaoa',
    title: 'Quantum Approximate Optimization for the Traveling Salesman Problem',
    oneliner: 'QAOA implementation in Google Cirq for combinatorial TSP instances; analysis of amplitude amplification mechanism.',
    problem: 'How does the QAOA cost-mixer alternating structure navigate a combinatorial optimization landscape, and what are its practical limits at small instance sizes?',
    context: 'Independent Research',
    year: '2024',
    results: [
      {
        text: 'QAOA circuit: cost Hamiltonian H<sub>C</sub> over pairwise city distances; alternating unitaries U<sub>C</sub> = e<sup>&#8722;i&#947;H<sub>C</sub></sup> and U<sub>M</sub> = e<sup>&#8722;i&#946;H<sub>M</sub></sup>, p=1 layers; classical optimization via scipy.optimize; 1,000-shot simulation',
        html: true,
      },
      {
        text: 'Validated on n=4, n=8, n=15 city instances; brute-force verified for n=4',
      },
      {
        text: 'Connected QUBO formulation to portfolio optimization and logistics routing as isomorphic instances',
      },
    ],
    tags: ['QAOA', 'Google Cirq', 'Quantum Computing', 'QUBO', 'Combinatorial Optimization', 'Python'],
    links: [],
    tldr: {
      summary: 'Implemented QAOA in Google Cirq for combinatorial TSP instances and analyzed how the cost-mixer alternating structure navigates the optimization landscape. Validated results against brute-force on small instances.',
      signals: [
        'Built the full circuit from scratch: cost Hamiltonian, alternating unitaries, classical parameter optimization via scipy',
        'Validated across 3 instance sizes (n=4, 8, 15); brute-force verified on n=4 — results are grounded, not just plausible',
        'Connected QUBO formulation to portfolio optimization and logistics routing as isomorphic problem instances',
      ],
      skills: ['Quantum Computing', 'Combinatorial Optimization', 'Algorithm Analysis', 'Google Cirq', 'QUBO Formulation', 'Python'],
    },
  },
];
