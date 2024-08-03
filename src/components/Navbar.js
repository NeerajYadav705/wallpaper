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
    <nav className="h-16 bg-slate-950 text-white px-4 py-3 flex justify-between items-center relative shadow-lg">
      <div className="text-2xl font-bold">Wallpapers For You</div>

      <div className="flex items-center space-x-4">
        {/* Mobile Menu Toggle */}
        <button
          className={`sm:hidden text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
            isCategoryOpen ? 'bg-opacity-100' : 'bg-opacity-50'
          }`}
          onClick={toggleCategoryDropdown}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>

      {/* Category Filter Dropdown for Mobile */}
      <div
        ref={dropdownRef}
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-10 transform transition-transform duration-300 ${
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
