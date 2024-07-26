import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function WallpaperCard({ wallpaper }) {
  return (
    <div className="relative bg-slate-800 shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4 group">
      <img src={wallpaper.url} alt={wallpaper.title} className="object-contain h-52 w-full rounded" />
      <a
        href={wallpaper.url}
        download
        className="absolute bottom-2 right-2 bg-slate-400 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity
        h-12 w-12 flex items-center justify-center
        "
      >
        <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>
  );
}

export default WallpaperCard;
