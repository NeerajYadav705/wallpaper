import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CategoryFilter from './CategoryFilter';

function Navbar({ selectedCategory, setSelectedCategory }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className= "h-16 bg-gray-900 text-white px-4 py-3 flex justify-between items-center relative">
      <div className="text-xl font-bold">Wallpapers For You</div>
      <div className="flex items-center space-x-4">
        <button
          className={`sm:hidden text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
            isCategoryOpen ? 'bg-opacity-100' : 'bg-opacity-50'
          }`}
          onClick={toggleCategoryDropdown}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>
      <div
        ref={dropdownRef}
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-10 transform transition-transform duration-300 ${
          isCategoryOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {isCategoryOpen && (
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            closeDropdown={() => setIsCategoryOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
