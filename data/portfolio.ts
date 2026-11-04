export const profile = {
  name: 'Mohammad Anas Aarif Baig Mirza',
  shortName: 'Anas',
  role: 'AI/ML Enthusiast · Software Developer · Technical Researcher',
  headline: 'Building intelligent solutions through AI, machine learning & software engineering.',
  intro: "I'm a Computer Engineering graduate passionate about Artificial Intelligence, Machine Learning and Full-Stack Development. I enjoy transforming complex technical ideas into practical applications, exploring emerging technologies, and building solutions that make a meaningful impact.",
  location: 'India',
  email: 'mirzaanas937@gmail.com',
  phone: '+91 7517769519',
  links: {
    linkedin: 'https://linkedin.com/in/AnasInaam',
    github: 'https://github.com/AnasInaam',
    leetcode: 'https://leetcode.com/u/Anasinaam',
    stackSurge: 'https://stack-surge.vercel.app/',
    acm: 'https://svkmiot.acm.org'
  },
  availability: 'Open to opportunities'
};

export const stats = [
  { value: '91.30%', label: 'SignWave validation accuracy' },
  { value: '36,486', label: 'Dataset images collected' },
  { value: '76', label: 'Gesture classes' },
  { value: '250+', label: 'LeetCode problems solved' }
];

