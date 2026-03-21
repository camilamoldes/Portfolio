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
        "interests.title": "Conocimientos e Intereses",
        "languages.title": "Idiomas",
    },
    en: {
        "header.name": "Javier Fernández Bellot",
        "links.title": "Links",
        "nav.title": "Index",
        "experience.title": "Experience",
        "education.title": "Education",
        "interests.title": "Knowledge & Interests",
        "languages.title": "Languages",
    },
};
