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
  cvUrl: `${import.meta.env.BASE_URL}CV_I_Gusti_Bagus_Ananta.pdf`,
  heroHeadline: 'Building Digital Solutions Through Full-Stack Development.',
  heroSubtitle: 'Computer Science · BINUS University',
  heroSupporting:
    'Mahasiswa Computer Science di BINUS University Malang dengan spesialisasi Full-Stack Development dan applied AI. Berpengalaman dalam membangun responsive web interfaces, backend API, relational databases, serta machine-learning workflows.',
  aboutBio: [
    "Saya adalah mahasiswa <strong>Computer Science di BINUS University Malang</strong> (Semester 5, expected graduation 2028) dengan fokus pada <strong>Full-Stack Web Development</strong> dan <strong>practical AI applications</strong>.",
    'Berpengalaman mengembangkan responsive front-end interface, menghubungkan backend services dengan relational database (<strong>MariaDB & PostgreSQL</strong>), serta menyiapkan dataset preprocessing untuk machine learning. Core tech stack saya mencakup <strong>JavaScript, Python, PHP, React.js, Node.js, dan Laravel</strong>, didukung AI-assisted development tools seperti Google Antigravity dan Kiro untuk efisiensi code writing dan debugging.',
    'Saya berfokus menciptakan <strong>clean, functional, dan maintainable software</strong> yang memecahkan kebutuhan nyata melalui pendekatan software engineering yang terstruktur.',
  ],
}

