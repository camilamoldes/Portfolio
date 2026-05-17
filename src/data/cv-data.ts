export const profile: ProfileData = {
    fullName: "Camila Moldes Ángel",
    shortName: "Camila Moldes Ángel",
    tagline: {
        es: "Doctoranda en Educación e Investigadora Educativa",
        en: "PhD Candidate in Education & Educational Researcher",
    },
    location: {
        es: "Valencia, España",
        en: "Valencia, Spain",
    },
    photo: "/photo.webp",
    links: [
        {
            label: "Email",
            url: "mailto:camilamoldes@gmail.com?subject=Contacto%20desde%20la%20web",
            icon: "email",
        }
    ]
};

// ── About Me ─────────────────────────

export const texts: Text[] = [
    {
        text: {
            es: "Doctoranda en Educación con experiencia en gestión académica universitaria, investigación educativa y coordinación de programas formativos. He participado en proyectos de innovación educativa, transformación digital y organización de congresos internacionales, combinando investigación, planificación y diseño de recursos educativos.",
            en: "PhD candidate in Education with experience in university academic management, educational research, and coordination of training programs. I have participated in educational innovation projects, digital transformation initiatives, and the organization of international conferences, combining research, planning, and educational resource design.",
        },
    },
    {
        text: {
            es: "Me interesa especialmente la innovación educativa, la transformación digital en educación superior y las metodologías activas de aprendizaje. Destaco por mi pensamiento crítico, capacidad organizativa y habilidades de comunicación y coordinación en entornos académicos y multidisciplinares.",
            en: "I am especially interested in educational innovation, digital transformation in higher education, and active learning methodologies. I stand out for my critical thinking, organizational skills, and communication and coordination abilities in academic and multidisciplinary environments.",
        },
    },
];

// ── Work Experience ───────────────────

export const experiences: Experience[] = [
    {
        date: { es: "Ene 2026 - Actualidad", en: "Jan 2026 - Present" },
        role: {
            es: "Responsable de Coordinación Académica",
            en: "Academic Coordination Manager",
        },
        company: "PMM Business School",
        location: "Valencia, España",
        description: {
            es: "Gestión académica, experiencia del alumno y digitalización en educación superior y posgrados. Coordinación de programas, diseño de contenidos didácticos, mejora de indicadores de calidad, optimización de la experiencia en LMS, investigación aplicada y asesoramiento educativo a docentes y alumnado.",
            en: "Academic management, student experience, and digitalization in higher education and postgraduate programs. Coordination of academic programs, instructional content design, quality indicator improvement, LMS experience optimization, applied research, and educational support for faculty and students.",
        },
    },
    {
        date: { es: "Jun 2025", en: "Jun 2025" },
        role: {
            es: "Técnico de Formación e Innovación Educativa",
            en: "Educational Training and Innovation Technician",
        },
        company: "SFPIE - Universitat de València",
        location: "Valencia, España",
        description: {
            es: "Participación en la gestión, evaluación y seguimiento de proyectos consolidados y emergentes de innovación educativa, formación permanente y transformación digital en la Universitat de València.",
            en: "Participated in the management, evaluation, and monitoring of established and emerging educational innovation, lifelong learning, and digital transformation projects at the University of Valencia.",
        },
    },
    {
        date: { es: "Jun 2024 - Presente", en: "Jun 2024 - Present" },
        role: {
            es: "Investigadora y Coordinadora de Cátedra",
            en: "Researcher and Chair Coordinator",
        },
        company: "Cátedra UNESCO / Universitat de València",
        location: "Valencia, España",
        description: {
            es: "Miembro de un equipo interdisciplinar centrado en investigación y acción educativa. Colaboración en proyectos educativos y sociales, creación de materiales y recursos, y planificación de eventos académicos como congresos y seminarios.",
            en: "Member of an interdisciplinary team focused on educational research and action. Collaboration in educational and social projects, creation of educational materials and resources, and planning of academic events such as conferences and seminars.",
        },
    },
    {
        date: { es: "Ene 2024 - Oct 2024", en: "Jan 2024 - Oct 2024" },
        role: {
            es: "Organizadora de Congresos y Eventos",
            en: "Conference and Events Organizer",
        },
        company: "UNESCO / Universitat de València",
        location: "Valencia, España",
        description: {
            es: "Miembro del comité organizador del II Congreso Internacional de Educación Global en el Mediterráneo (CIEGME 2024), asumiendo tareas de organización, planificación, coordinación y comunicación.",
            en: "Member of the organizing committee of the II International Congress on Global Education in the Mediterranean (CIEGME 2024), responsible for organization, planning, coordination, and communication tasks.",
        },
    },
    {
        date: { es: "2024 - 2025", en: "2024 - 2025" },
        role: {
            es: "Becaria de Colaboración",
            en: "Research Collaboration Scholarship Holder",
        },
        company: "Ministerio de Educación",
        location: "España",
        description: {
            es: "Colaboración en grupos de investigación mediante elaboración de proyectos, análisis y manejo de bases de datos y otras tareas vinculadas a la investigación educativa.",
            en: "Collaborated in research groups through project development, database analysis and management, and other educational research-related tasks.",
        },
    },
];

