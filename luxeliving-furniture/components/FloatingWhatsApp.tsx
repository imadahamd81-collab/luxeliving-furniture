import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello LuxeLiving! I'm interested in your furniture.")}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60]">
      <div className="relative">
        <span className="absolute right-full mr-3 bg-stone-900 text-white text-xs px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block shadow-lg">
          Chat with us
        </span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-stone-900 rotate-45 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring"></div>
        <button
          onClick={handleClick}
          className="relative group bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 active:scale-95 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