export const typingPhrases = [
  'Building modern web applications.',
  'Frontend, Backend & Relational Databases.',
  'React.js, Laravel, Node.js & Python.',
  'Applied AI & Machine Learning.',
  'Full-Stack Development & Clean Code.',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#achievements' },
  { label: 'Experience', href: '#volunteer' },
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
    projectType: 'Course Project: Software Engineering',
    tags: ['React.js', 'JavaScript', 'CSS', 'Node.js'],
    desc: 'Web application promosi dan room-booking untuk Hotel Arca (Lombok) berbasis React.js dan Node.js, mendigitalisasi proses pemesanan kamar manual menjadi sistem reservasi online yang otomatis.',
    explanation:
      'Dikembangkan sebagai course project Software Engineering untuk menggantikan alur reservasi manual Hotel Arca menjadi sistem booking online yang terpusat. Menggunakan React.js di sisi front end dan Node.js di sisi backend, aplikasi ini menerjemahkan kebutuhan klien ke dalam reusable components dengan layout konsisten lintas perangkat, date-selection interaktif, serta automated booking submission.',
    keyContributions: [
      'Membangun responsive room reservation interface menggunakan React.js dan CSS, menggantikan pencatatan kertas manual menjadi online booking flow yang efisien [isi angka: contoh reduksi waktu pemesanan 50%].',
      'Merancang interactive booking forms dan navigasi multi-halaman agar calon tamu dapat memeriksa ketersediaan kamar, memilih tanggal, dan melakukan reservasi langsung.',
      'Mengembangkan reusable React components bersama tim 3 orang, menjaga konsistensi UI di berbagai device serta berkontribusi pada endpoint backend Node.js.',
    ],
    toolsNote: 'Google Antigravity & Kiro digunakan untuk code writing, component scaffolding, dan debugging.',
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
    projectType: 'Course Project: Artificial Intelligence / Machine Learning',
    tags: [
      'Python',
      'Random Forest',
      'Human Pose Estimation',
      'Dataset Preprocessing',
      'Web Development',
    ],
    desc: 'Aplikasi web AI untuk evaluasi dan koreksi postur olahraga secara real-time pada biceps curls, back exercises, dan push-ups menggunakan human pose estimation dan model Random Forest di Python.',
    explanation:
      'Dibangun sebagai course project Artificial Intelligence & Machine Learning untuk membantu pengguna berolahraga secara mandiri dengan form gerakan yang tepat dan aman. Sistem membaca input video kamera secara langsung, mengekstrak koordinat sendi tubuh via human pose estimation, dan mengklasifikasikan kondisi postur menggunakan model Random Forest (menggabungkan prediksi multiple decision trees) untuk menampilkan panduan koreksi instan.',
    keyContributions: [
      'Membangun camera-enabled web interface berbasis Python yang membaca live camera feed untuk menyajikan visual posture correction cues dan hitungan repetisi secara real-time.',
      'Mengumpulkan dan memproses 1.800+ custom video and image samples (mengekstrak lebih dari 30.000 landmark frames) guna melatih pipeline human pose estimation.',
      'Melatih Random Forest model pada koordinat skeletal landmarks untuk mengklasifikasikan postur tubuh benar dan salah dengan tingkat akurasi [isi angka: contoh 89%].',
      'Mengintegrasikan machine learning pipeline ke dalam web interface untuk menghasilkan feedback postur berlatensi sub-detik saat latihan berlangsung [isi angka: contoh latensi <150ms].',
    ],
    toolsNote: 'Google Antigravity & Kiro digunakan untuk code generation, pipeline integration, dan debugging.',
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
    projectType: 'Course Project: Database Systems / Web Development',
    tags: ['Laravel', 'PHP', 'CSS Frameworks', 'MariaDB', 'PostgreSQL'],
    desc: 'Database-driven boarding house (kos) booking platform berbasis Laravel (PHP), MariaDB, dan PostgreSQL untuk mempermudah pengecekan ketersediaan kamar, simulasi tarif, dan pengajuan sewa.',
    explanation:
      'Dikembangkan untuk mata kuliah Database Systems & Web Development dalam tim 3 orang guna mendigitalisasi manajemen kamar kos dan pengajuan sewa calon penghuni. Platform ini menghubungkan Laravel Blade views dengan relational database MariaDB dan PostgreSQL, menyederhanakan tracking kamar kosong, kalkulasi biaya sewa, dan pengiriman data di sisi klien.',
    keyContributions: [
      'Mengembangkan dynamic front-end views dan booking forms menggunakan Laravel Blade dalam tim 3 orang, memungkinkan calon penyewa memfilter kamar kosong dan mengecek harga secara real-time.',
      'Membangun dynamic views dan form input data yang terhubung ke database relasional MariaDB dan PostgreSQL, menerapkan validasi skema ketat untuk mencegah entri data ganda atau tidak valid.',
      'Berkontribusi pada back-end development Laravel serta mengoptimalkan data submission flow antara front end dan database [isi angka: contoh eliminasi galat input 35%].',
      'Menata layout grid responsif menggunakan modern CSS frameworks, memastikan form reservasi dapat diakses secara presisi di layar smartphone maupun desktop.',
    ],
    toolsNote: 'Google Antigravity & Kiro digunakan untuk code generation dan SQL query debugging.',
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
    note: 'Juara 1 (Certificate of Achievement) dalam Business Idea Competition tingkat kampus yang mengapresiasi inovasi dan kewirausahaan.',
    image: '/idebisnis.jpg',
  },
  {
    icon: '📜',
    title: 'DSF 46 Faculty of IT: Back End',
    date: '15–19 December 2025',
    note: 'Sertifikasi kompetensi program Back End development.',
    image: '/dibimbing-backend.jpg',
  },
  {
    icon: '📜',
    title: 'Back-End Development Class 2024/2025 — BNCC',
    issuer: 'BINUS University',
    date: 'August 2025',
    note: 'Certificate of Completion dengan pencapaian predikat Credit.',
    image: '/backend.png',
  },
  {
    icon: '📜',
    title: 'C for Beginners — Great Learning Academy',
    date: 'September 2024',
    note: 'Certificate of Completion untuk kursus online dasar pemrograman bahasa C.',
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
    category: 'Community Education Support',
    responsibilities: [
      'Memfasilitasi kegiatan belajar untuk anak-anak disabilitas berkolaborasi dengan Paguyuban Orangtua Disabilitas.',
      'Mendampingi aktivitas kelompok dan memberikan one-on-one support agar setiap anak dapat berpartisipasi aktif dalam sesi pembelajaran.',
    ],
  },
  {
    role: 'Volunteer — Social Service (Bakti Sosial)',
    organization: 'Sumber Gentong Nature Tourism, Malang',
    category: 'Environmental & Community Service',
    responsibilities: [
      'Menjalankan program community service di kawasan wisata alam Sumber Gentong, Malang.',
      'Merawat dan memperbaiki sarana tempat ibadah (musala) untuk kenyamanan masyarakat lokal dan pengunjung.',
      'Melakukan penanaman bibit mangrove untuk mendukung pelestarian lingkungan dan konservasi alam.',
    ],
  },
]
