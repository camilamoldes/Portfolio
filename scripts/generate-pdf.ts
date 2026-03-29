import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Import data
import {
  profile,
  texts,
  experiences,
  education,
  skills,
  certifications,
  projects,
  volunteer,
  achievements,
  publications,
  interests,
  languageSkills,
  references,
} from '../src/data/cv-data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const langs = ['es', 'en'] as const;
type Lang = typeof langs[number];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Typst section heading (level 1) */
const h1 = (title: string) => `= ${title}`;

/** Section heading (level 2) */
const h2 = (title: string) => `== ${title}`;

/** Muted right-aligned date inside a 2-column grid */
const dateGrid = (left: string, right: string) => `
#grid(
  columns: (1fr, auto),
  [
    ${left}
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[${right}]
  ]
)`;

// ─── Section renderers ────────────────────────────────────────────────────────

function renderAbout(lang: Lang): string {
  if (!texts.length) return '';
  return `
${h1(lang === 'es' ? 'Sobre Mí' : 'About Me')}
${texts.map(t => `
#set text(size: 10pt, fill: rgb("#334155"))
${t.text[lang]}
`).join('\n')}`;
}

function renderExperience(lang: Lang): string {
  if (!experiences.length) return '';
  return `
${h1(lang === 'es' ? 'Experiencia Profesional' : 'Work Experience')}
${experiences.map(exp => `
${dateGrid(`
    ${h2(exp.role[lang])}
    *${exp.company}*${exp.location ? ` — #text(fill: text-muted, size: 9pt)[${exp.location}]` : ''}
  `, exp.date[lang])}
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
${exp.description[lang]}
${exp.highlights?.length
  ? `#list(
  ${exp.highlights.map(h => `[${h[lang]}]`).join(',\n  ')}
)`
  : ''}
`).join('\n')}`;
}

function renderEducation(lang: Lang): string {
  if (!education.length) return '';
  return `
${h1(lang === 'es' ? 'Formación' : 'Education')}
${education.map(ed => `
${dateGrid(`
    ${h2(ed.degree[lang])}
    *${ed.institution}*${ed.location ? ` — #text(fill: text-muted, size: 9pt)[${ed.location}]` : ''}
  `, ed.date[lang])}
${ed.description
  ? `#v(4pt)\n#set text(size: 10pt, fill: rgb("#334155"))\n${ed.description[lang]}`
  : ''}
${ed.notes ? `\n#text(size: 9pt, fill: text-muted)[${ed.notes[lang]}]` : ''}
`).join('\n')}`;
}

function renderSkills(lang: Lang): string {
  if (!skills.length) return '';
  return `
${h1(lang === 'es' ? 'Habilidades' : 'Skills')}
${skills.map(group => `
*${group.category[lang]}:* ${group.items.join(' • ')}
`).join('\n')}`;
}

function renderCertifications(lang: Lang): string {
  if (!certifications.length) return '';
  return `
${h1(lang === 'es' ? 'Certificaciones y Cursos' : 'Certifications & Courses')}
${certifications.map(cert => `
- *${cert.name[lang]}* — ${cert.issuer}${cert.date ? ` (${cert.date[lang]})` : ''}${cert.url ? `\\ #link("${cert.url}")[Credencial]` : ''}
`).join('\n')}`;
}

