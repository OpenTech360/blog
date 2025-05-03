'use client';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 mb-8 backdrop-blur-xl bg-gray-950/70 border border-gray-700/30 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-gray-700/50">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg transform rotate-45" />
          <div className="absolute inset-0 w-12 h-12 bg-gray-900 rounded-xl opacity-50" /> {/* Subtle overlay for depth */}
        </div>
        <div className="text-white">
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            OpenTech360
          </h1>
          <p className="text-base font-medium text-gray-400">Tech Blogs</p>
        </div>
      </div>
      <nav className="hidden sm:flex space-x-6">
        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Home</a>
        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Blogs</a>
        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">About</a>
      </nav>
    </header>
  );
}