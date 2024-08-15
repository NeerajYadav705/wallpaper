import WallpaperCard from "./WallpaperCard";
import { motion } from "framer-motion";

const wallpapers = [
  {
    id: 57,
    url: "/assets/abstract9.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 56,
    url: "/assets/abstract8.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 55,
    url: "/assets/abstract7.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 54,
    url: "/assets/abstract6.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 53,
    url: "/assets/robot.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 52,
    url: "/assets/spiderman9.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 51,
    url: "/assets/batman1.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 50,
    url: "/assets/superman.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 49,
    url: "/assets/ironman5.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 48,
    url: "/assets/deadpool.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 47,
    url: "/assets/abstract5.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  {
    id: 46,
    url: "/assets/abstract4.jpg",
    title: "Wallpaper 1",
    category: "Abstract",
  },
  // {
  //   id: 45,
  //   url: "/assets/car.jpg",
  //   title: "Wallpaper 1",
  //   category: "Super Heros",
  // },
  {
    id: 44,
    url: "/assets/spiderman8.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 43,
    url: "/assets/spiderman7.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 42,
    url: "/assets/spiderman6.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 41,
    url: "/assets/spiderman5.jpg",
    title: "Wallpaper 1",
    category: "Super Heros",
  },
  {
    id: 40,
    url: "/assets/cartoon1.jpg",
    title: "Wallpaper 1",
    category: "Cartoon",
  },
  {
    id: 39,
    url: "/assets/c11.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 38,
    url: "/assets/c10.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 37,
    url: "/assets/c9.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 36,
    url: "/assets/c8.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 35,
    url: "/assets/c7.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 34,
    url: "/assets/c6.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 33,
    url: "/assets/c5.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 32,
    url: "/assets/c4.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 31,
    url: "/assets/c3.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 30,
    url: "/assets/c2.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
  {
    id: 29,
    url: "/assets/c.jpg",
    title: "Wallpaper 1",
    category: "Couples",
  },
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


// function WallpaperGallery({ selectedCategory }) {
//   const [wallpapers, setWallpapers] = useState([]);

//   useEffect(() => {
//     const loadWallpapers = () => {
//       if (selectedCategory === "All") {
//         // Combine all categories into one array
//         const allWallpapers = Object.values(wallpapersData).flat();
//         setWallpapers(allWallpapers);
//       } else {
//         setWallpapers(wallpapersData[selectedCategory] || []);
//       }
//     };
//     loadWallpapers();
//   }, [selectedCategory]);





// In your React component
function WallpaperGallery({ selectedCategory }) {
  const filteredWallpapers =
    selectedCategory === "All"
      ? wallpapers
      : wallpapers.filter(
          (wallpaper) => wallpaper.category === selectedCategory
        );

  return (
    <div className="gallery-container">
      {filteredWallpapers.map((wallpaper) => (
        <motion.div
          key={wallpaper.id}
          className="masonry-item"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <WallpaperCard wallpaper={wallpaper} />
        </motion.div>
      ))}
    </div>
  );
}

export default WallpaperGallery;
