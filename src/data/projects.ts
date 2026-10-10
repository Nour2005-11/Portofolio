export type ProjectCategory =
  | 'AI / Machine Learning'
  | 'Data Analysis'
  | 'Web Development'
  | 'Mobile Development'
  | 'Personal Projects';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  shortDescription: string;
  problem: string;
  approach: string;
  technologies: string[];
  learningOutcome?: string;
  github?: string;
  liveDemo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'heart-disease',
    title: 'Heart Disease Classification',
    category: 'AI / Machine Learning',
    featured: true,
    shortDescription:
      'Machine learning classification project predicting heart disease risk from patient medical and demographic features.',
    problem:
      'Healthcare datasets can contain multiple patient characteristics that make it difficult to identify patterns associated with heart disease manually.',
    approach:
      'Built a machine learning classification project to predict whether a patient is likely to have heart disease based on available medical and demographic features.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning', 'Classification'],
    learningOutcome:
      'Practiced the end-to-end classification workflow, including data preparation, model training, evaluation, and interpretation of results.',
    github: 'https://github.com/Nour2005-11/Heart-Disease-Classification',
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning Projects',
    category: 'Data Analysis',
    featured: true,
    shortDescription:
      'Practical data cleaning and preprocessing work using Python and Pandas on real-world datasets.',
    problem:
      'Real-world datasets often contain missing values, inconsistent formats, duplicates, and other quality issues that must be addressed before analysis.',
    approach:
      'Worked with datasets using Python and Pandas to inspect, clean, transform, and prepare data for further analysis.',
    technologies: ['Python', 'Pandas', 'Data Cleaning', 'Data Preprocessing'],
    learningOutcome:
      'Strengthened practical understanding of how raw datasets are transformed into cleaner and more reliable data for analysis.',
    github: 'https://github.com/Nour2005-11/Data-Cleaning-Projects',
  },
  {
    id: 'al-bayan',
    title: 'Al Bayan — Islamic Remembrance Platform',
    category: 'Personal Projects',
    featured: true,
    shortDescription:
      'A calm Arabic Islamic web platform for daily adhkar and supplications, created as a personal Sadaqah Jariyah project.',
    problem:
      'There was a need for a simple, accessible digital space focused on daily Islamic remembrance and supplications with a respectful Arabic interface.',
    approach:
      'Built a responsive Arabic-focused web platform providing morning and evening adhkar, sleep adhkar, post-prayer adhkar, tasbih, and Quranic and Sunnah supplications organized by situation. Developed with AI-assisted development workflows to support implementation, debugging, and refinement.',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveDemo: 'https://shuhada-al-bayan.vercel.app/',
  },
  {
    id: 'nard-restaurant',
    title: 'Nard Restaurant',
    category: 'Web Development',
    featured: true,
    shortDescription:
      'Responsive restaurant website focused on visual presentation, navigation, and a clean user experience.',
    problem:
      'Restaurants need a simple and visually appealing digital presence to present their brand and content to visitors.',
    approach:
      'Built a responsive restaurant website focused on visual presentation, navigation, and a clean user experience.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://nard-resturant.vercel.app/',
  },
  {
    id: 'insurance-regression',
    title: 'Insurance Regression',
    category: 'AI / Machine Learning',
    featured: false,
    shortDescription:
      'Regression-based machine learning project estimating insurance costs from customer features.',
    problem:
      'Insurance costs can vary based on multiple customer characteristics, making it useful to model the relationship between these features and expected charges.',
    approach:
      'Built a regression-based machine learning project to estimate insurance costs from available customer features.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Regression', 'Machine Learning'],
    github: 'https://github.com/Nour2005-11/Insurance-Regression-',
  },
  {
    id: 'temperature-regression',
    title: 'Temperature Regression Model',
    category: 'AI / Machine Learning',
    featured: false,
    shortDescription:
      'Regression model learning patterns in a temperature-related dataset to predict target values.',
    problem:
      'Temperature-related values can be modeled using relationships between available input features and a target variable.',
    approach:
      'Developed a regression model to learn patterns in the dataset and predict the target temperature-related value.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Regression', 'Machine Learning'],
    github: 'https://github.com/Nour2005-11/temperature-Regression-Model',
  },
  {
    id: 'adidas-frontend',
    title: 'ADIDAS Front-End',
    category: 'Web Development',
    featured: false,
    shortDescription:
      'Responsive Adidas-inspired frontend focused on product presentation, navigation, and layout.',
    problem:
      'E-commerce interfaces need to present products clearly while maintaining a responsive and visually consistent user experience.',
    approach:
      'Built a responsive Adidas-inspired frontend focused on product presentation, navigation, layout, and user interface design.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/Nour2005-11/ADIDAS-Front-End',
    liveDemo: 'https://adidas-rose.vercel.app/',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    category: 'Mobile Development',
    featured: false,
    shortDescription:
      'Early practical experience with React Native during a university Mobile Development course.',
    problem:
      'University Mobile Development course required building a practical mobile application using modern frameworks.',
    approach:
      'This project was an early practical experience with React Native during a university Mobile Development course. AI tools were used as development assistants to help write and understand parts of the code, troubleshoot errors, and improve the implementation.',
    technologies: ['React Native', 'JavaScript', 'AI-assisted development'],
    github: 'https://github.com/Nour2005-11/Mobile-Development',
  },
  {
    id: 'romyk',
    title: 'Romyk',
    category: 'Web Development',
    featured: false,
    shortDescription:
      'Responsive frontend website with clean layout and visual presentation.',
    problem:
      'Needed a clean, responsive digital presence with focused layout and visual design.',
    approach:
      'Built a responsive frontend focused on layout, visual presentation, and user interface consistency.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://romyk-gamma.vercel.app/',
  },
  {
    id: 'school-form',
    title: 'School Form',
    category: 'Web Development',
    featured: false,
    shortDescription:
      'Frontend form and web interface project for school-related data collection.',
    problem:
      'Schools and institutions need simple digital forms for collecting and presenting information.',
    approach:
      'Built a responsive frontend form and web interface focused on clear layout and usability.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://school-form-virid.vercel.app/',
  },
  {
    id: 'bebsi',
    title: 'Bebsi',
    category: 'Web Development',
    featured: false,
    shortDescription:
      'Responsive frontend website with attention to UI and visual design.',
    problem:
      'Needed a simple, visually consistent digital presence with responsive design.',
    approach:
      'Built a responsive frontend focused on UI, layout, and a clean user experience.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://bebsi.vercel.app/',
  },
];

export const projectCategories = [
  'All',
  'AI / Machine Learning',
  'Data Analysis',
  'Web Development',
  'Mobile Development',
  'Personal Projects',
] as const;
