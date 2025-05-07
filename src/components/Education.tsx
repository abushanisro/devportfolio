import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <GraduationCap size={32} className="text-indigo-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-indigo-600">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">
                    {edu.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;