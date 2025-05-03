'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-4 mb-8 backdrop-blur-2xl bg-black/20 border border-gray-700/40 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-gray-800/50 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg transform rotate-45" />
          <div className="absolute inset-0 w-10 h-10 bg-black rounded-xl opacity-30" />
        </div>
        <div className="text-white">
          <motion.h1 
            className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            OpenTech360
          </motion.h1>
          <p className="text-sm font-bold text-gray-200">Tech Blogs</p>
        </div>
      </div>
      <nav className="flex items-center">
        <div className="hidden sm:flex space-x-6">
          <a href="#" className="text-gray-100 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-400 rounded transition-colors font-bold text-sm">Home</a>
          <a href="#" className="text-gray-100 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-bold text-sm">Blogs</a>
          <a href="#" className="text-gray-100 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-bold text-sm">About</a>
        </div>
        <button 
          className="sm:hidden text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <motion.div 
          className="absolute top-[4.5rem] left-0 w-full backdrop-blur-3xl bg-black/80 border border-gray-700/40 rounded-b-2xl shadow-2xl sm:hidden z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <nav className="flex flex-col items-center py-6 space-y-6">
            <a href="#" className="text-white hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-bold text-lg py-2" onClick={toggleMenu}>Home</a>
            <a href="#" className="text-white hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-bold text-lg py-2" onClick={toggleMenu}>Blogs</a>
            <a href="#" className="text-white hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-bold text-lg py-2" onClick={toggleMenu}>About</a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}