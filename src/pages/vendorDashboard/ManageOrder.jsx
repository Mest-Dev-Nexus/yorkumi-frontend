import React from 'react'

const ManageOrder = () => {
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">Admin Dashboard</span>
        </header>

        {/* Navigation Tabs */}
        <div className="overflow-x-auto">
          <nav className="flex space-x-6 border-b pb-4 text-gray-600 font-semibold min-w-max">
            <div className="border-b-4 border-teal-400 pb-1 text-gray-900">Orders</div>
            <div className="hover:text-gray-900 cursor-pointer">New Order</div>
            <div className="hover:text-gray-900 cursor-pointer">Products</div>
            <div className="hover:text-gray-900 cursor-pointer">Customers</div>
            <div className="hover:text-gray-900 cursor-pointer">Reports</div>
          </nav>
        </div>

        {/* Search and Filters */}
        <section className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <input type="text" placeholder="Search orders..." className="flex-grow border p-2 rounded-md" />
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md font-semibold">Search</button>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <div className="w-full sm:w-auto">
              <label className="block text-sm font-medium mb-1">Date</label>
              <select className="border p-2 rounded-md w-full">
                <option>All Dates</option>
                <option>Today</option>
                <option>This Week</option>
              </select>
            </div>
            <div className="w-full sm:w-auto">
              <label className="block text-sm font-medium mb-1">Status</label>
              <select className="border p-2 rounded-md w-full">
                <option>All</option>
                <option>Shipped</option>
                <option>Processing</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div className="w-full sm:w-auto">
              <label className="block text-sm font-medium mb-1">Product</label>
              <select className="border p-2 rounded-md w-full">
                <option>All Products</option>
                <option>Pure Shea Butter</option>
                <option>Pure Shea Butter</option>
              </select>
            </div>
          </div>
        </section>

        {/* Orders Table */}
        <section className="mt-10 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full border border-gray-200 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-50">
                  <td className="p-3">ORD001</td>
                  <td className="p-3">Pure Shea Butter</td>
                  <td className="p-3">John Smith</td>
                  <td className="p-3">2025-04-17</td>
                  <td className="p-3">2</td>
                  <td className="p-3">$499.98</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                      Shipped
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="bg-teal-500 text-white px-3 py-1 rounded-md text-sm">View</button>
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-50">
                  <td className="p-3">ORD002</td>
                  <td className="p-3">Pure Shea Butter</td>
                  <td className="p-3">Ama Owusu</td>
                  <td className="p-3">2025-04-20</td>
                  <td className="p-3">1</td>
                  <td className="p-3">$129.99</td>
                  <td className="p-3">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">
                      Processing
                    </span>
                  </td>
                  <td className="p-3">
                    <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400">
                      <option>Shipped</option>
                      <option>Processing</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ManageOrder