import React from 'react';
import WallpaperGallery from './components/WallpaperGallery';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="bg-slate-900 text-slate-300 text-center py-5">
        <h1 className="text-3xl">Wallpaper</h1>
      </header>
      <main className="p-5 container mx-auto">
        <WallpaperGallery />
      </main>

      <footer className='text-slate-200 h-14 flex items-center justify-center'>
        I'm a Footer
      </footer>
    </div>
  );
}

export default App;
