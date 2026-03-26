import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Import data
import { profile, experiences, education, interests, languageSkills } from '../src/data/cv-data.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const langs = ['es', 'en'] as const;

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

// Header (Name & Links)
#grid(
  columns: (1fr, auto),
  align(left)[
    #text(size: 26pt, weight: "bold", tracking: 0.5pt, font: "Outfit")[${profile.shortName}] \\
    #v(3pt)
    #text(fill: text-muted, size: 11pt)[${profile.location[lang]}]
  ],
  align(right)[
    ${profile.links.map(l => `#link("${l.url}")[${l.label}]`).join(' \\ \n    ')}
  ]
)

#v(10pt)

// EXPERIENCE
= ${lang === 'es' ? 'Experiencia' : 'Experience'}
${experiences.map(exp => `
#grid(
  columns: (1fr, auto),
  [
    #heading(level: 2)[${exp.role[lang]}]
    *${exp.company}*
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[${exp.date[lang]}]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
${exp.description[lang]}
`).join('\n')}

// EDUCATION
= ${lang === 'es' ? 'Formación' : 'Education'}
${education.map(ed => `
#grid(
  columns: (1fr, auto),
  [
    #heading(level: 2)[${ed.degree[lang]}]
    *${ed.institution}*
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[${ed.date[lang]}]
  ]
)
${ed.description ? `#v(4pt)\n#set text(size: 10pt, fill: rgb("#334155"))\n${ed.description[lang]}\n` : ''}
`).join('\n')}

// INTERESTS & KNOWLEDGE
= ${lang === 'es' ? 'Conocimientos e Intereses' : 'Knowledge & Interests'}
#set text(size: 10pt)
${interests.map(i => i.name[lang]).join(' • ')}

// LANGUAGES
= ${lang === 'es' ? 'Idiomas' : 'Languages'}
#grid(
  columns: (1fr, 1fr, 1fr),
  ${languageSkills.map(l => `[ *${l.name[lang]}*: ${l.level[lang]} ]`).join(',\n  ')}
)
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
