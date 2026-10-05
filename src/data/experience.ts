export interface ExperienceItem {
  company: string;
  role: string;
  /**
   * Omitted where the range is not yet confirmed. The row renders without a
   * date rather than with a placeholder: a recruiter reading "TODO" on a
   * public page draws a worse conclusion than one reading nothing.
   */
  dates?: string;
  description: string;
  logo?: string;
  location?: string;
  url?: string;
  /**
   * Specifics that would not survive being compressed into `description`:
   * figures and scope. Rendered as a list under the paragraph and read
   * verbatim by api/_prompt.ts, so every number here has to be one Matthew
   * can stand behind on request.
   *
   * Two things stay out. Anything an employer or client would regard as
   * internal — headcounts, rankings, internal event results, named client
   * deliverables — because a standard intern agreement covers it. And bare
   * "Advisor: <name>" attributions, because a third party's name is not
   * Matthew's credential to spend.
   */
  highlights?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Truth Computing',
    role: 'Co-founder, Chief Executive Officer, Chief Technology Officer',
    dates: 'May 2026 – Present',
    location: 'Los Angeles, CA',
    // "Leading a team of twelve" was here. No dated count separating
    // employees, contributors, and advisors exists, so the team is described
    // rather than numbered until one does. Precursor work from 2025 is on the
    // Truth Computing card on the Work page, not folded into this tenure.
    description:
      'Co-founded Truth Computing and lead its company and technical direction. Built the initial foundation of Clientlyy and remained its primary engineer and integrator during early development. My responsibilities span architecture, applied AI, reliability, security, client delivery, commercial discovery, and developing a multidisciplinary team.',
    logo: '/images/logos/truth-computing.png',
    url: 'https://truth-computing.com',
    highlights: [
      'Built and integrated Clientlyy’s early application foundation, document-processing workflows, messaging infrastructure, case-file integrations, and deployment tooling',
      'Established engineering requirements around source evidence, human approval, firm separation, audit history, and explicit failure states',
      'Lead technical discovery and delivery planning across legal, healthcare, logistics, and education work',
      'Take part directly in customer discovery, demonstrations, pilot design, and institutional relationships',
      'Recruit and develop contributors, assign technical ownership, and coordinate company operations and outside counsel',
    ],
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
    company: 'Truth Computing Media',
    role: 'Co-founder',
    dates: 'Jun 2022 – Present',
    location: 'Greater Los Angeles, CA',
    description:
      // "Under the Scattered Mind banner" was here; the newsroom no longer uses
      // that name. Reporting and production are Mark Torre's and stay credited
      // to him.
      'Independent technology journalism for a general audience. Mark Torre leads reporting and production; I lead the technology and editorial systems, including the newsroom site.',
    logo: '/images/logos/truth-computing.png',
    url: 'https://www.youtube.com/@truthcomputingmedia',
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
      // The specific signals captured were named here. Enumerating them reads
      // as a surveillance inventory of someone else's users, which is a worse
      // description of the work than the work deserves.
      'Infrastructure and analytics. Instrumented a behavioral telemetry pipeline across a React/Flask onboarding funnel; designed diagnostic dashboards to surface user trust-barrier signals from latency data.',
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
    // Named at the program level. "Business Leadership Program, Enterprise
    // Architecture" is what the offer and the org chart say, and it is the part
    // a reference check confirms; a shorter title that outruns the record is
    // the thing that costs an offer later.
    role: 'Business Leadership Program — Enterprise Architecture, Generative AI Incubation',
    dates: 'Jun – Aug 2025',
    location: 'New York, NY',
    description:
      'Built and shipped generative AI inside a regulated financial environment, where a system has to satisfy model risk, audit, and review before it reaches anyone. Developed Synced-In, an embedding-based retrieval system for natural-language expert search (Flask, semantic ranking), and benchmarked its retrieval quality against a keyword baseline rather than reporting it on its own terms.',
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
      // The sentence used to end "shaping Meta's platform governance policies",
      // which attributed a third party's policy outcomes to Matthew's data
      // tasks. The lab's work informed that area; his part was the data work.
      'Assisted in data-related tasks on a deliberative-polling study drawing on survey data from over 6,300 participants across 32 countries, 9 regions, and 23 different languages, run on questions of platform governance',
      'Worked on the America in One Room project and the Metaverse project',
    ],
  },
  {
    company: 'Demystifyd',
    role: 'First Product Manager',
    dates: 'Feb – Sep 2024',
    location: 'Dallas, TX (Remote)',
    description:
      'Led the development of multiple features for a platform serving foreign nationals seeking visa-sponsoring employers, working in agile methodologies, data analysis, and product design; platform launched June 2024.',
    logo: '/images/logos/demystifyd.jpeg',
    url: 'https://www.demystifyd.com/',
    highlights: [
      // Active-user and conversion figures were here. Those are a private
      // company's business metrics, not Matthew's to publish; the feature work
      // is the credential either way.
      'Led the development of multiple features working with agile methodologies, data analysis, and product design to increase user engagement',
      'Authored the Product Requirements Document (PRD) for multiple features, covering feature overview, target audience, user research, A/B testing, usability studies, technical requirements, and go-to-market strategy',
      'Collaborated with the Founder/CTO, Marketing, and UX Designers to execute six months of growth strategy including content calendars, virtual conferences, and sponsorship management',
    ],
  },
  {
    company: 'Stanford Undergraduate Research Association',
    role: 'Research Conference Co-Director',
    dates: 'Oct 2023 – Sep 2024',
    location: 'Stanford, CA',
    description:
      // "The largest undergraduate research conference at Stanford" was here.
      // It is a superlative about someone else's event that cannot be produced
      // on request; the scale below establishes the same thing from figures.
      'Directed Stanford’s undergraduate research conference across a 24-week project, overseeing applications, venues, catering, programming, publicity, and coordination with the Office of Student Engagement.',
    logo: '/images/logos/sura.jpeg',
    url: 'https://sura.stanford.edu/',
    highlights: [
      'Convened over 90 undergraduate researchers from 40+ institutions presenting across Computational Sciences, Experimental Life Sciences, Experimental Physical Sciences, Humanities/Arts, and Qualitative/Quantitative Social Sciences',
      'Oversaw four research sub-committees and 15 student interns, and held deliverables to schedule',
      // The seven panelists were named here, including a Nobel Laureate.
      // Their names are their own credential, not Matthew's to spend, and the
      // work — curating the programming — is the part that is his.
      'Curated the keynote programming and coordinated with a panel of Stanford faculty and a Nobel Laureate',
    ],
  },
  {
    company: 'Stanford Management Group',
    role: 'Project Manager',
    location: 'Stanford, CA',
    // Clients are described by sector, not by name. A student consulting group
    // engages under the client's terms, and the method — team, research volume,
    // how a recommendation got built — is the part that is Matthew's to tell
    // and the part a prospective client actually wants to read.
    description:
      'Led an eight-week engagement for an education technology client, managing a team of six consultants through an expansion into new verticals. Also consulted for two large technology companies.',
    logo: '/images/logos/stanford-marketing.jpeg',
    highlights: [
      'Led a team of 6 consultants across an 8-week engagement, holding alignment on deliverables, primary research directions, and recommendation frameworks',
      'Synthesized 30+ user interviews and 140+ primary research surveys into recommendations the client could act on directly',
    ],
  },
  {
    company: 'Stanford Healthcare Consulting Group',
    role: 'Project Lead',
    location: 'Stanford, CA',
    description:
      // "Led Stanford's CAUTI reduction initiative" was here. Stanford Health
      // Care led that initiative; a student consulting team supported it, which
      // is what the highlight below already said. The description now matches.
      'Led the student consulting team supporting Stanford’s Catheter-Associated Urinary Tract Infection (CAUTI) reduction initiative, working from physician interviews and workflow surveys toward evidence-based changes to the electronic health record.',
    logo: '/images/logos/stanford-health.jpeg',
    highlights: [
      'Led a team of 5 consultants on the Catheter-Associated Urinary Tract Infection (CAUTI) reduction initiative, synthesizing and analyzing 15+ physician interviews and 3 workflow sentiment surveys',
      'Proposed and substantiated 3 evidence-based interventions for user interface improvements in the Electronic Health Record (EHR)',
      // The hospital's own SIR target for the fiscal year was in this line. A
      // named hospital's internal quality goal is theirs to publish, not a
      // student consultant's, and the strategy is the credential regardless.
      'Developed an implementation strategy for physician workflow optimization, drafting fishbone diagrams and sustainability plans against the initiative’s infection-rate reduction target',
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
    role: 'Campaign Associate',
    location: 'California',
    description:
      'Created, wrote, filmed, and produced four campaign advertisements with Mark Torre, delivered across paid video, connected TV, programmatic, and social.',
    logo: '/images/logos/joby.jpeg',
    highlights: [
      'Collaborated with Mark Torre to create, write, film, and produce four ads for the campaign',
      // Per-channel impression counts were here. They are the campaign's media
      // performance data rather than Matthew's, and the production credit does
      // not depend on them.
      'Distributed across paid video, connected TV, programmatic and native, and Facebook and Instagram',
    ],
  },
];

