export const languages = {
    es: "Español",
    en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

// Only UI chrome strings — CV content lives in src/data/cv-data.ts
export const translations: Record<Lang, Record<string, string>> = {
    es: {
        "header.name": "Javier Fernández Bellot",
        "links.title": "Enlaces",
        "nav.title": "Índice",
        "experience.title": "Experiencia",
        "education.title": "Formación",
        "skills.title": "Habilidades",
        "certifications.title": "Certificaciones",
        "projects.title": "Proyectos",
        "volunteer.title": "Voluntariado",
        "achievements.title": "Logros",
        "publications.title": "Publicaciones",
        "references.title": "Referencias",
        "interests.title": "Conocimientos e Intereses",
        "languages.title": "Idiomas",
        "about.title": "Sobre Mí",
    },
    en: {
        "header.name": "Javier Fernández Bellot",
        "links.title": "Links",
        "nav.title": "Index",
        "experience.title": "Experience",
        "education.title": "Education",
        "skills.title": "Skills",
        "certifications.title": "Certifications",
        "projects.title": "Projects",
        "volunteer.title": "Volunteering",
        "achievements.title": "Achievements",
        "publications.title": "Publications",
        "references.title": "References",
        "interests.title": "Knowledge & Interests",
        "languages.title": "Languages",
        "about.title": "About Me",
    },
};
