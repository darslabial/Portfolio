export const personalInfo = {
  name: "Daryl C.",
  surname: "Labial",
  githubHandle: "LabialDaryl",
  title: "Computer Engineering Student | OJT & Systems Developer",
  roleTag: "Computer Engineering Student · NEMSU Cantilan",
  location: "Carrascal, Surigao del Sur, Philippines",
  availability: "Actively Seeking Internship / OJT Opportunities",
  email: "daryllabial1@gmail.com",
  phone: "+63 946 103 2379",
  githubUrl: "https://github.com/LabialDaryl",
  facebookUrl: "https://www.facebook.com/DAreal4ryl/",
  resumeUrl: "/Daryl_Labial_Resume.pdf",
  tagline: "Computer Engineering student at NEMSU with hands-on expertise in PHP Laravel, Vue/Nuxt, Python, C++, microcontrollers (ESP32/Arduino), and full-stack software development.",
  bio: "Detail-oriented Computer Engineering student at North Eastern Mindanao State University (NEMSU – Cantilan Campus) with a solid foundation in full-stack software development (PHP Laravel, Vue/Nuxt, Django, Python), computer networking, embedded systems, and relational database management. Eager to apply academic training and hands-on project experience in software engineering, embedded systems, or systems administration.",
  avatar: "/assets/daryl_profile.jpg",
  stats: [
    { label: "Degree", value: "BSCpE" },
    { label: "Course Period", value: "2023–Present" },
    { label: "Repositories", value: "12+" },
    { label: "Target", value: "OJT / Intern" }
  ],
  education: {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "North Eastern Mindanao State University (NEMSU) – Cantilan Campus",
    period: "2023 — Present",
    coursework: [
      "Data Structures & Algorithms",
      "Computer Networking (TCP/IP)",
      "Operating Systems",
      "Embedded Systems",
      "Software Development",
      "Database Management",
      "Computer Hardware Fundamentals",
      "Electronics Fundamentals"
    ]
  },
  careerObjective: "Seeking an internship or on-the-job training opportunity in software development, IT support, network administration, systems administration, cybersecurity, embedded systems, or quality assurance where I can apply technical competencies, contribute to organizational goals, and develop professional expertise.",
  languages: ["English", "Filipino", "Cebuano"],
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/DAreal4ryl/", icon: "Facebook" },
    { name: "GitHub", url: "https://github.com/LabialDaryl", icon: "Github" },
    { name: "Email", url: "mailto:daryllabial1@gmail.com", icon: "Mail" },
    { name: "Phone", url: "tel:+639461032379", icon: "Phone" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages used across software development, microcontroller firmware, and database logic.",
    items: [
      { name: "PHP", level: 89, tag: "Backend" },
      { name: "Python", level: 92, tag: "Core & AI" },
      { name: "JavaScript", level: 88, tag: "Frontend" },
      { name: "C++", level: 88, tag: "Systems" },
      { name: "Arduino (C/C++)", level: 90, tag: "Firmware" },
      { name: "SQL (MySQL & SQLite)", level: 88, tag: "Relational" },
      { name: "HTML5 & CSS3", level: 92, tag: "Styling" }
    ]
  },
  {
    category: "Frameworks & Developer Tools",
    description: "Application frameworks, version control, and development environments from resume projects.",
    items: [
      { name: "Laravel (PHP)", level: 89, tag: "MVC Web" },
      { name: "Vue.js / Nuxt", level: 87, tag: "SSR App" },
      { name: "Django", level: 86, tag: "Python Web" },
      { name: "Flask", level: 82, tag: "REST API" },
      { name: "Android Studio / Java", level: 85, tag: "Mobile" },
      { name: "Git, GitHub & Gitea", level: 91, tag: "Git Control" },
      { name: "VS Code / Dev Tools", level: 92, tag: "IDEs" }
    ]
  },
  {
    category: "Hardware & Embedded Systems",
    description: "Hands-on computer engineering competencies in microcontrollers, sensors, and system builds.",
    items: [
      { name: "ESP32 Microcontrollers", level: 92, tag: "IoT Wireless" },
      { name: "Arduino Hardware", level: 90, tag: "Prototyping" },
      { name: "Sensor & Actuator Drivers", level: 88, tag: "Robotics" },
      { name: "Computer Assembly & Repair", level: 95, tag: "Hardware" },
      { name: "OS Administration", level: 86, tag: "Win & Linux" },
      { name: "Microcontroller Firmware", level: 89, tag: "Embedded" }
    ]
  },
  {
    category: "Computer Networking & Infrastructure",
    description: "Enterprise & lab network architecture, Cisco packet simulation, routing protocols, and hardware cabling.",
    items: [
      { name: "TCP/IP & OSI Protocol Stack", level: 89, tag: "Protocols" },
      { name: "Router & Switch Config", level: 86, tag: "LAN / VLAN" },
      { name: "LAN/WAN Subnetting (IPv4/v6)", level: 88, tag: "CIDR / IP" },
      { name: "Cisco Packet Tracer", level: 90, tag: "Simulation" },
      { name: "Network Security & Firewalls", level: 85, tag: "Security" },
      { name: "Ethernet Cabling (RJ-45)", level: 94, tag: "T568B Cabling" }
    ]
  },
  {
    category: "Databases & Backend Architecture",
    description: "Relational database modeling, query optimization, and real-time backend communication.",
    items: [
      { name: "PostgreSQL", level: 88, tag: "Enterprise" },
      { name: "MySQL & SQLite", level: 89, tag: "RDBMS" },
      { name: "RESTful APIs & WebSockets", level: 88, tag: "Real-Time" },
      { name: "Database Normalization", level: 88, tag: "Schema 3NF" },
      { name: "Query Optimization & Indexing", level: 86, tag: "Performance" },
      { name: "Database Backup & Security", level: 87, tag: "Integrity" }
    ]
  },
  {
    category: "Professional Competencies",
    description: "Interpersonal and problem-solving capabilities highlighted in academic & engineering pursuits.",
    items: [
      { name: "Analytical Thinking", level: 92, tag: "Problem Solving" },
      { name: "Technical Documentation", level: 88, tag: "Reporting" },
      { name: "AI Ethics & Practical Tools", level: 86, tag: "Engineering" },
      { name: "Agile & Team Collaboration", level: 90, tag: "Teamwork" },
      { name: "Critical Decision Making", level: 89, tag: "Evaluation" },
      { name: "Quality Assurance & Testing", level: 87, tag: "QA / Testing" }
    ]
  }
];