export const skillGroups = [
  { title: 'AI & Machine Learning', icon: 'brain', skills: ['Python', 'TensorFlow', 'TensorFlow.js', 'MediaPipe Hands', 'Deep Neural Networks', 'Computer Vision', 'Data Preprocessing', 'Model Validation'] },
  { title: 'Frontend Development', icon: 'monitor', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material UI'] },
  { title: 'Backend & Data', icon: 'database', skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'MySQL', 'Convex', 'Firebase'] },
  { title: 'Tools & Platforms', icon: 'wrench', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Figma', 'Canva', 'Adobe Photoshop', 'AWS fundamentals'] },
  { title: 'Real-time & Integrations', icon: 'radio', skills: ['WebRTC', 'Socket.io', 'Web Speech API', 'Vosk', 'IndicTrans2', 'Stripe', 'Recharts', 'Kinde Auth'] }
];

export const projects = [
  {
    number: '01', name: 'SignWave', type: 'AI / Computer Vision', featured: true,
    description: 'A real-time bidirectional sign-language communication platform designed to make online meetings more accessible through gesture recognition, text, speech and sign representation.',
    stack: ['Next.js', 'TypeScript', 'MediaPipe', 'TensorFlow.js', 'WebRTC', 'Socket.io', 'Convex'],
    highlights: ['36,486 images across 76 gesture classes', '91.30% reported validation accuracy', '21 hand landmarks extracted per hand', 'Speech, text and multilingual capabilities'],
    github: 'https://github.com/AnasInaam', live: '',
    note: 'Add the specific SignWave repository and live demo URL when confirmed.'
  },
  {
    number: '02', name: 'StackSurge', type: 'Full-Stack / SaaS', featured: true,
    description: 'An investor–startup association platform designed to connect founders and investors through profiles, dashboards, secure authentication and investment workflows.',
    stack: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Convex', 'Kinde Auth', 'Stripe', 'Recharts'],
    highlights: ['Investor and startup association', 'Interactive dashboards and data visualization', 'Authentication and payment integration'],
    github: 'https://github.com/AnasInaam', live: 'https://stack-surge.vercel.app/'
  },
  {
    number: '03', name: 'LEAVLINK', type: 'Mobile Application', featured: false,
    description: 'An academic lecture-scheduling application concept intended to help organize lecture timetable information and student scheduling.',
    stack: ['Android', 'Java', 'SQLite', 'Firebase'],
    highlights: ['Academic timetable management concept', 'Android application development'],
    github: 'https://github.com/AnasInaam', live: '',
    note: 'Update this card with the final implemented features and repository.'
  },
  {
    number: '04', name: 'PMSSS Digital Scholarship System', type: 'Education Technology', featured: false,
    description: 'A digital scholarship-system project concept focused on making scholarship information and management more accessible.',
    stack: ['Web Development'],
    highlights: ['Education technology concept', 'Scholarship information management'],
    github: 'https://github.com/AnasInaam', live: '',
    note: 'Add the actual technology stack and completed functionality before publishing.'
  }
];

export const experience = [
  { role: 'Artificial Intelligence Intern', company: 'MITU Research', place: 'Pune, Maharashtra', date: 'Feb 2026 – Jun 2026', bullets: ['Contributed to an AI-based industry project focused on predictive analytics.', 'Gained practical exposure to machine learning and real-world data analysis.', 'Explored data-driven approaches to solving practical problems.'] },
  { role: 'Technical Webmaster', company: 'ACM Student Chapter · SVKM IOT', place: 'Dhule, Maharashtra', date: 'Sep 2024 – Jul 2026', bullets: ['Developed and maintained the official ACM Student Chapter website.', 'Managed website content, updates and functionality.', 'Worked on responsive interfaces and a user-friendly web experience.'], link: 'https://svkmiot.acm.org' },
  { role: 'Software Development Intern', company: 'Sumago Infotech Pvt. Ltd.', place: 'India', date: 'May 2024 – Jun 2024', bullets: ['Learned Python programming and core software-development concepts.', 'Supported software project tasks and gained practical development experience.'], verify: 'Confirm internship year: an earlier resume version listed May–June 2023.' }
];

export const education = [
  { degree: 'Bachelor of Technology', field: 'Computer Engineering', school: "Shri Vile Parle Kelavani Mandal's Institute of Technology", place: 'Dhule, Maharashtra', date: '2022 – 2026', score: 'CGPA: 8.13 / 10.00' },
  { degree: 'Higher Secondary Certificate', field: 'HSC', school: 'L.M. Sardar Urdu High School & Junior College', place: 'Dhule, Maharashtra', date: '2020 – 2022', score: '75.50%' },
  { degree: 'Secondary School Certificate', field: 'SSC', school: 'L.M. Sardar Urdu High School', place: 'Dhule, Maharashtra', date: '2007 – 2020', score: '89.00%' }
];

export const research = {
  title: 'Real-Time Indian Sign Language Recognition System Using MediaPipe and Dense Neural Networks',
  conference: 'International Conference on Smart Systems for Sustainable Development (S4SD-2025)',
  date: '12–13 December 2025',
  award: 'Best Paper Award',
  summary: 'Research on real-time Indian Sign Language gesture recognition using MediaPipe hand landmarks and a Dense Neural Network, including dataset preparation, model development and technical presentation.',
  paperUrl: ''
};

export const achievements = [
  { title: 'Best Paper Award', detail: 'S4SD-2025 for research on Indian Sign Language recognition.' },
  { title: '91.30% validation accuracy', detail: 'Reported validation accuracy for the SignWave gesture classification model.' },
  { title: '36,486-image dataset', detail: 'Collected across 76 gesture classes for SignWave.' },
  { title: '250+ LeetCode problems', detail: 'Programming practice and problem-solving.' },
  { title: '₹1,00,000 sponsorships', detail: 'Sponsorship amount reported for Technocave technical festival.' }
];

export const certifications = [
  'Python for Data Science, AI & Development — IBM / Coursera',
  'AWS Cloud Fundamentals — IBM',
  'Foundation of Cloud IoT Edge ML — NPTEL (75% reported)',
  'German 1 — NPTEL',
  'Amazon CloudWatch Fundamentals — Releaseworks Academy'
];

export const leadership = [
  'Technical Webmaster, ACM Student Chapter, SVKM IOT',
  'Hour of Code — Team Leader',
  'DSA Olympiad — Organizer',
  'SEO Tactics Workshop — Organizer',
  'e-Yantra Robotics Workshop — Participant',
  'Technocave — Sponsorship and event management; ₹1,00,000 sponsorships reported',
  'Smart India Hackathon 2023 & 2024 — Participant',
  'INIT HACKS 2023 — Participant',
  'Debate Competition — ACM Student Chapter'
];