function renderProjects(lang: Lang): string {
  if (!projects.length) return '';
  return `
${h1(lang === 'es' ? 'Proyectos Personales' : 'Personal Projects')}
${projects.map(p => `
${dateGrid(`
    ${h2(p.name)}${p.url ? ` #text(fill: primary)[#link("${p.url}")[↗]]` : ''}
    ${p.tech?.length ? `#text(size: 9pt, fill: text-muted)[${p.tech.join(' · ')}]` : ''}
  `, p.date ? p.date[lang] : '')}
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
${p.description[lang]}
`).join('\n')}`;
}

function renderVolunteer(lang: Lang): string {
  if (!volunteer.length) return '';
  return `
${h1(lang === 'es' ? 'Voluntariado y Actividades' : 'Volunteering & Activities')}
${volunteer.map(v => `
${dateGrid(`
    ${h2(v.role[lang])}
    *${v.organization}*${v.location ? ` — #text(fill: text-muted, size: 9pt)[${v.location}]` : ''}
  `, v.date[lang])}
${v.description ? `#v(4pt)\n#set text(size: 10pt, fill: rgb("#334155"))\n${v.description[lang]}` : ''}
`).join('\n')}`;
}

function renderAchievements(lang: Lang): string {
  if (!achievements.length) return '';
  return `
${h1(lang === 'es' ? 'Logros y Premios' : 'Achievements & Awards')}
${achievements.map(a => `
- *${a.title[lang]}*${a.issuer ? ` — ${a.issuer}` : ''}${a.date ? ` (${a.date[lang]})` : ''}
${a.description ? `  #text(size: 9pt, fill: text-muted)[${a.description[lang]}]` : ''}
`).join('\n')}`;
}

function renderPublications(lang: Lang): string {
  if (!publications.length) return '';
  return `
${h1(lang === 'es' ? 'Publicaciones' : 'Publications')}
${publications.map(pub => `
- *${pub.title[lang]}*${pub.publisher ? ` — ${pub.publisher}` : ''}${pub.date ? ` (${pub.date[lang]})` : ''}${pub.url ? `\\ #link("${pub.url}")[Ver publicación]` : ''}
${pub.description ? `  #text(size: 9pt, fill: text-muted)[${pub.description[lang]}]` : ''}
`).join('\n')}`;
}

function renderInterests(lang: Lang): string {
  if (!interests.length) return '';
  return `
${h1(lang === 'es' ? 'Conocimientos e Intereses' : 'Knowledge & Interests')}
#set text(size: 10pt)
${interests.map(i => i.name[lang]).join(' • ')}`;
}

function renderLanguages(lang: Lang): string {
  if (!languageSkills.length) return '';
  return `
${h1(lang === 'es' ? 'Idiomas' : 'Languages')}
#grid(
  columns: (${languageSkills.map(() => '1fr').join(', ')}),
  ${languageSkills.map(l => `[ *${l.name[lang]}*: ${l.level[lang]}${l.code ? ` _(${l.code})_` : ''} ]`).join(',\n  ')}
)`;
}

function renderReferences(lang: Lang): string {
  if (!references.length) return '';
  return `
${h1(lang === 'es' ? 'Referencias' : 'References')}
${references.map(ref => `
#grid(
  columns: (1fr, 1fr),
  [
    *${ref.name}* \\ 
    #text(fill: text-muted, size: 9pt)[${ref.role[lang]} — ${ref.company}]
    ${ref.contact ? `\\ #link("mailto:${ref.contact}")[${ref.contact}]` : ''}
  ],
  [
    ${ref.quote ? `#text(size: 9pt, style: "italic")[«${ref.quote[lang]}»]` : ''}
  ]
)
`).join('\n')}`;
}

// ─── Main generation ──────────────────────────────────────────────────────────

for (const lang of langs) {
  const typstContent = `
#set document(title: "${profile.fullName} - CV", author: "${profile.fullName}")
#set page(
  paper: "a4",
  margin: (x: 2cm, y: 2cm),
)
#set text(
  font: ("Outfit", "Inter"),
  size: 10pt,
  lang: "${lang}",
)

// Brand colors
#let primary = rgb("#2563eb")
#let text-muted = rgb("#64748b")
#let text-dark = rgb("#0f172a")

#show text: set text(fill: text-dark)

// Heading formatting
#show heading.where(level: 1): it => block(
  above: 1.5em,
  below: 1em,
)[
  #set text(weight: 700, fill: primary, size: 14pt, font: "Outfit")
  #upper(it.body)
  #v(-0.5em)
  #line(length: 100%, stroke: 1pt + rgb("#e2e8f0"))
]

#show heading.where(level: 2): it => block(
  above: 1.2em,
  below: 0.6em,
  text(weight: 700, size: 12pt, font: "Outfit")[#it.body]
)

// ── Header (Name & Contact) ──────────────────────────────────────────────────
#grid(
  columns: (1fr, auto),
  align(left)[
    #text(size: 26pt, weight: "bold", tracking: 0.5pt, font: "Outfit")[${profile.shortName}] \\
    #v(3pt)
    #text(fill: text-muted, size: 11pt)[${profile.location[lang]}]
  ],
  align(right)[
    ${profile.links.map(l => `#link("${l.url}")[${l.label}]`).join(' \\\\ \n    ')}
  ]
)

#v(10pt)

${renderAbout(lang)}
${renderExperience(lang)}
${renderEducation(lang)}
${renderSkills(lang)}
${renderCertifications(lang)}
${renderProjects(lang)}
${renderVolunteer(lang)}
${renderAchievements(lang)}
${renderPublications(lang)}
${renderInterests(lang)}
${renderLanguages(lang)}
${renderReferences(lang)}
`;

  const outputPath = join(__dirname, '..', `cv-${lang}.typ`);
  writeFileSync(outputPath, typstContent);
  console.log(`Typst source written to ${outputPath}`);

  try {
    const fontsPath = join(__dirname, '..', 'src', 'assets', 'fonts');
    execSync(`typst compile --font-path "${fontsPath}" "${outputPath}"`, { stdio: 'inherit' });
    console.log(`PDF successfully generated: cv-${lang}.pdf`);
  } catch (error) {
    console.error(`Error compiling Typst file for ${lang}`);
  }
}