export const projectsData = [
  {
    id: "smart-queueing-system",
    title: "Smart Queueing Management System",
    subtitle: "Real-Time Multi-Counter Ticket & Calling Platform",
    category: "Web Apps",
    platform: "gitea",
    repoName: "queueing_system",
    image: "/assets/project_queueing.svg",
    summary: "Architected a full-stack real-time queueing and ticket dispatching system for service centers and administrative desks. Features dynamic number calling, audio alert chimes, multi-counter window management, and live waiting telemetry.",
    metrics: "PHP Laravel · Vue / Nuxt · WebSockets",
    tags: ["PHP", "Laravel", "Vue.js", "Nuxt", "WebSockets", "Gitea"],
    demoUrl: "#",
    repoUrl: "https://gitea.com",
    featured: true,
    caseStudy: {
      challenge: "Eliminating chaotic waiting lines, long citizen wait times, and miscommunication across multiple transaction counter windows.",
      solution: "Engineered a reactive queue engine using Laravel backend services and a responsive Vue/Nuxt dashboard with real-time websocket broadcasting for ticket calling and status displays.",
      impact: "Significantly reduces perceived wait times and provides administrators with live throughput analytics and average service duration metrics."
    }
  },
  {
    id: "resident-id-system",
    title: "Resident ID & Citizen Registry System",
    subtitle: "Municipal Citizen Census & Digital ID Issuance",
    category: "Web Apps",
    platform: "gitea",
    repoName: "resident_id_system",
    image: "/assets/project_resident_id.svg",
    summary: "Developed a comprehensive municipal resident identification and demographic registry platform. Implemented digital ID card generation with QR verification, citizen census record management, and automated certificate and clearance issuance.",
    metrics: "PHP Laravel · Vue / Nuxt · MySQL",
    tags: ["PHP", "Laravel", "Vue.js", "Nuxt", "MySQL", "Digital ID", "Gitea"],
    demoUrl: "#",
    repoUrl: "https://gitea.com",
    featured: true,
    caseStudy: {
      challenge: "Digitizing paper-based barangay census files, speeding up resident identification verification, and preventing duplicate registry entries.",
      solution: "Built a secure Laravel relational database schema with encryption, connected to a Nuxt frontend for rapid demographic search, photo capture, and automated PDF ID card printing with tamper-evident QR validation.",
      impact: "Streamlines municipal record retrieval from minutes to seconds and establishes a centralized, tamper-resistant digital registry."
    }
  },
  {
    id: "pawarehauz-ecommerce",
    title: "PawareHauz – E-Commerce Platform",
    subtitle: "Full-Stack Electronics & Hardware Storefront",
    category: "Web Apps",
    repoName: "Ecommerce_web",
    image: "/assets/project_ecommerce.svg",
    summary: "Architected a full-stack e-commerce web application for electronics and hardware products with user authentication, product catalog, cart operations, and MySQL relational database integration.",
    metrics: "Django · MySQL · HTML/CSS",
    tags: ["Django", "MySQL", "Python", "E-Commerce", "CRUD"],
    demoUrl: "https://github.com/LabialDaryl/Ecommerce_web",
    repoUrl: "https://github.com/LabialDaryl/Ecommerce_web",
    featured: true,
    caseStudy: {
      challenge: "Managing relational product inventory, user session persistence, and seamless shopping cart checkout for hardware electronics.",
      solution: "Designed responsive UI components connected to a robust Django backend with normalized MySQL tables for orders, users, and stock.",
      impact: "Delivered a complete, functional digital storefront supporting full CRUD workflows and customer management."
    }
  },
  {
    id: "firefighter-robot",
    title: "Autonomous Firefighter Robot",
    subtitle: "Robotics Teleoperation & Auto-Suppression",
    category: "IoT & Robotics",
    repoName: "AppController_Firefighter_Robot",
    image: "/assets/project_firefighter.svg",
    summary: "Engineered an autonomous and teleoperated firefighting robot utilizing flame sensors, ultrasonic obstacle-detection, and automated water-suppression mechanisms.",
    metrics: "ESP32 · Arduino · C++",
    tags: ["ESP32", "Arduino", "C++", "Obstacle Detection", "Flame Sensors"],
    demoUrl: "https://github.com/LabialDaryl/AppController_Firefighter_Robot",
    repoUrl: "https://github.com/LabialDaryl/AppController_Firefighter_Robot",
    featured: true,
    caseStudy: {
      challenge: "Coordinating multi-sensor inputs (flame sensors, ultrasonic distance) with motor drive logic and water pump triggers without lag.",
      solution: "Integrated real-time decision algorithms in C++ for collision avoidance and automatic fire targeting with remote override capabilities.",
      impact: "Successfully created an automated first-responder hazard mitigation platform protecting human operators."
    }
  },
  {
    id: "water-billing-system",
    title: "Water Billing Management System",
    subtitle: "Automated Invoicing & Customer Records",
    category: "Python Systems",
    repoName: "Payroll_System",
    image: "/assets/project_payroll.svg",
    summary: "Built a database-driven billing platform in Python and SQLite that automated invoicing, customer account record management, and financial reporting workflows.",
    metrics: "Python · SQLite · Financial Logic",
    tags: ["Python", "SQLite", "Invoicing", "Automation", "Reporting"],
    demoUrl: "https://github.com/LabialDaryl/Payroll_System",
    repoUrl: "https://github.com/LabialDaryl/Payroll_System",
    featured: false,
    caseStudy: {
      challenge: "Eliminating manual errors and calculation delays in utility billing for residential consumers.",
      solution: "Structured an automated rate engine calculating consumption tiers, late penalty fees, and generating formatted invoice slips.",
      impact: "Streamlines monthly billing reconciliation with instant searchable SQLite ledger storage."
    }
  },
  {
    id: "parkinglot-system",
    title: "Parking Lot Reservation System",
    subtitle: "Booking Workflows & Database Integration",
    category: "Web Apps",
    repoName: "parkinglot_system",
    image: "/assets/project_parkinglot.svg",
    summary: "Developed a parking reservation platform with dynamic booking workflows, space utilization tracking, and real-time slot record keeping.",
    metrics: "Python · SQL · Logistics",
    tags: ["Python", "SQL", "Booking Engine", "Slot Allocation"],
    demoUrl: "https://github.com/LabialDaryl/parkinglot_system",
    repoUrl: "https://github.com/LabialDaryl/parkinglot_system",
    featured: false,
    caseStudy: {
      challenge: "Managing concurrent slot requests and preventing parking congestion during peak hours.",
      solution: "Engineered database-backed slot reservation states that update availability instantly and calculate time-based fees.",
      impact: "Improves parking efficiency and eliminates double-booking errors."
    }
  }
];

