'use client';

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <Header />

      <main className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="backdrop-blur-xl bg-gray-900/20 border border-gray-700/50 rounded-2xl shadow-xl p-6 text-gray-100 transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3 text-white">First Blog Post</h2>
          <p className="text-gray-300">Quick intro to this blog project.</p>
        </article>

        <article className="backdrop-blur-xl bg-gray-900/20 border border-gray-700/50 rounded-2xl shadow-xl p-6 text-gray-100 transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-3 text-white">Next Steps</h2>
          <p className="text-gray-300">Ideas for new features and designs.</p>
        </article>
      </main>

      <Footer />
    </div>
  );
}