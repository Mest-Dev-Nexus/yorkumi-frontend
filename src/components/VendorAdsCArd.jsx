import React from 'react'
import yourlImage from "../assets/images/york.png"

const VendorAdsCArd = () => {
  return (
    
    <div className="">
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <img
        src= {yourlImage}
        alt="Product Image"
        className="w-full h-56 object-cover"
      />
      
    </div>

    <div className="p-4 space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 leading-snug">Pure Shea Butter
       
      </h3>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="text-green-600 font-semibold">4.8</span>
        <div className="flex gap-1">
          <span className="text-amber-500 text-sm">●</span>
          <span className="text-amber-500 text-sm">●</span>
          <span className="text-amber-500 text-sm">●</span>
          <span className="text-amber-500 text-sm">●</span>
          <span className="text-amber-500 text-sm">●</span>
        </div>
        <span>(200)</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-red-500">
        ❤️ Recommended
      </div>

      <div className="text-sm text-gray-600">Unrefined, raw shea butter for total body nourishment</div>

      <div className="text-base font-semibold text-gray-800 pt-1">
         <span className="text-black"></span> 
      </div>
    </div>
  </div>
</div>
  )
}

export default VendorAdsCArd