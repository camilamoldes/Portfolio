
#set document(title: "Javier Fernández Bellot - CV", author: "Javier Fernández Bellot")
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
    #text(size: 26pt, weight: "bold", tracking: 0.5pt, font: "Outfit")[Javier Fernández Bellot] \
    #v(3pt)
    #text(fill: text-muted, size: 11pt)[Valencia, España • 25 años]
  ],
  align(right + horizon)[
    #link("https://www.linkedin.com/in/javier-fern%C3%A1ndez-bellot-455269291/")[LinkedIn] \\\ 
    #link("https://github.com/yaxfer1")[GitHub] \\\ 
    #link("mailto:javierfernandezbellot@gmail.com")[Email]
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
Soy ingeniero informático y graduado en ADE. Actualmente trabajo como desarrollador full-stack en el sector de las energías renovables, creando desde interfaces en sistemas embebidos Linux hasta aplicaciones web internas desde cero. Mi doble formación me da una perspectiva diferente: no solo busco el cómo construir un buen software, sino entender por qué merece la pena hacerlo.


#set text(size: 10pt, fill: rgb("#334155"))
Me apasionan los proyectos de impacto, la exploración espacial y la automatización. Integro la IA en mi día a día para trabajar de forma inteligente, pero sigo estudiando y mejorando mi programación activamente, ya que no creo que estemos cerca del momento en que nos pueda sustituir. Mi objetivo es rodearme de gente brillante para resolver problemas difíciles, y estoy totalmente abierto a trasladarme a cualquier lugar de Europa o Estados Unidos (ya he vivido y trabajado en Bélgica y Lituania) para unirme a un proyecto que importe.


= Experiencia Profesional


#grid(
  columns: (1fr, auto),
  [
    
    == Desarrollador Full-Stack
    *Zigor* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Abr 2025 - Presente]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Desarrollo de software para el sector de energías renovables: interfaces HMI para inversores solares de alta potencia sobre plataformas embebidas Linux (SoM), y aplicaciones web internas para la digitalización de procesos de la compañía. Trabajo con Python, Vue, Astro, Flask, SQL, Docker y protocolos industriales (Modbus, CAN, SCADA).
#list(
  [Diseñé y desarrollé desde cero una aplicación web interna (Astro + PostgreSQL + Vue) para gestión de inventario y planificación del laboratorio que mejoró significativamente la productividad del equipo],
  [Desarrollé APIs REST con Flask y SQLAlchemy bajo requisitos de empresas externas con extensas listas de especificaciones de comportamiento],
  [Diseñé un pipeline automatizado de internacionalización (i18n) para gestionar traducciones de forma transparente],
  [Gestioné el ciclo de vida completo: desde requisitos hasta despliegue con Docker en servidores y SoMs propios]
)



#grid(
  columns: (1fr, auto),
  [
    
    == Consultor Técnico de I+D
    *Leyton* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Dic 2024 - Feb 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Asesoramiento a empresas para la obtención de financiación pública y privada en proyectos de I+D+i. Redacción completa de memorias técnicas para proyectos de innovación de diversos sectores. Dejé esta empresa para volver a roles más enfocados en desarrollo e ingeniería de software.




#grid(
  columns: (1fr, auto),
  [
    
    == Corresponsal Erasmus en Flandes
    *Erasmus en Flandes* — #text(fill: text-muted, size: 9pt)[Gante, Bélgica]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Feb 2022 - Jun 2022]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Redactor en el blog «Erasmus en Flandes», creando contenido para promover el turismo y la vida estudiantil en la región de Flandes durante mi estancia Erasmus en Bélgica.



= Formación


#grid(
  columns: (1fr, auto),
  [
    
    == Doble Grado en Ingeniería Informática y Administración de Empresas
    *Universitat Politècnica de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - 2024]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
TFG: Aplicación full-stack (React + Python + SQL) para generación y edición de noticias con GPT, integrando RAG y agentes LangChain. Incluía plan de empresa y desarrollo tecnológico.




#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus — Ingeniería Informática
    *Vilniaus Gedimino Technikos Universitetas* — #text(fill: text-muted, size: 9pt)[Vilnius, Lituania]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2021 - 2022]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus — Administración de Empresas
    *Universiteit Gent (Ghent University)* — #text(fill: text-muted, size: 9pt)[Gante, Bélgica]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2022]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Bachillerato en Ciencias y Economía
    *Colegio Sagrado Corazón Hermanos Maristas* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2016 - 2018]
  ]
)




