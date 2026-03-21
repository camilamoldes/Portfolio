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
    location: Bilingual;
    photo: string; // path handled by Astro image import in the component
    links: SocialLink[];
}

export interface SocialLink {
    label: string;
    url: string;
    icon: "linkedin" | "github" | "twitter" | "instagram" | "web" | "email";
}

export interface Experience {
    date: Bilingual;
    role: Bilingual;
    company: string;
    location?: string;
    description: Bilingual;
}

export interface Education {
    date: Bilingual;
    degree: Bilingual;
    institution: string;
    location?: string;
    description?: Bilingual;
}

export interface Interest {
    name: Bilingual;
}

export interface LanguageSkill {
    name: Bilingual;
    level: Bilingual;
}

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

export const sections: NavSection[] = [
    { id: "experiencia", label: { es: "Experiencia", en: "Experience" } },
    { id: "formacion", label: { es: "Formación", en: "Education" } },
    { id: "intereses", label: { es: "Conocimientos e Intereses", en: "Knowledge & Interests" } },
    { id: "idiomas", label: { es: "Idiomas", en: "Languages" } },
];

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
        date: { es: "2018 - Presente", en: "2018 - Present" },
        role: { es: "Monitor de Ocio y Tiempo Libre", en: "Leisure and Youth Group Leader" },
        company: "Organización Juvenil Española (OJE)",
        location: "Valencia, España",
        description: {
            es: "Monitor y responsable de grupo en la Organización Juvenil Española, coordinando actividades de ocio y tiempo libre.",
            en: "Leader and Monitor at the Leisure Time Organization: Organización Juvenil Española.",
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
        degree: {
            es: "Erasmus - Ingeniería Informática",
            en: "Erasmus under Computer Engineering",
        },
        institution: "Vilniaus Gedimino Technikos Universitetas",
        location: "Vilnius, Lituania",
    },
    {
        date: { es: "2022", en: "2022" },
        degree: {
            es: "Erasmus - Administración de Empresas",
            en: "Erasmus under Business Management",
        },
        institution: "Universiteit Gent (Ghent University)",
        location: "Gante, Bélgica",
    },
    {
        date: { es: "2016 - 2018", en: "2016 - 2018" },
        degree: {
            es: "Bachillerato Ciencias y Economía",
            en: "High School Diploma in Science and Economics",
        },
        institution: "Colegio Sagrado Corazón Hermanos Maristas",
        location: "Valencia, España",
    },
];

export const interests: Interest[] = [
    { name: { es: "Programación", en: "Programming" } },
    { name: { es: "Desarrollo Web (React, Vue, Astro)", en: "Web Development (React, Vue, Astro)" } },
    { name: { es: "Python, Java", en: "Python, Java" } },
    { name: { es: "Ejercicio Físico y Salud", en: "Physical Exercise and Health" } },
    { name: { es: "Ocio y Recreación", en: "Leisure and Recreation" } },
    { name: { es: "Herramientas NLP / IAs Conversacionales", en: "NLP Tools and Chat Assistants" } },
];

export const languageSkills: LanguageSkill[] = [
    { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { name: { es: "Inglés", en: "English" }, level: { es: "C1 - Avanzado", en: "Advanced (C1)" } },
    { name: { es: "Valenciano", en: "Valencian" }, level: { es: "Nativo", en: "Native" } },
];
