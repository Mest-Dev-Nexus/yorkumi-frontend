import React from 'react'

const VendorAdsCArd = () => {
  return (
    
    <div className="">
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <img
        src=""
        alt="Product Image"
        className="w-full h-56 object-cover"
      />
      <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5 text-red-500"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
            2.09C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 
            6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    </div>

    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 leading-snug">Gold
       
      </h3>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-green-600 font-semibold">4.8</span>
        <div className="flex gap-1">
          <span className="text-green-500 text-sm">●</span>
          <span className="text-green-500 text-sm">●</span>
          <span className="text-green-500 text-sm">●</span>
          <span className="text-green-500 text-sm">●</span>
          <span className="text-green-500 text-sm">●</span>
        </div>
        <span>(200)</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-red-500">
        ❤️ Recommended
      </div>

      <div className="text-sm text-gray-600">Private and Luxury</div>

      <div className="text-base font-semibold text-gray-800 pt-1">
        from <span className="text-black">Rate</span> 
      </div>
    </div>
  </div>
</div>
  )
}

export default VendorAdsCArd