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
    company: 'Stanford University, Department of Computer Science',
    role: 'Research Assistant',
    dates: 'Oct 2025 – Present',
    location: 'Stanford, CA',
    description:
      'Conducting research advised by Professor Chris Gregg; focus areas include back-end web development and CS education research within the Stanford CS department.',
    logo: '/images/logos/stanford_university_department_of_computer_science_logo.jpeg',
    url: 'https://www.cs.stanford.edu/',
  },
  {
    company: 'Lasso',
    role: 'Product Engineering Intern',
    dates: 'Dec 2025 – Present',
    location: 'San Francisco, CA (Remote)',
    description:
      'Instrumented behavioral telemetry pipeline (hesitation time, char count, verification attempts) across React/Flask onboarding funnel; designed diagnostic dashboards to surface user trust-barrier signals from latency data.',
    logo: '/images/logos/lasso.jpeg',
    url: 'https://www.joinlasso.com/',
  },
  {
    company: 'Penguin Health',
    role: 'Founding AI Engineer, Stanford Impact Founder Fellowship',
    dates: 'Aug 2025 – Jan 2026',
    location: 'Washington, D.C. (Remote)',
    description:
      'Designed and deployed NLP evaluation and monitoring systems for a Medicaid behavioral health AI platform on AWS/GCP; developed model benchmarking pipelines tracking performance across patient population subgroups.',
    logo: '/images/logos/stanford-gsb.jpeg',
    url: 'https://www.gsb.stanford.edu/experience/learning/social-innovation/fellowships/post-graduate/sif',
  },
  {
    company: 'Synchrony',
    role: 'Enterprise Architect (BLP), Generative AI Incubation',
    dates: 'Jun – Aug 2025',
    location: 'Stamford, CT',
    description:
      'Enterprise Architecture track with focus on Generative AI incubation; developed Synced-In, an embedding-based RAG system for natural-language expert search (Flask, semantic ranking); benchmarked retrieval quality against keyword baselines; ranked top 10 of 140+ teams at internal hackathon (190+ attendees).',
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
    company: 'STVP — Stanford Technology Ventures Program',
    role: 'XFund Ethics Fellow',
    dates: 'Sep – Dec 2024',
    location: 'Stanford, CA',
    description:
      '2024 XFund Ethics Fellow at the Stanford Engineering Entrepreneurship Center; engaged with questions of ethics, responsibility, and technical decision-making in early-stage ventures.',
    logo: '/images/logos/stvp.jpeg',
    url: 'https://stvp.stanford.edu/',
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
