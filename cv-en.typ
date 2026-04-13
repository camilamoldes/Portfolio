
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
#let photo-path = "src/assets/photo.webp"

#grid(
  columns: (1fr, auto, auto),
  gutter: 12pt,
  align(left)[
    #text(size: 26pt, weight: "bold", tracking: 0.5pt, font: "Outfit")[Javier Fernández Bellot] \
    #v(3pt)
    #text(fill: text-muted, size: 11pt)[Valencia, Spain • 25 years old]
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


= About Me

#set text(size: 10pt, fill: rgb("#334155"))
I am a Computer Engineer and Business Administration graduate. I currently work as a full-stack developer in the renewable energy sector, building everything from interfaces on embedded Linux systems to internal web applications from scratch. My dual background gives me a different perspective: I don't just focus on how to build software, but on understanding why it's worth building in the first place.


#set text(size: 10pt, fill: rgb("#334155"))
I'm passionate about high-impact projects, space exploration, and automation. I integrate AI daily to work smarter, but I actively study and improve my programming skills, as I don't believe we are anywhere near being replaced by it yet. My goal is to surround myself with brilliant people to solve hard problems, and I am completely open to relocating anywhere in Europe or the US (having already lived in Belgium and Lithuania) to join a project that matters.


= Work Experience


#grid(
  columns: (1fr, auto),
  [
    
    == Full-Stack Developer
    *Zigor* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Apr 2025 - Present]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Software development for the renewable energy sector: HMI interfaces for high-power solar inverters on embedded Linux platforms (SoM), and internal web applications for company process digitalization. I work with Python, Vue, Astro, Flask, SQL, Docker, and industrial protocols (Modbus, CAN, SCADA).
#list(
  [Designed and built from scratch an internal web app (Astro + PostgreSQL + Vue) for inventory management and lab scheduling that significantly improved team productivity],
  [Built REST APIs with Flask and SQLAlchemy under external client requirements with extensive behavior specification lists],
  [Designed an automated internationalization (i18n) pipeline to manage translations seamlessly],
  [Managed the full lifecycle: from requirements to deployment with Docker on self-hosted servers and SoMs]
)



#grid(
  columns: (1fr, auto),
  [
    
    == R&D Technical Consultant
    *Leyton* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[Dec 2024 - Feb 2025]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Advised companies on obtaining public and private funding for R&D and innovation projects. Wrote complete technical reports for innovation projects across various sectors. I left this role to return to positions more focused on software development and engineering.




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
Editor at the 'Erasmus in Flanders' blog, creating content to promote tourism and student life in the Flanders region during my Erasmus stay in Belgium.



= Education


#grid(
  columns: (1fr, auto),
  [
    
    == Double Bachelor's Degree in Computer Engineering and Business Administration
    *Universitat Politècnica de València* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - 2024]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Thesis: Full-stack application (React + Python + SQL) for news generation and editing with GPT, integrating RAG and LangChain agents. Included business plan and technological development.




#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus — Computer Engineering
    *Vilniaus Gedimino Technikos Universitetas* — #text(fill: text-muted, size: 9pt)[Vilnius, Lituania]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2021 - 2022]
  ]
)





#grid(
  columns: (1fr, auto),
  [
    
    == Erasmus — Business Administration
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




= Skills

*Languages:* Python • TypeScript / JavaScript • Java • SQL • HTML / CSS


*Frontend:* Vue • React • Astro • Tailwind CSS


*Backend & Infrastructure:* Flask • REST APIs • PostgreSQL • SQLite • Docker • Linux • Git • CI/CD


*Protocols & Embedded:* Modbus • CAN • SCADA • Sistemas embebidos Linux (SoM)


*AI & Data:* LangChain • RAG • NLP • LLMs / Prompt Engineering


*Soft Skills:* Liderazgo • Autonomía • Resolución de problemas • Comunicación • Trabajo en equipo • Scrum / Agile



= Personal Projects


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
Full-stack application built as my Bachelor's Thesis: a GPT-powered news editor with RAG architecture and LangChain agents. Users can generate, edit, and refine articles through a Human-in-the-Loop workflow. My first real end-to-end development experience, far beyond academic exercises.



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
My personal website and live CV, built with Astro with automatic PDF export via Typst. Designed so I can update my CV quickly, with internationalization (ES/EN), dark mode, and a minimalist design that reflects my style.



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
Internal web application I designed and developed on my own initiative to organize lab inventory and team scheduling. I learned Astro and PostgreSQL from scratch, integrated Vue components, user management, Modbus connectivity, and full deployment with Docker on self-hosted servers. It had a real, direct impact on my colleagues' productivity.


= Volunteering & Activities


#grid(
  columns: (1fr, auto),
  [
    
    == Youth Leader and Leisure & Recreation Instructor
    *OJE — Organización Juvenil Española* — #text(fill: text-muted, size: 9pt)[Valencia, España]
  
  ],
  align(right)[
    #text(fill: text-muted, weight: "bold", size: 9pt)[2018 - Present]
  ]
)
#v(4pt)
#set text(size: 10pt, fill: rgb("#334155"))
Organized and supervised educational and recreational activities for young people: summer camps, outdoor sports (rappelling, hiking), group projects, and workshops. I've guided participants in developing teamwork, leadership, and problem-solving skills while ensuring a safe and engaging environment.




= Knowledge & Interests
#set text(size: 10pt)
Artificial Intelligence & LLMs • Space Exploration • Process Automation • Renewable Energy • Full-Stack Development • Entrepreneurship & Startups • Fitness & Health • Leisure & Recreation Instructor License • Driver's License (B)

= Languages
#grid(
  columns: (1fr, 1fr, 1fr),
  [ *Spanish*: Native ],
  [ *English*: C1 — Advanced _(C1)_ ],
  [ *Valencian / Catalan*: Native ]
)

