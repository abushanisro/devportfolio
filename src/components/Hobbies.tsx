import React from 'react';
import { HOBBIES } from '../constants';
import { Heart, Dumbbell, Bike, Globe2, Scroll } from 'lucide-react';

const Hobbies: React.FC = () => {
  // Map icon names to Lucide React components
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell size={size} />;
      case 'bat':
        return <Scroll size={size} />; // Using Scroll as a substitute for cricket bat
      case 'bike':
        return <Bike size={size} />;
      case 'swim':
        return <Scroll size={size} />; // Using Scroll as a substitute for swimming
      case 'globe':
        return <Globe2 size={size} />;
      default:
        return <Heart size={size} />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Heart size={32} className="text-indigo-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {HOBBIES.map((hobby, index) => (
              <div 
                key={index}
                className="bg-white rounded-full py-3 px-6 shadow-sm border border-gray-100 flex items-center text-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                  {getIcon(hobby.icon, 20)}
                </div>
                <div>
                  <span className="font-medium">{hobby.name}</span>
                  {hobby.description && (
                    <span className="text-xs text-gray-500 ml-2">({hobby.description})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 italic">
              "Beyond business, I maintain a balanced lifestyle through sports, fitness, and exploration."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;