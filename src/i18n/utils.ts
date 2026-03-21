import { translations, defaultLang, type Lang, languages } from "./translations";

/**
 * Detects the user's preferred language from the browser,
 * localStorage, or falls back to the default language.
 */
export function detectLanguage(): Lang {
    // 1. Check localStorage first (user's explicit choice)
    if (typeof localStorage !== "undefined") {
        const stored = localStorage.getItem("lang");
        if (stored && stored in languages) {
            return stored as Lang;
        }
    }

    // 2. Auto-detect from browser
    if (typeof navigator !== "undefined") {
        const browserLang = navigator.language || (navigator as any).userLanguage || "";
        const short = browserLang.split("-")[0].toLowerCase();
        if (short in languages) {
            return short as Lang;
        }
    }

    // 3. Fallback
    return defaultLang;
}

/**
 * Returns the translation for a given key and language.
 */
export function t(key: string, lang?: Lang): string {
    const currentLang = lang || detectLanguage();
    return translations[currentLang]?.[key] || translations[defaultLang]?.[key] || key;
}

/**
 * Applies translations to all translatable elements on the page.
 *
 * Supports two patterns:
 * 1. `data-i18n="key"` — looks up the key in the translations dictionary (UI strings)
 * 2. `data-i18n-es="..." data-i18n-en="..."` — reads the text directly from the attribute (CV data)
 */
export function applyTranslations(lang: Lang): void {
    // Pattern 1: Dictionary-based (UI strings)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key) {
            el.textContent = t(key, lang);
        }
    });

    // Pattern 2: Inline bilingual attributes (CV data)
    document.querySelectorAll(`[data-i18n-${lang}]`).forEach((el) => {
        const text = el.getAttribute(`data-i18n-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });

    // Update the html lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem("lang", lang);
}
