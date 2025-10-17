interface IExperienceCard{
  project: string;
  company: string;
  years: string;
  duration: string;
  technologies: string[];
  description: string;
  achievements?: string[];
  category: 'web' | 'mobile' | 'backend' | 'fullstack' | 'ai';
}

export default IExperienceCard;