import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'cca',
    name: 'Certificate in Computer Application (CCA)',
    shortCode: 'CCA',
    duration: '3 Months',
    durationCategory: '3-months',
    eligibility: 'HSLC',
    icon: 'desktop_windows',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      total: 3000,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 1500,
      tuition: 1000,
      total: 2500,
      breakdownNote: 'Adm ₹1,500 + Tut ₹1,000'
    },
    description: 'Foundational computer literacy covering computer hardware, Windows OS, MS Word, Excel, PowerPoint, and Internet browsing basics.',
    syllabusModules: [
      {
        title: 'Module 1: Computer Fundamentals & Windows OS',
        topics: ['History & Generations of Computers', 'Memory, Storage & Peripherals', 'Windows 11 GUI & File Management', 'Control Panel & System Settings']
      },
      {
        title: 'Module 2: MS Office Essentials',
        topics: ['MS Word: Document Formatting, Tables & Mail Merge', 'MS Excel: Spreadsheets, Formulas & Basic Charts', 'MS PowerPoint: Presentations, Transitions & Design']
      },
      {
        title: 'Module 3: Internet & Cyber Security',
        topics: ['Web Browsing, Email Protocols & Google Workspace', 'Digital Payments (UPI, NetBanking)', 'Cyber Hygiene & Antivirus Maintenance']
      }
    ]
  },
  {
    id: 'tally',
    name: 'Certificate in Accounting With Tally',
    shortCode: 'Tally',
    duration: '3 Months',
    durationCategory: '3-months',
    eligibility: 'HS (Commerce)',
    icon: 'receipt_long',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      admission: 2000,
      tuition: 2000,
      total: 4000,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 2000,
      tuition: 2000,
      total: 4000,
      breakdownNote: 'Adm ₹2,000 + Tut ₹2,000'
    },
    description: 'Computerized accounting with TallyPrime, voucher entries, inventory management, bank reconciliation, and GST compliance.',
    syllabusModules: [
      {
        title: 'Module 1: Financial Accounting Principles',
        topics: ['Double Entry Bookkeeping & Ledger Posting', 'Trial Balance & Financial Statements', 'Depreciation & Cash Flow Analysis']
      },
      {
        title: 'Module 2: TallyPrime Operations',
        topics: ['Company Creation, Groups & Ledgers', 'Voucher Entry (Payment, Receipt, Contra, Journal)', 'Inventory Management & Stock Categories', 'Bank Reconciliation Statement (BRS)']
      },
      {
        title: 'Module 3: Taxation & GST Compliance',
        topics: ['CGST, SGST & IGST Computation', 'E-Way Bill Generation & GST Returns (GSTR-1, GSTR-3B)', 'TDS Fundamentals & Exporting Reports']
      }
    ]
  },
  {
    id: 'dtp',
    name: 'Certificate in Desktop Publishing (DTP)',
    shortCode: 'DTP',
    duration: '3 Months',
    durationCategory: '3-months',
    eligibility: 'HSLC',
    icon: 'design_services',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      admission: 2000,
      tuition: 1500,
      total: 3500,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 2000,
      tuition: 1500,
      total: 3500,
      breakdownNote: 'Adm ₹2,000 + Tut ₹1,500'
    },
    description: 'Commercial graphic design and print media workflow using Adobe Photoshop, PageMaker/InDesign, and CorelDRAW.',
    syllabusModules: [
      {
        title: 'Module 1: Adobe Photoshop Mastery',
        topics: ['Image Retouching, Layers & Masking', 'Photo Restoration & Color Correction', 'Banner & Poster Design for Print & Web']
      },
      {
        title: 'Module 2: CorelDRAW Vector Graphics',
        topics: ['Vector Illustration & Logo Creation', 'Flex Banners, Pamphlets & Visiting Cards', 'Typography & Print Production Separation']
      },
      {
        title: 'Module 3: PageMaker & Print Layouts',
        topics: ['Book Composition, Newspaper Layouts', 'Regional Language Fonts (Assamese/Bengali typing)', 'Pre-press Output & PDF Preparation']
      }
    ]
  },
  {
    id: 'ai-program',
    name: 'Artificial Intelligence (AI) Program',
    shortCode: 'AI',
    duration: '3 Months',
    durationCategory: '3-months',
    eligibility: 'HSLC',
    badge: 'Trending',
    badgeType: 'trending',
    icon: 'smart_toy',
    affiliations: ['iaps'],
    iapsFee: {
      admission: 2500,
      tuition: 2500,
      total: 5000,
      breakdownNote: 'Admission: ₹2,500 + Tuition: ₹2,500'
    },
    description: 'Modern introductory AI program covering Prompt Engineering, Generative AI tools, Python for Machine Learning basics, and real-world AI applications.',
    syllabusModules: [
      {
        title: 'Module 1: Foundations of Artificial Intelligence',
        topics: ['What is AI, ML & Deep Learning', 'History and Real-World Impact of AI', 'Ethics, Privacy & Data Governance in AI']
      },
      {
        title: 'Module 2: Generative AI & Prompt Engineering',
        topics: ['Large Language Models (Gemini, ChatGPT)', 'Advanced Prompt Engineering Frameworks', 'AI for Productivity, Content, Coding & Data Analysis']
      },
      {
        title: 'Module 3: Python AI Toolkits & Mini Project',
        topics: ['NumPy & Pandas for Data Preprocessing', 'Scikit-learn Basic Algorithms', 'Deploying a Hands-on AI Chatbot Prototype']
      }
    ]
  },
  {
    id: 'python',
    name: 'PYTHON Programming',
    shortCode: 'PYTHON',
    duration: '3 Months',
    durationCategory: '3-months',
    eligibility: 'HSLC',
    icon: 'code',
    affiliations: ['iaps'],
    iapsFee: {
      admission: 2500,
      tuition: 2500,
      total: 5000,
      breakdownNote: 'Admission: ₹2,500 + Tuition: ₹2,500'
    },
    description: 'Practical Python programming from syntax basics, object-oriented concepts, file operations, to database integration.',
    syllabusModules: [
      {
        title: 'Module 1: Python Core Syntax',
        topics: ['Variables, Data Types & Operators', 'Conditional Logic & Iteration Loops', 'Functions, Scope & Lambda Expressions']
      },
      {
        title: 'Module 2: Data Structures & OOP',
        topics: ['Lists, Tuples, Sets, Dictionaries', 'Object-Oriented Programming (Classes & Objects)', 'Inheritance, Polymorphism & Encapsulation']
      },
      {
        title: 'Module 3: Practical Application & DB',
        topics: ['File Handling (CSV, JSON, Text)', 'SQLite & MySQL Database Connectivity', 'Building a Desktop GUI Application using Tkinter']
      }
    ]
  },
  {
    id: 'pdca',
    name: 'Professional Diploma in Computer Application (PDCA)',
    shortCode: 'PDCA',
    duration: '6 Months',
    durationCategory: '6-months',
    eligibility: 'HS',
    icon: 'terminal',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      admission: 3000,
      tuition: 4000,
      total: 7000,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 2500,
      tuition: 3500,
      total: 6000,
      breakdownNote: 'Adm ₹2,500 + Tut ₹3,500'
    },
    description: 'Comprehensive 6-month intermediate professional diploma combining office automation, financial accounting in Tally, DTP, and web introduction.',
    syllabusModules: [
      {
        title: 'Module 1: Advanced Office Suite',
        topics: ['Advanced Word Processing & Formal Documentation', 'Excel VLOOKUP, XLOOKUP, Pivot Tables & Macros', 'Interactive Slide Show Presentations']
      },
      {
        title: 'Module 2: Financial Accounting with TallyPrime',
        topics: ['Company Accounts, Ledger Posting & Inventory', 'GST Calculation, Billing & Invoicing Systems']
      },
      {
        title: 'Module 3: Web Basics & Database Intro',
        topics: ['HTML5 & CSS3 Responsive Page Layouts', 'Database Concepts in MS Access & MySQL', 'Practical Lab Sprints & Project Presentation']
      }
    ]
  },
  {
    id: 'dca',
    name: 'Diploma in Computer Application (DCA)',
    shortCode: 'DCA',
    duration: '1 Year',
    durationCategory: '1-year',
    eligibility: 'HSLC',
    badge: 'High Demand',
    badgeType: 'popular',
    icon: 'school',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      admission: 3000,
      tuition: 7000,
      total: 10000,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 2500,
      tuition: 5000,
      total: 7500,
      breakdownNote: 'Adm ₹2,500 + Tut ₹5,000'
    },
    description: 'One-year flagship diploma program recognized widely for state government recruitments, office administrative posts, and IT operations.',
    syllabusModules: [
      {
        title: 'Semester 1: Foundation & Office Automation',
        topics: ['Computer Architecture & Operating Systems (Windows & Linux)', 'Advanced MS Office Automation Suite', 'Regional Language Processing & Typing Skills']
      },
      {
        title: 'Semester 2: Programming & Database Fundamentals',
        topics: ['Problem Solving with C Programming & Flowcharts', 'Relational Database Management with MySQL', 'TallyPrime Computerized Accounting with GST', 'Project Viva & Final Practical Board Examination']
      }
    ]
  },
  {
    id: 'adca',
    name: 'Advance Diploma in Computer Application (ADCA)',
    shortCode: 'ADCA',
    duration: '1 Year',
    durationCategory: '1-year',
    eligibility: 'HS',
    icon: 'verified',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      admission: 3000,
      tuition: 9000,
      total: 12000,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 3000,
      tuition: 6500,
      total: 9500,
      breakdownNote: 'Adm ₹3,000 + Tut ₹6,500'
    },
    description: 'In-depth diploma curriculum spanning programming languages (C/C++), full web development basics, graphic design, and database administration.',
    syllabusModules: [
      {
        title: 'Semester 1: Application Software & Design Tech',
        topics: ['Advanced Windows & Linux Administration', 'Graphic Design with Photoshop & CorelDRAW', 'Complete TallyPrime GST Accounting Suite']
      },
      {
        title: 'Semester 2: Software Engineering & Web Programming',
        topics: ['Object-Oriented Programming with C++ & Python', 'Web Development: HTML5, CSS3, JavaScript', 'RDBMS concepts, SQL Queries & Stored Procedures', 'Live Client Capstone Project & Viva']
      }
    ]
  },
  {
    id: 'pgdca',
    name: 'Post Graduate Diploma in Computer Application (PGDCA)',
    shortCode: 'PGDCA',
    duration: '1 Year Post Graduate',
    durationCategory: '1-year',
    eligibility: 'Graduate',
    icon: 'psychology',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      admission: 3000,
      tuition: 9000,
      total: 12000,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 3000,
      tuition: 7500,
      total: 10500,
      breakdownNote: 'Adm ₹3,000 + Tut ₹7,500'
    },
    description: 'Post-graduate level professional curriculum for degree holders aiming for IT administrative, software engineering, and government job qualifications.',
    syllabusModules: [
      {
        title: 'Semester 1: Computer Systems & Advanced Programming',
        topics: ['Advanced Operating Systems & Computer Networking', 'C Programming & Data Structures Basics', 'RDBMS Architecture & Complex SQL']
      },
      {
        title: 'Semester 2: Application Development & Web Engineering',
        topics: ['Object-Oriented Programming (Java / Python)', 'Web Frameworks, Client-Server Architecture', 'Software Engineering Methodologies (Agile, SDLC)', 'Industrial Project Submission & External Evaluation']
      }
    ]
  },
  {
    id: 'pgdcsa',
    name: 'PG Diploma in Computer Science and Application (PGDCSA)',
    shortCode: 'PGDCSA',
    duration: '1 Year Post Graduate',
    durationCategory: '1-year',
    eligibility: 'Graduate',
    icon: 'developer_board',
    affiliations: ['amtron', 'iaps'],
    amtronFee: {
      admission: 4000,
      tuition: 10000,
      total: 14000,
      breakdownNote: 'Total Package Fee'
    },
    iapsFee: {
      admission: 3500,
      tuition: 8500,
      total: 12000,
      breakdownNote: 'Adm ₹3,500 + Tut ₹8,500'
    },
    description: 'Specialized postgraduate diploma with heightened focus on Computer Science algorithms, system architecture, database administration, and software development.',
    syllabusModules: [
      {
        title: 'Semester 1: Core CS Theory & Low-Level Architecture',
        topics: ['Digital Logic & Computer Organization', 'Data Structures & Algorithm Analysis in C/C++', 'Relational & NoSQL Database Modeling']
      },
      {
        title: 'Semester 2: Modern Enterprise Applications',
        topics: ['Full-Stack Web Development & API Integration', 'Cloud Fundamentals & Linux Server Administration', 'Software Testing & Quality Assurance', 'Major Academic Dissertation & Prototype Deployment']
      }
    ]
  },
  {
    id: 'copa',
    name: 'Computer Operator and Programming Assistant (COPA)',
    shortCode: 'COPA',
    duration: '1 Year Full Time',
    durationCategory: '1-year',
    eligibility: 'HSLC',
    badge: 'NCVT GOVT ITI',
    badgeType: 'govt',
    icon: 'military_tech',
    affiliations: ['ncvt'],
    ncvtFee: {
      admission: 7000,
      tuition: 9000,
      total: 16000,
      breakdownNote: 'Admission: ₹7,000 + Tuition: ₹9,000 (Installments available)'
    },
    description: 'Official Craftsman Training Scheme (CTS) vocational trade approved by Directorate General of Training (DGT), Ministry of Skill Development & Entrepreneurship.',
    syllabusModules: [
      {
        title: 'Trade Theory: Hardware, OS & Office Automation',
        topics: ['Computer Components, Assembly & BIOS Setup', 'DOS, Windows & Linux Operating Systems', 'Word Processing, Spreadsheets & Digital Presentation', 'Internet, Networking Concepts & Cyber Laws']
      },
      {
        title: 'Trade Practical: Programming, Accounting & Web Dev',
        topics: ['Computerized Accounting with TallyPrime & GST', 'E-Commerce Concepts & Web Design using HTML & CSS', 'Programming in Python / JavaScript Fundamentals', 'Apprentice Training Guidance & All India Trade Test (AITT) Preparation']
      }
    ]
  }
];
