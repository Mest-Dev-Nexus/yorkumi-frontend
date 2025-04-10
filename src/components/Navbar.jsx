
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/placeholder-logo.png" 
              alt="Yorkumi Shea"
              className="h-10 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50'%3E%3Crect width='100%25' height='100%25' fill='%23f0d9b5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%23704214'%3EYorkumi%3C/text%3E%3C/svg%3E";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Home
            </Link>
            
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center hover:text-amber-700 transition-colors ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              >
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isShopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link
                    to="/shop/shea-butter"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                  >
                    Shea Butter
                  </Link>
                  <Link
                    to="/shop/black-soap"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                  >
                    Black Soap
                  </Link>
                  <Link
                    to="/shop/neem"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                  >
                    Neem Products
                  </Link>
                  <Link
                    to="/shop"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                  >
                    All Products
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/footer"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Cart and Auth Icons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className={`relative hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link
              to="/login"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <User className="h-6 w-6" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-md shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                className="text-left text-gray-800 hover:text-amber-700 transition-colors flex items-center justify-between"
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              >
                Shop <ChevronDown className="h-4 w-4" />
              </button>
              {isShopDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2">
                  <Link
                    to="/shop/shea-butter"
                    className="text-gray-800 hover:text-amber-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shea Butter
                  </Link>
                  <Link
                    to="/shop/black-soap"
                    className="text-gray-800 hover:text-amber-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Black Soap
                  </Link>
                  <Link
                    to="/shop/neem"
                    className="text-gray-800 hover:text-amber-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Neem Products
                  </Link>
                  <Link
                    to="/shop"
                    className="text-gray-800 hover:text-amber-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Products
                  </Link>
                </div>
              )}
              <Link
                to="/about"
                className="text-gray-800 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="text-gray-800 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="text-gray-800 hover:text-amber-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;