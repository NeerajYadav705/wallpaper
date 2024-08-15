import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400 mt-10 h-16 flex items-center justify-center text-sm shadow-inner">
      <p>
        © 2024
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/neeraj-yadav-017a571b4/"
        >
          {" "}
          Neeraj Yadav.{" "}
        </a>
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
