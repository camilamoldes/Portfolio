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
    shortName: "Javier Fernández Bellot",
    tagline: { es: "Ingeniero Informático & ADE", en: "Computer Engineer & BBA" },
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
        {
            label: "Email",
            url: "mailto:javierfernandezbellot@gmail.com",
            icon: "email",
        },
    ],
};

// ── About Me ─────────────────────────

export const texts: Text[] = [
    {
        text: {
            es: "Soy ingeniero informático y graduado en ADE. Actualmente trabajo como desarrollador full-stack en el sector de las energías renovables, creando desde interfaces en sistemas embebidos Linux hasta aplicaciones web internas desde cero. Mi doble formación me da una perspectiva diferente: no solo busco el cómo construir un buen software, sino entender por qué merece la pena hacerlo.",
            en: "I am a Computer Engineer and Business Administration graduate. I currently work as a full-stack developer in the renewable energy sector, building everything from interfaces on embedded Linux systems to internal web applications from scratch. My dual background gives me a different perspective: I don't just focus on how to build software, but on understanding why it's worth building in the first place.",
        },
    },
    {
        text: {
            es: "Me apasionan los proyectos de impacto, la exploración espacial y la automatización. Integro la IA en mi día a día para trabajar de forma inteligente, pero sigo estudiando y mejorando mi programación activamente, ya que no creo que estemos cerca del momento en que nos pueda sustituir. Mi objetivo es rodearme de gente brillante para resolver problemas difíciles, y estoy totalmente abierto a trasladarme a cualquier lugar de Europa o Estados Unidos (ya he vivido y trabajado en Bélgica y Lituania) para unirme a un proyecto que importe.",
            en: "I'm passionate about high-impact projects, space exploration, and automation. I integrate AI daily to work smarter, but I actively study and improve my programming skills, as I don't believe we are anywhere near being replaced by it yet. My goal is to surround myself with brilliant people to solve hard problems, and I am completely open to relocating anywhere in Europe or the US (having already lived in Belgium and Lithuania) to join a project that matters.",
        },
    },
];


// ── Work Experience ───────────────────

export const experiences: Experience[] = [
    {
        date: { es: "Abr 2025 - Presente", en: "Apr 2025 - Present" },
        role: { es: "Desarrollador Full-Stack", en: "Full-Stack Developer" },
        company: "Zigor",
        location: "Valencia, España",
        description: {
            es: "Desarrollo de software para el sector de energías renovables: interfaces HMI para inversores solares de alta potencia sobre plataformas embebidas Linux (SoM), y aplicaciones web internas para la digitalización de procesos de la compañía. Trabajo con Python, Vue, Astro, Flask, SQL, Docker y protocolos industriales (Modbus, CAN, SCADA).",
            en: "Software development for the renewable energy sector: HMI interfaces for high-power solar inverters on embedded Linux platforms (SoM), and internal web applications for company process digitalization. I work with Python, Vue, Astro, Flask, SQL, Docker, and industrial protocols (Modbus, CAN, SCADA).",
        },
        highlights: [
            { es: "Diseñé y desarrollé desde cero una aplicación web interna (Astro + PostgreSQL + Vue) para gestión de inventario y planificación del laboratorio que mejoró significativamente la productividad del equipo", en: "Designed and built from scratch an internal web app (Astro + PostgreSQL + Vue) for inventory management and lab scheduling that significantly improved team productivity" },
            { es: "Desarrollé APIs REST con Flask y SQLAlchemy bajo requisitos de empresas externas con extensas listas de especificaciones de comportamiento", en: "Built REST APIs with Flask and SQLAlchemy under external client requirements with extensive behavior specification lists" },
            { es: "Diseñé un pipeline automatizado de internacionalización (i18n) para gestionar traducciones de forma transparente", en: "Designed an automated internationalization (i18n) pipeline to manage translations seamlessly" },
            { es: "Gestioné el ciclo de vida completo: desde requisitos hasta despliegue con Docker en servidores y SoMs propios", en: "Managed the full lifecycle: from requirements to deployment with Docker on self-hosted servers and SoMs" },
        ],
    },
    {
        date: { es: "Dic 2024 - Feb 2025", en: "Dec 2024 - Feb 2025" },
        role: { es: "Consultor Técnico de I+D", en: "R&D Technical Consultant" },
        company: "Leyton",
        location: "Valencia, España",
        description: {
            es: "Asesoramiento a empresas para la obtención de financiación pública y privada en proyectos de I+D+i. Redacción completa de memorias técnicas para proyectos de innovación de diversos sectores. Dejé esta empresa para volver a roles más enfocados en desarrollo e ingeniería de software.",
            en: "Advised companies on obtaining public and private funding for R&D and innovation projects. Wrote complete technical reports for innovation projects across various sectors. I left this role to return to positions more focused on software development and engineering.",
        },
    },
    {
        date: { es: "Feb 2022 - Jun 2022", en: "Feb 2022 - Jun 2022" },
        role: { es: "Corresponsal Erasmus en Flandes", en: "Erasmus Correspondent in Flanders" },
        company: "Erasmus en Flandes",
        location: "Gante, Bélgica",
        description: {
            es: "Redactor en el blog «Erasmus en Flandes», creando contenido para promover el turismo y la vida estudiantil en la región de Flandes durante mi estancia Erasmus en Bélgica.",
            en: "Editor at the 'Erasmus in Flanders' blog, creating content to promote tourism and student life in the Flanders region during my Erasmus stay in Belgium.",
        },
    },
];