export const experienceData = [
  {
    role: "Computer Engineering Student & OJT Candidate",
    company: "North Eastern Mindanao State University (NEMSU)",
    period: "2023 — Present",
    location: "Cantilan Campus, Surigao del Sur",
    description: "Pursuing a Bachelor of Science in Computer Engineering. Gaining comprehensive academic training and practical lab experience in software engineering, embedded systems, networking, and microcontrollers.",
    highlights: [
      "Completed rigorous coursework in Data Structures, Embedded Systems, Computer Networking (TCP/IP), and Operating Systems.",
      "Engineered multiple academic capstones including the Autonomous Firefighter Robot, ESP32 Controller, and Django E-Commerce app.",
      "Actively preparing for industry internship / on-the-job training in software development, IT, and embedded systems."
    ]
  },
  {
    role: "Open Source Developer & Hardware Enthusiast",
    company: "GitHub / Independent R&D",
    period: "2024 — Present",
    location: "Carrascal, Surigao del Sur",
    description: "Designing practical hardware-software prototypes, automated Python billing tools, and IoT home automation controllers.",
    highlights: [
      "Published 10 public GitHub repositories covering Python, C++, Android Java, and web systems.",
      "Developed IoT teleoperation controllers and automated utility calculation applications."
    ]
  }
];

export const testimonialsData = [
  {
    quote: "Daryl demonstrates exceptional initiative and technical competence in Computer Engineering. His practical implementations—from autonomous robotics and ESP32 IoT controllers to Django web systems—showcase a strong dedication to engineering excellence.",
    author: "Academic & Technical Endorsement",
    role: "Computer Engineering Faculty / Mentors",
    avatarInitials: "NE"
  },
  {
    quote: "With proficiencies spanning Python, C++, networking, and database modeling, Daryl is well-prepared to make an immediate, positive impact as an On-the-Job Training intern in modern software and technology teams.",
    author: "Industry Collaboration Review",
    role: "Engineering Evaluator",
    avatarInitials: "IR"
  }
];
