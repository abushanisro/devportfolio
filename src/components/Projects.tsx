import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Lightbulb, ChevronRight, ChevronDown } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Lightbulb size={32} className="text-indigo-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Projects & Case Work</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.map((project, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'shadow-md' : ''
                }`}
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-start"
                  onClick={() => toggleExpand(index)}
                >
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800 mr-3">{project.title}</h3>
                      {project.highlight && (
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                          {project.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">
                      {expandedIndex === index 
                        ? project.description 
                        : `${project.description.substring(0, 120)}${project.description.length > 120 ? '...' : ''}`}
                    </p>
                  </div>
                  <div className="text-indigo-600 ml-4">
                    {expandedIndex === index ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </div>
                </div>
                
                {expandedIndex === index && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="mt-4 p-4 bg-indigo-50 rounded-md">
                      <h4 className="font-semibold text-indigo-800 mb-2">Key Learnings:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <ChevronRight size={18} className="text-indigo-600 mt-1 shrink-0" />
                          <span className="text-gray-700">Applied business strategy in a real-world context</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight size={18} className="text-indigo-600 mt-1 shrink-0" />
                          <span className="text-gray-700">Developed analytical skills through data collection and interpretation</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight size={18} className="text-indigo-600 mt-1 shrink-0" />
                          <span className="text-gray-700">Enhanced presentation and reporting capabilities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;