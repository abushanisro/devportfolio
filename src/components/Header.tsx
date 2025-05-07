import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-indigo-600">
          DC
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className={`${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-indigo-500 transition-colors font-medium`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X className={isScrolled ? "text-gray-800" : "text-white"} /> : 
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
          }
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="mb-3">
                <a 
                  href={item.href}
                  className="block py-2 px-4 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;