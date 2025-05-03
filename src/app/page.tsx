'use client';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/cards/cards";

export default function Page() {
  return (
    <div className="min-h-screen bg-black p-6 overflow-hidden relative">
      {/* Static Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Ruler Grid Effect in Corners with Fade-off */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-transparent opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, transparent 40%, black 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent 40%, black 70%)'
        }}></div>
        {/* Ruler-like markers in corners */}
        <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-white/10 to-transparent"></div>
        <div className="absolute left-0 top-0 h-20 w-1 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute left-0 bottom-0 h-20 w-1 bg-gradient-to-t from-white/10 to-transparent"></div>
        <div className="absolute right-0 top-0 h-20 w-1 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute right-0 bottom-0 h-20 w-1 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
      
      {/* Grain Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.05,
        mixBlendMode: 'overlay'
      }}></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="max-w-7xl mx-auto py-12 text-center text-gray-100">
          <Cards />
        </main>
        <Footer />
      </div>
    </div>
  );
}