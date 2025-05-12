// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ChevronRight,
//   Star,
//   ShoppingBag,
//   Filter,
//   ArrowUpDown,
//   X,
// } from "lucide-react";
// // import useCartStore from "../store/useCartStore";

import ProductCard from "../components/ProductCard";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("featured");
//   const [showFilters, setShowFilters] = useState(false);
//   // const addToCart = useCartStore((state) => state.addToCart);
//   // const imageURL = "https://res.cloudinary.com/davld2axm/image/upload/";

//   // Simulated product data
//   useEffect(() => {
//     // This would typically be an API call
//     const fetchProducts = () => {
//       const productData = [
//         {
//           id: 1,
//           name: "Pure Shea Butter",
//           price: 19.99,
//           description: "Unrefined, raw shea butter for total body nourishment",
//           image: "/images/shealotion.jpg",
//           category: "body",
//           rating: 5,
//           featured: true,
//         },
//         // {
//         //   id: 2,
//         //   name: "African Black Soap",
//         //   price: 12.99,
//         //   description: "Traditional cleansing bar for face and body",
//         //   image: "/api/placeholder/300/300",
//         //   category: "cleansers",
//         //   rating: 4.8,
//         //   featured: true,
//         // },
//         // {
//         //   id: 3,
//         //   name: "Neem Oil Blend",
//         //   price: 24.99,
//         //   description: "Rejuvenating oil for hair and scalp treatments",
//         //   image: "/api/placeholder/300/300",
//         //   category: "hair",
//         //   rating: 4.7,
//         //   featured: true,
//         // },
//         // {
//         //   id: 4,
//         //   name: "Shea & Cocoa Butter Lotion",
//         //   price: 16.99,
//         //   description: "Rich moisturizing lotion for dry skin",
//         //   image: "/api/placeholder/300/300",
//         //   category: "body",
//         //   rating: 4.9,
//         // },
//         // {
//         //   id: 5,
//         //   name: "Hibiscus Hair Oil",
//         //   price: 22.99,
//         //   description: "Strengthening oil blend for hair growth",
//         //   image: "/api/placeholder/300/300",
//         //   category: "hair",
//         //   rating: 4.5,
//         // },
//         // {
//         //   id: 6,
//         //   name: "Tea Tree Face Scrub",
//         //   price: 14.99,
//         //   description: "Gentle exfoliating scrub for clear skin",
//         //   image: "/api/placeholder/300/300",
//         //   category: "face",
//         //   rating: 4.6,
//         // },
//         // {
//         //   id: 7,
//         //   name: "Moringa Body Butter",
//         //   price: 18.99,
//         //   description: "Extra rich body butter for extreme moisture",
//         //   image: "/api/placeholder/300/300",
//         //   category: "body",
//         //   rating: 4.8,
//         // },
//         // {
//         //   id: 8,
//         //   name: "Turmeric Face Mask",
//         //   price: 13.99,
//         //   description: "Brightening face mask with turmeric and honey",
//         //   image: "/api/placeholder/300/300",
//         //   category: "face",
//         //   rating: 4.7,
//         // },
//         // {
//         //   id: 9,
//         //   name: "Aloe Vera Gel",
//         //   price: 9.99,
//         //   description: "Pure aloe vera gel for skin soothing",
//         //   image: "/api/placeholder/300/300",
//         //   category: "face",
//         //   rating: 4.9,
//         // },
//       ];

//       // Extract unique categories
//       const uniqueCategories = [
//         ...new Set(productData.map((product) => product.category)),
//       ];
//       setCategories(uniqueCategories);

//       setProducts(productData);
//       setFilteredProducts(productData);
//       setLoading(false);
//     };

//     fetchProducts();
//   }, []);

//   // Filter and sort products
//   useEffect(() => {
//     let result = [...products];

//     // Apply category filter
//     if (selectedCategory !== "all") {
//       result = result.filter(
//         (product) => product.category === selectedCategory
//       );
//     }

//     // Apply sorting
//     switch (sortBy) {
//       case "price-low":
//         result.sort((a, b) => a.price - b.price);
//         break;
//       case "price-high":
//         result.sort((a, b) => b.price - a.price);
//         break;
//       case "rating":
//         result.sort((a, b) => b.rating - a.rating);
//         break;
//       case "featured":
//       default:
//         // Featured products first, then by rating
//         result.sort((a, b) => {
//           if (a.featured && !b.featured) return -1;
//           if (!a.featured && b.featured) return 1;
//           return b.rating - a.rating;
//         });
//     }

