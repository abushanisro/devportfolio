import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{PERSONAL_INFO.name}</h3>
            <p className="text-gray-400">{PERSONAL_INFO.title}</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#hero" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;