/* ══════════════════════════════════════════
   DATA: Portfolio Content
   ══════════════════════════════════════════ */

export const personalInfo = {
  name: 'I Gusti Bagus Ananta',
  fullName: 'I Gusti Bagus Ananta Tusan Semadi',
  role: 'Computer Science Student (Full-Stack Specialization) | Aspiring Full-Stack Developer',
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
    'Computer Science student at BINUS University Malang specializing in full-stack web development and applied AI. Experienced in building responsive interfaces, backend APIs, relational databases, and machine-learning workflows.',
  aboutBio: [
    "I'm a <strong>Computer Science student at BINUS University Malang</strong> (Semester 5, expected graduation 2028) specializing in <strong>Full-Stack Development</strong> and <strong>applied AI</strong>.",
    'Experienced in developing responsive web interfaces, backend services, and relational databases (<strong>MariaDB & PostgreSQL</strong>), alongside dataset preprocessing for machine learning. My core stack includes <strong>JavaScript, Python, PHP, React.js, Node.js, and Laravel</strong>.',
    'I focus on building <strong>clean, functional, and maintainable software</strong> that solves practical real-world problems through disciplined engineering.',
  ],
}

export const typingPhrases = [
  'Building modern web applications.',
  'Frontend + Backend + Databases.',
  'React.js, Laravel, Node.js, Python.',
  'Exploring practical AI & Machine Learning.',
  'Full-Stack & Applied AI Solutions.',
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
      'Dataset Preprocessing',
      'Introductory Machine Learning',
      'Human Pose Estimation',
      'Random Forest',
    ],
  },
  {
    category: 'Development Tools & AI IDEs',
    items: [
      'Google Antigravity',
      'Kiro',
      'Git & GitHub',
    ],
  },
]