//     setFilteredProducts(result);
//   }, [products, selectedCategory, sortBy]);

//   // Toggle mobile filters
//   const toggleFilters = () => {
//     setShowFilters(!showFilters);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-amber-800 font-semibold text-lg">
//           Loading products...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-amber-50 min-h-screen pt-20 pb-12">
//       {/* Page Header */}
//       <div className="bg-amber-100 py-8 md:py-12 shadow-sm">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl md:text-4xl font-bold text-amber-800 text-center">
//             Our Products
//           </h1>
//           <p className="text-center text-gray-700 mt-2 max-w-2xl mx-auto">
//             Discover our selection of handcrafted natural products, sourced
//             directly from women cooperatives in West Africa.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Mobile Filter Toggle */}
//         <div className="md:hidden mb-4">
//           <button
//             onClick={toggleFilters}
//             className="w-full py-2 px-4 bg-amber-600 text-white rounded-lg flex items-center justify-center"
//           >
//             <Filter className="h-4 w-4 mr-2" />
//             {showFilters ? "Hide Filters" : "Show Filters & Sorting"}
//           </button>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Filters & Sorting - Mobile Dropdown */}
//           {showFilters && (
//             <div className="bg-white p-4 rounded-lg shadow-md md:hidden">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-semibold text-amber-800">
//                   Filters & Sorting
//                 </h3>
//                 <button onClick={toggleFilters}>
//                   <X className="h-5 w-5 text-gray-500" />
//                 </button>
//               </div>

//               <div className="mb-4">
//                 <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
//                 <div className="space-y-2">
//                   <button
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       selectedCategory === "all"
//                         ? "bg-amber-600 text-white"
//                         : "bg-amber-100 text-amber-800"
//                     }`}
//                     onClick={() => setSelectedCategory("all")}
//                   >
//                     All Products
//                   </button>
//                   {categories.map((category) => (
//                     <button
//                       key={category}
//                       className={`px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
//                         selectedCategory === category
//                           ? "bg-amber-600 text-white"
//                           : "bg-amber-100 text-amber-800"
//                       }`}
//                       onClick={() => setSelectedCategory(category)}
//                     >
//                       {category.charAt(0).toUpperCase() + category.slice(1)}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h4 className="font-medium text-gray-700 mb-2">Sort By</h4>
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="rating">Rating</option>
//                 </select>
//               </div>
//             </div>
//           )}

//           {/* Sidebar - Desktop */}
//           <div className="hidden md:block w-64 flex-shrink-0">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
//               <h3 className="font-semibold text-amber-800 text-lg mb-4">
//                 Filters
//               </h3>

//               <div className="mb-6">
//                 <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
//                 <div className="space-y-2">
//                   <button
//                     className={`block w-full text-left px-3 py-2 rounded ${
//                       selectedCategory === "all"
//                         ? "bg-amber-600 text-white"
//                         : "hover:bg-amber-100 text-amber-800"
//                     }`}
//                     onClick={() => setSelectedCategory("all")}
//                   >
//                     All Products
//                   </button>
//                   {categories.map((category) => (
//                     <button
//                       key={category}
//                       className={`block w-full text-left px-3 py-2 rounded ${
//                         selectedCategory === category
//                           ? "bg-amber-600 text-white"
//                           : "hover:bg-amber-100 text-amber-800"
//                       }`}
//                       onClick={() => setSelectedCategory(category)}
//                     >
//                       {category.charAt(0).toUpperCase() + category.slice(1)}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
//                 <div className="space-y-2">
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                     className="w-full p-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
//                   >
//                     <option value="featured">Featured</option>
//                     <option value="price-low">Price: Low to High</option>
//                     <option value="price-high">Price: High to Low</option>
//                     <option value="rating">Rating</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="flex-grow">
//             {/* Sort Dropdown - Desktop */}
//             <div className="hidden md:flex justify-between items-center mb-6">
//               <div className="text-gray-700">
//                 Showing {filteredProducts.length}{" "}
//                 {filteredProducts.length === 1 ? "product" : "products"}
//               </div>
//               <div className="flex items-center">
//                 <ArrowUpDown className="h-4 w-4 mr-2 text-amber-800" />
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="p-2 border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                   <option value="rating">Rating</option>
//                 </select>
//               </div>
//             </div>

