import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products' // your mock or real product data
import { FaStar } from 'react-icons/fa'

const SingleAds = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  if (!product) {
    return <div className="p-8 text-center text-red-500">Product not found.</div>
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-w-md object-contain border border-gray-100 rounded-lg shadow-sm"
          />
        </div>

        {/* Product Info Section */}
        <div>
          <h2 className="text-3xl font-bold text-amber-800 mb-2">{product.name}</h2>
          <div className="flex items-center text-amber-500 mb-3">
            {Array.from({ length: product.rating }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="text-2xl font-semibold text-amber-700 mb-6">
            ${product.price}
          </div>

          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleAds;
