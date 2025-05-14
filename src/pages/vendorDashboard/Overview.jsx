import React from 'react'
import { Link } from 'react-router'

const Overview = () => {
  return (
    
    
    <div>
      <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">Export</button>
          <Link to={'/dashboard/create-product'}>
          <button className="px-4 py-2 bg-amber-600 text-white rounded-md text-sm font-medium hover:bg-amber-700">New Product</button>
          </Link>
         
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <div className="text-gray-400">
              
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">GHS5,00</div>
            <p className="text-xs text-gray-500">+20.1% from last month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">Total Products Added</h3>
            <div className="text-gray-400">
              
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">+8 new tours this month</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">Scheduled Departures</h3>
            <div className="text-gray-400">
               
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-gray-500">Next 30 days</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">Total Customers</h3>
            <div className="text-gray-400">
              
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-gray-500">+19% from last month</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
  {/* Upcoming Shipments */}
  <div className="bg-white rounded-lg shadow lg:col-span-2">
    <div className="p-6 border-b">
      <h3 className="font-medium">Upcoming Shipments</h3>
      <p className="text-sm text-gray-500">Products shipping in the next 7 days</p>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Yorkumi Shea</p>
              <p className="text-sm text-gray-500">250 units</p>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Ready
                </span>
                <span className="text-xs text-gray-500 ml-2">May 15, 2025</span>
              </div>
            </div>
          </div>
          <a href="#" className="px-3 py-1 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
            Details
          </a>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Yorkumi Shea</p>
              <p className="text-sm text-gray-500">180 units</p>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                  Ready
                </span>
                <span className="text-xs text-gray-500 ml-2">May 16, 2025</span>
              </div>
            </div>
          </div>
          <a href="#" className="px-3 py-1 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
            Details
          </a>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Yorkumi Shea</p>
              <p className="text-sm text-gray-500">120 units</p>
              <div className="flex items-center mt-1">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                  Production Pending
                </span>
                <span className="text-xs text-gray-500 ml-2">May 18, 2025</span>
              </div>
            </div>
          </div>
          <a href="#" className="px-3 py-1 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50">
            Details
          </a>
        </div>

        <div className="text-center pt-2">
          <a href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
            View all scheduled shipments
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Popular Products */}
  <div className="bg-white rounded-lg shadow">
    <div className="p-6 border-b">
      <h3 className="font-medium">Best Selling Products</h3>
      <p className="text-sm text-gray-500">Based on sales this month</p>
    </div>
    <div className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Yorkumi Shea</p>
              <p className="text-sm text-gray-500">4.9 ★ (328 reviews)</p>
              <p className="text-xs text-gray-500">589 units sold this month</p>
            </div>
          </div>
          <span className="font-medium">GHS129.99</span>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Yorkumi Shea</p>
              <p className="text-sm text-gray-500">4.8 ★ (246 reviews)</p>
              <p className="text-xs text-gray-500">426 units sold this month</p>
            </div>
          </div>
          <span className="font-medium">GHS199.50</span>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Yorkumi Shea</p>
              <p className="text-sm text-gray-500">4.7 ★ (187 reviews)</p>
              <p className="text-xs text-gray-500">314 units sold this month</p>
            </div>
          </div>
          <span className="font-medium">GHS899.00</span>
        </div>

        <div className="text-center pt-2">
          <a href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
            View all products
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      

      {/* Additional Stats Row */}
  
    </div>
    </div>
  )
}

export default Overview