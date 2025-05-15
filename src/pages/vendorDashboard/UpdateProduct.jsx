import React from 'react'

const UpdateProduct = () => {
  return (
<div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-blue-600 p-6">
      <h1 className="text-2xl font-bold text-white">Update Product</h1>
      
      <p className="text-blue-100 mt-2">Update the details of your product below</p>
    </div>

    <form className="p-6 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Product Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue=""
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input 
              type="text" 
              id="category" 
              name="category"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
            <input 
              type="text" 
              id="price" 
              name="price"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue=""
            />
          </div>

          <div>
            <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">Stock Quantity</label>
            <input 
              type="number" 
              id="stockQuantity" 
              name="stockQuantity"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700">Release Date</label>
            <input 
              type="date" 
              id="releaseDate" 
              name="releaseDate"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue=""
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image (Optional)</label>
            <input 
              type="file" 
              id="image" 
              name="image"
              accept="image/*"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue=""
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            id="description" 
            name="description"
            rows="4"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
            defaultValue=""
          ></textarea>
        </div>
      </section>

      <div className="text-center">
        <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Update Product
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default UpdateProduct