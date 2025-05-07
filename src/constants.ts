import { Education, Experience, Project, Achievement, Skill, Hobby } from './types';

export const PERSONAL_INFO = {
  name: 'Dhev Chandru',
  title: 'Aspiring Entrepreneur & Business Strategist',
  location: 'Chennai, India',
  phone: '+91 85248 16197',
  email: 'dhev2027ug@buildwithivb.com',
  linkedin: 'https://linkedin.com/in/dhevchandru',
  about: `I'm an aspiring entrepreneur passionate about business development, operations, and strategic thinking. With hands-on experience in product management, supplier negotiations, and market research, I enjoy turning insights into impact. I thrive on solving real-world problems, exploring gaps in the market, and creating meaningful solutions that drive growth and value.`,
  img: '/images/profile.jpeg',
};

export const EDUCATION: Education[] = [
  {
    degree: 'UG Entrepreneurship Course',
    institution: 'Institute of Venture Building (IVB)',
    period: '2024–2027',
    grade: 'CGPA: 65%',
  },
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'SRM University, Chennai',
    period: '2024–2027',
    grade: 'CGPA: 8.21',
  },
  {
    degree: 'Higher Secondary (12th Grade)',
    institution: 'Billabong High International School',
    period: '2024',
    grade: 'CGPA: 72.2%',
  },
  {
    degree: 'Secondary (10th Grade)',
    institution: 'New Era Senior Secondary School',
    period: '2022',
    grade: 'CGPA: 56.8%',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    position: 'Business Development & Operations Intern',
    company: 'Dhev Traders',
    period: 'Sep 2023 – Present',
    responsibilities: [
      'Researched and selected high-demand FMCG brands, aligning with profitability and customer needs.',
      'Successfully negotiated a 2% higher margin on masala brands — a major win in a low-margin category.',
      'Planned stock cycles in volatile markets (e.g., cooking oil) to prevent losses and maximize gains.',
      'Supported pricing and purchasing decisions based on market trends, ensuring strong profit margins.',
      'Contributed to budgeting, forecasting, and growth strategies to drive operational efficiency.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'No-Fuel Cooking Project',
    description: 'Created a sustainable business model using fuel-free cooking. Learned real-world pricing, sales, and customer engagement.',
    highlight: '₹3,500 Cash Prize Winner',
  },
  {
    title: 'Market Research – Phoenix Mall, Chennai',
    description: 'Analyzed footfall, consumer spending patterns, and retail performance to suggest strategies for improved engagement.',
  },
  {
    title: 'Retail Immersion – Crossword Bookstore',
    description: 'Gained hands-on retail experience: inventory tracking, sales analysis, customer service, and break-even analysis.',
  },
  {
    title: 'Content Strategy – Vilvah Brand',
    description: 'Studied branding, audience positioning, and content planning. Delivered structured reporting using Excel and data visualizations.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { 
    title: 'Quiz Competition – 2nd Prize Winner + Team Lead (₹500)'
  },
  {
    title: 'No-Fuel Cooking Challenge – Winner with Cash Prize (₹3,500)'
  },
  {
    title: 'Zonal Cricket Selection – Top 16 out of 250+ Players'
  },
  {
    title: 'Cricket Awards',
    description: 'Man of the Match: 32* (debut), 35*, 51*, 48 runs. Winner – U16 Inter Academy Trophy (Cricket Association of Pondicherry). Winner – U16 Kabilan Trophy.'
  },
  {
    title: 'School House Captain',
    description: 'Led Blue House to 1st Prize Trophy with a record 100-point margin'
  },
  {
    title: 'School People Leader (SPL)',
    description: 'Led 40+ peers, coordinated assemblies and social events'
  },
];

export const SKILLS: Skill[] = [
  {
    category: 'Business & Strategy',
    items: ['Business Development', 'Financial Planning', 'Product Management', 'Brand Selection', 'Competitive Analysis'],
  },
  {
    category: 'Marketing & Growth',
    items: ['Lead Generation', 'Digital Marketing', 'Consumer Engagement', 'Content Strategy', 'Market Research'],
  },
  {
    category: 'Tools & Tech',
    items: ['Microsoft Excel', 'Canva', 'Google Forms', 'CRM Tools', 'Data Visualization', 'Presentation Design'],
  },
  {
    category: 'Soft Skills',
    items: ['Strategic Thinking', 'Decision-Making', 'Negotiation', 'Leadership', 'Adaptability', 'Effective Communication'],
  },
];

export const DRIVE = `I'm deeply passionate about entrepreneurship, product innovation, and creating solutions that solve real market problems. My journey so far—from managing supplier relations to developing impactful projects—has shaped me into a curious, driven, and growth-minded individual ready to build something that lasts.`;

export const GOALS = {
  shortTerm: 'Launch my own business venture with friends, build a strong foundation in operations and BD, and develop market-ready skills.',
  longTerm: 'Scale a stable, problem-solving business that creates real-world impact and fills market gaps.',
};

export const HOBBIES: Hobby[] = [
  {
    name: 'Fitness & Workouts',
    icon: 'dumbbell',
  },
  {
    name: 'Cricket',
    icon: 'bat',
    description: 'Zonal-Level Player',
  },
  {
    name: 'Bike Riding',
    icon: 'bike',
  },
  {
    name: 'Swimming & Cycling',
    icon: 'swim',
  },
  {
    name: 'Travelling',
    icon: 'globe',
  },
];

export const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];