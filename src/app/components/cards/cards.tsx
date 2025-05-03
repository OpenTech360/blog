'use client';

import { NewspaperIcon, CogIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function Cards() {
  return (
    <section className="mt-8 px-4 py-8 sm:mt-16 sm:px-6 sm:py-12">
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-center tracking-tight">
        Discover More
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
      <a href="/blogposts"

          className="group relative bg-white/5 backdrop-blur-[0.25rem] p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl active:shadow-xl transition-all duration-300 transform hover:-translate-y-3 active:-translate-y-1 border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl group-hover:opacity-100 group-active:opacity-100 opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 glow-effect bg-gradient-to-br from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <NewspaperIcon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-300 group-hover:scale-125 group-active:scale-125 group-hover:text-cyan-200 group-active:text-cyan-200 transition-all duration-300" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Blog Posts</h3>
            <p className="text-gray-300 mb-6 text-base sm:text-lg text-center">Dive into my latest insights on Medium.</p>
            <button className="relative px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm sm:text-base font-semibold overflow-hidden group/button">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover/button:opacity-100 group-active/button:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Explore Now</span>
            </button>
          </div>
        </a>
        <a
          href="/windows"
          className="group relative bg-white/5 backdrop-blur-[0.25rem] p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl active:shadow-xl transition-all duration-300 transform hover:-translate-y-3 active:-translate-y-1 border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-3xl group-hover:opacity-100 group-active:opacity-100 opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 glow-effect bg-gradient-to-br from-teal-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <CogIcon className="w-10 h-10 sm:w-12 sm:h-12 text-teal-300 group-hover:scale-125 group-active:scale-125 group-hover:text-teal-200 group-active:text-teal-200 transition-all duration-300" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Windows Solutions</h3>
            <p className="text-gray-300 mb-6 text-base sm:text-lg text-center">Solve Windows issues with ease.</p>
            <button className="relative px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full text-sm sm:text-base font-semibold overflow-hidden group/button">
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-400 opacity-0 group-hover/button:opacity-100 group-active/button:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Explore Now</span>
            </button>
          </div>
        </a>
        <a
          href="/pc-tools"
          className="group relative bg-white/5 backdrop-blur-[0.25rem] p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl active:shadow-xl transition-all duration-300 transform hover:-translate-y-3 active:-translate-y-1 border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl group-hover:opacity-100 group-active:opacity-100 opacity-60 transition-opacity duration-300"></div>
          <div className="absolute inset-0 glow-effect bg-gradient-to-br from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <WrenchScrewdriverIcon className="w-10 h-10 sm:w-12 sm:h-12 text-orange-300 group-hover:scale-125 group-active:scale-125 group-hover:text-orange-200 group-active:text-orange-200 transition-all duration-300" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">PC Tools</h3>
            <p className="text-gray-300 mb-6 text-base sm:text-lg text-center">Enhance your PC with top tools.</p>
            <button className="relative px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm sm:text-base font-semibold overflow-hidden group/button">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover/button:opacity-100 group-active/button:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Explore Now</span>
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}