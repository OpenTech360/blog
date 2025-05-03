'use client';

export default function Cards() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-semibold mb-8 text-white">Explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          href="https://medium.com/"
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-bold text-white mb-2">Blog Posts</h3>
          <p className="text-gray-300">Read my latest articles on Medium.</p>
        </a>
        <a
          href="/windows"
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-bold text-white mb-2">Windows Solutions</h3>
          <p className="text-gray-300">Find solutions for Windows-related issues.</p>
        </a>
        <a
          href="/pc-tools"
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-bold text-white mb-2">PC Tools</h3>
          <p className="text-gray-300">Discover useful tools for your PC.</p>
        </a>
      </div>
    </section>
  );
}