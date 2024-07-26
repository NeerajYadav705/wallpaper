import React from 'react';

const categories = ['All', 'Super Heros', 'Cartoons', 'Abstract'];

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex justify-center my-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 mx-2 rounded transition-colors duration-300 ${
            selectedCategory === category ? 'bg-slate-600 text-white' : 'bg-slate-200 hover:bg-slate-300'
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
