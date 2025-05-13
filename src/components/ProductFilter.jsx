import React, { useState } from 'react'

const ProductFilter = () => {
     const [showFilters, setShowFilters] = useState(false);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    
    <div className="w-full md:w-64 mb-8">
      {/* Filter Toggle Button - Visible on all devices */}
      <button 
        onClick={toggleFilters}
        className="flex items-center justify-between w-full bg-amber-600 text-white rounded px-4 py-3 mb-2"
      >
        <span className="font-medium">Filters</span>
        <svg 
          className={`w-5 h-5 transition-transform ${showFilters ? 'transform rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Filters Panel - Toggled on mobile, always visible on desktop */}
      <div className={`${showFilters ? 'block' : 'hidden'} md:block bg-white p-6 rounded-lg shadow-md`}>
        <h3 className="font-semibold text-amber-800 text-lg mb-4">
          Filters
        </h3>

        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
          <div className="space-y-2">
            <button className="block w-full text-left px-3 py-2 rounded bg-amber-600 text-white">
              All Products
            </button>
            <button className="block w-full text-left px-3 py-2 rounded hover:bg-amber-100 text-amber-800">
              Body
            </button>
            <button className="block w-full text-left px-3 py-2 rounded hover:bg-amber-100 text-amber-800">
              Hair
            </button>
            <button className="block w-full text-left px-3 py-2 rounded hover:bg-amber-100 text-amber-800">
              Face
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
          <select
            disabled
            className="w-full p-2 border border-amber-200 rounded bg-gray-100 text-gray-500"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter