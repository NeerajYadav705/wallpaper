import React, { useEffect } from "react";

function WelcomeScreen({ setShowWelcomeScreen }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [setShowWelcomeScreen]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50 opacity-100 animate-fadeOut">
      <h1 className="text-4xl font-bold">Welcome to My Website</h1>
    </div>
  );
}

export default WelcomeScreen;
