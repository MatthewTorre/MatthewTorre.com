// Generated from truth-computing/foundations.html. 76 modules.
// Counts are derived from this array at render time, never hardcoded.

export type Provenance = 'core' | 'depth' | 'self';

export interface Module {
  title: string;
  provenance: Provenance;
}

export interface Domain {
  key: string;
  num: string;
  title: string;
  sub: string;
  modules: Module[];
}

export const PROVENANCE_LABEL: Record<Provenance, string> = {
  core: 'Stanford · core',
  depth: 'Stanford · depth',
  self: 'Self-studied',
};

export const domains: Domain[] = [
  {
    key: 'ai',
    num: '01',
    title: 'Artificial intelligence & machine learning',
    sub: 'The full Stanford AI sequence, end to end: principles and search, deep learning, vision, language, graphs, reinforcement learning, generative models, and the systems that put them in production.',
    modules: [
      { title: 'Artificial Intelligence: Principles & Techniques', provenance: 'depth' },
      { title: 'Deep Learning', provenance: 'depth' },
      { title: 'Machine Learning', provenance: 'depth' },
      { title: 'From Languages to Information (NLP)', provenance: 'depth' },
      { title: 'Computer Vision: Foundations & Applications', provenance: 'depth' },
      { title: 'Decision Making Under Uncertainty', provenance: 'depth' },
      { title: 'Language Modeling from Scratch', provenance: 'depth' },
      { title: 'Deep Learning for Computer Vision', provenance: 'depth' },
      { title: 'Natural Language Processing with Deep Learning', provenance: 'depth' },
      { title: 'Deep Reinforcement Learning', provenance: 'depth' },
      { title: 'Reinforcement Learning', provenance: 'depth' },
      { title: 'Machine Learning with Graphs', provenance: 'depth' },
      { title: 'Probabilistic Graphical Models', provenance: 'depth' },
      { title: 'Deep Generative Models', provenance: 'depth' },
      { title: 'Deep Multi-Task & Meta Learning', provenance: 'depth' },
      { title: 'Computer Vision: From 3D Reconstruction to Recognition', provenance: 'depth' },
      { title: 'Machine Learning Systems Design', provenance: 'depth' },
    ],
  },
  {
    key: 'systems',
    num: '02',
    title: 'Core & advanced systems engineering',
    sub: 'From the transistor up: organization and architecture, operating systems, compilers, parallelism, networking, databases, cryptography, and distributed systems.',
    modules: [
      { title: 'Computer Organization & Systems', provenance: 'core' },
      { title: 'Operating Systems Principles', provenance: 'core' },
      { title: 'Principles of Computer Systems', provenance: 'core' },
      { title: 'Computer Systems from the Ground Up', provenance: 'depth' },
      { title: 'Advanced Networking & Distributed Systems', provenance: 'depth' },
      { title: 'Distributed Systems', provenance: 'depth' },
      { title: 'Modern Computer Architecture', provenance: 'depth' },
      { title: 'Introduction to Cryptography', provenance: 'depth' },
      { title: 'Compilers', provenance: 'depth' },
      { title: 'Introduction to Computer Networking', provenance: 'depth' },
      { title: 'Data Management & Data Systems', provenance: 'depth' },
      { title: 'Parallel Computing', provenance: 'depth' },
      { title: 'Computer & Network Security', provenance: 'depth' },
      { title: 'Web Applications', provenance: 'depth' },
    ],
  },
  {
    key: 'theory',
    num: '03',
    title: 'Theoretical computer science & algorithms',
    sub: 'The formal spine: mathematical foundations, automata and complexity, algorithm design and analysis, data structures, and programming-language theory.',
    modules: [
      { title: 'Mathematical Foundations of Computing', provenance: 'core' },
      { title: 'Design & Analysis of Algorithms', provenance: 'core' },
      { title: 'Programming Methodology', provenance: 'core' },
      { title: 'Programming Abstractions', provenance: 'core' },
      { title: 'Standard C++ Programming', provenance: 'core' },
      { title: 'Data Structures', provenance: 'depth' },
      { title: 'Introduction to Automata & Complexity Theory', provenance: 'depth' },
      { title: 'The Modern Algorithmic Toolbox', provenance: 'depth' },
      { title: 'Programming Languages', provenance: 'depth' },
    ],
  },
  {
    key: 'math',
    num: '04',
    title: 'Mathematics: continuous, discrete & statistical',
    sub: 'The layer everything else stands on: linear algebra and calculus, differential equations, optimization, real and complex analysis, topology, abstract algebra, probability, and statistical inference.',
    modules: [
      { title: 'Linear Algebra & Multivariable Calculus', provenance: 'core' },
      { title: 'Probability for Computer Scientists', provenance: 'core' },
      { title: 'Integral Calculus of Several Variables', provenance: 'core' },
      { title: 'Ordinary & Partial Differential Equations', provenance: 'core' },
      { title: 'Continuous Mathematical Methods for ML', provenance: 'depth' },
      { title: 'Optimization for Data Science', provenance: 'depth' },
      { title: 'Linear Algebra & Matrix Theory', provenance: 'self' },
      { title: 'Theory of Probability', provenance: 'self' },
      { title: 'Introduction to Statistical Inference', provenance: 'self' },
      { title: 'Introduction to Statistical Learning', provenance: 'self' },
      { title: 'Introduction to Stochastic Processes', provenance: 'self' },
      { title: 'Applied Statistics: Linear & Generalized Linear Models', provenance: 'self' },
    ],
  },
  {
    key: 'science',
    num: '05',
    title: 'Hard sciences & advanced paradigms',
    sub: 'Quantum information and computing, computational biology, and the physics sequence they rest on: mechanics, electromagnetism, Lagrangian and Hamiltonian dynamics, quantum mechanics, statistical mechanics, and relativity.',
    modules: [
      { title: 'Quantum Information', provenance: 'depth' },
      { title: 'Quantum Computing', provenance: 'depth' },
      { title: 'Mechanics', provenance: 'self' },
      { title: 'Electricity & Magnetism', provenance: 'self' },
      { title: 'Quantum Mechanics', provenance: 'self' },
      { title: 'Thermodynamics & Statistical Mechanics', provenance: 'self' },
    ],
  },
  {
    key: 'applied',
    num: '06',
    title: 'Data science, ethics & applied quantitative domains',
    sub: 'Where the technical work meets people: human-computer interaction, graphics, causal data science, networks, ethics and public policy, game theory, and the political and economic systems the work operates inside.',
    modules: [
      { title: 'Ethics, Public Policy & Technological Change', provenance: 'depth' },
      { title: 'Computers, Ethics & Public Policy', provenance: 'depth' },
      { title: 'Introduction to Human-Computer Interaction Design', provenance: 'depth' },
      { title: 'Human-Computer Interaction Design Studio', provenance: 'depth' },
      { title: 'Introduction to Computer Graphics & Imaging', provenance: 'depth' },
      { title: 'Interactive Computer Graphics', provenance: 'depth' },
      { title: 'The Spirit of Entrepreneurship', provenance: 'depth' },
      { title: 'Entrepreneurial Thought Leaders Seminar', provenance: 'depth' },
      { title: 'Principles of Data Science', provenance: 'depth' },
      { title: 'Networks: Structure & Dynamics', provenance: 'self' },
      { title: 'Fundamentals of Data Science: Prediction, Inference, Causality', provenance: 'self' },
      { title: 'Data Literacy', provenance: 'self' },
      { title: 'Data Science for Social Impact', provenance: 'self' },
      { title: 'Silicon Valley: History & Culture', provenance: 'self' },
      { title: 'Introduction to International Relations', provenance: 'self' },
      { title: 'Introduction to American Politics & Government', provenance: 'self' },
      { title: 'Introduction to Political Philosophy', provenance: 'self' },
      { title: 'Game Theory', provenance: 'self' },
    ],
  },
];

/** Each stage depends on the one before it; the final stage is what it enables. */
export const chains: string[][][] = [
  [['Linear algebra', 'Probability'], ['Machine learning'], ['Deep learning', 'Computer vision', 'Language models']],
  [['Stochastic processes', 'Graphical models'], ['Decision under uncertainty', 'Reinforcement learning']],
  [['Discrete math', 'Algorithm design'], ['Complexity theory', 'Data structures']],
  [['Computer architecture', 'Systems programming'], ['Operating systems', 'Compilers', 'Parallel computing', 'Distributed systems']],
  [['Real analysis', 'Complex analysis', 'Topology'], ['Continuous optimization', 'Numerical methods for ML']],
  [['Quantum mechanics', 'Quantum information'], ['Quantum computing']],
];