export const projects = [
  {
    title: 'Hotel Arca Promotional & Booking Website',
    role: 'Front-End Developer',
    category: 'Promotional & Room-Booking Website',
    projectType: 'Course project: Software Engineering',
    tags: ['React.js', 'JavaScript', 'CSS', 'Node.js'],
    desc: 'Built a responsive promotional and room-booking website for Hotel Arca (Lombok) with React.js, JavaScript, and CSS, connected to a Node.js backend to replace manual reservations with an online flow.',
    explanation:
      'Developed as a Software Engineering course project to replace Hotel Arca’s manual booking workflow with a centralized online reservation system. Built with a React.js front end and Node.js backend, the application translates client requirements into reusable components with consistent multi-device layouts, structured date-selection, and automated booking submissions.',
    keyContributions: [
      'Built a responsive room reservation interface using React.js and CSS, replacing manual paper records with an online booking flow [isi angka: contoh reduksi waktu pemesanan X%].',
      'Designed interactive booking forms and site navigation, enabling guests to select dates, inspect room details, and submit reservations directly.',
      'Developed reusable React components within a team of 3, ensuring consistent layout across devices and contributing to Node.js backend endpoints.',
    ],
    toolsNote: 'Google Antigravity & Kiro used for code writing, component scaffolding, and debugging.',
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
    projectType: 'Course project: Artificial Intelligence / Machine Learning',
    tags: [
      'Python',
      'Random Forest',
      'Human Pose Estimation',
      'Dataset Preprocessing',
      'Web Development',
    ],
    desc: 'Built a real-time exercise posture correction application in Python using human pose estimation and a Random Forest model for biceps curls, back exercises, and push-ups.',
    explanation:
      'Built as an Artificial Intelligence & Machine Learning course project to help users perform exercises safely with real-time posture feedback for biceps curls, back exercises, and push-ups. The system captures camera video streams, performs human pose estimation to extract joint coordinates, and uses a Random Forest classifier (combining predictions from multiple decision trees) to evaluate movement conditions and deliver immediate corrective guidance.',
    keyContributions: [
      'Built a camera-enabled Python web interface that reads live camera feeds to deliver immediate visual posture correction and repetition feedback.',
      'Collected and preprocessed 1,800+ custom video and image samples (extracting over 30,000 landmark frames) to train the human pose estimation pipeline.',
      'Trained a Random Forest model on extracted landmark coordinates, classifying correct versus incorrect exercise form with [isi angka: contoh akurasi 89%].',
      'Integrated the model into a Python web interface to deliver sub-second posture feedback during live workout execution [isi angka: contoh latensi <150ms].',
    ],
    toolsNote: 'Google Antigravity & Kiro used for code generation, pipeline integration, and debugging.',
    icon: '🤖',
    image: '/ai1.jpeg',
    images: ['/ai1.jpeg', '/ai-2.jpg', '/ai-3.jpg'],
    gradient: 'linear-gradient(135deg, #dde0e8, #c8ccda)',
    github: 'https://github.com/nanta765',
  },
  {
    title: 'Arcadia Boarding House (Kos) Booking System',
    role: 'Front-End Developer',
    category: 'Database-Driven Web Application',
    projectType: 'Course project: Database Systems / Web Development',
    tags: ['Laravel', 'PHP', 'CSS Frameworks', 'MariaDB', 'PostgreSQL'],
    desc: 'Built a database-driven boarding-house booking platform with Laravel (PHP), MariaDB, and PostgreSQL to streamline room availability checks, pricing inquiries, and tenant reservations.',
    explanation:
      'Developed for Database Systems & Web Development within a team of 3 to digitize boarding-house (kost) room management and tenant bookings. The platform pairs Laravel (PHP) Blade views with MariaDB and PostgreSQL relational databases, streamlining room availability checks, pricing calculations, and client-side data submission.',
    keyContributions: [
      'Developed dynamic front-end views and booking forms using Laravel Blade in a team of 3, enabling prospective tenants to filter room vacancies and pricing in real time.',
      'Built dynamic views and data-entry forms connected to MariaDB and PostgreSQL relational databases, enforcing structured schema validation to prevent invalid entries.',
      'Contributed to Laravel backend development and optimized the data submission flow between the front end and the database [isi angka: contoh eliminasi galat input X%].',
      'Structured responsive layout grids across all booking views, maintaining full usability across mobile and desktop devices.',
    ],
    toolsNote: 'Google Antigravity & Kiro used for code generation and query debugging.',
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
    note: 'Certificate of Achievement recognizing creativity and entrepreneurial spirit.',
    image: '/idebisnis.jpg',
  },
  {
    icon: '📜',
    title: 'DSF 46 Faculty of IT: Back End',
    date: '15–19 December 2025',
    note: 'Back End program certificate.',
    image: '/dibimbing-backend.jpg',
  },
  {
    icon: '📜',
    title: 'Back-End Development Class 2024/2025 — BNCC',
    issuer: 'BINUS University',
    date: 'August 2025',
    note: 'Certificate of Completion with achievement of Credit.',
    image: '/backend.png',
  },
  {
    icon: '📜',
    title: 'C for Beginners — Great Learning Academy',
    date: 'September 2024',
    note: 'Certificate of Completion for online programming course.',
    image: '/c-beginners.jpg',
  },
]

export const stats = [
  { target: 3, label: 'Projects' },
  { target: 4, label: 'Certifications' },
  { target: 20, label: 'Technologies' },
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

export const volunteer = [
  {
    role: 'Volunteer — Teach For Indonesia (TFI)',
    organization: 'Paguyuban Orangtua Disabilitas',
    category: 'Community education support',
    responsibilities: [
      'Facilitated learning activities for children with disabilities in partnership with Paguyuban Orangtua Disabilitas.',
      'Guided group activities and provided one-on-one support so every child could participate in each session.',
    ],
  },
  {
    role: 'Volunteer — Social Service (Bakti Sosial)',
    organization: 'Sumber Gentong Nature Tourism, Malang',
    category: 'Environmental and community service',
    responsibilities: [
      'Carried out a community service program at the Sumber Gentong nature tourism site in Malang.',
      'Repaired and improved the local prayer room (musala) for the community and visitors.',
      'Planted mangroves for environmental conservation.',
    ],
  },
]
