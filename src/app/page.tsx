'use client';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/cards/cards";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <Header />
      <main className="max-w-7xl mx-auto py-12 text-center text-gray-100">
        <h1 className="text-4xl font-bold mb-6 text-white">Welcome</h1>
        <p className="text-lg text-gray-300">
          This is a simple homepage built with Next.js and Tailwind CSS.
        </p>
        <Cards />
      </main>
      <Footer />
    </div>
  );
}