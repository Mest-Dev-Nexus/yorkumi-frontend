import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, ChevronDown, User, Trash2, Plus, Minus } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Sample cart items - in a real app, this would come from your cart state or context
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pure Shea Butter",
      price: 19.99,
      quantity: 1,
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "African Black Soap",
      price: 12.99,
      quantity: 2,
      image: "/api/placeholder/80/80"
    }
  ]);

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

  // Close cart modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  // Handle quantity changes
  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate total items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate cart subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
                isScrolled ? "text-gray-800" : "text-black"
              }`}
            >
              Home
            </Link>
            
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center hover:text-amber-700 transition-colors ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              >
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isShopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                  >
                    Shea Butter
                  </Link>
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                  >
                    Black Soap
                  </Link>
                  <Link
                    to="/products"
                    className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                  >
                    Neem Products
                  </Link>
                  <Link
                    to="/products"
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
                isScrolled ? "text-gray-800" : "text-black"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-black"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/footer"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-black"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Cart and Auth Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon with Modal Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`relative hover:text-amber-700 transition-colors ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-amber-600 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </button>

              {/* Cart Modal */}
              {isCartOpen && (
                <div 
                  ref={cartRef}
                  className="absolute top-full right-0 mt-4 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50"
                >
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg text-gray-800">Your Cart</h3>
                      <button 
                        onClick={() => setIsCartOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="max-h-96 overflow-y-auto p-4">
                    {cartItems.length > 0 ? (
                      <>
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center py-4 border-b border-gray-100">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="ml-4 flex-grow">
                              <h4 className="text-gray-800 font-medium">{item.name}</h4>
                              <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center border border-gray-300 rounded">
                                  <button 
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="px-2 py-1 text-gray-600 hover:text-amber-700"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </button>
                                  <span className="px-2 text-gray-800">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="px-2 py-1 text-gray-600 hover:text-amber-700"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </button>
                                </div>
                                <span className="font-semibold text-amber-700">${(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            </div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="ml-2 text-gray-400 hover:text-red-500"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="py-8 text-center">
                        <p className="text-gray-500">Your cart is empty</p>
                      </div>
                    )}
                  </div>

                  {cartItems.length > 0 && (
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold text-lg text-amber-800">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          to="/cart"
                          className="flex-1 px-4 py-2 bg-white border border-amber-700 text-amber-700 text-center rounded hover:bg-amber-50 transition-colors"
                          onClick={() => setIsCartOpen(false)}
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="flex-1 px-4 py-2 bg-amber-700 text-white text-center rounded hover:bg-amber-800 transition-colors"
                          onClick={() => setIsCartOpen(false)}
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link
              to="/login"
              className={`hover:text-amber-700 transition-colors ${
                isScrolled ? "text-gray-800" : "text-black"
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