export const activities = [
  {
    org: 'ACM, Association for Computing Machinery',
    role: 'Member',
    logo: '/images/logos/acm.png',
    url: 'https://www.acm.org/',
  },
  {
    org: 'Stanford Undergraduate Research Association',
    role: 'Professional Development Chair, Research Conference Co-Director',
    logo: '/images/logos/sura.jpeg',
    url: 'https://sura.stanford.edu/',
  },
  {
    org: 'AISES',
    role: 'Member',
    logo: '/images/logos/aises.jpeg',
    url: 'https://aises.org/',
  },
  {
    org: 'Sigma Phi Epsilon',
    role: 'Brother Mentor, Member',
    logo: '/images/logos/sigep.jpeg',
    url: 'https://sigep.org/',
  },
  {
    org: 'Stanford Management Group',
    role: 'Project Manager, Consultant',
    logo: '/images/logos/stanford-marketing.jpeg',
    url: 'https://www.stanfordmanagementgroup.com/',
  },
  {
    // SHCG has no public site of its own; its LinkedIn page is the org's
    // only durable public presence.
    org: 'Stanford Healthcare Consulting Group',
    role: 'Project Lead (CAUTI reduction initiative)',
    logo: '/images/logos/stanford-health.jpeg',
    url: 'https://www.linkedin.com/company/the-stanford-healthcare-consulting-group',
  },
];
