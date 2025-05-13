import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on initial load and when resized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    // Check on initial load
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Content */}
      <div className={`flex-1 flex flex-col gap-y-4 w-full p-3 md:p-6 transition-all duration-300 ${
        isSidebarOpen ? "lg:ml-64" : "ml-0"
      } overflow-auto`}>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout