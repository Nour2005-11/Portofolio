export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      'Machine Learning',
      'Classification',
      'Regression',
      'Generative AI',
      'NLP',
      'Computer Vision',
      'AI Applications',
    ],
  },
  {
    title: 'Data',
    items: [
      'Pandas',
      'NumPy',
      'SQL',
      'Data Cleaning',
      'Data Preprocessing',
      'Data Analysis',
      'Data Visualization',
    ],
  },
  {
    title: 'Development',
    items: ['Bootstrap', 'React Native', 'Firebase'],
  },
  {
    title: 'Currently Learning',
    items: ['AI Agents', 'LLM Applications', 'AI Engineering'],
  },
];

export const coreAreas = [
  {
    title: 'Artificial Intelligence',
    items: ['Machine Learning', 'Generative AI', 'NLP', 'Computer Vision', 'AI Applications'],
  },
  {
    title: 'Data',
    items: [
      'Python',
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'Data Analysis',
      'Data Visualization',
      'SQL',
    ],
  },
  {
    title: 'Development',
    items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React Native', 'Firebase'],
  },
  {
    title: 'Currently Exploring',
    items: ['AI Agents', 'LLM Applications', 'AI Engineering'],
  },
];