= Habilidades

*Lenguajes:* Python • TypeScript / JavaScript • Java • SQL • HTML / CSS


*Frontend:* Vue • React • Astro • Tailwind CSS


*Backend & Infraestructura:* Flask • REST APIs • PostgreSQL • SQLite • Docker • Linux • Git • CI/CD


*Protocolos & Embebidos:* Modbus • CAN • SCADA • Sistemas embebidos Linux (SoM)


*IA & Datos:* LangChain • RAG • NLP • LLMs / Prompt Engineering


*Habilidades Transversales:* Liderazgo • Autonomía • Resolución de problemas • Comunicación • Trabajo en equipo • Scrum / Agile



= Proyectos Personales


#grid(
  columns: (1fr, auto),
  [
    
    == GPT News Editor
    #text(size: 9pt, fill: text-muted)[React · Python · SQL · LangChain · GPT / OpenAI]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2024]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Aplicación full-stack desarrollada como TFG: un editor de noticias potenciado por GPT con arquitectura RAG y agentes LangChain. El usuario puede generar, editar y refinar artículos con un flujo Human-in-the-Loop. Mi primera experiencia real con desarrollo end-to-end, mucho más allá de los ejercicios académicos.



#grid(
  columns: (1fr, auto),
  [
    
    == Portfolio Web #text(fill: primary)[#link("https://github.com/yaxfer1/portfolio")[↗]]
    #text(size: 9pt, fill: text-muted)[Astro · TypeScript · Tailwind CSS · Typst]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2026]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Mi web personal y CV en vivo, construida con Astro y con exportación automática a PDF mediante Typst. Diseñada para poder actualizar mi CV rápidamente, con internacionalización (ES/EN), modo oscuro y un diseño minimalista que refleja mi estilo.



#grid(
  columns: (1fr, auto),
  [
    
    == Zigor Internal Tools
    #text(size: 9pt, fill: text-muted)[Astro · Vue · PostgreSQL · Python · Docker · Modbus]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Aplicación web interna que diseñé y desarrollé por iniciativa propia para organizar el inventario del laboratorio y la planificación del equipo. Aprendí Astro y PostgreSQL desde cero, integré componentes Vue, gestión de usuarios, conexión Modbus y despliegue completo con Docker en servidores propios. Tuvo un impacto real y directo en la productividad de mis compañeros.


= Voluntariado y Actividades


#grid(
  columns: (1fr, auto),
  [
    
    == Dirigente y Monitor de Ocio y Tiempo Libre
    *OJE — Organización Juvenil Española* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - Presente]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Organización y supervisión de actividades educativas y recreativas para jóvenes: campamentos de verano, deportes al aire libre (rappel, senderismo), proyectos grupales y talleres. He guiado a participantes en el desarrollo de habilidades de trabajo en equipo, liderazgo y resolución de problemas, siempre garantizando un entorno seguro y motivador.




= Conocimientos e Intereses
#set text(size: 10pt)
Inteligencia Artificial y LLMs • Exploración Espacial • Automatización de Procesos • Energías Renovables • Desarrollo Full-Stack • Emprendimiento y Startups • Ejercicio Físico y Salud • Carné de Monitor de Tiempo Libre • Permiso de Conducir B

= Idiomas
#grid(
  columns: (1fr, 1fr, 1fr),
  [ *Español*: Nativo ],
  [ *Inglés*: C1 — Avanzado _(C1)_ ],
  [ *Valenciano / Catalán*: Nativo ]
)

