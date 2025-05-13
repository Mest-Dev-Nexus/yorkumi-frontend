import React from "react";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const Products = () => {
  return (

    <div>
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
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Section */}
            <ProductFilter />

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4,5,6].map((card, index) => {
                  return <ProductCard key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Products;
