
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
#grid(
  columns: (1fr, auto),
  align(left)[
    #text(size: 26pt, weight: "bold", tracking: 0.5pt, font: "Outfit")[Javier Fernández] \
    #v(3pt)
    #text(fill: text-muted, size: 11pt)[Valencia, España • 25 años]
  ],
  align(right)[
    #link("https://www.linkedin.com/in/javier-fern%C3%A1ndez-bellot-455269291/")[LinkedIn] \\ 
    #link("https://github.com/yaxfer1")[GitHub]
  ]
)

#v(10pt)


= Sobre Mí

#set text(size: 10pt, fill: rgb("#334155"))
Soy un desarrollador de software con experiencia en el desarrollo de interfaces hombre-máquina (HMI) para inversores solares. He trabajado con tecnologías como Python, Vue, Astro, SQL (JSON) y Docker. También tengo experiencia en la integración de protocolos Modbus/SCADA y en la optimización de rendimiento en sistemas embebidos.


= Experiencia Profesional


#grid(
  columns: (1fr, auto),
  [
    
    == Desarrollador de Software HMI
    *Zigor* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Abr 2025 - Presente]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Desarrollo de HMI para inversores solares en SoM (Linux) usando Python, Vue, Astro, SQL (JSON) y Docker. Integración de protocolos Modbus/SCADA y optimización de rendimiento en sistemas embebidos bajo estrictas restricciones de recursos.




#grid(
  columns: (1fr, auto),
  [
    
    == Consultoría Técnica
    *Leyton* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Dic 2024 - Feb 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Prestación de servicios de consultoría para la obtención de financiación en proyectos de innovación.




#grid(
  columns: (1fr, auto),
  [
    
    == Monitor de Ocio y Tiempo Libre
    *Organización Juvenil Española (OJE)* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - Presente]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Monitor y responsable de grupo en la Organización Juvenil Española, coordinando actividades de ocio y tiempo libre.




#grid(
  columns: (1fr, auto),
  [
    
    == Corresponsal Erasmus
    *Erasmus en Flandes* — #text(fill: text-muted, size: 9pt)[Gante, Bélgica]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Feb 2022 - Jun 2022]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Redactor en el blog «Erasmus en Flandes» para promover el turismo en la región de Flandes (Bélgica).



= Formación


#grid(
  columns: (1fr, auto),
  [
    
    == Doble Grado en Administración de Empresas e Ingeniería Informática
    *Universitat Politècnica de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - 2024]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
TFG: Generación y edición de noticias usando GPT: Plan de Empresa y Desarrollo Tecnológico.




#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus - Ingeniería Informática
    *Vilniaus Gedimino Technikos Universitetas* — #text(fill: text-muted, size: 9pt)[Vilnius, Lituania]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2021 - 2022]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus - Administración de Empresas
    *Universiteit Gent (Ghent University)* — #text(fill: text-muted, size: 9pt)[Gante, Bélgica]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2022]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Bachillerato Ciencias y Economía
    *Colegio Sagrado Corazón Hermanos Maristas* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2016 - 2018]
  ]
)










= Conocimientos e Intereses
#set text(size: 10pt)
Programación • Desarrollo Web (React, Vue, Astro) • Python, Java • Ejercicio Físico y Salud • Ocio y Recreación • Herramientas NLP / IAs Conversacionales

= Idiomas
#grid(
  columns: (1fr, 1fr, 1fr),
  [ *Español*: Nativo ],
  [ *Inglés*: C1 - Avanzado _(C1)_ ],
  [ *Valenciano*: Nativo ]
)

