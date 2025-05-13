import React from 'react'

const CreateProduct = () => {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
       
       
       
        <div className="bg-teal-600 p-6">
          <h1 className="text-2xl font-bold text-white">Create New Tour Experience</h1>
          <p className="text-teal-100 mt-2">Fill out the details below to list your tour on our platform</p>
        </div>

        <form className="p-4 md:p-6 space-y-8">
          {/* Basic Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Tour Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Tour Title*
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-teal-500 focus:border-teal-500"
                  placeholder="e.g. Experience the Beauty of Accra in a Day"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location*
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-teal-500 focus:border-teal-500"
                  placeholder="e.g. Accra, Ghana"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="rateCard" className="block text-sm font-medium text-gray-700">
                  Rate Card*
                </label>
                <input
                  type="text"
                  id="rateCard"
                  name="rateCard"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-teal-500 focus:border-teal-500"
                  placeholder="e.g. $80 per person, $150 for couples"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Tour Date*
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="availableSlots" className="block text-sm font-medium text-gray-700">
                  Available Slots*
                </label>
                <input
                  type="number"
                  id="availableSlots"
                  name="availableSlots"
                  min="1"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-teal-500 focus:border-teal-500"
                  placeholder="e.g. 10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description*
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-teal-500 focus:border-teal-500"
                placeholder="Describe your tour in detail, highlighting key attractions and activities"
              ></textarea>
            </div>
          </section>

          {/* Tour Images */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Tour Images</h2>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Upload Tour Image*</label>
              <p className="text-sm text-gray-500">
                High-quality images increase booking rates. Choose an attractive main image for your tour.
              </p>

              <div className="mt-2">
                <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <label htmlFor="image" className="w-full cursor-pointer">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">
                        Drag and drop image here, or <span className="text-teal-600 hover:underline">browse</span>
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input id="image" name="image" type="file" accept="image/*" required className="sr-only" />
                  </label>
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct