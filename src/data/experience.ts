export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string;
  logo?: string;
  location?: string;
  url?: string;
  /**
   * Specifics that would not survive being compressed into `description`:
   * figures, scope, named collaborators, advisors. Rendered as a list under
   * the paragraph and read verbatim by api/_prompt.ts, so every number here
   * has to be one Matthew can stand behind.
   */
  highlights?: string[];
}

/**
 * Placeholder for a date range not yet confirmed. Renders visibly so an
 * unfilled entry cannot ship unnoticed.
 */
const DATES_TODO = 'TODO: add dates';

export const experience: ExperienceItem[] = [
  {
    company: 'Truth Computing',
    role: 'Co-founder, Chief Executive Officer, Chief Technology Officer',
    dates: 'May 2026 – Present',
    location: 'Los Angeles, CA',
    description:
      'Leading a team of twelve building Feynman and the Truth Computing platform. Technology for good, technology for humanity: complex ideas, made beautifully simple.',
    logo: '/images/logos/truth-computing.png',
    url: 'https://truth-computing.com',
  },
  {
    company: 'Stanford Artificial Intelligence Laboratory (SAIL)',
    role: 'Graduate AI/ML Research Assistant — Language, Data, Reasoning',
    dates: 'Mar – Jun 2026',
    location: 'Stanford, CA',
    description:
      'Graduate research assistant working on language, data, and reasoning within SAIL. Mentored by Dr. Amin Saberi and Dr. Amin Karbasi.',
    logo: '/images/logos/sail.png',
    url: 'https://ai.stanford.edu/',
  },
  {
    company: 'Synchrony',
    role: 'AI Solutions',
    dates: 'Jun 2026',
    location: 'New York, NY',
    description: 'Internship offer accepted; resigned prior to the start date.',
    logo: '/images/logos/synchrony.jpeg',
    url: 'https://www.synchrony.com/',
  },
  {
    company: 'Truth Computing Media',
    role: 'Co-founder',
    dates: 'Jun 2022 – Present',
    location: 'Greater Los Angeles, CA',
    description:
      'Independent technology journalism under the Scattered Mind banner, demystifying the greatest technology of our time for a general audience.',
    logo: '/images/logos/truth-computing.png',
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
    logo: '/images/logos/penguin.png',
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
    company: 'Stanford Medicine (School of Medicine)',
    role: 'AI Researcher',
    dates: '2025',
    location: 'Stanford, CA',
    description:
      'Developing deep learning solutions to differentiate between normal eye movements and cranial nerve palsies. The strabismus baseline classifier from this line of work is published as research code, explicitly not a medical device and not intended for clinical use.',
    logo: '/images/logos/stanford-medicine.jpeg',
    url: 'https://med.stanford.edu/',
    highlights: [
      'Developing deep learning solutions to differentiate between normal eye movements and cranial nerve palsies',
      'Built and published a strabismus baseline classifier as annotated research code, scoped as a floor for later work rather than as a clinical result',
      'Research code only: not a medical device, not FDA-cleared, and not for clinical use',
    ],
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
      'Two years of research on political polarization and deliberative process at the Deliberative Democracy Lab, on the America in One Room and Metaverse projects.',
    logo: '/images/logos/stanford-ddl.jpeg',
    url: 'https://deliberation.stanford.edu/',
    highlights: [
      'Assisted in data-related tasks drawing on survey data from over 6,300 participants across 32 countries, 9 regions, and 23 different languages, shaping Meta’s platform governance policies',
      'Worked on the America in One Room project and the Metaverse project',
      'Research advisor: Alice Siu',
    ],
  },
  {
    company: 'Demystifyd',
    role: 'Product Engineer',
    dates: 'Feb – Sep 2024',
    location: 'Dallas, TX (Remote)',
    description:
      'Led the development of multiple features for a platform serving foreign nationals seeking visa-sponsoring employers, working in agile methodologies, data analysis, and product design; platform launched June 2024.',
    logo: '/images/logos/demystifyd.jpeg',
    url: 'https://www.demystifyd.com/',
    highlights: [
      'Led the development of multiple features working with agile methodologies, data analysis, and product design to increase user engagement, reaching 100 daily active users and a 10% premium conversion rate',
      'Authored the Product Requirements Document (PRD) for multiple features, covering feature overview, target audience, user research, A/B testing, usability studies, technical requirements, and go-to-market strategy',
      'Collaborated with the Founder/CTO, Marketing, and UX Designers to execute six months of growth strategy including content calendars, virtual conferences, and sponsorship management',
      'Advisor: David Ajoku',
    ],
  },
  {
    company: 'Stanford Undergraduate Research Association',
    role: 'Research Conference Co-Director',
    dates: 'Oct 2023 – Sep 2024',
    location: 'Stanford, CA',
    description:
      'Directed the largest undergraduate research conference at Stanford across a 24-week project, overseeing applications, venues, catering, programming, publicity, and coordination with the Office of Student Engagement.',
    logo: '/images/logos/sura.jpeg',
    url: 'https://sura.stanford.edu/',
    highlights: [
      'Convened over 90 undergraduate researchers from 40+ institutions presenting across Computational Sciences, Experimental Life Sciences, Experimental Physical Sciences, Humanities/Arts, and Qualitative/Quantitative Social Sciences',
      'Oversaw four research sub-committees and 15 student interns, and held deliverables to schedule',
      'Coordinated with and curated programming for keynote panelists including Ato Quayson, Lerone A. Martin, Dr. Daniel Greene, Dr. Pamela Matson, Dr. Chris Field, Dr. Lisa Patel, and Nobel Laureate Thomas Südhof',
    ],
  },
  {
    company: 'Stanford Management Group',
    role: 'Project Manager',
    dates: DATES_TODO,
    location: 'Stanford, CA',
    description:
      'Led an eight-week consulting engagement for Lumiere Education, managing a team of six consultants through expansion into new verticals.',
    logo: '/images/logos/stanford-marketing.jpeg',
    highlights: [
      'Led an 8-week project for Lumiere Education managing a team of 6 consultants, ensuring alignment on deliverables, expansion into new verticals, primary research directions, and recommendation frameworks',
      'Synthesized insights from 30+ user interviews and 140+ primary research surveys, leading to actionable recommendations that improved user engagement and project outcomes',
    ],
  },
  {
    company: 'Stanford Healthcare Consulting Group',
    role: 'Project Lead',
    dates: DATES_TODO,
    location: 'Stanford, CA',
    description:
      'Led Stanford’s Catheter-Associated Urinary Tract Infection (CAUTI) reduction initiative, working from physician interviews and workflow surveys toward evidence-based changes to the electronic health record.',
    logo: '/images/logos/stanford-health.jpeg',
    highlights: [
      'Oversaw Stanford’s effort on the Catheter-Associated Urinary Tract Infection (CAUTI) reduction initiative, leading a team of 5 consultants synthesizing and analyzing 15+ physician interviews and 3 workflow sentiment surveys',
      'Proposed and substantiated 3 evidence-based interventions for user interface improvements in the Electronic Health Record (EHR)',
      'Developed an implementation strategy for physician workflow optimization, drafting fishbone diagrams and sustainability plans to bring the Standardized Infection Ratio (SIR) at Stanford Health Care to ≤ 0.7 in Fiscal Year 2024–2025',
    ],
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
  {
    company: 'Journalismera',
    role: 'Founder and Producer',
    dates: DATES_TODO,
    description:
      'Produced and invested in a digital content production business, working across journalism, filmmaking, stop motion, and travel to deliver tailored high-quality content across four major media platforms.',
    logo: '/images/logos/journalismera.jpeg',
    highlights: [
      'Worked across media subareas including journalism, filmmaking, stop motion, and travel, delivering tailored high-quality content across 4 major media platforms',
      'Amassed 50k views across social media channels (YouTube, TikTok, Instagram, LinkedIn)',
      'Developed business strategy, sourced clients, and ran event scheduling',
      'Ran the stop-motion and macrophotography social media accounts on YouTube and Instagram respectively',
      'Developed the company website using HTML, CSS, and JavaScript',
    ],
  },
  {
    company: 'Joby for Congress (CA-16)',
    role: 'Creative Producer',
    dates: DATES_TODO,
    location: 'California',
    description:
      'Created, wrote, filmed, and produced four campaign advertisements with Mark Torre, delivered across paid video, connected TV, programmatic, and social.',
    logo: '/images/logos/joby.jpeg',
    highlights: [
      'Collaborated with Mark Torre to create, write, film, and produce four ads for the campaign',
      'YouTube: 935,817 impressions',
      'Premium CTV: 148,477 impressions',
      'Programmatic/Native: 94,659 impressions',
      'Facebook/Instagram: 31,088 impressions',
    ],
  },
];

export const activities = [
  {
    org: 'ACM, Association for Computing Machinery',
    role: 'Member',
    logo: '/images/logos/acm.png',
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
    role: 'Brother Mentor, Member',
    logo: '/images/logos/sigep.jpeg',
  },
  {
    org: 'Stanford Management Group',
    role: 'Consultant (Google, Microsoft, Lumiere client projects)',
    logo: '/images/logos/stanford-marketing.jpeg',
  },
  {
    org: 'Stanford Healthcare Consulting Group',
    role: 'Project Lead (CAUTI reduction initiative)',
    logo: '/images/logos/stanford-health.jpeg',
  },
];
