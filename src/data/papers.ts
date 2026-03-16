export interface Paper {
  id: string;
  title: string;
  course: string;
  year: string;
  description: string;
  tags: string[];
  pdf: string;
}

export const papers: Paper[] = [
  {
    id: 'distributed-rate-limiter',
    title: 'Approximating Central Rate Limits for Distributed Traffic',
    course: 'CS244C · Advanced Networking and Distributed Systems',
    year: '2025',
    description:
      'Designs and evaluates a distributed token-bucket rate-limiter that approximates a central controller using gossip-based state synchronization. Benchmarks throughput, fairness, and convergence latency under bursty traffic patterns and node churn.',
    tags: ['Distributed Systems', 'Networking', 'Rate Limiting', 'Go'],
    pdf: '/papers/distributed-rate-limiter.pdf',
  },
  {
    id: 'bounded-rationality',
    title: 'Bounded Rationality and Decision-Making Under Uncertainty',
    course: 'CS238 · Decision Making Under Uncertainty',
    year: '2025',
    description:
      'Analyzes how bounded rationality constraints interact with MDP-based planning. Derives tractable approximation schemes and evaluates policy quality degradation as computational budgets shrink, connecting theory to practical RLHF reward-shaping concerns.',
    tags: ['Reinforcement Learning', 'MDPs', 'Decision Theory', 'Python'],
    pdf: '/papers/bounded-rationality.pdf',
  },
  {
    id: 'cs221-final',
    title: 'AI Planning and Search: CS221 Final Project',
    course: 'CS221 · Artificial Intelligence',
    year: '2024',
    description:
      "Final project for Stanford's core AI course. Implements and compares heuristic search strategies (A*, beam search, iterative deepening) on structured planning benchmarks, with analysis of optimality-vs-efficiency trade-offs.",
    tags: ['Search', 'Planning', 'Heuristics', 'Python'],
    pdf: '/papers/cs221-final-report.pdf',
  },
  {
    id: 'deep-learning-mars',
    title: 'Deep Learning for Mars Terrain Classification',
    course: 'CS230 · Deep Learning',
    year: '2024',
    description:
      'Applies convolutional neural networks to satellite and rover imagery for Martian terrain classification. Explores transfer learning from ImageNet, data augmentation strategies, and uncertainty quantification for deployment in low-data regimes.',
    tags: ['Deep Learning', 'Computer Vision', 'CNN', 'Transfer Learning'],
    pdf: '/papers/deep-learning-mars.pdf',
  },
  {
    id: 'qaoa-tsp',
    title: 'QAOA Applied to the Traveling Salesman Problem',
    course: 'Physics 14N · Quantum Computing',
    year: '2024',
    description:
      'Implements the Quantum Approximate Optimization Algorithm on small TSP instances. Analyzes circuit depth scaling, parameter landscape geometry, and approximation ratio versus classical greedy baselines as problem size grows.',
    tags: ['Quantum Computing', 'QAOA', 'Optimization', 'Qiskit'],
    pdf: '/papers/qaoa-tsp.pdf',
  },
  {
    id: 'prodprepai',
    title: 'ProdPrepAI: LLM-Powered Interview Preparation',
    course: 'Independent · Applied ML',
    year: '2024',
    description:
      'Designs and evaluates a retrieval-augmented generation system for technical interview preparation. Studies prompt design, context window management, and self-evaluation loops to improve response quality on structured coding and system-design questions.',
    tags: ['LLMs', 'RAG', 'Prompt Engineering', 'Python'],
    pdf: '/papers/prodprepai.pdf',
  },
  {
    id: 'mvp-stanford',
    title: 'MVP & Product Review: CEE250 Venture Design',
    course: 'CEE250 · Technology Entrepreneurship',
    year: '2024',
    description:
      "Product and market analysis for a venture concept developed through Stanford's engineering entrepreneurship program. Covers user discovery, MVP scoping, go-to-market framing, and technical feasibility review.",
    tags: ['Product', 'Entrepreneurship', 'Market Analysis'],
    pdf: '/papers/mvp-stanford.pdf',
  },
];
