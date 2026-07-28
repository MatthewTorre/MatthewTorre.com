// The chat assistant's context, assembled from the same typed data the pages
// render. Nothing here is hand-transcribed, so the assistant cannot drift out
// of sync with the site the way a duplicated prompt would.
//
// Built once per cold start and cached in module scope.

import { experience, activities } from '../src/data/experience.js';
import { projects } from '../src/data/projects.js';
import { papers } from '../src/data/papers.js';
import { skillGroups } from '../src/data/skills.js';
import { mentors } from '../src/data/mentors.js';
import { reading } from '../src/data/reading.js';
import { domains, PROVENANCE_LABEL } from '../src/data/foundation.js';
import { leadershipRoles } from '../src/data/leadership.js';

/** Facts that live in prose on the pages rather than in a data module. */
// Matthew states his AAPI background himself on the About page, where it is his
// to state. It is deliberately not here: a chat assistant asked "what is his
// ethnicity" would answer from this text, and a bot volunteering a protected
// characteristic to an anonymous stranger is a different act from a person
// choosing to write it about himself. First-generation stays, because his own
// prose ties it directly to why Feynman exists.
const PROFILE = `Matthew Torre is the co-founder, CEO, and CTO of Truth Computing, and a Stanford University coterm student. B.S. Computer Science, Artificial Intelligence concentration with a minor focus in data science and systems, conferred June 2026 with distinction, GPA 3.8/4.00. M.S. Computer Science, Artificial Intelligence and Theoretical Computer Science, expected June 2027, GPA 4.0/4.00. He is a first-generation college student.

His research interest is the mechanics of reasoning under reinforcement learning: how reward signals during post-training shape the internal computations a model uses to solve problems, when chain-of-thought reflects genuine intermediate reasoning rather than post-hoc rationalization, and how process reward models succeed or fail at telling those apart. He also works on interpretability, meta-learning, deep multi-task learning, and evaluation methodology.

Honors: Rising Bird Fellowship, Russell A. Berman Award for Excellence, MLT Fellow (Management Leaders for Tomorrow), BOSP Stanford in Florence. DeepLearning.AI certifications under Andrew Ng: Neural Networks and Deep Learning; Improving Deep Neural Networks; Structuring Machine Learning Projects; Convolutional Neural Networks.

Contact: mtorre04@stanford.edu · github.com/MatthewTorre`;

const RULES = `You are the assistant on Matthew Torre's portfolio site. Answer questions about Matthew from the reference below.

- Be concise. Two to four sentences unless the question genuinely needs more.
- Use only what the reference states. If it is not there, say you do not know and point to mtorre04@stanford.edu.
- Never invent a date, number, employer, result, or course.
- Quote figures exactly as written. Do not round or restate them.
- Clients and design partners are described by sector, never named, and the reference does not name them. If asked which company a client, design partner, or consulting engagement was, say that is not something the site discloses and point to mtorre04@stanford.edu. Do not guess, and do not infer a name from a sector, a city, or a date.
- Do not discuss Matthew's ethnicity, race, religion, health, age, or family. If asked, say the site does not cover that.
- Write plainly. No bullet lists unless asked, no headings, no bold.`;

function section(title: string, body: string) {
  return body.trim() ? `\n## ${title}\n${body.trim()}` : '';
}

function buildExperience() {
  const line = (e: (typeof experience)[number]) => {
    const where = e.location ? `, ${e.location}` : '';
    // Highlights carry the figures and named collaborators. Kept in full for
    // the same reason project results are: having the real number in context
    // is what stops the model inventing one.
    const detail = e.highlights?.length
      ? `\n${e.highlights.map((h) => `    · ${h}`).join('\n')}`
      : '';
    const when = e.dates ? `${e.dates}${where}` : where.replace(/^, /, '');
    return `- ${e.company} — ${e.role}${when ? ` (${when})` : ''}. ${e.description}${detail}`;
  };
  // `dates` is optional, so an unconfirmed range must not read as "Present".
  const current = experience.filter((e) => /present/i.test(e.dates ?? ''));
  const past = experience.filter((e) => !/present/i.test(e.dates ?? ''));

  return (
    section('Current roles', current.map(line).join('\n')) +
    section('Past roles', past.map(line).join('\n')) +
    section(
      'Campus activities',
      activities.map((a) => `- ${a.org} — ${a.role}`).join('\n')
    )
  );
}

