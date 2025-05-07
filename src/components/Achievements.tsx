import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Trophy size={32} className="text-indigo-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Achievement Star Icon */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-100 rounded-full flex items-end justify-start p-1">
                  <Star size={16} className="text-amber-500 mb-2 ml-2" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3 pr-8">{achievement.title}</h3>
                
                {achievement.description && (
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 italic">
              "Each achievement has been a stepping stone towards my goal of entrepreneurial excellence."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;