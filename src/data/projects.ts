/**
 * `text` is rendered as text, never as markup. An `html` escape hatch used to
 * exist here for one subscript; it was removed so the card has no raw-HTML
 * sink at all rather than a disused one waiting to be reused carelessly.
 */
export interface ResultItem {
  text: string;
  metric?: string;
}

export interface ProjectTldr {
  summary: string;
  signals: string[];
  skills: string[];
}

/**
 * Maturity, stated with a word rather than a color so it survives a screen
 * reader, a grayscale print, and a reader who skims. The definitions are the
 * ones in private/CLAIM_REGISTER.md; a label is never upgraded here ahead of
 * the evidence there.
 *
 *   Delivered       the scoped deliverable was completed and handed over
 *   Live            a deployed artifact exists; says nothing about outcomes
 *   In development  implemented pieces exist, scope is incomplete
 *   Prototype       demonstrates a limited workflow or architecture
 *   Research        experiments, evaluation artifacts, working drafts
 *   Planned         a defined intention with nothing implemented yet
 */
export type Status = 'Delivered' | 'Live' | 'In development' | 'Prototype' | 'Research' | 'Planned';

/** One part of a larger case study, with its own maturity where it differs from the whole. */
export interface ProjectSection {
  heading: string;
  status?: Status;
  body: string;
}

export interface Project {
  id: string;
  /**
   * Ids this record was previously published under. Each still resolves as an
   * anchor on the Work page, so an old /work#ross link lands on Clientlyy.
   */
  legacyIds?: string[];
  title: string;
  /** A short line under the title: what the thing is, or what it used to be called. */
  subtitle?: string;
  oneliner: string;
  problem: string;
  /**
   * The setting the work was done in. Omitted where that is not settled — the
   * badge then does not render, which is quieter and more credible than a
   * card telling a visiting client that its own author has not filled it in.
   */
  context?: string;
  year: string;
  results: ResultItem[];
  tags: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
  tldr: ProjectTldr;
  /** Named when the work was not solo. */
  coauthors?: string[];
  /** What Matthew specifically owned on a team project. */
  contribution?: string;
  /** Caveats about provenance, scope, or what is not published. */
  note?: string;
  /** Top-level maturity. Mixed projects explain component differences in `sections`. */
  status?: Status;
  /** When the status and the claims on the card were last checked, e.g. "October 2026". */
  asOf?: string;
  /** Longer case-study detail, rendered after `results`. */
  sections?: ProjectSection[];
  /** What the card does not claim. Rendered as its own list so it cannot be skimmed past as a footnote. */
  limits?: string[];
}

