'use client';

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-6">
      <Header />

      <main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-semibold mb-2">First Blog Post</h2>
          <p className="text-white/80">Quick intro to this blog project.</p>
        </article>

        <article className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-2xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-semibold mb-2">Next Steps</h2>
          <p className="text-white/80">Ideas for new features and designs.</p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
