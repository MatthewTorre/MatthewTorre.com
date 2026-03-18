export interface Paper {
  id: string;
  title: string;
  course: string;
  year: string;
  description: string;
  abstract: string;
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
    abstract:
      'Centralized rate limiters provide strong fairness guarantees but introduce a single point of failure and high coordination overhead. This paper designs a distributed token-bucket system that approximates central control via gossip-based state synchronization, achieving sub-100ms convergence with bounded per-node error under realistic bursty and churn conditions.',
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
    abstract:
      'Classical MDP planning assumes unlimited computation, but real agents operate under hard resource constraints that force trade-offs between policy quality and tractability. This paper derives approximation schemes for bounded-rational agents and empirically characterizes how policy value degrades as planning budgets shrink, with implications for reward-model design in RLHF pipelines.',
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
    abstract:
      "Heuristic search algorithms differ sharply in the optimality guarantees and computational costs they impose on structured planning tasks. This project implements A*, beam search, and iterative deepening on Stanford's CS221 planning benchmarks, quantifying the optimality-efficiency frontier across varying problem complexities and heuristic quality levels.",
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
    abstract:
      'Autonomous Mars surface operations require reliable terrain classification from orbital and rover imagery under severe data scarcity. This paper applies transfer learning from ImageNet-pretrained CNNs with targeted augmentation strategies, achieving strong classification accuracy on Martian terrain categories while surfacing calibrated uncertainty estimates for safety-critical deployment.',
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
    abstract:
      'The Quantum Approximate Optimization Algorithm (QAOA) offers a near-term path to quantum advantage on combinatorial optimization, but its practical performance on structured problems like TSP remains poorly characterized. This paper implements QAOA on small TSP instances using Qiskit, analyzing circuit depth scaling and parameter landscape geometry, and benchmarks approximation ratios against classical greedy baselines as instance size grows.',
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
    abstract:
      'Large language models show promise for personalized interview preparation but degrade significantly without careful retrieval and prompt structure. This paper designs and evaluates ProdPrepAI, a RAG system that couples structured document retrieval with self-evaluation loops to improve response quality on coding and system-design interview questions.',
    tags: ['LLMs', 'RAG', 'Prompt Engineering', 'Python'],
    pdf: '/papers/prodprepai.pdf',
  },
  {
    id: 'sb1047-policy-memo',
    title: 'SB 1047 Policy Memorandum: Safe and Secure Innovation for Frontier AI',
    course: 'CS182 · Ethics, Public Policy, and Technological Change',
    year: '2024',
    description:
      'Policy analysis of California\'s SB 1047, examining its theory of impact, main components, stakeholder landscape, and structural weaknesses. Co-authored with Remington Graham, Kyran Romero, and Shuvi Jha under Profs. Sahami and Ho.',
    abstract:
      'SB 1047 attempts to shift AI governance from passive compliance to active pre-deployment regulation, drawing parallels to the EU AI Act. This memo analyzes the bill\'s core mechanisms including covered model definitions, positive safety determinations, and the proposed Frontier Model Division, identifying structural flaws and recommending multi-factor risk frameworks and standard-based safety determinations.',
    tags: ['AI Policy', 'AI Safety', 'Regulation', 'SB 1047'],
    pdf: '/papers/sb1047-policy-memo.pdf',
  },
  {
    id: 'mvp-stanford',
    title: 'MVP & Product Review: CEE250 Venture Design',
    course: 'CEE250 · Technology Entrepreneurship',
    year: '2024',
    description:
      "Product and market analysis for a venture concept developed through Stanford's engineering entrepreneurship program. Covers user discovery, MVP scoping, go-to-market framing, and technical feasibility review.",
    abstract:
      "Translating technical capability into viable product requires disciplined user discovery and honest scoping of what an MVP must prove. This report documents the full venture design process from Stanford's CEE250 program: user interviews, MVP definition, go-to-market strategy, and technical feasibility analysis for an early-stage product concept.",
    tags: ['Product', 'Entrepreneurship', 'Market Analysis'],
    pdf: '/papers/mvp-stanford.pdf',
  },
];