// ── Education ─────────────────────────

export const education: Education[] = [
    {
        date: { es: "2025 - Presente", en: "2025 - Present" },
        degree: {
            es: "Doctorado en Educación",
            en: "PhD in Education",
        },
        institution: "Universitat de València",
        location: "Valencia, España",
    },
    {
        date: { es: "2023 - 2024", en: "2023 - 2024" },
        degree: {
            es: "Máster Universitario en Política, Gestión y Dirección de Organizaciones Educativas",
            en: "Master's Degree in Policy, Management and Leadership of Educational Organizations",
        },
        institution: "Universitat de València",
        location: "Valencia, España",
        notes: {
            es: "Nota: 9.53 • Premio Extraordinario de Máster",
            en: "GPA: 9.53 • Extraordinary Master's Award",
        },
    },
    {
        date: { es: "2020 - 2024", en: "2020 - 2024" },
        degree: {
            es: "Grado en Pedagogía",
            en: "Bachelor's Degree in Pedagogy",
        },
        institution: "Universitat de València",
        location: "Valencia, España",
        notes: {
            es: "Nota: 9.27 • Premio Extraordinario de Grado",
            en: "GPA: 9.27 • Extraordinary Degree Award",
        },
    },
    {
        date: { es: "2021 - Presente", en: "2021 - Present" },
        degree: {
            es: "Grado en Filosofía",
            en: "Bachelor's Degree in Philosophy",
        },
        institution: "UNED",
        location: "España",
    },
];

// ── Skills ────────────────────────────

export const skills: SkillGroup[] = [
    {
        category: { es: "Gestión Académica", en: "Academic Management" },
        items: [
            "Organización académica",
            "Planificación",
            "Gestión educativa",
            "Atención al alumnado",
            "Coordinación docente",
        ],
    },
    {
        category: { es: "Investigación", en: "Research" },
        items: [
            "Investigación educativa",
            "Investigación social",
            "Análisis de datos",
            "SPSS",
            "Excel",
            "Redacción de informes",
        ],
    },
    {
        category: { es: "Innovación Educativa", en: "Educational Innovation" },
        items: [
            "Metodologías activas",
            "Transformación digital",
            "Diseño de recursos didácticos",
            "Innovación educativa",
            "LMS",
        ],
    },
    {
        category: { es: "Herramientas Tecnológicas", en: "Technology Tools" },
        items: [
            "Microsoft Office",
            "Hubspot",
            "Moodle",
            "Canvas",
            "Google Classroom",
            "Microsoft Teams",
            "Google Workspace",
            "Zoom",
            "Canva",
            "Prezi",
        ],
    },
    {
        category: { es: "IA y Productividad", en: "AI & Productivity" },
        items: [
            "ChatGPT",
            "Gemini",
            "Copilot",
        ],
    },
    {
        category: { es: "Habilidades Transversales", en: "Soft Skills" },
        items: [
            "Pensamiento crítico",
            "Comunicación",
            "Trabajo colaborativo",
            "Expresión oral",
            "Planificación",
        ],
    },
];