// ── Education ─────────────────────────

export const education: Education[] = [
    {
        date: { es: "2018 - 2024", en: "2018 - 2024" },
        degree: {
            es: "Doble Grado en Ingeniería Informática y Administración de Empresas",
            en: "Double Bachelor's Degree in Computer Engineering and Business Administration",
        },
        institution: "Universitat Politècnica de València",
        location: "Valencia, España",
        description: {
            es: "TFG: Aplicación full-stack (React + Python + SQL) para generación y edición de noticias con GPT, integrando RAG y agentes LangChain. Incluía plan de empresa y desarrollo tecnológico.",
            en: "Thesis: Full-stack application (React + Python + SQL) for news generation and editing with GPT, integrating RAG and LangChain agents. Included business plan and technological development.",
        },
    },
    {
        date: { es: "2021 - 2022", en: "2021 - 2022" },
        degree: { es: "Erasmus — Ingeniería Informática", en: "Erasmus — Computer Engineering" },
        institution: "Vilniaus Gedimino Technikos Universitetas",
        location: "Vilnius, Lituania",
    },
    {
        date: { es: "2022", en: "2022" },
        degree: { es: "Erasmus — Administración de Empresas", en: "Erasmus — Business Administration" },
        institution: "Universiteit Gent (Ghent University)",
        location: "Gante, Bélgica",
    },
    {
        date: { es: "2016 - 2018", en: "2016 - 2018" },
        degree: { es: "Bachillerato en Ciencias y Economía", en: "High School Diploma in Science and Economics" },
        institution: "Colegio Sagrado Corazón Hermanos Maristas",
        location: "Valencia, España",
    },
];

// ── Skills ────────────────────────────

export const skills: SkillGroup[] = [
    {
        category: { es: "Lenguajes", en: "Languages" },
        items: ["Python", "TypeScript / JavaScript", "Java", "SQL", "HTML / CSS"],
    },
    {
        category: { es: "Frontend", en: "Frontend" },
        items: ["Vue", "React", "Astro", "Tailwind CSS"],
    },
    {
        category: { es: "Backend & Infraestructura", en: "Backend & Infrastructure" },
        items: ["Flask", "REST APIs", "PostgreSQL", "SQLite", "Docker", "Linux", "Git", "CI/CD"],
    },
    {
        category: { es: "Protocolos & Embebidos", en: "Protocols & Embedded" },
        items: ["Modbus", "CAN", "SCADA", "Sistemas embebidos Linux (SoM)"],
    },
    {
        category: { es: "IA & Datos", en: "AI & Data" },
        items: ["LangChain", "RAG", "NLP", "LLMs / Prompt Engineering"],
    },
    {
        category: { es: "Habilidades Transversales", en: "Soft Skills" },
        items: ["Liderazgo", "Autonomía", "Resolución de problemas", "Comunicación", "Trabajo en equipo", "Scrum / Agile"],
    },
];

// ── Certifications / Courses ──────────
// Si el array está vacío, la sección no aparece en el PDF.

export const certifications: Certification[] = [];

// ── Personal / Side Projects ──────────