function buildLeadership() {
  const roles = leadershipRoles
    .map((r) => `- ${r.org} — ${r.role}${r.dates ? ` (${r.dates})` : ''}. ${r.scope}`)
    .join('\n');

  return section('Leadership', roles);
}

function buildProjects() {
  const body = projects
    .map((p) => {
      // `results` carries the quantitative claims and is kept in full: almost
      // every bullet holds a figure, and having the real number in context is
      // what stops the model inventing one. The metric stays on its own bullet
      // so a number cannot be paired with the wrong result.
      const results = p.results
        .map((r) => `    · ${r.text}${r.metric ? ` ${r.metric}` : ''}`)
        .join('\n');
      const credit = p.coauthors?.length
        ? `\n    Team project with ${p.coauthors.join(', ')}.${
            p.contribution ? ` Matthew's part: ${p.contribution}` : ''
          }`
        : '';
      // Tags are dropped: they restate words already in the oneliner and
      // results, and cost tokens on every request.
      const where = p.context ? `${p.context}, ` : '';
      return `- ${p.title} (${where}${p.year})\n    ${p.oneliner}${credit}\n${results}`;
    })
    .join('\n');

  return section(`Projects (${projects.length})`, body);
}

function buildPapers() {
  const body = papers
    .map((p) => {
      const credit = p.coauthors?.length ? ` With ${p.coauthors.join(', ')}.` : '';
      const part = p.contribution ? ` Matthew's part: ${p.contribution}` : '';
      const avail = p.pdf ? '' : ' (report not published on the site)';
      return `- ${p.title} — ${p.course}, ${p.year}${avail}.${credit}${part} ${p.description}`;
    })
    .join('\n');

  return section(`Papers and reports (${papers.length})`, body);
}

function buildCoursework() {
  const all = domains.flatMap((d) => d.modules);
  const byProv = (p: string) => all.filter((m) => m.provenance === p).length;
  const stanford = byProv('core') + byProv('depth');

  // Group by provenance inside each domain rather than tagging all 76 modules
  // individually — the label is identical for most of them.
  const body = domains
    .map((d) => {
      const groups = (['core', 'depth', 'self'] as const)
        .map((prov) => {
          const titles = d.modules.filter((m) => m.provenance === prov).map((m) => m.title);
          return titles.length ? `${PROVENANCE_LABEL[prov]} — ${titles.join('; ')}.` : '';
        })
        .filter(Boolean)
        .join(' ');
      return `- ${d.title}: ${groups}`;
    })
    .join('\n');

  return section(
    'Coursework',
    `${all.length} modules across ${domains.length} domains — ${stanford} completed at Stanford, ${byProv(
      'self'
    )} studied independently. "Self-studied" means worked through outside a classroom, with no grade behind it; say so if asked.\n${body}`
  );
}

function buildSkills() {
  return section(
    'Technical skills',
    skillGroups.map((g) => `- ${g.label}: ${g.skills.join(', ')}`).join('\n')
  );
}

function buildReading() {
  const body = reading
    .map((r) => `- ${r.title} (${r.authors.split(',')[0]} et al., ${r.venue} ${r.year}). ${r.note}`)
    .join('\n');

  return section(
    'Reading trail',
    `Public papers behind Matthew's interpretability position, oldest first. He has not published in interpretability himself; this is a reading and reasoning position argued from the literature. Say so if asked whether he has research of his own in the area.\n${body}`
  );
}

function buildMentors() {
  return section(
    'Mentors and advisors',
    mentors.map((m) => `- ${m.name} — ${m.role}`).join('\n')
  );
}

let cached: string | null = null;

export function systemPrompt(): string {
  if (cached) return cached;
  cached =
    RULES +
    '\n\n---\n' +
    section('Profile', PROFILE) +
    buildExperience() +
    buildLeadership() +
    buildProjects() +
    buildPapers() +
    buildCoursework() +
    buildSkills() +
    buildReading() +
    buildMentors() +
    '\n';
  return cached;
}
