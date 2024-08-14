import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import WallpaperGallery from "./components/WallpaperGallery";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WelcomeScreen from "./components/WelcomeScreen";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  return (
    <div>
      {showWelcomeScreen ? (
        <WelcomeScreen setShowWelcomeScreen={setShowWelcomeScreen} />
      ) : (
        <>
          <Navbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="hidden sm:block container mx-auto my-4 px-4">
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="container mx-auto px-4">
            <WallpaperGallery selectedCategory={selectedCategory} />
          </div>
          <ScrollToTopButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