export const projects: Project[] = [
  {
    id: 'truth-computing',
    title: 'Truth Computing',
    oneliner: "Approval-gated infrastructure for automated client communication in professional settings, where the message goes out under a person's name.",
    problem: 'What has to be true before a professional will let an AI system speak to their client in their name?',
    context: 'Co-founder, CEO & CTO',
    year: '2025–2026',
    status: 'Live',
    asOf: 'October 2026',
    results: [
      {
        text: 'Designed an approval-gated architecture for high-consequence automated communication: the system prepares the communication, and a human approval step stands between the model and the client',
      },
      {
        text: 'Model output is verified against the source documents it draws from before delivery rather than checked after the fact',
      },
      {
        text: 'Applied the same architecture to a second, unrelated vertical, a clinical workflow prototype, which tested whether the approval and verification structure was general or specific to the first domain',
      },
      {
        text: 'Wrote an engineering testing standard organized around claim-level invariants, so tests assert properties that must hold of what the system claims rather than spot-checking sampled outputs',
      },
    ],
    tags: ['Applied AI', 'Verification', 'Human Approval', 'Product', 'Company Building'],
    links: [
      { label: 'truth-computing.com', url: 'https://www.truth-computing.com/' },
    ],
    note: 'The work is proprietary and not published here. This card stays at case-study altitude on purpose: no architecture detail, no thresholds, no customer names, and no figures. It is live as the design under Clientlyy; the clinical application is a prototype, described below.',
    tldr: {
      summary: "Infrastructure for letting an AI system communicate with a professional's clients under that professional's name, built around human approval before delivery and verification of output against source documents.",
      signals: [
        'Treated approval as architecture rather than as a review habit, so nothing reaches a client without a person clearing it',
        'Verification runs against the source documents before delivery, which is where a wrong claim is still cheap to catch',
        'Ported the same structure to a second, unrelated vertical to test whether it generalized',
        'Wrote a testing standard around claim-level invariants instead of output sampling',
      ],
      skills: ['Systems Architecture', 'Applied AI', 'Verification Design', 'Product Leadership', 'Company Building'],
    },
  },
  {
    id: 'clientlyy',
    // Published as "Ross (Colossus OS)" until October 2026. Colossus is a
    // separate research record, so the name came off; the id still resolves.
    legacyIds: ['ross'],
    title: 'Clientlyy',
    subtitle: 'Legal client communication infrastructure · Developed initially under the Ross name',
    oneliner: 'Software for personal-injury firms that connects document processing, drafting, attorney review, client messaging, and audit history in one workflow.',
    problem: 'Personal-injury firms need to keep clients informed while controlling what is communicated, which sources support it, and who authorizes delivery.',
    context: 'Founder and founding engineer · Truth Computing',
    year: 'June 2026 – present',
    status: 'Live',
    asOf: 'October 2026',
    coauthors: ['Mark Torre', 'Johnathan Fierro', 'Nathan Berio'],
    // The split is the one the team wrote down in its August 4, 2026 handoff
    // documents, not a reconstruction from commit counts.
    contribution:
      'I wrote the initial snapshot on June 10, 2026, set the architecture, and was the primary engineer and integrator through August 2026, owning the backend, data layer, billing, infrastructure, and security. Mark Torre led the product surface, copy, and design and built document-change detection and alerting. Johnathan Fierro owned model evaluation and cost and contributed to the Drive integration and per-firm provisioning. Nathan Berio worked on test-record realism and compliance documentation and fixed two send-path race conditions',
    results: [
      {
        text: 'Client messages pass through attorney review and consent checks before delivery by default',
      },
      {
        text: 'Drafts are built from the firm’s own case files and checked against those sources; the medical chronology cites the source passage for each finding',
      },
      {
        text: 'Live at app.clientlyy.com, with SMS as the production channel',
      },
    ],
    sections: [
      {
        heading: 'Product foundation',
        status: 'Live',
        body: 'I built the first versions of sign-in, the data layer with firm-level separation, onboarding, provisioning of a new firm after checkout, and per-firm feature flags. Later work on these pieces was shared; one-command per-firm deployment, for example, is Johnathan Fierro’s.',
      },
      {
        heading: 'Document intelligence',
        status: 'Live',
        body: 'Case files are read from PDFs, including scanned pages through OCR, common image formats, Word documents, and plain text. On top of extraction I built document classification, the cited medical chronology, retrieval over the firm’s own case files, drafting that is checked against its sources, per-job model routing, and model cost tracking.',
      },
      {
        heading: 'Integrations',
        status: 'In development',
        body: 'Google Drive is implemented and picks up new case documents automatically. Connections to practice-management systems and lawyers’ mailboxes are in development and have not run against a live account.',
      },
      {
        heading: 'Communication',
        status: 'Live',
        body: 'SMS is the production channel, with consent capture, opt-out handling, and per-client channel preferences. Email delivery is built. Voice calling is not part of the product.',
      },
      {
        heading: 'Reliability',
        status: 'Live',
        body: 'In August 2026 I ran a reliability audit that closed the paths to double sends, lost replies, and lost documents, and built the invariant test suite and a one-command pipeline harness that CI runs on every change. CI was passing on the main branch as of October 4, 2026.',
      },
      {
        heading: 'Security',
        status: 'Live',
        body: 'I own security engineering: firm isolation, authentication and session controls, verification of incoming webhooks, limits on where protected health information can be sent, and a tamper-evident audit history. Each is a control on a specific action. Clientlyy holds no SOC 2, HIPAA, or other certification.',
      },
      {
        heading: 'Infrastructure',
        status: 'Live',
        body: 'Deployment, release tracking, and backup tooling, and the move from the Ross domain to app.clientlyy.com at the end of August 2026. A migration to AWS is planned and is not running.',
      },
      {
        heading: 'Commercial engineering',
        status: 'In development',
        body: 'Checkout, trials, per-case billing, and pilot entitlements are built. That is billing capability, and this page reports no revenue. I take part directly in demonstrations, onboarding, and pilot scoping with firms.',
      },
      {
        heading: 'Current development, October 2026',
        status: 'In development',
        body: 'Engineering continues on integrations and on per-firm controls for handling protected health information, alongside commercial validation with firms. A learned message-selection policy is built but runs in shadow mode: it records what it would choose and does not choose what is sent. Whether it reduces complaints, workload, or case duration has not been measured.',
      },
      {
        heading: 'Authorship note',
        body: 'Across all branches from June 10 to August 22, 2026, I authored 402 of 504 non-merge commits, or 509 of 621 counting merges, measured by author email on October 5, 2026. Merges are counted separately because integrating other people’s branches was part of my role. Commit counts do not measure value, code quality, or how much any teammate’s work mattered.',
      },
    ],
    limits: [
      'No customers, revenue, or client outcomes are claimed here.',
      'No security certification of any kind.',
      'Integrations marked in development have not run against a live account.',
      'The message-selection policy runs in shadow mode and makes no decisions about what is sent.',
    ],
    tags: ['Applied AI', 'Document Intelligence', 'OCR', 'Messaging Infrastructure', 'Security Engineering', 'Legal Tech', 'Systems Architecture'],
    links: [
      { label: 'truth-computing.com', url: 'https://www.truth-computing.com/' },
    ],
    note: 'Compiled from the repository’s main branch and history as of October 4–5, 2026, and from the team’s August 4, 2026 handoff documents.',
    tldr: {
      summary: 'Client-communication software for personal-injury firms. It reads case files, drafts updates against cited sources, and by default sends nothing to a client until it clears attorney review and consent checks. I wrote its initial foundation and was the primary engineer and integrator through August 2026.',
      signals: [
        'Wrote the initial snapshot and owned backend, data layer, billing, infrastructure, and security through August 2026',
        'Built the document pipeline: OCR, classification, a cited medical chronology, source-checked drafting, model routing, and cost tracking',
        'Closed double-send, lost-reply, and lost-document paths in an August 2026 reliability audit backed by invariant tests in CI',
        'States what is not live: practice-management and mailbox connections in development, the selection policy in shadow mode',
      ],
      skills: ['Systems Architecture', 'Applied AI', 'Security Engineering', 'Integrations', 'Reliability Engineering', 'Technical Leadership'],
    },
  },
  // ── Current Truth Computing engagements ──────────────────────────────────
  // Clients are described by sector, never named: see the rule in
  // api/_prompt.ts and the sourcing in private/CLAIM_REGISTER.md.
  {
    id: 'practice-modernization',
    title: 'Optometry practice modernization',
    oneliner: 'A patient-facing website and staff console for an independent optometry practice, built as the first phase of a broader modernization engagement.',
    problem: 'A small practice loses patients at the first step: finding out what is offered, whether their insurance is taken, and how to get an appointment, often in a language other than English.',
    context: 'Lead engineer · Truth Computing',
    year: 'July 2026 – present',
    status: 'Delivered',
    asOf: 'October 2026',
    contribution: 'Sole engineer on the website and staff console; I also scoped the engagement with the practice',
    results: [
      {
        text: 'Delivered a six-page patient site in August 2026: services, insurance and payment, eyewear, the practice, and contact and booking, with an insurance plan checker and prices shown only where the practice has confirmed them',
      },
      {
        text: 'States that care is offered in English and Spanish, and the booking request form asks for a preferred language; the site itself is in English',
      },
      {
        text: 'Local search groundwork: structured data, canonical redirects, and a sitemap',
      },
      {
        text: 'Booking is a request form: requests land in a staff console and staff call the patient to confirm. There is no live scheduling integration',
      },
      {
        text: 'Assessment of the practice’s existing systems (practice management, patient messaging, phones, and records) is the next phase and has not started',
      },
    ],
    tags: ['Healthcare', 'Web', 'Local Search', 'Patient Intake', 'Client Delivery'],
    links: [],
    note: 'The practice is not named here. The website is delivered; broader integrations depend on system access and on the scope the practice chooses.',
    tldr: {
      summary: 'A patient-facing website and staff console for an independent optometry practice: services, insurance, and booking requests that staff confirm by phone. I built it end to end and it was delivered in August 2026; assessing the practice’s other systems is the next phase and has not started.',
      signals: [
        'Built and delivered the site and staff console as the sole engineer',
        'Showed prices only where the practice had confirmed them, rather than publishing estimates',
        'Kept booking as a staffed request until a scheduling integration is scoped',
      ],
      skills: ['Client Delivery', 'Web Engineering', 'Healthcare Workflows', 'Scoping'],
    },
  },
  {
    id: 'clinical-workflow',
    title: 'Clinical workflow prototype',
    oneliner: 'A review-gated patient-messaging workflow for an optometry practice, built to test whether the approval architecture behind Clientlyy holds up in a clinical setting.',
    problem: 'In a clinic, the wrong automated message can reach a patient before anyone with a license has seen it. What does a workflow look like in which that cannot happen by configuration?',
    context: 'Architect and engineer · Truth Computing',
    year: 'July 2026 – present',
    status: 'Prototype',
    asOf: 'October 2026',
    contribution: 'Designed and built it alone',
    results: [
      {
        text: 'Messages are classed by consequence; the highest class enters a clinical hold that only the optometrist can release, under any review setting',
      },
      {
        text: 'Staff choose how much review applies, from reviewing every message to reviewing sensitive ones only, and a consent gate sits in front of every send',
      },
      {
        text: 'History is kept in a tamper-evident audit log, so an edit to the record after the fact is detectable',
      },
      {
        text: 'Its test suite was passing as of September 27, 2026',
      },
    ],
    limits: [
      'No messaging provider is connected, so nothing is sent to patients.',
      'No patient data has been used.',
      'A tested hold is not a deployed clinical service, and no patient outcome is claimed.',
    ],
    tags: ['Healthcare', 'Human Review', 'Audit Trails', 'Consent', 'Prototype'],
    links: [],
    note: 'Kept separate from the practice website above. The architecture is described at this level only; client-specific design is not published.',
    tldr: {
      summary: 'A prototype patient-messaging workflow in which the highest-consequence messages cannot leave without the optometrist releasing them, built to test the approval architecture in a clinic. Tested; not connected to any messaging provider and not used with patient data.',
      signals: [
        'Made the clinical hold a property of the system rather than a setting staff can turn off',
        'Kept a tamper-evident history of every action',
        'Stated the prototype’s limits: no provider connected, no patient data',
      ],
      skills: ['Systems Architecture', 'Healthcare Workflows', 'Safety Design', 'Testing'],
    },
  },
  {
    id: 'haul',
    title: 'Haul',
    subtitle: 'Freight workflow and fraud-review prototype',
    oneliner: 'Discovery, requirements, and a prototype for a freight operator: a workflow for reviewing suspicious loads and the records behind them.',
    problem: 'Freight fraud reaches a small operator through ordinary-looking loads and paperwork. What would a review workflow need to hold, and who decides, before money or cargo moves?',
    context: 'Product owner · Truth Computing',
    year: 'September 2026 – present',
    status: 'Prototype',
    asOf: 'October 5, 2026',
    contribution: 'On-site operator discovery, the product requirements, prototype direction, and engineering review. I built the earlier clickable demo; I am the reviewer, not the author, of the new foundation',
    results: [
      {
        text: 'Ran on-site discovery with the operator in September 2026 and wrote the product requirements from it',
      },
      {
        text: 'Built a clickable demo of the workflow direction',
      },
      {
        text: 'As of October 5, 2026, the foundation exists in a working tree under review: a backend and database, separation between companies, sign-in and session controls, and a tamper-evident activity history',
      },
    ],
    limits: [
      'The end-to-end fraud-review workflow is not built yet.',
      'Nothing here verifies carriers, prevents fraud, or connects to dispatch systems today.',
      'No prevented-loss or savings figures.',
    ],
    tags: ['Logistics', 'Fraud Review', 'Discovery', 'Requirements', 'Prototype'],
    links: [],
    note: 'The operator is not named. Status is from the October 5, 2026 engineering assessment.',
    tldr: {
      summary: 'A fraud-review prototype for a freight operator, from on-site discovery and requirements to a reviewed backend foundation. The end-to-end review workflow is not built yet.',
      signals: [
        'Grounded the requirements in on-site observation of the operator’s work',
        'Separated what exists (backend, company separation, sign-in, activity history) from what does not (the review workflow)',
      ],
      skills: ['Discovery', 'Product Requirements', 'Engineering Review', 'Logistics'],
    },
  },
  {
    id: 'school-district-consulting',
    title: 'School-district technology consulting',
    oneliner: 'Technology and AI consulting for a public school district, alongside work on a student-engagement program.',
    problem: 'A district has to decide where software and AI belong in its operations before anyone builds anything, and those decisions reach students and families.',
    context: 'Consulting lead · Truth Computing',
    year: '2026',
    status: 'Planned',
    asOf: 'October 2026',
    contribution: 'Developed the scope of the engagement with district leadership',
    results: [
      {
        text: 'A consulting agreement covers modernizing the district’s digital infrastructure, including software with AI capabilities, and supporting a student-engagement program',
      },
      {
        text: 'The agreement is in the district’s approval process; work under it has not started',
      },
    ],
    limits: [
      'No district-wide implementation, classroom deployment, or delivered component is claimed.',
      'Parent communications, scheduling, and educator support are not part of any delivered work.',
    ],
    tags: ['Education', 'Public Sector', 'AI Assessment', 'Consulting'],
    links: [],
    note: 'The district is not named here.',
    tldr: {
      summary: 'Scoped a technology and AI consulting engagement with a public school district. The agreement is in approval and no work under it has started.',
      signals: ['Developed the scope with district leadership', 'Claims nothing delivered before the agreement is in effect'],
      skills: ['Scoping', 'Public Sector', 'AI Strategy'],
    },
  },
  {
    id: 'truth-academy',
    title: 'Truth Academy',
    oneliner: 'A planned program in which students learn by building real projects, with mentorship and leadership development, organized around Feynman.',
    problem: 'Students who would benefit most from building real technical work are the least likely to be invited into it. What selection, mentorship, and project structure would let them in?',
    context: 'Co-designer · Truth Computing',
    year: '2026',
    status: 'Planned',
    asOf: 'October 2026',
    coauthors: ['Raul Bedolla', 'John Sio'],
    contribution: 'I built Feynman, the platform the program is organized around, and teach its business and technology sessions and connect it to institutions and mentors. Raul Bedolla and John Sio co-own the pilot, and John Sio leads mentorship and character evaluation',
    results: [
      {
        text: 'Program design: selection by nomination and application, project-first learning, mentorship, and service hours',
      },
      {
        text: 'No cohort has run and nominations have not opened',
      },
    ],
    limits: [
      'Cohort size, fellowships, and university relationships are goals, not commitments.',
      'No student outcomes are claimed.',
    ],
    tags: ['Education', 'Mentorship', 'Program Design'],
    links: [],
    tldr: {
      summary: 'A planned project-first program for students, built around Feynman and co-owned by Raul Bedolla and John Sio. No cohort has run.',
      signals: ['Built the platform the program uses', 'Teaches the business and technology sessions'],
      skills: ['Program Design', 'Teaching', 'Education Technology'],
    },
  },
  {
    id: 'colossus',
    title: 'Colossus',
    oneliner: 'Research into an evidence-governed architecture for AI systems that answer questions in specialized fields such as law.',
    problem: 'When a model answers a legal question, what would it take for every statement to be tied to evidence, and how would anyone measure whether that holds?',
    context: 'Researcher · Truth Computing',
    year: '2026',
    status: 'Research',
    asOf: 'October 2026',
    contribution: 'Architecture drafts and the evaluation set; the research briefs were written with Mark Torre',
    results: [
      {
        text: 'Architecture drafts for a multi-agent system that keeps answers tied to evidence',
      },
      {
        text: 'A small blind benchmark set for evaluating answers in legal and adjacent domains',
      },
      {
        text: 'Retrieval experiments on local, non-client data',
      },
    ],
    limits: [
      'No performance results exist yet.',
      'Mechanics are not published here.',
      'Separate from Clientlyy, which was briefly published under a name that included Colossus.',
    ],
    tags: ['Research', 'Evaluation', 'Retrieval', 'Multi-Agent Systems'],
    links: [],
    tldr: {
      summary: 'Research architecture and an evaluation set for evidence-governed AI answers in specialized fields. No results yet.',
      signals: ['Built the evaluation set before claiming any result', 'Kept the research separate from the shipped product'],
      skills: ['Research Design', 'Evaluation', 'Systems Architecture'],
    },
  },
  {
    id: 'truth-computing-media',
    title: 'Truth Computing Media',
    oneliner: 'Independent technology journalism. Mark Torre leads reporting and production; I lead the technology and editorial systems behind it.',
    problem: 'How do you explain the most consequential technology of the moment to a general audience without overstating it?',
    context: 'Co-founder · Technology and editorial systems',
    year: '2022 – present',
    status: 'Live',
    asOf: 'October 2026',
    coauthors: ['Mark Torre'],
    contribution: 'The newsroom site and editorial tooling, and the AI explanations in the coverage; Mark Torre leads field reporting, filmmaking, and production',
    results: [
      {
        text: 'Built the newsroom site in September 2026',
      },
      {
        text: 'Journalism and production credits belong to Mark Torre and are not claimed here',
      },
    ],
    tags: ['Media', 'Journalism', 'Web'],
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/@truthcomputingmedia' },
    ],
    tldr: {
      summary: 'Independent technology journalism. Mark Torre leads reporting and production; I built the newsroom site and lead the technology and editorial systems.',
      signals: ['Built the newsroom site', 'Credits the reporting to the person who did it'],
      skills: ['Web Engineering', 'Editorial Systems'],
    },
  },
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
    links: [],
    note: 'The source repository for this project is not currently public, so the figures above cannot be checked against an artifact from here.',
    tldr: {
      summary: 'Built a Monte Carlo simulation engine in pure Python — no external dependencies. Rigorous statistical methodology throughout: bootstrap confidence intervals, variance reduction, and empirically calibrated distributions from real API data.',
      signals: [
        'Designed a complete discrete-event engine from scratch: min-heap scheduler, DAG task graphs, 5 distribution families with moment-matched parameters',
        "Applied bootstrap CIs on all P10/P50/P90 estimates; CRN variance reduction; Cohen's d + CI overlap to suppress spurious results",
        'Calibration pipeline pulls real cycle-time data from GitHub and Linear APIs to fit distributions — no hand-specified priors',
        'Deterministic Q&A router maps natural-language queries to traceable computations over simulation outputs',
      ],
      skills: ['Systems Design', 'Statistical Rigor', 'Monte Carlo Methods', 'Bootstrap CI', 'API Integration', 'Pure Python'],
    },
  },
  {
    id: 'cs224r',
    title: 'RL Fine-Tuning of Language Models',
    oneliner: 'SFT, IPO, and online RLOO on a verifier-checked arithmetic reasoning task, extended with an Elo-rated curriculum over training prompts.',
    problem: 'In verifier-based RL fine-tuning, most early rollouts earn zero reward. Does ordering training prompts by measured difficulty recover more signal per step than sampling them uniformly?',
    context: 'Deep Reinforcement Learning',
    year: '2025',
    coauthors: ['Donnie Raymond'],
    contribution: 'the SFT training pipeline and the design and implementation of the Elo-based curriculum sampler for RLOO',
    results: [
      {
        text: 'Fine-tuned Qwen 2.5 0.5B on the Countdown arithmetic task across three post-training methods — supervised fine-tuning, IPO preference optimization, and online RLOO — scored by a rule-based verifier that checks formatting, single use of each provided number, and arithmetic equality with the target',
      },
      {
        text: 'The extension replaces uniform prompt sampling in RLOO with an Elo curriculum: every training prompt carries its own rating and the agent carries one moving rating, updated from the fraction of a sampled rollout group that solved the prompt. The verifier, rollout generation, and RLOO loss are left unchanged, which isolates the effect of prompt ordering from everything else',
      },
      {
        text: 'SFT checkpoint evaluated on 50 held-out Countdown prompts at 16 samples each, 800 rollouts in total: ',
        metric: 'pass@1 0.36, pass@8 0.68, pass@16 0.78',
      },
      {
        text: 'Across those 800 rollouts, sample-level exact correctness was 0.311 and the mean verifier score was 0.371, so the pass@16 figure reflects sampling breadth rather than per-attempt reliability',
      },
    ],
    tags: ['RLOO', 'IPO', 'Curriculum Learning', 'Elo Rating', 'Qwen 2.5', 'PyTorch', 'Verifier-Based Reward', 'LLM Post-Training'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/RL-Fine-Tuning-of-Language-Models-Torre-Raymond' },
    ],
    note: 'The repository holds the proposal, the SFT milestone write-up, and per-checkpoint evaluation outputs for the SFT baseline, IPO, uniform RLOO, and the curriculum runs. It carries no final write-up of the curriculum comparison, so the pass@k figures above are the SFT baseline and the curriculum result is not stated here.',
    tldr: {
      summary: 'Post-trained a 0.5B language model on a verifier-checked arithmetic task through SFT, IPO, and online RLOO, then replaced uniform prompt sampling with an Elo-rated difficulty curriculum to test whether ordering the data improves sample efficiency.',
      signals: [
        'Built the full post-training stack — SFT, IPO, and online RLOO against a rule-based verifier — on Qwen 2.5 0.5B',
        'Designed the extension to change only the sampling distribution, holding verifier, rollouts, and loss fixed so the comparison isolates data ordering',
        'Rated prompts and the agent on a shared Elo scale updated from group solve fraction, so difficulty is measured against the current policy rather than assigned by hand',
        'SFT baseline reported at pass@1 0.36 and pass@16 0.78 over 800 rollouts, with per-attempt correctness stated alongside it',
      ],
      skills: ['Reinforcement Learning', 'LLM Post-Training', 'RLOO', 'Curriculum Design', 'PyTorch', 'Experimental Control'],
    },
  },
  {
    id: 'cs238',
    title: 'Cognitive Effort Allocation Under Bounded Rationality',
    oneliner: 'A POMDP testbed for decision fatigue, comparing bandit policies on how they trade deliberation against accumulated effort.',
    problem: 'How should an agent allocate cognitive effort between low-effort habitual choices and high-effort deliberation when fatigue accumulates over a time horizon?',
    context: 'Decision Making Under Uncertainty',
    year: '2025',
    coauthors: ['Kim Ngo'],
    results: [
      {
        text: 'Built a stochastic decision-making environment with a latent fatigue state tied to varying task difficulty; two action modes (habitual and deliberate) carry different effort-reward tradeoffs, and each mode feeds back into fatigue',
      },
      {
        text: 'Compared four bandit policies — epsilon-greedy, LinUCB, Thompson Sampling, and UCB — logging reward, fatigue, and efficiency trajectories across episodes of roughly 140 time steps',
      },
      {
        text: 'Efficiency (reward per unit effort) separated the policies: Thompson Sampling converged near 1.9, LinUCB near 1.7, and epsilon-greedy settled around 1.5',
      },
      {
        text: 'Epsilon-greedy drove fatigue to saturation near 1.0, indicating over-deliberation without recovery; LinUCB stabilized slightly below saturation, reflecting more balanced action selection',
      },
      {
        text: 'Limitations stated in the report rather than omitted: a minimal belief representation with no full particle filter, binary task difficulty, and no explicit rest or delegation actions',
      },
    ],
    tags: ['POMDP', 'Contextual Bandits', 'LinUCB', 'Thompson Sampling', 'Python', 'Decision Theory', 'Behavioral Modeling'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/cs238_final' },
      { label: 'Paper', url: '/papers/bounded-rationality.pdf' },
    ],
    tldr: {
      summary: 'Modeled decision fatigue as a partially observable environment and compared four bandit policies on how efficiently each spends effort as fatigue accumulates.',
      signals: [
        'Built the environment from scratch: latent fatigue state, varying task difficulty, and habitual versus deliberate action modes with distinct effort costs',
        'Compared epsilon-greedy, LinUCB, Thompson Sampling, and UCB on reward, fatigue, and efficiency — Thompson Sampling held the highest efficiency near 1.9',
        'Named the limits plainly in the write-up: no particle filter, binary difficulty, and no rest action, each listed as future work',
      ],
      skills: ['Reinforcement Learning', 'POMDP Theory', 'Contextual Bandits', 'Experimental Design', 'Behavioral Modeling', 'Python'],
    },
  },
  {
    id: 'cs244c',
    title: 'Distributed Rate Limiter: Flow Proportional Share',
    oneliner: 'Full C++ replication of Cloud Control distributed rate limiting (Raghavan et al., SIGCOMM 2007), with analysis of convergence failure modes.',
    problem: 'Can the FPS and GRD algorithms from Raghavan et al. be faithfully reproduced in C++, and what implementation gaps does replication expose?',
    context: 'Advanced Networking and Distributed Systems',
    year: '2025',
    coauthors: ['Amy Chang', 'Andy Wang'],
    results: [
      {
        text: 'Reimplemented all four algorithms in C++: Central Token Bucket (CTB), Global Token Bucket (GTB), Global Random Drop (GRD), Flow Proportional Share (FPS); gossip via UDP datagrams; Redis-based peer discovery; NFQUEUE packet verdicts',
      },
      {
        text: "Reproduced the paper's Figure 3 setup under Mininet: a 10 Mbps global limit across two relays, seven unbottlenecked flows to relay 1 and three to relay 2, at 40 ms inter-relay RTT",
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
        text: 'GRD stabilization required EWMA smoothing (alpha=0.3), early-drop at 90% of limit, and a 50% more aggressive drop rate; gossip lag identified as root cause of oscillation via convergence timeline analysis',
      },
      {
        text: 'GRD achieved better per-flow Jain fairness than FPS, matching the paper; FPS achieved smoother convergence with a more stable inter-limiter split',
      },
      {
        text: 'Gossip scalability: branching factor 2 gives O(log N) convergence; 1,000 relays converge in ~10 rounds at 100ms each',
      },
    ],
    tags: ['C++', 'Distributed Systems', 'Rate Limiting', 'FPS', 'GRD', 'Mininet', 'Gossip Protocol', 'NFQUEUE', 'Replication Study'],
    links: [
      { label: 'Paper', url: '/papers/distributed-rate-limiter.pdf' },
    ],
    tldr: {
      summary: 'Replicated a SIGCOMM 2007 distributed rate-limiting paper in C++ end-to-end — real UDP gossip, Redis peer discovery, kernel-level packet verdicts. Diagnosed why GRD oscillated and fixed it.',
      signals: [
        'Implemented all 4 algorithms from the paper with production-level networking: UDP gossip, Redis, NFQUEUE packet verdicts in Linux',
        "FPS converged correctly to 6.2/3.6 Mbps; traced GRD's ~20 Mbps overshoot to gossip lag via convergence timeline analysis",
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
    context: 'Computer Vision',
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
    note: 'Neither the report nor the source for this project is published here, so the figures above cannot be checked against an artifact.',
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
    oneliner: 'BERT multi-label classifier feeding a reinforcement learning agent that chooses adaptive follow-ups during PM interview practice.',
    problem: 'Can a language classifier and a reinforcement learning agent be combined to produce adaptive, multi-dimensional evaluation of open-ended interview responses?',
    context: 'Deep Learning',
    year: '2024',
    coauthors: ['Tanaya Yadav', 'Arpit Ranasaria'],
    contribution: 'model fine-tuning, hyperparameter optimization, research, and report writing',
    results: [
      {
        text: 'BERT fine-tuned for 4-head multi-label classification across clarity, completeness, product thinking, and feasibility on a 1-5 scale',
      },
      {
        text: 'Per-label F1: completeness 0.859, product thinking 0.855, clarity 0.827, feasibility 0.766',
      },
      {
        text: 'The RL agent (Stable-Baselines3) takes the BERT embedding plus the four classifier scores as state and selects follow-up actions such as asking for details, reframing, or moving on; mean episode reward rose from ',
        metric: '-34.7 at episode 4 to 41.3 at episode 72',
      },
      {
        text: 'Agent F1 = 0.749; the classifier predicted extreme scores (1 and 5) reliably and struggled with intermediate labels (3 and 4), which the report attributes to overlapping feature representations and limited training data',
      },
    ],
    tags: ['BERT', 'Multi-Label Classification', 'PyTorch', 'Stable-Baselines3', 'NLP', 'Reinforcement Learning'],
    links: [
      { label: 'Paper', url: '/papers/prodprepai.pdf' },
    ],
    tldr: {
      summary: 'A fine-tuned BERT classifier scores interview answers on four dimensions, and a reinforcement learning agent uses those scores to decide what to ask next. Two models, one system.',
      signals: [
        'BERT fine-tuned for 4-head multi-label classification; F1 from 0.766 to 0.859 across the four dimensions',
        'Classifier output feeds the agent as state, so language understanding drives the follow-up decision',
        'Report is explicit about where the model is weak: intermediate scores confuse it, and the training set was small',
      ],
      skills: ['NLP', 'BERT Fine-tuning', 'Multi-Label Classification', 'PyTorch', 'Deep Reinforcement Learning'],
    },
  },
  {
    id: 'cs221',
    title: 'Benchmarking ML Models for UFC Fight Outcome Prediction',
    oneliner: 'Replication of the Hitkul et al. (2019) logistic regression baseline on 4,896 UFC fights, benchmarked against feed-forward networks.',
    problem: 'Can the Hitkul et al. baseline be faithfully replicated, and do deeper architectures provide a generalization advantage at this dataset scale?',
    context: 'Artificial Intelligence',
    year: '2024',
    coauthors: ['Luis Arizmendi', 'Austin Salcedo', 'Saba Weatherspoon'],
    results: [
      {
        text: "Dataset: 4,896 UFC fights, 119 attributes (physical attributes, records, rankings, fight odds); label encoding, NA imputation, and normalization following the reference paper's feature engineering",
      },
      {
        text: 'Logistic regression accuracy: ',
        metric: '66.4% (reference paper: 66.7%)',
      },
      {
        text: 'Feed-forward NN (128->64 ReLU): 63.4%; the same network with dropout layers: 65.2%; logistic regression outperformed both deeper architectures',
      },
      {
        text: 'Comparing training against validation loss indicated some overfitting, which the report flags rather than sets aside',
      },
      {
        text: 'Finding: at n=4,896 the dataset size, not the architecture, is the binding constraint on accuracy',
      },
    ],
    tags: ['Logistic Regression', 'Neural Networks', 'Replication Study', 'PyTorch', 'Python', 'Evaluation Methodology'],
    links: [
      { label: 'Paper', url: '/papers/cs221-final-report.pdf' },
    ],
    note: 'The report gives two different accuracies for logistic regression — 66.4% in its results table and 63.4% in its discussion. The table value is used here.',
    tldr: {
      summary: 'Replicated a published ML baseline and showed a deeper network does not generalize better when dataset size is the binding constraint.',
      signals: [
        'Reproduced the Hitkul et al. logistic regression baseline at 66.4% against a 66.7% reference',
        'Tested a feed-forward net and a dropout-regularized variant; both underperformed the linear baseline',
        'Right conclusion drawn: at n=4,896 the answer is more data, not more layers',
      ],
      skills: ['Evaluation Methodology', 'Replication Study', 'Logistic Regression', 'PyTorch', 'Statistical Thinking', 'Python'],
    },
  },
  {
    id: 'strabismus',
    title: 'Strabismus Baseline Classifier',
    oneliner: 'Baseline computer vision classifier for strabismus screening from eye images, written as research code inside a Stanford School of Medicine effort on differentiating normal eye movements from cranial nerve palsies.',
    problem: 'What baseline does a straightforward image classifier establish for detecting ocular misalignment, and what would have to be true before such a model belonged anywhere near a clinic?',
    context: 'AI Researcher, Stanford Medicine',
    year: '2025',
    results: [
      {
        text: 'Part of a wider effort developing deep learning solutions to differentiate between normal eye movements and cranial nerve palsies',
      },
      {
        text: 'Built and trained a baseline image classifier for strabismus (ocular misalignment) as part of computer vision research at Stanford Medicine',
      },
      {
        text: 'Implemented as an annotated notebook so preprocessing, the training loop, and evaluation are readable end to end rather than hidden behind a framework',
      },
      {
        text: 'Scoped deliberately as a baseline: the purpose is to establish a floor that later work has to beat, not to claim a clinical result',
      },
    ],
    tags: ['Computer Vision', 'Medical Imaging', 'Classification', 'PyTorch', 'Jupyter', 'Research Code'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/Strabismus-Baseline-Classifier' },
    ],
    note: 'Research code. Not a medical device, not FDA-cleared, and not for clinical use. The repository carries no write-up, so no performance figures are claimed here.',
    tldr: {
      summary: 'A baseline classifier for detecting strabismus from eye images, written as research code at Stanford Medicine inside a broader effort to tell normal eye movements apart from cranial nerve palsies, and published with explicit limits on how it may be used.',
      signals: [
        'Sits under a wider research aim: deep learning that differentiates normal eye movements from cranial nerve palsies',
        'Computer vision applied to a real clinical screening question, built inside a medical research setting',
        'Published as a readable notebook rather than an opaque pipeline',
        'Carries an explicit non-clinical disclaimer instead of implying medical validity it does not have',
      ],
      skills: ['Computer Vision', 'Medical Imaging', 'Research Code', 'PyTorch', 'Responsible Scoping'],
    },
  },
  {
    id: 'swish',
    title: 'Swish: Shot Outcome Classification from Video',
    oneliner: 'A ResNet-18 video classifier that labels a basketball clip made or missed, served behind a FastAPI inference endpoint.',
    problem: 'Can a small video model decide whether a shot went in from the clip alone, without ball tracking, pose estimation, or court geometry?',
      year: '2025–2026',
    results: [
      {
        text: 'ResNet-18 backbone applied per frame with temporal average pooling: 16 frames sampled evenly across the clip, resized to 224x224 and ImageNet-normalized, pooled to a single 512-dimensional feature, then classified made or missed',
      },
      {
        text: 'PyTorch training loop over a directory of made/ and missed/ clips read with OpenCV, using an 80/20 train/validation split, Adam, and cross-entropy loss, with dataset path and hyperparameters set through environment variables so the same script runs locally and in Colab',
      },
      {
        text: 'Served with FastAPI: a /predict endpoint accepts an uploaded .mp4 or .mov and returns a label with a confidence score; the model loads once and is reused across requests, and a /health endpoint reports device and load state',
      },
      {
        text: 'Trained weights are committed to the repository, so the endpoint runs without a training step first',
      },
    ],
    tags: ['Video Classification', 'ResNet-18', 'Temporal Pooling', 'PyTorch', 'FastAPI', 'OpenCV', 'Inference API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/swish-backend' },
    ],
    note: 'The repository carries no write-up and no reported accuracy, so no performance figures are claimed here. The architecture and serving details above are read from the source rather than from a report.',
    tldr: {
      summary: 'A binary video classifier for basketball shot outcome — ResNet-18 features averaged over 16 sampled frames — packaged as a FastAPI service with the trained weights checked in.',
      signals: [
        'Chose the simplest architecture that fits the task: per-frame CNN features with temporal average pooling rather than a video-specific backbone',
        'Shipped the model as a service, not a notebook: upload endpoint, single model load, health check',
        'Configured through environment variables so the training script runs unchanged locally and on a hosted GPU',
      ],
      skills: ['Computer Vision', 'Video Classification', 'PyTorch', 'Model Serving', 'FastAPI'],
    },
  },
  {
    id: 'syncedin',
    title: 'Synced-In: Embedding-Based Expert Search',
    oneliner: "A retrieval system that finds the right internal expert from a plain-language question, built during Synchrony's generative AI incubation.",
    problem: 'Inside a large organization the person who can answer your question is usually findable in principle and unfindable in practice. Can embedding retrieval beat keyword search at locating them?',
    context: 'Enterprise Architect (BLP), Synchrony',
    year: '2025',
    results: [
      {
        text: 'Built an embedding-based retrieval system that maps a natural-language question to the internal experts most likely to be able to answer it',
      },
      {
        text: 'Implemented in Flask with semantic ranking over profile embeddings, exposed through modular APIs designed for integration into existing enterprise tooling',
      },
      {
        text: 'Benchmarked retrieval quality against a keyword-search baseline rather than assessing the system on its own terms',
      },
      // The internal hackathon placing, field size, and attendance were here.
      // Those are the employer's numbers about the employer's event, and a
      // standard intern agreement covers them. The system is the credential.
      {
        text: 'Exposed through modular APIs so the retrieval layer could be integrated into existing tooling rather than shipped as a standalone demo',
      },
    ],
    tags: ['RAG', 'Embeddings', 'Semantic Search', 'Flask', 'Python', 'Enterprise Integration'],
    links: [],
    note: 'Built internally at Synchrony; the source is not publicly available.',
    tldr: {
      summary: 'An expert-search system for a large enterprise: ask a question in plain language, get the people who can answer it, ranked by embedding similarity rather than keyword overlap.',
      signals: [
        'Chose the right baseline to beat — keyword search — and measured against it instead of reporting absolute numbers alone',
        'Designed modular APIs for integration rather than building a standalone demo',
        'Built inside a regulated financial institution, where a retrieval system has to clear review before it reaches anyone',
      ],
      skills: ['RAG', 'Embedding Retrieval', 'Evaluation Design', 'Flask', 'Enterprise Software'],
    },
  },
  {
    id: 'tech-assessment',
    title: 'Technology Assessment Optimization',
    oneliner: 'A retrieval system that automates the evidence-extraction step of a technology assessment against SOC 2 compliance reports. Python.',
    problem: 'Can retrieval replace manual evidence-gathering in a domain where a wrong citation is not a bad answer but an audit finding?',
      year: '2025',
    results: [
      {
        text: 'Retrieval-augmented pipeline over SOC 2 compliance reports, automating the step where a reviewer reads the report to find the passage that evidences a given control. Implemented in Python',
      },
    ],
    tags: ['RAG', 'Retrieval', 'Evidence Extraction', 'SOC 2', 'Compliance', 'Python'],
    links: [],
    note: 'The source for this project is not public, so nothing above can be checked against an artifact from here.',
    tldr: {
      summary: 'A retrieval system for pulling control evidence out of SOC 2 reports, built for a setting where citing the wrong passage is an audit finding rather than a minor error.',
      signals: [
        'Targets the specific manual step that consumes reviewer time: locating the passage that evidences a control',
        'Built on a corpus where precision of the citation matters more than fluency of the answer',
      ],
      skills: ['RAG', 'Retrieval Systems', 'Evaluation Design', 'Compliance Domain', 'Python'],
    },
  },
  {
    id: 'feynman',
    title: 'Feynman',
    oneliner: 'An AI learning platform that rebuilds university-level coursework as a five-rung Learning Ladder, free for the first-generation and low-income students it is built for.',
    problem: 'University-level material is gated less by difficulty than by access: who explains it to you, how many times you are allowed to ask, and whether anyone notices when you fall behind.',
    context: 'Founder · A Truth Computing mission project',
    year: '2026',
    status: 'Live',
    asOf: 'October 2026',
    results: [
      {
        text: 'Rebuilds university-level coursework as a five-rung "Learning Ladder", so a learner climbs from first exposure to fluency in defined steps rather than being handed a syllabus',
      },
      {
        text: 'Meets each concept at five heights, from a kindergarten-level spark up to the full university treatment, so a teacher can pitch the same material where the student actually is',
      },
      {
        text: 'Holds no student data to lose: no accounts, no login, no student profile, no student database, no cookies, and no analytics or third-party trackers on the learning pages, so conversations are not written to disk and are not recoverable afterward',
      },
      // The claim this replaced said the tutor runs on-device. Feynman's own
      // privacy page refuses that claim for the hosted site and says plainly
      // that messages reach a server. Stating the weaker true thing is the
      // whole point of that page, and this card should not undo it.
      {
        text: 'States the limit rather than the flattering version: on the hosted site tutor messages are sent to a server, and only a self-hosted install runs the tutor as a local model where nothing leaves the machine',
      },
      {
        text: 'The tutor answers only against retrieved course resources and is barred from writing URLs at all — every link is rendered by the app from its own index — so a fabricated citation is structurally impossible rather than merely discouraged',
      },
      {
        text: 'Messages are screened by a deterministic rule layer before the model sees them and again before a student sees the reply; a self-harm signal is never forwarded to the model at all, and the student is shown crisis resources including the 988 Lifeline',
      },
      {
        text: 'Built for first-generation and low-income students, the group least likely to have someone at home who has already taken the course',
      },
      {
        text: 'Free for first-generation and low-income students, and free with no conditions for students in Jurupa Valley and Montclair as the program rolls out; carried as a Truth Computing mission project rather than a commercial product',
      },
      {
        text: 'Truth Academy, an early-stage program for students, is being designed around it; that work is described in its own entry, and no student usage or learning outcomes are claimed for either',
      },
      {
        text: 'Live at learn-feynman.com as of July 2026; in conversation with the XCITE leadership team at UC Riverside about bringing Feynman to the Riverside community, which is a partnership being explored rather than one that is signed',
      },
    ],
    tags: ['Education', 'Applied AI', 'Access', 'Product', 'Web'],
    links: [
      { label: 'learn-feynman.com', url: 'https://learn-feynman.com' },
    ],
    tldr: {
      summary: 'A free platform that rebuilds university coursework into a five-step ladder from first exposure to fluency, built for first-generation and low-income students without a household expert to ask. Live at learn-feynman.com with no accounts and no student database; I built it and run it as a Truth Computing mission project.',
      signals: [
        'Structures material as a ladder with defined rungs instead of shipping another content library',
        'Targets a specific population — first-generation and low-income students — rather than a general audience',
        'Made the privacy guarantee architectural — no accounts, no student database, nothing persisted, no analytics on learning pages — rather than a policy promise, and publishes the limits beside it, including that the hosted site is not on-device',
        'Barred the model from writing URLs so a fabricated citation cannot be produced, and screened messages in both directions with a crisis path that never forwards a student\'s words to the model',
        'Kept free for the students it is built for and run as a mission project rather than converted into a product',
      ],
      skills: ['Product Design', 'Applied AI', 'Education Technology', 'Safety and Moderation Design', 'Web Engineering'],
    },
  },
  {
    id: 'ezrecruit',
    title: 'EzRecruit',
    oneliner: 'Recruit-management MVP for university varsity coaches, scoped from interviews with Stanford coaching staff.',
    problem: 'Varsity coaches work 12-hour days and spend a large share of them filtering inbound recruit interest across email, forms, and spreadsheets — time that comes directly out of coaching.',
    context: 'Technology Entrepreneurship',
    year: '2024',
    coauthors: ['Austin Salcedo', 'Nick Walker', 'Chloe Widner'],
    results: [
      {
        // The interviewee is described by category, not by a title that names one
        // living person. The figures are what carry the point; the identity does
        // not, and publishing it attributes a private statement to someone who
        // agreed to a student interview, not to a public quote.
        text: 'Defined the problem space through interviews with Stanford varsity coaches, one of whom described receiving 220 emails a day of which 140 came from recruits',
      },
      {
        text: 'Enumerated the specific manual steps consuming coach time: filtering inbound forms and emails, transferring information into tracking spreadsheets, keeping track of last contact, reaching high school coaches for game schedules, and updating call notes',
      },
      {
        text: 'Scoped an MVP against those named inefficiencies rather than an assumed feature list, establishing target customer, goals, and needs before proposing any product',
      },
    ],
    tags: ['Product', 'User Research', 'MVP Scoping', 'Entrepreneurship'],
    links: [
      { label: 'MVP document', url: '/papers/mvp-stanford.pdf' },
    ],
    tldr: {
      summary: 'A recruit-management tool for college coaches, scoped from direct interviews rather than assumptions about what coaches need.',
      signals: [
        'Grounded the problem in interviews with actual varsity coaches, quoting the volume of inbound recruit email directly',
        'Wrote down the manual steps consuming time before designing anything to replace them',
        'Scoped the MVP against named inefficiencies instead of a speculative feature list',
      ],
      skills: ['User Research', 'Product Scoping', 'Problem Framing', 'Venture Design'],
    },
  },
  {
    id: 'qaoa',
    title: 'Quantum Approximate Optimization for the Traveling Salesman Problem',
    oneliner: 'QAOA implemented in Google Cirq for small TSP instances, written as an introduction to how the algorithm navigates a combinatorial landscape.',
    problem: 'How does the QAOA cost-mixer alternating structure navigate a combinatorial optimization landscape, and what are its practical limits at small instance sizes?',
    context: 'Quantum Computing',
    year: '2024',
    coauthors: ['Kai Roybal'],
    results: [
      {
        text: 'QAOA circuit in Google Cirq: cost Hamiltonian H_C over pairwise city distances, alternating with a mixer Hamiltonian at p=1, simulated at 1,000 shots',
      },
      {
        text: 'Run on n=4, n=8, and n=15 city instances, alongside a survey of classical and quantum approaches to TSP and the complexity results that motivate them',
      },
      {
        text: 'The n=8 and n=15 runs returned an all-ones bitstring, which decodes to the identity ordering rather than a solved tour — a limit of the one-qubit-per-city encoding at p=1, not a result',
      },
      {
        text: 'Related the formulation to logistics routing and economic optimization, where the same combinatorial structure appears',
      },
    ],
    tags: ['QAOA', 'Google Cirq', 'Quantum Computing', 'Combinatorial Optimization', 'Python'],
    links: [
      { label: 'GitHub', url: 'https://github.com/MatthewTorre/Quantum-Approximate-Optimization-Algorithm-As-Applied-to-Traveling-Salesman-Problem' },
      { label: 'Paper', url: '/papers/qaoa-tsp.pdf' },
    ],
    note: 'An introductory course project. It demonstrates the algorithm rather than benchmarking it against classical solvers.',
    tldr: {
      summary: 'Implemented QAOA in Google Cirq for small TSP instances and traced how the cost-mixer structure explores the landscape — including where the encoding breaks down.',
      signals: [
        'Built the circuit from scratch: cost Hamiltonian over pairwise distances, alternating unitaries, Cirq simulation at 1,000 shots',
        'Reported the degenerate all-ones output at n=8 and n=15 as an encoding limit instead of presenting it as a solved tour',
        'Connected the formulation to logistics routing and economic optimization',
      ],
      skills: ['Quantum Computing', 'Combinatorial Optimization', 'Algorithm Analysis', 'Google Cirq', 'Python'],
    },
  },
];
