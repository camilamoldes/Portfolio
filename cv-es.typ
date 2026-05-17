
#set document(title: "Camila Moldes Ángel - CV", author: "Camila Moldes Ángel")
#set page(
  paper: "a4",
  margin: (x: 2cm, y: 2cm),
)
#set text(
  font: ("Outfit", "Inter"),
  size: 10pt,
  lang: "es",
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
#let photo-path = "src/assets/photo.webp"

#grid(
  columns: (1fr, auto, auto),
  gutter: 12pt,
  align(left)[
    #text(size: 26pt, weight: "bold", tracking: 0.5pt, font: "Outfit")[Camila Moldes Ángel] \
    #v(3pt)
    #text(fill: text-muted, size: 11pt)[Valencia, España]
  ],
  align(right + horizon)[
    #link("mailto:camilamoldes@gmail.com")[Email]
  ],
  align(right + horizon)[
    #box(
      clip: true,
      width: 60pt,
      height: 60pt,
      radius: 50%,
      image(photo-path, width: 60pt, height: 60pt, fit: "cover")
    )
  ]
)

#v(10pt)


= Sobre Mí

#set text(size: 10pt, fill: rgb("#334155"))
Doctoranda en Educación con experiencia en gestión académica universitaria, investigación educativa y coordinación de programas formativos. He participado en proyectos de innovación educativa, transformación digital y organización de congresos internacionales, combinando investigación, planificación y diseño de recursos educativos.


#set text(size: 10pt, fill: rgb("#334155"))
Me interesa especialmente la innovación educativa, la transformación digital en educación superior y las metodologías activas de aprendizaje. Destaco por mi pensamiento crítico, capacidad organizativa y habilidades de comunicación y coordinación en entornos académicos y multidisciplinares.


= Experiencia Profesional


#grid(
  columns: (1fr, auto),
  [
    
    == Responsable de Coordinación Académica
    *PMM Business School* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Ene 2026 - Actualidad]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Gestión académica, experiencia del alumno y digitalización en educación superior y posgrados. Coordinación de programas, diseño de contenidos didácticos, mejora de indicadores de calidad, optimización de la experiencia en LMS, investigación aplicada y asesoramiento educativo a docentes y alumnado.




#grid(
  columns: (1fr, auto),
  [
    
    == Técnico de Formación e Innovación Educativa
    *SFPIE - Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Jun 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Participación en la gestión, evaluación y seguimiento de proyectos consolidados y emergentes de innovación educativa, formación permanente y transformación digital en la Universitat de València.




#grid(
  columns: (1fr, auto),
  [
    
    == Investigadora y Coordinadora de Cátedra
    *Cátedra UNESCO / Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Jun 2024 - Presente]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Miembro de un equipo interdisciplinar centrado en investigación y acción educativa. Colaboración en proyectos educativos y sociales, creación de materiales y recursos, y planificación de eventos académicos como congresos y seminarios.




#grid(
  columns: (1fr, auto),
  [
    
    == Organizadora de Congresos y Eventos
    *UNESCO / Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Ene 2024 - Oct 2024]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Miembro del comité organizador del II Congreso Internacional de Educación Global en el Mediterráneo (CIEGME 2024), asumiendo tareas de organización, planificación, coordinación y comunicación.




#grid(
  columns: (1fr, auto),
  [
    
    == Becaria de Colaboración
    *Ministerio de Educación* — #text(fill: text-muted, size: 9pt)[España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2024 - 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Colaboración en grupos de investigación mediante elaboración de proyectos, análisis y manejo de bases de datos y otras tareas vinculadas a la investigación educativa.



= Formación


#grid(
  columns: (1fr, auto),
  [
    
    == Doctorado en Educación
    *Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2025 - Presente]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Máster Universitario en Política, Gestión y Dirección de Organizaciones Educativas
    *Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2023 - 2024]
  ]
)


#text(size: 9pt, fill: text-muted)[Nota: 9.53 • Premio Extraordinario de Máster]



#grid(
  columns: (1fr, auto),
  [
    
    == Grado en Pedagogía
    *Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2020 - 2024]
  ]
)


#text(size: 9pt, fill: text-muted)[Nota: 9.27 • Premio Extraordinario de Grado]



#grid(
  columns: (1fr, auto),
  [
    
    == Grado en Filosofía
    *UNED* — #text(fill: text-muted, size: 9pt)[España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2021 - Presente]
  ]
)




= Habilidades

*Gestión Académica:* Organización académica • Planificación • Gestión educativa • Atención al alumnado • Coordinación docente


*Investigación:* Investigación educativa • Investigación social • Análisis de datos • SPSS • Excel • Redacción de informes


*Innovación Educativa:* Metodologías activas • Transformación digital • Diseño de recursos didácticos • Innovación educativa • LMS


*Herramientas Tecnológicas:* Microsoft Office • Hubspot • Moodle • Canvas • Google Classroom • Microsoft Teams • Google Workspace • Zoom • Canva • Prezi


*IA y Productividad:* ChatGPT • Gemini • Copilot


*Habilidades Transversales:* Pensamiento crítico • Comunicación • Trabajo colaborativo • Expresión oral • Planificación





= Logros y Premios

- *Premio Extraordinario de Grado* — Universitat de València (2024)
  #text(size: 9pt, fill: text-muted)[Reconocimiento académico a la excelencia en el Grado en Pedagogía.]


- *Premio Extraordinario de Máster* — Universitat de València (2025)
  #text(size: 9pt, fill: text-muted)[Reconocimiento académico a la excelencia en el Máster Universitario en Política, Gestión y Dirección de Organizaciones Educativas.]


= Publicaciones

- *Aprendizaje Servicio en la universidad. Ampliando las capacidades del alumnado para el Desarrollo Humano* — Tirant lo Blanch Editorial (Oct 2025)
  #text(size: 9pt, fill: text-muted)[Capítulo del libro 'Horizontes pedagógicos para la igualdad y la justicia social'.]


- *La competencia aprender a aprender en la universidad: aplicación y valoración de un programa de formación en el aula* — Revista Española de Orientación y Psicopedagogía (REOP) (Abr 2026)



= Conocimientos e Intereses
#set text(size: 10pt)
Innovación educativa • Transformación digital • Investigación educativa • Metodologías activas • Educación superior

= Idiomas
#grid(
  columns: (1fr, 1fr, 1fr),
  [ *Castellano*: Nativo ],
  [ *Valenciano*: C1 — Competencia profesional completa _(C1)_ ],
  [ *Inglés*: B2 — Competencia profesional básica _(B2)_ ]
)

