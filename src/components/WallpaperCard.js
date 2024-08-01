import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function WallpaperCard({ wallpaper }) {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <img src={wallpaper.url} alt={wallpaper.title} className="w-auto h-auto object-cover" />
      <a
        href={wallpaper.url}
        download
        className="w-12 h-12 flex items-center justify-center absolute bottom-2 right-2 bg-slate-400 hover:bg-slate-700 text-white p-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      >
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
  );
}

export default WallpaperCard;
