import React from 'react'
import productImage from '../assets/images/lotion.jpg'

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative pb-[75%]"> {/* Creates a consistent aspect ratio container */}
        <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
          Featured
        </span>
        <img
          src= {productImage}
          alt="Pure Shea Butter"
          className="absolute inset-0 w-full h-full object-contain p-2" 
          /* Changed to object-contain and added padding to ensure the image displays properly */
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-amber-800">
          Pure Shea Butter
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex text-amber-500">★★★★★</div>
          <span className="ml-1 text-xs text-gray-600">(5.0)</span>
        </div>
        <p className="text-gray-700 text-sm mb-3">
          Unrefined, raw shea butter for total body nourishment
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-amber-700">
            $19.99
          </span>
          <button
            className="flex items-center text-white bg-amber-400 hover:bg-amber-500 px-3 py-1 rounded text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;



// import React from 'react'
// import { Link } from 'react-router-dom'

// const ProductCard = ({ product }) => {
//   return (
//     <Link to={`/product/${product.id}`} className="block">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//         <div className="relative pb-[75%]">
//           <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
//             Featured
//           </span>
//           <img
//             src={product.image}
//             alt={product.name}
//             className="absolute inset-0 w-full h-full object-contain p-2"
//           />
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-semibold mb-1 text-amber-800">
//             {product.name}
//           </h3>
//           <div className="flex items-center mb-2">
//             <div className="flex text-amber-500">★★★★★</div>
//             <span className="ml-1 text-xs text-gray-600">({product.rating}.0)</span>
//           </div>
//           <p className="text-gray-700 text-sm mb-3">
//             {product.description}
//           </p>
//           <div className="flex justify-between items-center">
//             <span className="text-lg font-bold text-amber-700">
//               ${product.price}
//             </span>
//             <button
//               className="flex items-center text-white bg-amber-400 hover:bg-amber-500 px-3 py-1 rounded text-sm"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default ProductCard
