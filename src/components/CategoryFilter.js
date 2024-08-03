import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHome, faStar, faImage, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'All', icon: faHome },
  { name: 'Super Heros', icon: faStar },
  { name: 'Cartoons', icon: faImage },
  { name: 'Abstract', icon: faHeart },
  { name: 'Couples', icon: faUser },
];

function CategoryFilter({ selectedCategory, setSelectedCategory, closeDropdown }) {
  return (
    <div className="p-4 flex flex-col sm:flex-row sm:justify-around sm:items-center bg-transparent  rounded-lg transition-all duration-300 ease-in-out">
      {/* Close Button */}
      <button
        onClick={closeDropdown}
        className="text-slate-500  hover:text-slate-700 text-2xl p-2 rounded-full mb-4 sm:hidden self-end focus:outline-none"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      {/* Category List */}
      <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        {categories.map((category) => (
          <li key={category.name} className="flex-shrink-0">
            <button
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full text-left px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-slate-600 ${
                selectedCategory === category.name
                  ? 'bg-blue-500 dark:bg-slate-700 text-white'
                  : 'text-gray-600 dark:text-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-slate-200`}
            >
              <FontAwesomeIcon icon={category.icon} />
              <span>{category.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
