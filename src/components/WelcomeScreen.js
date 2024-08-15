import React, { useEffect } from "react";

function WelcomeScreen({ setShowWelcomeScreen }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [setShowWelcomeScreen]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 opacity-100 animate-fadeOut">
      <h1 className="text-6xl font-extrabold tracking-widest animate-fadeIn">
        Wallpapers for You
      </h1>
      <h1 className="absolute bottom-8 right-8 text-sm font-light tracking-wide animate-fadeIn">
        Created by Neeraj Yadav
      </h1>
    </div>
  );
}

export default WelcomeScreen;
