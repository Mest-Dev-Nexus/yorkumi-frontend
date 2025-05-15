import React from 'react'
import { useParams } from 'react-router-dom'
import SingleImage from '../assets/images/yorkumi.jpg'
import { ShoppingCart, Star } from 'lucide-react'

const SingleAds = () => {
  return (
     // Added top margin (mt-16) to push content down below navbar
    <div className="container mx-auto p-6 mt-0 pt-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={SingleImage}
            alt="Product"
            className="w-full h-auto max-w-md object-contain border border-gray-100 rounded-lg shadow-sm"
          />
        </div>
        
        {/* Product Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-800 mb-2">Organic Honey</h2>
          <div className="flex items-center text-amber-500 mb-3">
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <Star fill="currentColor" size={20} />
            <span className="ml-2 text-sm text-gray-600">(5.0)</span>
          </div>
          <p className="text-gray-700 mb-4">Premium organic honey sourced from wildflower meadows. Pure, raw, and unfiltered with a rich golden color and delicate floral taste.</p>
          <div className="text-2xl font-semibold text-amber-700 mb-6">
            $12.99
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition flex items-center">
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleAds;
