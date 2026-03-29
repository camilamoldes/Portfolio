// ─────────────────────────────────────
// Types
// ─────────────────────────────────────

export interface Bilingual {
    es: string;
    en: string;
}

export interface ProfileData {
    fullName: string;
    shortName: string;
    tagline?: Bilingual;           // short title / role headline
    location: Bilingual;
    photo: string;                 // path handled by Astro image import
    links: SocialLink[];
}

export interface SocialLink {
    label: string;
    url: string;
    icon: "linkedin" | "github" | "twitter" | "instagram" | "web" | "email";
}

// About me – one or more paragraphs
export interface Text {
    text: Bilingual;
}

// ── Work experience ──────────────────

export interface Experience {
    date: Bilingual;
    role: Bilingual;
    company: string;
    location?: string;
    description: Bilingual;
    /** Optional bullet highlights */
    highlights?: Bilingual[];
}

// ── Education ────────────────────────

export interface Education {
    date: Bilingual;
    degree: Bilingual;
    institution: string;
    location?: string;
    description?: Bilingual;
    /** e.g. GPA, honours, specialisation */
    notes?: Bilingual;
}

// ── Skills ────────────────────────────
// Group skills by category (e.g. "Frontend", "DevOps", "Soft Skills")

export interface SkillGroup {
    category: Bilingual;
    items: string[];           // skill names (language-agnostic labels)
}

// ── Certifications / Courses ─────────

export interface Certification {
    name: Bilingual;
    issuer: string;
    date?: Bilingual;
    url?: string;              // credential link
    credentialId?: string;
}

// ── Personal / Side Projects ─────────

export interface Project {
    name: string;
    date?: Bilingual;
    url?: string;
    description: Bilingual;
    tech?: string[];           // list of technologies used
}

// ── Volunteer / Extracurricular ───────

export interface Volunteer {
    date: Bilingual;
    role: Bilingual;
    organization: string;
    location?: string;
    description?: Bilingual;
}

// ── Achievements / Awards ────────────

export interface Achievement {
    date?: Bilingual;
    title: Bilingual;
    issuer?: string;
    description?: Bilingual;
}

// ── Publications ─────────────────────

export interface Publication {
    date?: Bilingual;
    title: Bilingual;
    publisher?: string;
    url?: string;
    description?: Bilingual;
}

// ── References ───────────────────────

export interface Reference {
    name: string;
    role: Bilingual;
    company: string;
    contact?: string;          // email or phone
    quote?: Bilingual;         // optional short testimonial
}

// ── Interests ────────────────────────

export interface Interest {
    name: Bilingual;
}

// ── Languages ────────────────────────

export interface LanguageSkill {
    name: Bilingual;
    level: Bilingual;
    /** e.g. "C1", "B2" */
    code?: string;
}

// ── Navigation ───────────────────────

export interface NavSection {
    id: string;
    label: Bilingual;
}

// ─────────────────────────────────────
// Data
// ─────────────────────────────────────

export const profile: ProfileData = {
    fullName: "Javier Fernández Bellot",
    shortName: "Javier Fernández",
    // tagline: { es: "Desarrollador de Software", en: "Software Developer" },
    location: {
        es: "Valencia, España • 25 años",
        en: "Valencia, Spain • 25 years old",
    },
    photo: "/src/assets/photo.webp",
    links: [
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/javier-fern%C3%A1ndez-bellot-455269291/",
            icon: "linkedin",
        },
        {
            label: "GitHub",
            url: "https://github.com/yaxfer1",
            icon: "github",
        },
    ],
};

// ── About Me ─────────────────────────

export const texts: Text[] = [
    {
        text: {
            es: "Soy un desarrollador de software con experiencia en el desarrollo de interfaces hombre-máquina (HMI) para inversores solares. He trabajado con tecnologías como Python, Vue, Astro, SQL (JSON) y Docker. También tengo experiencia en la integración de protocolos Modbus/SCADA y en la optimización de rendimiento en sistemas embebidos.",
            en: "I am a software developer with experience in the development of human-machine interfaces (HMI) for solar inverters. I have worked with technologies such as Python, Vue, Astro, SQL (JSON) and Docker. I also have experience in the integration of Modbus/SCADA protocols and in the optimization of performance in embedded systems.",
        },
    },
];


// ── Work Experience ───────────────────

