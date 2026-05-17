
#set document(title: "Camila Moldes Ángel - CV", author: "Camila Moldes Ángel")
#set page(
  paper: "a4",
  margin: (x: 2cm, y: 2cm),
)
#set text(
  font: ("Outfit", "Inter"),
  size: 10pt,
  lang: "en",
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
    #text(fill: text-muted, size: 11pt)[Valencia, Spain]
  ],
  align(right + horizon)[
    #link("camilamoldes@gmail.com")[Email]
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


= About Me

#set text(size: 10pt, fill: rgb("#334155"))
PhD candidate in Education with experience in university academic management, educational research, and coordination of training programs. I have participated in educational innovation projects, digital transformation initiatives, and the organization of international conferences, combining research, planning, and educational resource design.


#set text(size: 10pt, fill: rgb("#334155"))
I am especially interested in educational innovation, digital transformation in higher education, and active learning methodologies. I stand out for my critical thinking, organizational skills, and communication and coordination abilities in academic and multidisciplinary environments.


= Work Experience


#grid(
  columns: (1fr, auto),
  [
    
    == Academic Coordination Manager
    *PMM Business School* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Jan 2026 - Present]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Academic management, student experience, and digitalization in higher education and postgraduate programs. Coordination of academic programs, instructional content design, quality indicator improvement, LMS experience optimization, applied research, and educational support for faculty and students.




#grid(
  columns: (1fr, auto),
  [
    
    == Educational Training and Innovation Technician
    *SFPIE - Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Jun 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Participated in the management, evaluation, and monitoring of established and emerging educational innovation, lifelong learning, and digital transformation projects at the University of Valencia.




#grid(
  columns: (1fr, auto),
  [
    
    == Researcher and Chair Coordinator
    *Cátedra UNESCO / Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Jun 2024 - Present]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Member of an interdisciplinary team focused on educational research and action. Collaboration in educational and social projects, creation of educational materials and resources, and planning of academic events such as conferences and seminars.




#grid(
  columns: (1fr, auto),
  [
    
    == Conference and Events Organizer
    *UNESCO / Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Jan 2024 - Oct 2024]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Member of the organizing committee of the II International Congress on Global Education in the Mediterranean (CIEGME 2024), responsible for organization, planning, coordination, and communication tasks.




#grid(
  columns: (1fr, auto),
  [
    
    == Research Collaboration Scholarship Holder
    *Ministerio de Educación* — #text(fill: text-muted, size: 9pt)[España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2024 - 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Collaborated in research groups through project development, database analysis and management, and other educational research-related tasks.



= Education


#grid(
  columns: (1fr, auto),
  [
    
    == PhD in Education
    *Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2025 - Present]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Master's Degree in Policy, Management and Leadership of Educational Organizations
    *Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2023 - 2024]
  ]
)


#text(size: 9pt, fill: text-muted)[GPA: 9.53 • Extraordinary Master's Award]



#grid(
  columns: (1fr, auto),
  [
    
    == Bachelor's Degree in Pedagogy
    *Universitat de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2020 - 2024]
  ]
)


#text(size: 9pt, fill: text-muted)[GPA: 9.27 • Extraordinary Degree Award]



#grid(
  columns: (1fr, auto),
  [
    
    == Bachelor's Degree in Philosophy
    *UNED* — #text(fill: text-muted, size: 9pt)[España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2021 - Present]
  ]
)




= Skills

*Academic Management:* Organización académica • Planificación • Gestión educativa • Atención al alumnado • Coordinación docente


*Research:* Investigación educativa • Investigación social • Análisis de datos • SPSS • Excel • Redacción de informes


*Educational Innovation:* Metodologías activas • Transformación digital • Diseño de recursos didácticos • Innovación educativa • LMS


*Technology Tools:* Microsoft Office • Hubspot • Moodle • Canvas • Google Classroom • Microsoft Teams • Google Workspace • Zoom • Canva • Prezi


*AI & Productivity:* ChatGPT • Gemini • Copilot


*Soft Skills:* Pensamiento crítico • Comunicación • Trabajo colaborativo • Expresión oral • Planificación





= Achievements & Awards

- *Extraordinary Degree Award* — Universitat de València (2024)
  #text(size: 9pt, fill: text-muted)[Academic recognition for excellence in the Bachelor's Degree in Pedagogy.]


- *Extraordinary Master's Award* — Universitat de València (2025)
  #text(size: 9pt, fill: text-muted)[Academic recognition for excellence in the Master's Degree in Policy, Management and Leadership of Educational Organizations.]


= Publications

- *Service Learning at University: Expanding Students' Capacities for Human Development* — Tirant lo Blanch Editorial (Oct 2025)
  #text(size: 9pt, fill: text-muted)[Book chapter in 'Pedagogical Horizons for Equality and Social Justice'.]


- *Learning to Learn Competence at University: Application and Evaluation of a Classroom Training Program* — Revista Española de Orientación y Psicopedagogía (REOP) (Apr 2026)



= Knowledge & Interests
#set text(size: 10pt)
Educational Innovation • Digital Transformation • Educational Research • Active Learning Methodologies • Higher Education

= Languages
#grid(
  columns: (1fr, 1fr, 1fr),
  [ *Spanish*: Native ],
  [ *Valencian*: C1 — Full Professional Proficiency _(C1)_ ],
  [ *English*: B2 — Professional Working Proficiency _(B2)_ ]
)

