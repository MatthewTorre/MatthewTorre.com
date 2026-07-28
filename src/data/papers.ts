export interface Paper {
  id: string;
  title: string;
  course: string;
  year: string;
  description: string;
  abstract: string;
  tags: string[];
  /** Absent when the report itself is not published here. */
  pdf?: string;
  /** Co-authors, listed when the work was not solo. */
  coauthors?: string[];
  /** What Matthew specifically owned, where the paper records a split. */
  contribution?: string;
  /** Shown in place of the PDF when there is nothing to link. */
  unavailableNote?: string;
}

export const papers: Paper[] = [
  {
    id: 'distributed-rate-limiter',
    title: 'Distributed Rate Limiter',
    course: 'Advanced Networking and Distributed Systems',
    year: '2025',
    coauthors: ['Amy Chang', 'Andy Wang'],
    description:
      'A C++ re-implementation of Cloud Control with Distributed Rate Limiting (Raghavan et al., SIGCOMM 2007). Reproduces the paper\'s Figure 3 across all four algorithms and diagnoses why Global Random Drop oscillates.',
    abstract:
      'Distributed rate limiting enforces a global traffic limit across geographically separated sites without a central coordinator. This paper reproduces the main experimental results of Raghavan et al., implementing Central Token Bucket, Global Token Bucket, Global Random Drop, and Flow Proportional Share in C++ under the original 7:3 sender split and 40 ms inter-relay RTT. Global Token Bucket enforces the global limit but allocates bandwidth unfairly; Flow Proportional Share converges smoothly to a 6.2 / 3.6 Mbps split. Stabilizing Global Random Drop required EWMA smoothing and early-drop heuristics to compensate for lag in gossip-based load estimation.',
    tags: ['C++', 'Distributed Systems', 'Rate Limiting', 'Gossip Protocol', 'Replication Study'],
    pdf: '/papers/distributed-rate-limiter.pdf',
  },
  {
    id: 'bounded-rationality',
    title: 'Learning Efficient Cognitive Effort Allocation Under Bounded Rationality',
    course: 'Decision Making Under Uncertainty',
    year: '2025',
    coauthors: ['Kim Ngo'],
    description:
      'Builds a compact POMDP testbed for bounded-resource decision making, where an agent allocates effort between low-effort habitual choices and high-effort deliberation as fatigue accumulates.',
    abstract:
      'Humans and autonomous agents rarely act optimally, because attention, time, and computation are bounded. This paper builds a stochastic decision-making environment with a latent fatigue state tied to varying task difficulty, with two action modes — habitual and deliberate — that carry different effort-reward tradeoffs. Bandit policies are compared over roughly 140 time steps per episode, logging reward, fatigue, and efficiency trajectories. Persistent deliberation boosts short-term performance but accumulates fatigue, while shifting toward habitual actions maintains more stable efficiency over longer horizons.',
    tags: ['POMDP', 'Contextual Bandits', 'Decision Theory', 'Python'],
    pdf: '/papers/bounded-rationality.pdf',
  },
  {
    id: 'cs221-final',
    title: 'Predicting MMA Fight Outcomes: CS221 Final Report',
    course: 'Artificial Intelligence',
    year: '2024',
    coauthors: ['Luis Arizmendi', 'Austin Salcedo', 'Saba Weatherspoon'],
    description:
      'Replicates the Hitkul et al. (2019) logistic-regression baseline for UFC fight prediction on 4,896 fights, then tests whether feed-forward networks improve on it at that dataset size.',
    abstract:
      'Predicting the outcome of a mixed martial arts bout involves many interacting factors, and prior work reports logistic regression as a strong baseline. Using a 4,896-fight dataset with 119 attributes, this report reproduces the feature engineering of Hitkul et al. (2019) and compares logistic regression against a two-layer feed-forward network and a dropout-regularized variant. Logistic regression outperformed both deeper architectures, and evaluation on training versus validation data indicated some overfitting, suggesting dataset size rather than architecture is the binding constraint.',
    tags: ['Logistic Regression', 'Neural Networks', 'Replication Study', 'PyTorch'],
    pdf: '/papers/cs221-final-report.pdf',
  },
  {
    id: 'deep-learning-mars',
    title: 'Transfer Learning for Mars Surface Image Classification',
    course: 'Computer Vision',
    year: '2025',
    description:
      'Fine-tunes VGG-16 on NASA MSL Curiosity rover imagery and ablates handcrafted SIFT and ORB keypoint channels against the learned representation.',
    abstract:
      'Pre-trained convolutional networks transfer unevenly to out-of-domain planetary imagery. This project fine-tunes an ImageNet-pretrained VGG-16 with a custom classifier head on NASA MSL Curiosity surface and instrument classes, searching across learning rate, dropout, and batch size. An ablation adds SIFT and ORB keypoint heat-map channels alongside RGB, and finds that the handcrafted channels constrain rather than augment the learned representation.',
    tags: ['VGG-16', 'Transfer Learning', 'Ablation Study', 'PyTorch', 'Computer Vision'],
    unavailableNote:
      'The report for this project is not published here. The work is described on the Work page.',
  },
  {
    id: 'qaoa-tsp',
    title: 'Quantum Optimization and the Traveling Salesman Problem',
    course: 'Quantum Computing',
    year: '2024',
    coauthors: ['Kai Roybal'],
    description:
      'An introduction to the Quantum Approximate Optimization Algorithm applied to TSP, implemented in Google Cirq and run on 4-, 8-, and 15-city instances.',
    abstract:
      'The Traveling Salesman Problem is NP-hard, which makes it a standard benchmark for optimization methods. This paper introduces QAOA as an approach to TSP, covering classical and quantum treatments of the problem, computational complexity, and the principles behind quantum algorithms. A cost Hamiltonian over pairwise city distances is alternated with a mixer Hamiltonian at p=1 using Google Cirq, simulated at 1,000 shots across three instance sizes. The write-up is an introductory survey and demonstration rather than a benchmark against classical solvers.',
    tags: ['QAOA', 'Google Cirq', 'Quantum Computing', 'Combinatorial Optimization'],
    pdf: '/papers/qaoa-tsp.pdf',
  },
  {
    id: 'prodprepai',
    title: 'ProdPrepAI: Multi-Label Classification and Reinforcement Learning for Interview Preparation',
    course: 'Deep Learning',
    year: '2024',
    coauthors: ['Tanaya Yadav', 'Arpit Ranasaria'],
    contribution: 'Model fine-tuning, hyperparameter optimization, research, and report writing.',
    description:
      'Couples a fine-tuned BERT multi-label classifier with a reinforcement learning agent that chooses adaptive follow-ups during product-management interview practice.',
    abstract:
      'Existing AI interview tools offer generic feedback with inconsistent evaluation metrics and little domain adaptation. ProdPrepAI processes question-response pairs with a BERT-based model to score four attributes — clarity, completeness, product thinking, and feasibility — and layers a reinforcement learning agent that selects follow-up actions such as asking for details, reframing, or moving to a new question. The classifier reached F1 scores between 0.766 and 0.859 across the four attributes; the agent reached F1 0.749, performing well on clear-cut responses and struggling to distinguish clarification from elaboration.',
    tags: ['BERT', 'Reinforcement Learning', 'Multi-Label Classification', 'PyTorch', 'NLP'],
    pdf: '/papers/prodprepai.pdf',
  },
  {
    id: 'sb1047-policy-memo',
    title: 'SB 1047 Policy Memorandum: Safe and Secure Innovation for Frontier AI',
    course: 'Ethics, Public Policy, and Technological Change',
    year: '2024',
    coauthors: ['Remington Graham', 'Kyran Romero', 'Shuvi Jha'],
    description:
      "Policy analysis of California's SB 1047, examining its theory of impact, main components, stakeholder landscape, and structural weaknesses. Written for Profs. Mehran Sahami and Daniel Ho.",
    abstract:
      'SB 1047 attempts to shift AI governance from passive compliance to active pre-deployment regulation, drawing parallels to the EU AI Act. This memo analyzes the bill\'s core mechanisms including covered model definitions, positive safety determinations, and the proposed Frontier Model Division, identifying structural flaws and recommending multi-factor risk frameworks and standard-based safety determinations.',
    tags: ['AI Policy', 'AI Safety', 'Regulation', 'SB 1047'],
    pdf: '/papers/sb1047-policy-memo.pdf',
  },
  {
    id: 'mvp-stanford',
    title: 'EzRecruit: Minimum Viable Product and Problem Space',
    course: 'Technology Entrepreneurship',
    year: '2024',
    coauthors: ['Austin Salcedo', 'Nick Walker', 'Chloe Widner'],
    description:
      'Venture design document for EzRecruit, a recruit-management tool for university varsity coaches. Covers the problem space, target customer, user interviews, and MVP scoping.',
    abstract:
      'University varsity coaches spend a large share of long working weeks managing inbound recruit interest across email, forms, and spreadsheets, leaving less time for coaching. This document defines the problem space through interviews with Stanford coaches, enumerates the manual steps that consume their time — filtering inbound forms, transferring information into spreadsheets, tracking last contact, and coordinating schedules — and scopes a minimum viable product against those specific inefficiencies.',
    tags: ['Product', 'Entrepreneurship', 'User Research', 'MVP'],
    pdf: '/papers/mvp-stanford.pdf',
  },
];
