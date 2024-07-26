import React, { useState, useEffect } from 'react';
import WallpaperCard from './WallpaperCard';
import CategoryFilter from './CategoryFilter';
import { motion } from 'framer-motion';

const wallpapers = [
  {
    id: 1,
    url: "/assets/batman.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 2,
    url: "/assets/ironman.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 3,
    url: "/assets/ironman1.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 4,
    url: "/assets/ironman3.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 5,
    url: "/assets/ironman4.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 6,
    url: "/assets/loki.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 7,
    url: "/assets/spiderman.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 8,
    url: "/assets/spiderman2.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 9,
    url: "/assets/spiderman3.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 10,
    url: "/assets/spiderman4.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 11,
    url: "/assets/bean.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 12,
    url: "/assets/cars.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 13,
    url: "/assets/cartoon.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 14,
    url: "/assets/goku.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 15,
    url: "/assets/goku1.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 16,
    url: "/assets/scooby.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 17,
    url: "/assets/shinchan.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 18,
    url: "/assets/shinchan1.jpg",
    title: "Wallpaper 1",
    category: "Cartoons",
  },
  {
    id: 19,
    url: "/assets/airplane.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 20,
    url: "/assets/abstract.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 21,
    url: "/assets/abstract1.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 22,
    url: "/assets/abstract2.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 23,
    url: "/assets/bike.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 24,
    url: "/assets/game.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 25,
    url: "/assets/game1.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 26,
    url: "/assets/microsoft.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 27,
    url: "/assets/space.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 28,
    url: "/assets/space1.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },

  // Add more wallpapers with categories here
];

function WallpaperGallery() {
  const [wallpaperList, setWallpaperList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Set the local wallpaper list
    setWallpaperList(wallpapers);
  }, []);

  const filteredWallpapers = selectedCategory === 'All'
    ? wallpaperList
    : wallpaperList.filter(wallpaper => wallpaper.category === selectedCategory);

  return (
    <div>
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="columns-1 sm:columns-2 md:columns-5 gap-4 mt-4">
        {filteredWallpapers.map((wallpaper) => (
          <motion.div
            key={wallpaper.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <WallpaperCard wallpaper={wallpaper} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WallpaperGallery;
