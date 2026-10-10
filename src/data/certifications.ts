export type CertCategory =
  | 'AI & Machine Learning'
  | 'Data Science'
  | 'Programming'
  | 'Generative AI'
  | 'Other';

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  scope: string;
  date: string;
  category: CertCategory;
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM via Coursera',
    scope: '12 courses',
    date: 'September 23, 2026',
    category: 'Data Science',
    featured: true,
  },
  {
    id: 2,
    title: 'Generative AI: Elevate Your Data Science Career',
    issuer: 'IBM via Coursera',
    scope: 'Course Certificate',
    date: 'September 22, 2026',
    category: 'Generative AI',
    featured: true,
  },
  {
    id: 3,
    title: 'Data Scientist Career Guide and Interview Prep',
    issuer: 'IBM via Coursera',
    scope: 'Course Certificate',
    date: 'September 23, 2026',
    category: 'Data Science',
    featured: false,
  },
  {
    id: 4,
    title: 'Machine Learning Specialization Certification',
    issuer: 'VPA & PalTech Deutschland',
    scope: '94 Contact Hours',
    date: 'August 17, 2026',
    category: 'AI & Machine Learning',
    featured: true,
  },
  {
    id: 5,
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford University',
    scope: '3-course specialization',
    date: 'August 17, 2026',
    category: 'AI & Machine Learning',
    featured: true,
  },
  {
    id: 6,
    title: 'Supervised Machine Learning: Regression & Classification',
    issuer: 'DeepLearning.AI & Stanford University',
    scope: 'Course 1 of ML Specialization',
    date: 'March 31, 2026',
    category: 'AI & Machine Learning',
    featured: false,
  },
  {
    id: 7,
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI & Stanford University',
    scope: 'Course 2 of ML Specialization',
    date: 'May 16, 2026',
    category: 'AI & Machine Learning',
    featured: false,
  },
  {
    id: 8,
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI & Stanford University',
    scope: 'Course 3 of ML Specialization',
    date: 'August 17, 2026',
    category: 'AI & Machine Learning',
    featured: false,
  },
  {
    id: 9,
    title: 'Inside Large Language Models – From NLP to ChatGPT',
    issuer: 'University of Palestine',
    scope: '6 hours / 3 lectures',
    date: 'September 30, 2026',
    category: 'Generative AI',
    featured: true,
  },
  {
    id: 10,
    title: 'One Million AI Prompters Initiative',
    issuer: 'Dubai Future Foundation',
    scope: 'Prompt Engineering',
    date: 'N/A',
    category: 'Generative AI',
    featured: false,
  },
  {
    id: 11,
    title: 'Elements of AI Course',
    issuer: 'Village Capital & University of Helsinki — Tech Pathways MENA',
    scope: 'Course',
    date: 'N/A',
    category: 'AI & Machine Learning',
    featured: false,
  },
  {
    id: 12,
    title: 'AI Tools',
    issuer: 'Educational Gate',
    scope: '12 hours',
    date: 'July 29, 2025',
    category: 'AI & Machine Learning',
    featured: false,
  },
  {
    id: 13,
    title: 'Getting Started with Deep Learning',
    issuer: 'Islamic University of Gaza & IEEE',
    scope: '12 hours / 3 sessions',
    date: 'January 31, 2025',
    category: 'AI & Machine Learning',
    featured: true,
  },
  {
    id: 14,
    title: 'Python Programming Mastery: From Beginner to Pro',
    issuer: 'Udemy',
    scope: '7 hours',
    date: 'January 20, 2026',
    category: 'Programming',
    featured: false,
  },
  {
    id: 15,
    title: 'Learn Python 3.14 | Start your Career in 4 Hours',
    issuer: 'Udemy',
    scope: '4 hours',
    date: 'January 19, 2026',
    category: 'Programming',
    featured: false,
  },
  {
    id: 16,
    title: 'Python 101',
    issuer: 'Satr Platform / Tuwaiq',
    scope: '4 hours',
    date: 'January 15, 2026',
    category: 'Programming',
    featured: false,
  },
  {
    id: 17,
    title: 'Introduction to Python',
    issuer: 'Islamic University of Gaza & IEEE',
    scope: '8 hours',
    date: 'March 31, 2025',
    category: 'Programming',
    featured: false,
  },
  {
    id: 18,
    title: 'Introduction to Data Analysis',
    issuer: 'Satr Platform / Tuwaiq',
    scope: '1 hour',
    date: 'January 12, 2026',
    category: 'Data Science',
    featured: false,
  },
  {
    id: 19,
    title: 'Introduction to Java',
    issuer: 'SoloLearn',
    scope: 'Course Certificate',
    date: 'January 27, 2025',
    category: 'Programming',
    featured: false,
  },
  {
    id: 20,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    scope: 'Student Credential',
    date: 'December 10, 2024',
    category: 'Other',
    featured: false,
  },
  {
    id: 21,
    title: 'Online Freelancing Strategies and AI',
    issuer: 'Alhababi Business - UK',
    scope: '3 hours',
    date: 'December 25, 2024',
    category: 'Other',
    featured: false,
  },
  {
    id: 22,
    title: 'Basics of E-Services',
    issuer: 'Albalasmeh Business LTD - UK',
    scope: '3 hours',
    date: 'December 24, 2024',
    category: 'Other',
    featured: false,
  },
];

export const certCategories = [
  'All',
  'AI & Machine Learning',
  'Data Science',
  'Programming',
  'Generative AI',
  'Other',
] as const;

export const learningPrograms = [
  {
    id: 'ai-data-science-program',
    title: 'AI & Data Science Program',
    provider: 'Matsuo Lab / University of Tokyo ecosystem',
    instructor: 'Takashi Iwabuchi',
    start: '17 September 2026',
    expectedCompletion: 'December 2026',
    status: 'In Progress' as const,
    note: 'Program details based on enrollment; official certificate name may be confirmed upon completion.',
  },
];