export const experiences: Experience[] = [
    {
        date: { es: "Abr 2025 - Presente", en: "Apr 2025 - Present" },
        role: { es: "Desarrollador de Software HMI", en: "HMI Software Developer" },
        company: "Zigor",
        location: "Valencia, España",
        description: {
            es: "Desarrollo de HMI para inversores solares en SoM (Linux) usando Python, Vue, Astro, SQL (JSON) y Docker. Integración de protocolos Modbus/SCADA y optimización de rendimiento en sistemas embebidos bajo estrictas restricciones de recursos.",
            en: "Built HMI for solar inverters on SoM (Linux) using Python, Vue, Astro, SQL (JSON), and Docker. Integrated Modbus/SCADA protocols and optimized performance for embedded deployment under strict resource constraints.",
        },
        highlights: [
            { es: "Reduje el tiempo de arranque un 30%", en: "Reduced boot time by 30%" },
        ],
    },
    {
        date: { es: "Dic 2024 - Feb 2025", en: "Dec 2024 - Feb 2025" },
        role: { es: "Consultoría Técnica", en: "Technical Consulting" },
        company: "Leyton",
        location: "Valencia, España",
        description: {
            es: "Prestación de servicios de consultoría para la obtención de financiación en proyectos de innovación.",
            en: "Providing consulting services to obtain financing for innovation projects.",
        },
    },
    {
        date: { es: "Feb 2022 - Jun 2022", en: "Feb 2022 - Jun 2022" },
        role: { es: "Corresponsal Erasmus", en: "Erasmus Correspondent in Flanders" },
        company: "Erasmus en Flandes",
        location: "Gante, Bélgica",
        description: {
            es: "Redactor en el blog «Erasmus en Flandes» para promover el turismo en la región de Flandes (Bélgica).",
            en: "Editor at the 'Erasmus in Flanders' blog to promote tourism in the Flanders region (Belgium).",
        },
    },
];

// ── Education ─────────────────────────

export const education: Education[] = [
    {
        date: { es: "2018 - 2024", en: "2018 - 2024" },
        degree: {
            es: "Doble Grado en Administración de Empresas e Ingeniería Informática",
            en: "Double bachelor degree in Business Management and Computer Engineering",
        },
        institution: "Universitat Politècnica de València",
        location: "Valencia, España",
        description: {
            es: "TFG: Generación y edición de noticias usando GPT: Plan de Empresa y Desarrollo Tecnológico.",
            en: "Thesis: News generation and editing using GPT: Business Plan and Technological Development.",
        },
    },
    {
        date: { es: "2021 - 2022", en: "2021 - 2022" },
        degree: { es: "Erasmus - Ingeniería Informática", en: "Erasmus under Computer Engineering" },
        institution: "Vilniaus Gedimino Technikos Universitetas",
        location: "Vilnius, Lituania",
    },
    {
        date: { es: "2022", en: "2022" },
        degree: { es: "Erasmus - Administración de Empresas", en: "Erasmus under Business Management" },
        institution: "Universiteit Gent (Ghent University)",
        location: "Gante, Bélgica",
    },
    {
        date: { es: "2016 - 2018", en: "2016 - 2018" },
        degree: { es: "Bachillerato Ciencias y Economía", en: "High School Diploma in Science and Economics" },
        institution: "Colegio Sagrado Corazón Hermanos Maristas",
        location: "Valencia, España",
    },
];

// ── Skills ────────────────────────────
// Descomenta y rellena con tus grupos de habilidades técnicas / blandas.
// Si el array está vacío, la sección no aparece en el PDF.

export const skills: SkillGroup[] = [
    {
        category: { es: "Frontend", en: "Frontend" },
        items: ["Vue 3", "Astro", "React", "TypeScript", "CSS / SCSS"],
    },
    {
        category: { es: "Backend & DevOps", en: "Backend & DevOps" },
        items: ["Python", "Flask", "Docker", "Linux", "SQL"],
    },
    {
        category: { es: "Habilidades Blandas", en: "Soft Skills" },
        items: ["Liderazgo", "Resolución de problemas", "Trabajo en equipo"],
    },
];

// ── Certifications / Courses ──────────
// Si el array está vacío, la sección no aparece en el PDF.

