/* ══════════════════════════════════════════
   DATA: Portfolio Content
   ══════════════════════════════════════════ */

export const personalInfo = {
  name: 'I Gusti Bagus Ananta',
  fullName: 'I Gusti Bagus Ananta Tusan Semadi',
  role: 'Computer Science Student | Aspiring Full-Stack Developer',
  university: 'BINUS University Malang',
  major: 'Computer Science',
  semester: 5,
  graduation: 2028,
  location: 'Indonesia',
  navLogo: 'IGBA',
  profileImage: '/anantaaa.png',
  heroHeadline: 'Building Digital Solutions Through Full-Stack Development.',
  heroSubtitle:
    'Computer Science Student at BINUS University | Aspiring Full-Stack Developer',
  heroSupporting:
    'Exploring modern web technologies, backend engineering, database systems, and AI-powered applications to build useful and user-friendly digital experiences.',
  aboutBio: [
    "I'm a <strong>Computer Science student at BINUS University Malang</strong> specializing in <strong>Full-Stack Development</strong>. I enjoy building responsive web applications, backend systems, database-driven solutions, and exploring AI integration to solve real problems.",
    'Through academic and team projects I have worked across the stack with <strong>React.js, JavaScript, Node.js, PHP, Laravel, Python, MariaDB, and PostgreSQL</strong> — connecting clean front-end experiences with reliable server-side logic and well-structured data.',
    'I care about building <strong>practical, user-friendly, and maintainable software</strong>, and I value continuous improvement — constantly learning new tools and techniques to grow as a developer.',
  ],
}

export const typingPhrases = [
  'Building modern web applications.',
  'Frontend + Backend + Databases.',
  'React, Laravel, Node.js.',
  'Exploring AI integration.',
  'Problem solver at heart.',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#achievements' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories = [
  {
    category: 'Frontend Development',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Responsive Web Design',
    ],
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'PHP', 'Laravel', 'REST API fundamentals'],
  },
  {
    category: 'Database Management',
    items: ['MariaDB', 'PostgreSQL', 'Relational Database Design'],
  },
  {
    category: 'AI & Data Engineering',
    items: [
      'Python',
      'Dataset preprocessing',
      'Introductory Machine Learning',
      'Human Pose Estimation',
    ],
  },
]

export const projects = [
  {
    title: 'Hotel Arca',
    role: 'Front-End Developer',
    category: 'Full-Stack Web Application',
    projectType: 'Academic / Team Project',
    tags: ['React.js', 'JavaScript', 'CSS', 'Node.js'],
    desc: 'A full-stack hotel booking web application where users can browse rooms, view details, and make reservations through a clean and responsive interface. Built as a team project with a focus on an intuitive front-end experience connected to backend services.',
    keyContributions: [
      'Developed responsive front-end interfaces using React.js and modern CSS.',
      'Built reusable UI components for room listings, booking forms, and detail views.',
      'Integrated the front-end with backend services for booking and room data.',
      'Collaborated within a team to align the UI with the application flow.',
      'Focused on usability, responsiveness, and a consistent visual design.',
    ],
    year: '2025',
    icon: '🏨',
    image: '/hotel.jpg',
    gradient: 'linear-gradient(135deg, #e8e4da, #d5d0c6)',
    github: 'https://github.com/nanta765',
  },
  {
    title: 'Real-Time Gym Motion Correction AI',
    role: 'Full-Stack & Dataset Engineer',
    category: 'AI-Integrated Web Application',
    projectType: 'Academic / Team Project',
    tags: [
      'Python',
      'Web Development',
      'Dataset Preprocessing',
      'Human Pose Estimation',
    ],
    desc: 'An AI-integrated web application that analyzes exercise movements in real time using human pose estimation and gives corrective feedback to help users exercise with safer, more accurate form.',
    keyContributions: [
      'Prepared and preprocessed datasets used for human pose estimation.',
      'Worked on integrating the AI model into a web-based application.',
      'Contributed across the stack to connect model output with the user interface.',
      'Focused on delivering real-time, understandable feedback to users.',
    ],
    icon: '🤖',
    image: '/ai1.jpeg',
    gradient: 'linear-gradient(135deg, #dde0e8, #c8ccda)',
    github: 'https://github.com/nanta765',
  },
  {
    title: 'Arcadia Boarding House — Booking System',
    role: 'Front-End Engineer',
    category: 'Database-Driven Web Application',
    projectType: 'Academic / Team Project',
    tags: ['Laravel', 'PHP', 'CSS Frameworks', 'MariaDB', 'PostgreSQL'],
    desc: 'A database-driven booking system for a boarding house that lets users browse available rooms and manage bookings, backed by a relational database and a Laravel/PHP application layer.',
    keyContributions: [
      'Developed front-end interfaces for browsing rooms and managing bookings.',
      'Worked with Laravel and PHP to connect views with application logic.',
      'Collaborated on relational database design using MariaDB and PostgreSQL.',
      'Focused on a clear, responsive layout for the booking experience.',
    ],
    icon: '🏠',
    image: '/arcadia.jpg',
    gradient: 'linear-gradient(135deg, #e8e4da, #d5d0c6)',
    github: 'https://github.com/nanta765',
  },
]

export const achievements = [
  {
    icon: '🏆',
    title: 'First Place — Business Idea Competition (PARENThink)',
    issuer: 'BINUS University Malang Campus',
    date: '27 May 2025',
    image: '/idebisnis.jpg',
  },
  {
    icon: '📜',
    title: 'DSF 46 Faculty of IT: Back End',
    date: '15–19 December 2025',
    image: '/backend.png',
  },
  {
    icon: '📜',
    title: 'Back-End Development Class 2024/2025 — BNCC',
    issuer: 'BINUS University',
    date: 'August 2025',
    note: 'Certificate of Completion — Credit achievement.',
    image: '/bncc.jpg',
  },
  {
    icon: '📜',
    title: 'C for Beginners — Great Learning Academy',
    date: 'September 2024',
    image: '/c-beginners.jpg',
  },
]

export const stats = [
  { target: 3, label: 'Projects' },
  { target: 4, label: 'Certifications' },
  { target: 17, label: 'Technologies' },
  { target: 100, label: '% Committed' },
]

export const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'anantatusan60@gmail.com',
    href: 'mailto:anantatusan60@gmail.com',
    external: false,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'I Gusti Bagus Ananta',
    href: 'https://www.linkedin.com/in/i-gusti-bagus-ananta-tusan-semadi-6a830b367',
    external: true,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'nanta765',
    href: 'https://github.com/nanta765',
    external: true,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+62 818772006',
    href: 'tel:+62818772006',
    external: false,
  },
]

export const education = {
  university: 'BINUS University Malang',
  degree: "Bachelor's Degree in Computer Science",
  status: 'Semester 5',
  graduation: '2028',
  specialization: 'Full-Stack Development',
}

export const volunteer = {
  role: 'Volunteer — Teach For Indonesia (TFI)',
  organization: 'Paguyuban Orangtua Disabilitas',
  responsibilities: [
    'Supported educational activities for children with disabilities.',
    'Helped create a welcoming and inclusive learning environment.',
    'Participated in educational activities, engagement, and learning support.',
  ],
}
