import React, { useEffect } from "react";

function WelcomeScreen({ setShowWelcomeScreen }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [setShowWelcomeScreen]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 text-white z-50 opacity-100 animate-fadeOut">
      <h1 className="text-5xl font-extrabold tracking-wide animate-slideIn">
        Wallpapers for You
      </h1>
      <p className="absolute bottom-4 right-6 text-sm">
        Created by Neeraj Yadav
      </p>
    </div>
  );
}

export default WelcomeScreen;