// ── Certifications / Courses ──────────

export const certifications: Certification[] = [];

// ── Personal / Side Projects ──────────

export const projects: Project[] = [];

// ── Volunteer / Extracurricular ───────

export const volunteer: Volunteer[] = [];

// ── Achievements / Awards ─────────────

export const achievements: Achievement[] = [
    {
        title: {
            es: "Premio Extraordinario de Grado",
            en: "Extraordinary Degree Award",
        },
        issuer: "Universitat de València",
        date: { es: "2024", en: "2024" },
        description: {
            es: "Reconocimiento académico a la excelencia en el Grado en Pedagogía.",
            en: "Academic recognition for excellence in the Bachelor's Degree in Pedagogy.",
        },
    },
    {
        title: {
            es: "Premio Extraordinario de Máster",
            en: "Extraordinary Master's Award",
        },
        issuer: "Universitat de València",
        date: { es: "2025", en: "2025" },
        description: {
            es: "Reconocimiento académico a la excelencia en el Máster Universitario en Política, Gestión y Dirección de Organizaciones Educativas.",
            en: "Academic recognition for excellence in the Master's Degree in Policy, Management and Leadership of Educational Organizations.",
        },
    },
];

// ── Publications ─────────────────────

export const publications: Publication[] = [
    {
        date: { es: "Oct 2025", en: "Oct 2025" },
        title: {
            es: "Aprendizaje Servicio en la universidad. Ampliando las capacidades del alumnado para el Desarrollo Humano",
            en: "Service Learning at University: Expanding Students' Capacities for Human Development",
        },
        publisher: "Tirant lo Blanch Editorial",
        description: {
            es: "Capítulo del libro 'Horizontes pedagógicos para la igualdad y la justicia social'.",
            en: "Book chapter in 'Pedagogical Horizons for Equality and Social Justice'.",
        },
    },
    {
        date: { es: "Abr 2026", en: "Apr 2026" },
        title: {
            es: "La competencia aprender a aprender en la universidad: aplicación y valoración de un programa de formación en el aula",
            en: "Learning to Learn Competence at University: Application and Evaluation of a Classroom Training Program",
        },
        publisher: "Revista Española de Orientación y Psicopedagogía (REOP)",
    },
];

// ── References ────────────────────────

export const references: Reference[] = [];

// ── Interests ─────────────────────────

export const interests: Interest[] = [
    {
        name: {
            es: "Innovación educativa",
            en: "Educational Innovation",
        },
    },
    {
        name: {
            es: "Transformación digital",
            en: "Digital Transformation",
        },
    },
    {
        name: {
            es: "Investigación educativa",
            en: "Educational Research",
        },
    },
    {
        name: {
            es: "Metodologías activas",
            en: "Active Learning Methodologies",
        },
    },
    {
        name: {
            es: "Educación superior",
            en: "Higher Education",
        },
    },
];

// ── Languages ─────────────────────────

export const languageSkills: LanguageSkill[] = [
    {
        name: { es: "Castellano", en: "Spanish" },
        level: { es: "Nativo", en: "Native" },
        code: "",
    },
    {
        name: { es: "Valenciano", en: "Valencian" },
        level: {
            es: "C1 — Competencia profesional completa",
            en: "C1 — Full Professional Proficiency",
        },
        code: "C1",
    },
    {
        name: { es: "Inglés", en: "English" },
        level: {
            es: "B2 — Competencia profesional básica",
            en: "B2 — Professional Working Proficiency",
        },
        code: "B2",
    },
];
