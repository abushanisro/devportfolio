import React from 'react';
import { ChevronDown, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import '../components/hero.css';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 py-20 md:py-0 relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col justify-center items-center text-center w-full h-full">
          
          {/* Text Section */}
          <div className="w-full max-w-4xl px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <span className="text-amber-400">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6 text-indigo-200">
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-gray-200 w-full">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 text-sm text-indigo-100 justify-center">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-indigo-300" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-indigo-300" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-full flex items-center gap-2 text-sm"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-indigo-400 hover:bg-indigo-800 transition-colors px-6 py-3 rounded-full flex items-center gap-2 text-sm"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          
        </div>
      </div>
      
      {/* Scroll Down Icon */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
