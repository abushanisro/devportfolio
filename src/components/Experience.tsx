import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Briefcase size={32} className="text-indigo-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 mb-8 border-l-2 border-indigo-500 transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg rounded-lg p-6 bg-white"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.position}</h3>
              <div className="flex items-center mb-4">
                <span className="text-indigo-600 font-semibold">{exp.company}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex">
                    <ChevronRight size={20} className="text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              "My professional journey has focused on developing a deep understanding of business operations and strategy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;