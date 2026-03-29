
#set document(title: "Javier Fernández Bellot - CV", author: "Javier Fernández Bellot")
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
#grid(
  columns: (1fr, auto),
  align(left)[
    #text(size: 26pt, weight: "bold", tracking: 0.5pt, font: "Outfit")[Javier Fernández] \
    #v(3pt)
    #text(fill: text-muted, size: 11pt)[Valencia, Spain • 25 years old]
  ],
  align(right)[
    #link("https://www.linkedin.com/in/javier-fern%C3%A1ndez-bellot-455269291/")[LinkedIn] \\ 
    #link("https://github.com/yaxfer1")[GitHub]
  ]
)

#v(10pt)


= About Me

#set text(size: 10pt, fill: rgb("#334155"))
I am a software developer with experience in the development of human-machine interfaces (HMI) for solar inverters. I have worked with technologies such as Python, Vue, Astro, SQL (JSON) and Docker. I also have experience in the integration of Modbus/SCADA protocols and in the optimization of performance in embedded systems.


= Work Experience


#grid(
  columns: (1fr, auto),
  [
    
    == HMI Software Developer
    *Zigor* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Apr 2025 - Present]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Built HMI for solar inverters on SoM (Linux) using Python, Vue, Astro, SQL (JSON), and Docker. Integrated Modbus/SCADA protocols and optimized performance for embedded deployment under strict resource constraints.




#grid(
  columns: (1fr, auto),
  [
    
    == Technical Consulting
    *Leyton* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Dec 2024 - Feb 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Providing consulting services to obtain financing for innovation projects.




#grid(
  columns: (1fr, auto),
  [
    
    == Leisure and Youth Group Leader
    *Organización Juvenil Española (OJE)* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - Present]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Leader and Monitor at the Leisure Time Organization: Organización Juvenil Española.




#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus Correspondent in Flanders
    *Erasmus en Flandes* — #text(fill: text-muted, size: 9pt)[Gante, Bélgica]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Feb 2022 - Jun 2022]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Editor at the 'Erasmus in Flanders' blog to promote tourism in the Flanders region (Belgium).



= Education


#grid(
  columns: (1fr, auto),
  [
    
    == Double bachelor degree in Business Management and Computer Engineering
    *Universitat Politècnica de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - 2024]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Thesis: News generation and editing using GPT: Business Plan and Technological Development.




#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus under Computer Engineering
    *Vilniaus Gedimino Technikos Universitetas* — #text(fill: text-muted, size: 9pt)[Vilnius, Lituania]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2021 - 2022]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus under Business Management
    *Universiteit Gent (Ghent University)* — #text(fill: text-muted, size: 9pt)[Gante, Bélgica]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2022]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == High School Diploma in Science and Economics
    *Colegio Sagrado Corazón Hermanos Maristas* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2016 - 2018]
  ]
)










= Knowledge & Interests
#set text(size: 10pt)
Programming • Web Development (React, Vue, Astro) • Python, Java • Physical Exercise and Health • Leisure and Recreation • NLP Tools and Chat Assistants

= Languages
#grid(
  columns: (1fr, 1fr, 1fr),
  [ *Spanish*: Native ],
  [ *English*: Advanced (C1) _(C1)_ ],
  [ *Valencian*: Native ]
)

