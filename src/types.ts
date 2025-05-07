export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  highlight?: string;
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Hobby {
  name: string;
  icon: string;
  description?: string;
}