//             {/* Products */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//                 >
//                   <div className="relative">
//                     {product.featured && (
//                       <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
//                         Featured
//                       </span>
//                     )}
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-48 object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold mb-1 text-amber-800">
//                       {product.name}
//                     </h3>
//                     <div className="flex items-center mb-2">
//                       <div className="flex">
//                         {[...Array(Math.floor(product.rating))].map((_, i) => (
//                           <Star
//                             key={i}
//                             className="h-4 w-4 fill-amber-500 text-amber-500"
//                           />
//                         ))}
//                         {product.rating % 1 !== 0 && (
//                           <Star className="h-4 w-4 fill-amber-500 text-amber-500 opacity-50" />
//                         )}
//                       </div>
//                       <span className="ml-1 text-xs text-gray-600">
//                         ({product.rating.toFixed(1)})
//                       </span>
//                     </div>
//                     <p className="text-gray-700 text-sm mb-3">
//                       {product.description}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <span className="text-lg font-bold text-amber-700">
//                         ${product.price.toFixed(2)}
//                       </span>
//                       {/* <button className="flex items-center text-white bg-amber-600 px-3 py-1 rounded hover:bg-amber-700 transition-colors text-sm">
//                         <ShoppingBag className="h-4 w-4 mr-1" /> Add
//                       </button> */}
//                       <button
//                         onClick={() => addToCart(product)}
//                         className="flex items-center text-white bg-amber-600 px-3 py-1 rounded hover:bg-amber-700 transition-colors text-sm"
//                       >
//                         <ShoppingBag className="h-4 w-4 mr-1" /> Add
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Empty State */}
//             {filteredProducts.length === 0 && (
//               <div className="text-center py-12">
//                 <p className="text-gray-700 text-lg mb-4">
//                   No products found matching your criteria.
//                 </p>
//                 <button
//                   onClick={() => {
//                     setSelectedCategory("all");
//                     setSortBy("featured");
//                   }}
//                   className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
//                 >
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;



const Products = () => {
  return (
    <div>
      <ProductCard/>
    </div>
//     <div className="bg-amber-50 min-h-screen pt-20 pb-12">
//       {/* Page Header */}
//       <div className="bg-amber-100 py-8 md:py-12 shadow-sm">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl md:text-4xl font-bold text-amber-800 text-center">
//             Our Products
//           </h1>
//           <p className="text-center text-gray-700 mt-2 max-w-2xl mx-auto">
//             Discover our selection of handcrafted natural products, sourced
//             directly from women cooperatives in West Africa.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Filters Section - Static */}
//         <div className="hidden md:block w-64 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="font-semibold text-amber-800 text-lg mb-4">
//               Filters
//             </h3>

//             <div className="mb-6">
//               <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
//               <div className="space-y-2">
//                 <button className="block w-full text-left px-3 py-2 rounded bg-amber-600 text-white">
//                   All Products
//                 </button>
//                 <button className="block w-full text-left px-3 py-2 rounded hover:bg-amber-100 text-amber-800">
//                   Body
//                 </button>
//                 <button className="block w-full text-left px-3 py-2 rounded hover:bg-amber-100 text-amber-800">
//                   Hair
//                 </button>
//                 <button className="block w-full text-left px-3 py-2 rounded hover:bg-amber-100 text-amber-800">
//                   Face
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
//               <select
//                 disabled
//                 className="w-full p-2 border border-amber-200 rounded bg-gray-100 text-gray-500"
//               >
//                 <option>Featured</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Rating</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Product Card Example */}
//           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//             <div className="relative">
//               <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
//                 Featured
//               </span>
//               <img
//                 src="/images/shealotion.jpg"
//                 alt="Pure Shea Butter"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg font-semibold mb-1 text-amber-800">
//                 Pure Shea Butter
//               </h3>
//               <div className="flex items-center mb-2">
//                 <div className="flex text-amber-500">
//                   ★★★★★
//                 </div>
//                 <span className="ml-1 text-xs text-gray-600">(5.0)</span>
//               </div>
//               <p className="text-gray-700 text-sm mb-3">
//                 Unrefined, raw shea butter for total body nourishment
//               </p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold text-amber-700">
//                   $19.99
//                 </span>
//                 <button
//                   disabled
//                   className="flex items-center text-white bg-amber-400 px-3 py-1 rounded text-sm cursor-not-allowed"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Add more static product cards as needed */}
//         </div>
//       </div>
//     </div>
  );
};

export default Products;

