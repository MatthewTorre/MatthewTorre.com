export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string;
  logo?: string;
  location?: string;
  url?: string;
}

export const experience: ExperienceItem[] = [
  {
    company: 'Truth Computing',
    role: 'Co-founder, Chief Executive Officer, Chief Technology Officer',
    dates: 'May 2026 – Present',
    location: 'Los Angeles, CA',
    description:
      'Leading a team of twelve building Feynman and the Truth Computing platform. Technology for good, technology for humanity: complex ideas, made beautifully simple.',
    logo: '/images/logos/truth-computing.svg',
    url: 'https://truth-computing.com',
  },
  {
    company: 'Stanford Artificial Intelligence Laboratory (SAIL)',
    role: 'Graduate AI/ML Research Assistant — Language, Data, Reasoning',
    dates: 'Mar – Jun 2026',
    location: 'Stanford, CA',
    description:
      'Graduate research assistant working on language, data, and reasoning within SAIL.',
    logo: '/images/logos/sail.png',
    url: 'https://ai.stanford.edu/',
  },
  {
    company: 'Truth Computing Media',
    role: 'Co-founder',
    dates: 'Jun 2022 – Present',
    location: 'Greater Los Angeles, CA',
    description:
      'Independent technology journalism under the Scattered Mind banner, demystifying the greatest technology of our time for a general audience.',
    logo: '/images/logos/truth-computing.svg',
    url: 'https://www.youtube.com/@Captured./shorts',
  },
  {
    company: 'STVP — Stanford Technology Ventures Program',
    role: 'XFund Ethics Fellow and Community Member',
    dates: 'Sep 2024 – Present',
    location: 'Stanford, CA',
    description:
      'XFund Ethics Fellow at the Stanford Engineering Entrepreneurship Center; engaged with questions of ethics, responsibility, and technical decision-making in early-stage ventures.',
    logo: '/images/logos/stvp.jpeg',
    url: 'https://stvp.stanford.edu/',
  },
  {
    company: 'Lasso',
    role: 'Product Engineer',
    dates: 'Mar 2026',
    location: 'San Francisco, CA (Remote)',
    description:
      'Infrastructure and analytics. Instrumented a behavioral telemetry pipeline (hesitation time, character count, verification attempts) across a React/Flask onboarding funnel; designed diagnostic dashboards to surface user trust-barrier signals from latency data.',
    logo: '/images/logos/lasso.jpeg',
    url: 'https://www.joinlasso.com/',
  },
  {
    company: 'Penguin Health',
    role: 'First AI Engineer',
    dates: 'Sep 2025 – Feb 2026',
    location: 'Stanford, CA (Remote)',
    description:
      'AI infrastructure and front end. Designed and deployed NLP evaluation and monitoring systems for a Medicaid behavioral health AI platform on AWS/GCP; developed model benchmarking pipelines tracking performance across patient population subgroups.',
    url: 'https://www.penguin-health.com/',
  },
  {
    company: 'Stanford University, Department of Computer Science',
    role: 'Research Assistant (Stanford PinCS)',
    dates: 'Oct 2025 – Jan 2026',
    location: 'Stanford, CA',
    description:
      'Research advised by Professor Chris Gregg; focus areas included back-end web development and CS education research within the Stanford CS department.',
    logo: '/images/logos/stanford_university_department_of_computer_science_logo.jpeg',
    url: 'https://www.cs.stanford.edu/',
  },
  {
    company: 'Synchrony',
    role: 'Enterprise Architect (Business Leadership Program), Generative AI Incubation',
    dates: 'Jun – Aug 2025',
    location: 'New York, NY',
    description:
      'Built technology in a highly regulated environment and managed the tech stack for a multi-billion dollar company. Developed Synced-In, an embedding-based RAG system for natural-language expert search (Flask, semantic ranking); benchmarked retrieval quality against keyword baselines; ranked top 10 of 140+ teams at the internal hackathon (190+ attendees).',
    logo: '/images/logos/synchrony.jpeg',
    url: 'https://www.synchrony.com/',
  },
  {
    company: 'Perplexity',
    role: 'Campus Ambassador',
    dates: 'Sep – Dec 2025',
    location: 'Stanford, CA',
    description:
      'Stanford campus partner for Perplexity AI; drove adoption and community engagement across the Stanford technical community as part of the official Perplexity Partner program.',
    logo: '/images/logos/perplexity-new.jpeg',
    url: 'https://www.perplexity.ai/',
  },
  {
    company: 'Stanford Deliberative Democracy Lab',
    role: 'Research Assistant',
    dates: 'Jul 2023 – Jun 2025',
    location: 'Stanford, CA (Hybrid)',
    description:
      'Two years of research on political polarization and deliberative process at the Deliberative Democracy Lab.',
    logo: '/images/logos/stanford-ddl.jpeg',
    url: 'https://deliberation.stanford.edu/',
  },
  {
    company: 'Demystifyd',
    role: 'Product Engineer',
    dates: 'Feb – Sep 2024',
    location: 'Dallas, TX (Remote)',
    description:
      'Contributed to product engineering for a platform serving foreign nationals seeking visa-sponsoring employers; platform launched June 2024.',
    logo: '/images/logos/demystifyd.jpeg',
    url: 'https://www.demystifyd.com/',
  },
  {
    company: 'Stanford Undergraduate Research Association',
    role: 'Research Conference Co-Director',
    dates: 'Oct 2023 – Sep 2024',
    location: 'Stanford, CA',
    description:
      'Co-directed the largest undergraduate research conference at Stanford; programmed Nobel Laureate Thomas Sudhof as featured speaker; led fundraising and organizational logistics.',
    logo: '/images/logos/sura.jpeg',
    url: 'https://sura.stanford.edu/',
  },
  {
    company: 'Adams Street Partners',
    role: 'Growth Equity Investments Intern',
    dates: 'Jun – Jul 2023',
    location: 'Menlo Park, CA',
    description:
      'Supported generative AI software evaluation within a growth equity investment context; contributed to data analysis and due diligence processes.',
    logo: '/images/logos/adams-street.jpeg',
    url: 'https://www.adamsstreetpartners.com/',
  },
];

export const activities = [
  {
    org: 'ACM, Association for Computing Machinery',
    role: 'Member',
  },
  {
    org: 'Stanford Undergraduate Research Association',
    role: 'Professional Development Chair, Research Conference Co-Director',
    logo: '/images/logos/sura.jpeg',
  },
  {
    org: 'AISES',
    role: 'Member',
    logo: '/images/logos/aises.jpeg',
  },
  {
    org: 'Sigma Phi Epsilon',
    role: 'Member',
    logo: '/images/logos/sigep.jpeg',
  },
  {
    org: 'Stanford Management Consulting',
    role: 'Consultant (Google, Microsoft, Lumiere client projects)',
    logo: '/images/logos/stanford-marketing.jpeg',
  },
];
