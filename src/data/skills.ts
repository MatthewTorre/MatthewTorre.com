export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'UNIX/Bash', 'R'],
  },
  {
    label: 'ML and Systems',
    skills: [
      'PyTorch',
      'Hugging Face Transformers',
      'Stable-Baselines3',
      'BERT fine-tuning',
      'VGG-16',
      'DQN',
      'PPO / REINFORCE',
      'POMDP solvers (discrete VI, particle filter)',
      'Bandit algorithms',
      'Monte Carlo simulation',
      'RAG / embedding retrieval',
      'FastAPI',
      'Flask',
      'React',
      'Next.js',
    ],
  },
  {
    label: 'Mathematics',
    skills: [
      'Probability theory',
      'Statistical inference',
      'Bootstrap resampling',
      "Effect size estimation (Cohen's d)",
      'Lognormal distribution fitting',
      'Convex optimization',
      'MDP / POMDP theory',
      'Multivariate calculus',
      'Linear algebra',
    ],
  },
  {
    label: 'Experimentation',
    skills: [
      'Hypothesis-driven experimental design',
      'Ablation studies',
      'Replication studies',
      'Reproducibility pipelines',
      'Hyperparameter search',
      'Evaluation metric design',
    ],
  },
  {
    label: 'Infrastructure',
    skills: [
      'AWS',
      'GCP',
      'REST / GraphQL APIs',
      'GitHub Actions',
      'Distributed systems',
      'UNIX systems programming',
    ],
  },
];