export const certifications: Certification[] = [
    // {
    //   name: { es: "AWS Cloud Practitioner", en: "AWS Cloud Practitioner" },
    //   issuer: "Amazon Web Services",
    //   date: { es: "2024", en: "2024" },
    //   url: "https://www.credly.com/...",
    //   credentialId: "ABC-123",
    // },
    // {
    //   name: { es: "Scrum Master Certificado", en: "Certified Scrum Master" },
    //   issuer: "Scrum Alliance",
    //   date: { es: "2023", en: "2023" },
    // },
];

// ── Personal / Side Projects ──────────
// Si el array está vacío, la sección no aparece en el PDF.

export const projects: Project[] = [
    {
        name: "Portfolio Web",
        date: { es: "2026", en: "2026" },
        url: "https://github.com/yaxfer1/portfolio",
        description: {
            es: "Portfolio personal construido con Astro y exportación a PDF con Typst. Con este proyecto, busco tener una web personal, y que las actualizaciones de mi CV las pueda hacer rápido y fácil.",
            en: "Personal portfolio built with Astro, with PDF export powered by Typst. With this project, I'm looking to have a personal website, and that I can update my CV quickly and easily.",
        },
        tech: ["Astro", "TypeScript", "Typst"],
    },
];

// ── Volunteer / Extracurricular ───────
// Si el array está vacío, la sección no aparece en el PDF.

export const volunteer: Volunteer[] = [
    {
        date: { es: "2018 - Presente", en: "2018 - Present" },
        role: { es: "Dirigente y Monitor de Ocio y Tiempo Libre", en: "Leader and Leisure and Youth Group Leader" },
        organization: "OJE",
        location: "Valencia, España",
        description: {
            es: "Coordinación de actividades educativas y de tiempo libre para jóvenes.",
            en: "Coordination of educational and leisure activities for young people.",
        },
    },
];

// ── Achievements / Awards ─────────────
// Premios, menciones, logros destacados.
// Si el array está vacío, la sección no aparece en el PDF.

export const achievements: Achievement[] = [
    // {
    //   date: { es: "2023", en: "2023" },
    //   title: { es: "Premio al Mejor TFG", en: "Best Final Degree Project Award" },
    //   issuer: "Universitat Politècnica de València",
    //   description: {
    //     es: "Reconocimiento por el mejor trabajo de fin de grado de la promoción.",
    //     en: "Recognition for the best final degree project of the class.",
    //   },
    // },
];

// ── Publications ─────────────────────
// Artículos, posts relevantes, papers…
// Si el array está vacío, la sección no aparece en el PDF.

export const publications: Publication[] = [
    // {
    //   date: { es: "Feb 2022", en: "Feb 2022" },
    //   title: { es: "Descubriendo Gante: guía para el estudiante Erasmus", en: "Discovering Ghent: a guide for the Erasmus student" },
    //   publisher: "Erasmus en Flandes (blog)",
    //   url: "https://erasmusenflandes.blog/...",
    //   description: {
    //     es: "Artículo sobre los lugares imprescindibles de Gante para estudiantes Erasmus.",
    //     en: "Article about must-see places in Ghent for Erasmus students.",
    //   },
    // },
];

// ── References ────────────────────────
// Si el array está vacío, la sección no aparece en el PDF.

export const references: Reference[] = [
    // {
    //   name: "John Doe",
    //   role: { es: "Director de Ingeniería", en: "Engineering Director" },
    //   company: "Zigor",
    //   contact: "john.doe@zigor.com",
    //   quote: {
    //     es: "Javier es un profesional excepcional con gran capacidad de aprendizaje.",
    //     en: "Javier is an exceptional professional with a great capacity to learn.",
    //   },
    // },
];

// ── Interests ─────────────────────────

export const interests: Interest[] = [
    { name: { es: "Programación", en: "Programming" } },
    { name: { es: "Desarrollo Web (React, Vue, Astro)", en: "Web Development (React, Vue, Astro)" } },
    { name: { es: "Python, Java", en: "Python, Java" } },
    { name: { es: "Ejercicio Físico y Salud", en: "Physical Exercise and Health" } },
    { name: { es: "Herramientas NLP / IAs Conversacionales", en: "NLP Tools and Chat Assistants" } },
];

// ── Languages ─────────────────────────

export const languageSkills: LanguageSkill[] = [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" }, code: "" },
    { name: { es: "Inglés", en: "English" }, level: { es: "C1 - Avanzado", en: "Advanced (C1)" }, code: "C1" },
    { name: { es: "Valenciano", en: "Valencian" }, level: { es: "Nativo", en: "Native" }, code: "" },
];
