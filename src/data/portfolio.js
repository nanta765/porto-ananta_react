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
  profileImage: '/anantaaa.jpg',
  heroHeadline: 'Building Digital Solutions Through Full-Stack Development.',
  heroSubtitle: 'Computer Science · BINUS University',
  heroSupporting:
    'I am a Computer Science student specializing in Full-Stack Development, focused on building modern web applications, backend systems, and database-driven solutions.',
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
    image: '/hotel_arca_1.jpg',
    // Galeri foto proyek — bisa di-slide ke samping di modal detail.
    // Taruh file di folder public/ lalu daftarkan path-nya di sini.
    // Gambar yang belum ada otomatis dilewati (graceful fallback).
    images: ['/hotel_arca_1.jpg', '/hotel_arca_2.jpg'],
    gradient: 'linear-gradient(135deg, #e8e4da, #d5d0c6)',
    github: 'https://github.com/nanta765/hotel_arca.git',
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
    images: ['/ai1.jpeg', '/ai-2.jpg', '/ai-3.jpg'],
    gradient: 'linear-gradient(135deg, #dde0e8, #c8ccda)',
    github: 'https://github.com/nanta765',
  },
  {
    title: 'Kost Arcadia Room — Sistem Pemesanan Kost',
    role: 'Front-End Engineer',
    category: 'Database-Driven Web Application',
    projectType: 'Academic / Team Project',
    tags: ['Laravel', 'PHP', 'CSS Frameworks', 'MariaDB', 'PostgreSQL'],
    desc: 'A database-driven boarding-house (kost) booking system where users can browse available rooms, check room details and pricing, and submit booking requests. Backed by a relational database and a Laravel/PHP application layer, it digitizes the manual kost booking and data-submission process.',
    keyContributions: [
      'Developed front-end interfaces for browsing kost rooms and submitting bookings.',
      'Built dynamic views and forms for room details, pricing, and tenant data.',
      'Worked with Laravel and PHP to connect views with application logic.',
      'Collaborated on relational database design using MariaDB and PostgreSQL.',
      'Focused on a clear, responsive layout for the booking experience.',
    ],
    icon: '🏠',
    image: '/arcakost-1.jpg',
    images: ['/arcakost-1.jpg', '/arcakost-2.jpg', '/arcakost-3.jpg'],
    gradient: 'linear-gradient(135deg, #e8e4da, #d5d0c6)',
    github: 'https://github.com/nanta765/arcadia-kost.git',
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
    image: '/dibimbing-backend.jpg',
  },
  {
    icon: '📜',
    title: 'Back-End Development Class 2024/2025 — BNCC',
    issuer: 'BINUS University',
    date: 'August 2025',
    note: 'Certificate of Completion — Credit achievement.',
    image: '/backend.png',
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
  // `iconName` selects a line-art SVG (ContactIcon): email | github |
  // linkedin | phone. `icon` (emoji) is kept only as a fallback.
  {
    icon: '✉️',
    iconName: 'email',
    label: 'Email',
    value: 'anantatusan60@gmail.com',
    href: 'mailto:anantatusan60@gmail.com',
    external: false,
  },
  {
    icon: '💼',
    iconName: 'linkedin',
    label: 'LinkedIn',
    value: 'I Gusti Bagus Ananta',
    href: 'https://www.linkedin.com/in/i-gusti-bagus-ananta-tusan-semadi-6a830b367',
    external: true,
  },
  {
    icon: '🐙',
    iconName: 'github',
    label: 'GitHub',
    value: 'nanta765',
    href: 'https://github.com/nanta765',
    external: true,
  },
  {
    icon: '📞',
    iconName: 'phone',
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
