/* ══════════════════════════════════════════
   DATA: Portfolio Content
   ══════════════════════════════════════════ */

export const personalInfo = {
  name: 'I Gusti Bagus Ananta',
  fullName: 'I Gusti Bagus Ananta Tusan Semadi',
  role: 'Back-End Developer',
  university: 'BINUS University',
  navLogo: 'IGBA',
  profileImage: '/anantaaa.png', // Opsional: Masukkan path gambar di folder public/ (contoh: '/foto-profil.jpg')
  heroDesc:
    'Seorang back-end developer yang profesional, ambisius, dan berdedikasi dalam membangun sistem backend yang kuat, skalabel, dan efisien — menghubungkan logika bisnis dengan arsitektur teknis yang solid.',
  aboutBio: [
    'Saya <strong>I Gusti Bagus Ananta Tusan Semadi</strong>, seorang back-end developer yang berfokus pada pembangunan sistem server-side yang andal, terstruktur, dan mudah dipelihara. Saya percaya bahwa fondasi backend yang kokoh adalah kunci dari setiap produk digital yang hebat.',
    'Ketertarikan saya pada teknologi lahir dari rasa ingin tahu mendalam tentang cara kerja sistem di balik layar — bagaimana data mengalir, bagaimana server merespons jutaan permintaan, dan bagaimana arsitektur yang tepat mampu menyelesaikan masalah bisnis nyata. <strong>Problem solving</strong> bukan hanya pekerjaan, melainkan passion sejati saya.',
    'Saat ini saya aktif mengembangkan diri melalui proyek-proyek nyata, kompetisi, dan komunitas teknologi seperti <strong>BCC BINUS</strong> — untuk terus mengasah skill dan memperluas wawasan di dunia software engineering modern.',
  ],
}

export const typingPhrases = [
  'Building robust backend systems.',
  'Laravel & PHP Specialist.',
  'Architecting server-side solutions.',
  'AI & Computer Vision Explorer.',
  'Problem solver at heart.',
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Awards', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  'Laravel / PHP',
  'RESTful API Design',
  'MySQL / Database',
  'Python / AI Integration',
  'Server Architecture',
  'CRUD System Design',
  'Computer Vision / ML',
  'Git / Version Control',
]

export const projects = [
  {
    title: 'Website Hotel',
    desc: 'Sistem manajemen hotel berbasis web dibangun dengan Laravel sebagai backend utama. Mencakup CRUD lengkap untuk manajemen kamar dan tamu, sistem booking real-time, laporan pemesanan, dashboard admin, serta autentikasi dan otorisasi pengguna yang aman.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Booking System'],
    year: '2024',
    icon: '🏨',
    image: '/hotel.jpg', // Opsional: Tambahkan path foto proyek di sini (contoh: '/proyek-hotel.jpg')
    gradient: 'linear-gradient(135deg, #e8e4da, #d5d0c6)',
    link: '#',
  },
  {
    title: 'AI Gym Project',
    desc: 'Sistem kecerdasan buatan berbasis computer vision untuk mendeteksi dan mengevaluasi kesalahan gerakan saat berolahraga di gym. Menggunakan pose estimation real-time untuk menganalisis postur tubuh dan memberikan umpan balik koreksi langsung kepada pengguna, mengurangi risiko cedera.',
    tags: ['Python', 'Computer Vision', 'AI / ML', 'Pose Estimation'],
    year: '2025',
    icon: '🤖',
    image: '/ai1.jpeg', // Opsional: Tambahkan path foto proyek di sini
    gradient: 'linear-gradient(135deg, #dde0e8, #c8ccda)',
    link: '#',
  },
]

export const achievements = [
  {
    icon: '🏆',
    image: '/idebisnis.jpg', // Opsional: Tambahkan path foto pencapaian di sini (contoh: '/piala.jpg')
    type: 'Kompetisi Kampus',
    title: 'Juara 1 Kompetisi Ide Bisnis BINUS',
    desc: 'Meraih juara pertama dalam kompetisi ide bisnis bergengsi yang diselenggarakan oleh BINUS University. Berhasil mempresentasikan solusi bisnis berbasis teknologi yang inovatif, relevan, dan berdampak nyata di hadapan panel juri profesional dari industri.',
    year: 'BINUS University · 2024',
  },
  {
    icon: '📜',
    image: '/backend.png', // Opsional: Tambahkan path foto pencapaian di sini
    type: 'Sertifikasi & Komunitas',
    title: 'Sertifikat BCC BINUS',
    desc: 'Mendapatkan sertifikat resmi dari Bina Nusantara Computer Club (BCC BINUS), komunitas teknologi terkemuka di BINUS University. Menunjukkan komitmen terhadap pengembangan kompetensi teknis dan kontribusi aktif dalam ekosistem teknologi kampus.',
    year: 'BCC BINUS · Bina Nusantara Computer Club',
  },
]

export const stats = [
  { target: 5, label: 'Projects Built' },
  { target: 2, label: 'Awards Won' },
  { target: 4, label: 'Tech Stacks' },
  { target: 100, label: '% Committed' },
]

export const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ananta@example.com',
    href: 'mailto:ananta@example.com',
    external: false,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'I Gusti Bagus Ananta',
    href: 'https://linkedin.com',
    external: true,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: '@igbagusananta',
    href: 'https://github.com',
    external: true,
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@igbagusananta',
    href: 'https://instagram.com',
    external: true,
  },
]
