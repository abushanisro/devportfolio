import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Send, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Send size={32} className="text-indigo-300 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-300 rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-indigo-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={20} className="text-indigo-300 mr-4" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                
                <div className="flex items-center">
                  <Phone size={20} className="text-indigo-300 mr-4" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-indigo-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail size={20} className="text-indigo-300 mr-4" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Linkedin size={20} className="text-indigo-300 mr-4" />
                  <a 
                    href={PERSONAL_INFO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-colors"
                  >
                    linkedin.com/in/dhevchandru
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-indigo-700">
                <p className="text-indigo-200">
                  I'm always open to discussing new projects, business opportunities, or entrepreneurial ventures.
                </p>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-800">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your name" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your email" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;