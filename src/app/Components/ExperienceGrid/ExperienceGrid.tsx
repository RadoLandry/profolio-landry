import React from 'react';
import style from '../Contacts/style.module.css';
import experienceArray from './experienceArray';
import IExperienceCard from './interface';
import Link from 'next/link';

const ExperienceCard: React.FC<IExperienceCard> = ({
  project,
  company,
  years,
  technologies,
  description,
  achievements = [],
  category
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'backend':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'ai':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web':
        return 'bg-blue-500';
      case 'mobile':
        return 'bg-green-500';
      case 'backend':
        return 'bg-purple-500';
      case 'fullstack':
        return 'bg-yellow-500';
      case 'ai':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex flex-col p-6 space-y-6 transition-all duration-500 bg-gray-70000/10 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-16 h-16 bg-gray-700 border border-gray-600 rounded-full shadow-inner lg:h-20 lg:w-20">
        <div className={`p-3 rounded-full ${getCategoryColor(category)} text-white`}>
          {getCategoryIcon(category)}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:gap-4">
            <h3 className="text-xl font-bold text-white lg:text-2xl">
              {project}
            </h3>
     
          </div>
          <div className="flex flex-wrap items-center gap-2 text-gray-300">
            <span className="font-medium">{company}</span>
            <span className="text-gray-500">•</span>
            <p className="inline-flex items-center justify-between text-center px-3 py-1 text-sm font-medium rounded-full bg-indigo-900 text-indigo-200 ">
              <span className="text-center">{years}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-700 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-white">Principales réalisations :</h4>
            <ul className="space-y-1 text-gray-300">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View Details Link */}
        <div className="pt-2">
          {company ==="" && (
          <div className="inline-flex gap-3 items-end justify-center text-lg font-bold cursor-pointer transition-colors">
            {/*  */}
            <div>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>


            <div className='flex pt-10 items-center'>
              <Link href="https://github.com/RadoLandry">
                <svg className="w-20 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>

              <Link href="https://gitlab.com/">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.844.904a1.007 1.007 0 00-.955.692l-2.53 7.783c0 .007-.005.012-.007.02L.07 13.104a.992.992 0 00.342 1.103l11.568 8.369a.994.994 0 001.14 0l11.568-8.369a.992.992 0 00.342-1.103l-1.282-3.705c0-.007-.005-.012-.007-.02l-2.53-7.783a1.007 1.007 0 00-.955-.692.994.994 0 00-.949.692l-2.406 7.408H8.203L5.797 1.596a.994.994 0 00-.95-.692z"/>
                </svg>
              </Link>
            </div>

          </div>)}
        </div>
      </div>
    </div>
  );
};

// Composant parent pour afficher plusieurs cartes
const ExperienceGrid: React.FC = () => {
  const experiences: IExperienceCard[] = experienceArray;
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12 bg-gradient-to-br from-black-200 to-blue-800 min-h-screen">
      <div className={style.decorationLeft}></div>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
      <div className={style.decorationRight}></div>
    </div>
  );
};

export default ExperienceGrid;
