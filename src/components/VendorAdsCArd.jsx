import React from 'react'
import yourlImage from "../assets/images/york.png"
import { Edit, Heart, Trash2 } from 'lucide-react'
import { Link } from 'react-router'

const VendorAdsCArd = () => {
  return (
    
    <div className="max-w-sm">
      <div 
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className="relative">
          <img
            src={yourlImage}
            alt="Product Image"
            className="w-full h-56 object-cover"
          />
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">
            Pure Shea Butter
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-600 font-semibold">4.8</span>
            <div className="flex gap-1">
              <span className="text-amber-500">★</span>
              <span className="text-amber-500">★</span>
              <span className="text-amber-500">★</span>
              <span className="text-amber-500">★</span>
              <span className="text-amber-500">★</span>
            </div>
            <span>(200)</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
            <Heart size={16} fill="currentColor" className="text-red-500" /> 
            Recommended
          </div>

          <div className="text-sm text-gray-600">
            Unrefined, raw shea butter for total body nourishment
          </div>

          <div className="flex justify-between items-center pt-3">
            <div className="text-lg font-bold text-gray-800">
              $24.99
            </div>
            
            {/* Edit and Delete buttons at the bottom */}
            <div className="flex gap-2">
              <Link to={`/dashboard/update/:id`}>
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <Edit size={18} className="text-blue-600" />
              </button>
              </Link>
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300">
                <Trash2 size={18} className="text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorAdsCArd