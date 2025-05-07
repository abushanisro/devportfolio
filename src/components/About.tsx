import React from 'react';
import { PERSONAL_INFO, DRIVE } from '../constants';
import { FileText, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <User size={32} className="text-indigo-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <FileText size={20} className="text-indigo-600 mr-2" />
                What Drives Me
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {DRIVE}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-md p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Education Background</h3>
                <p className="text-gray-600">
                  Currently pursuing BBA at SRM University and entrepreneurship training at the Institute of Venture Building (IVB).
                </p>
              </div>
              
              <div className="bg-white rounded-md p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Focus</h3>
                <p className="text-gray-600">
                  Specializing in business development, operations management, and strategic planning with hands-on FMCG industry experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;