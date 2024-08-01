import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const categories = ['All', 'Super Heros', 'Cartoons', 'Abstract','Couples'];


function CategoryFilter({ selectedCategory, setSelectedCategory, closeDropdown }) {
  return (
    <div className="p-4 flex flex-col h-full sm:flex-row sm:justify-around sm:items-center bg-white hover:shadow-inner">
      {/* Close Button */}
      <button
        onClick={closeDropdown}
        className="text-gray-600 hover:text-gray-800 text-2xl p-2 rounded-full mb-4 sm:hidden self-end"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      {/* Category List */}
      <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 overflow-y-auto">
        {categories.map((category) => (
          <li key={category}>
           <button
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left p-3 rounded-lg hover:bg-slate-400 transition-colors ${
                selectedCategory === category ? 'bg-slate-600 text-slate-200' : 'bg-white text-slate-500'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
