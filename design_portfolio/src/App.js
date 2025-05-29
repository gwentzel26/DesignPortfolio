import React from 'react';
import About from './components/About';
import AlbumCover from './components/AlbumCovers';
import PressReleases from './components/flyers';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Hero / Landing */}
      <header className="bg-indigo-600 text-white">
        {/* nav & hero content here… */}
      </header>

      <main>
        <About />
        <AlbumCover />
        <PressReleases />
      </main>

      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}