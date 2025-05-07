import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Award size={32} className="text-indigo-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Skills & Competencies</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                    <span className="font-bold">{index + 1}</span>
                  </span>
                  {skill.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center bg-white rounded-full py-2 px-4 shadow-sm border border-gray-100 text-gray-700"
                    >
                      <CheckCircle size={16} className="text-indigo-600 mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-indigo-50 rounded-lg p-6 border border-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-800 mb-4 text-center">Skill Development Focus</h3>
            <p className="text-center text-gray-700">
              My skills represent a balanced mix of business acumen, analytical capabilities, and people skills necessary for entrepreneurial success. I'm constantly expanding my knowledge in these areas through practical application and formal education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;