export const projects: Project[] = [
    {
        name: "GPT News Editor",
        date: { es: "2024", en: "2024" },
        description: {
            es: "Aplicación full-stack desarrollada como TFG: un editor de noticias potenciado por GPT con arquitectura RAG y agentes LangChain. El usuario puede generar, editar y refinar artículos con un flujo Human-in-the-Loop. Mi primera experiencia real con desarrollo end-to-end, mucho más allá de los ejercicios académicos.",
            en: "Full-stack application built as my Bachelor's Thesis: a GPT-powered news editor with RAG architecture and LangChain agents. Users can generate, edit, and refine articles through a Human-in-the-Loop workflow. My first real end-to-end development experience, far beyond academic exercises.",
        },
        tech: ["React", "Python", "SQL", "LangChain", "GPT / OpenAI"],
    },
    {
        name: "Portfolio Web",
        date: { es: "2026", en: "2026" },
        url: "https://github.com/yaxfer1/portfolio",
        description: {
            es: "Mi web personal y CV en vivo, construida con Astro y con exportación automática a PDF mediante Typst. Diseñada para poder actualizar mi CV rápidamente, con internacionalización (ES/EN), modo oscuro y un diseño minimalista que refleja mi estilo.",
            en: "My personal website and live CV, built with Astro with automatic PDF export via Typst. Designed so I can update my CV quickly, with internationalization (ES/EN), dark mode, and a minimalist design that reflects my style.",
        },
        tech: ["Astro", "TypeScript", "Tailwind CSS", "Typst"],
    },
    {
        name: "Zigor Internal Tools",
        date: { es: "2025", en: "2025" },
        description: {
            es: "Aplicación web interna que diseñé y desarrollé por iniciativa propia para organizar el inventario del laboratorio y la planificación del equipo. Aprendí Astro y PostgreSQL desde cero, integré componentes Vue, gestión de usuarios, conexión Modbus y despliegue completo con Docker en servidores propios. Tuvo un impacto real y directo en la productividad de mis compañeros.",
            en: "Internal web application I designed and developed on my own initiative to organize lab inventory and team scheduling. I learned Astro and PostgreSQL from scratch, integrated Vue components, user management, Modbus connectivity, and full deployment with Docker on self-hosted servers. It had a real, direct impact on my colleagues' productivity.",
        },
        tech: ["Astro", "Vue", "PostgreSQL", "Python", "Docker", "Modbus"],
    },
];

// ── Volunteer / Extracurricular ───────

export const volunteer: Volunteer[] = [
    {
        date: { es: "2018 - Presente", en: "2018 - Present" },
        role: { es: "Dirigente y Monitor de Ocio y Tiempo Libre", en: "Youth Leader and Leisure & Recreation Instructor" },
        organization: "OJE — Organización Juvenil Española",
        location: "Valencia, España",
        description: {
            es: "Organización y supervisión de actividades educativas y recreativas para jóvenes: campamentos de verano, deportes al aire libre (rappel, senderismo), proyectos grupales y talleres. He guiado a participantes en el desarrollo de habilidades de trabajo en equipo, liderazgo y resolución de problemas, siempre garantizando un entorno seguro y motivador.",
            en: "Organized and supervised educational and recreational activities for young people: summer camps, outdoor sports (rappelling, hiking), group projects, and workshops. I've guided participants in developing teamwork, leadership, and problem-solving skills while ensuring a safe and engaging environment.",
        },
    },
];

// ── Achievements / Awards ─────────────
// Si el array está vacío, la sección no aparece en el PDF.

export const achievements: Achievement[] = [];

// ── Publications ─────────────────────
// Si el array está vacío, la sección no aparece en el PDF.

export const publications: Publication[] = [];

// ── References ────────────────────────
// Si el array está vacío, la sección no aparece en el PDF.

export const references: Reference[] = [];

// ── Interests ─────────────────────────

export const interests: Interest[] = [
    { name: { es: "Inteligencia Artificial y LLMs", en: "Artificial Intelligence & LLMs" } },
    { name: { es: "Exploración Espacial", en: "Space Exploration" } },
    { name: { es: "Automatización de Procesos", en: "Process Automation" } },
    { name: { es: "Energías Renovables", en: "Renewable Energy" } },
    { name: { es: "Desarrollo Full-Stack", en: "Full-Stack Development" } },
    { name: { es: "Emprendimiento y Startups", en: "Entrepreneurship & Startups" } },
    { name: { es: "Ejercicio Físico y Salud", en: "Fitness & Health" } },
    { name: { es: "Carné de Monitor de Tiempo Libre", en: "Leisure & Recreation Instructor License" } },
    { name: { es: "Permiso de Conducir B", en: "Driver's License (B)" } },
];

// ── Languages ─────────────────────────

export const languageSkills: LanguageSkill[] = [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" }, code: "" },
    { name: { es: "Inglés", en: "English" }, level: { es: "C1 — Avanzado", en: "C1 — Advanced" }, code: "C1" },
    { name: { es: "Valenciano / Catalán", en: "Valencian / Catalan" }, level: { es: "Nativo", en: "Native" }, code: "" },
];
