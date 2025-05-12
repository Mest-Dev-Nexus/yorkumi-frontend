const ProductCard = () => {
    return (
      <div className="bg-amber-50 min-h-screen pt-20 pb-12">
        {/* Page Header */}
        <div className="bg-amber-100 py-8 md:py-12 shadow-sm">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-amber-800 text-center">
              Our Products
            </h1>
            <p className="text-center text-gray-700 mt-2 max-w-2xl mx-auto">
              Discover our selection of handcrafted natural products, sourced
              directly from women cooperatives in West Africa.
            </p>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-8">
          Filters Section - Static
          <div className="hidden md:block w-64 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
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
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card Example */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                </span>
                <img
                  src="/images/shealotion.jpg"
                  alt="Pure Shea Butter"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-amber-800">
                  Pure Shea Butter
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-500">
                    ★★★★★
                  </div>
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
                    disabled
                    className="flex items-center text-white bg-amber-400 px-3 py-1 rounded text-sm cursor-not-allowed"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
  
            {/* Add more static product cards as needed */}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  