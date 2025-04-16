import React, { useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { ChevronRight, Star, Award, Heart, Gift, ShoppingBag, Instagram, Facebook, Twitter, Menu, X, ChevronLeft } from "lucide-react";
import feet from "../assets/images/feet.png";

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentBestSeller, setCurrentBestSeller] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const testimonials = [
    {
      name: "Sarah J.",
      quote: "My skin has never felt so nourished. The shea butter body cream has completely transformed my dry skin routine.",
      rating: 5,
    },
    {
      name: "Michael T.",
      quote: "After trying countless products, I finally found something that works for my sensitive skin. Thank you!",
      rating: 5,
    },
    {
      name: "Aisha M.",
      quote: "Not only does the black soap clear my skin, but I feel good supporting women producers in West Africa.",
      rating: 5,
    },
  ];

  const bestSellers = [
    {
      name: "Pure Shea Butter",
      price: "",
      description: "Unrefined, raw shea butter for total body nourishment",
      image: "/api/placeholder/300/300",
    },
    {
      name: "African Black Soap",
      price: "",
      description: "Traditional cleansing bar for face and body",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Neem Oil Blend",
      price: "",
      description: "Rejuvenating oil for hair and scalp treatments",
      image: "/api/placeholder/300/300",
    },
  ];

  // Handle Best Sellers carousel
  const nextBestSeller = () => {
    setCurrentBestSeller((prev) => (prev === bestSellers.length - 1 ? 0 : prev + 1));
  };

  const prevBestSeller = () => {
    setCurrentBestSeller((prev) => (prev === 0 ? bestSellers.length - 1 : prev - 1));
  };

  // Handle Testimonials carousel
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-[url(assets/images/yorkumi.jpg)] bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center px-4 md:px-12 py-10 w-full pt-24 md:pt-16">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-6 md:p-10 max-w-3xl w-full text-left text-gray-900">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            100% Natural Extracts.
            <br />
            Be{" "}
            <span className="text-amber-700">
              <Typewriter
                words={["clean.", "aromatic.", "desirable."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Sourcing our ingredients from women, we bring shea butter, black
            soap, neem & other natural raw ingredients to life so you can be
            nurtured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors text-center"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-white border-2 border-white text-amber-800 font-semibold rounded-lg hover:bg-amber-100 transition-colors flex items-center justify-center"
            >
              Learn More <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Best Sellers Section - Now positioned right after Hero */}
      <div className="py-12 md:py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-4">Our Best Sellers</h2>
          <p className="text-center text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
            Discover our most loved products that have transformed thousands of skincare routines.
          </p>
          
          {/* Best Sellers Carousel */}
          <div className="relative mx-auto max-w-md sm:max-w-lg md:max-w-3xl">
            <div className="overflow-hidden rounded-lg shadow-md bg-white">
              <div className="relative">
                <img 
                  src={bestSellers[currentBestSeller].image} 
                  alt={bestSellers[currentBestSeller].name} 
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-amber-800">
                  {bestSellers[currentBestSeller].name}
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {bestSellers[currentBestSeller].description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg font-bold text-amber-600">
                    {bestSellers[currentBestSeller].price}
                  </span>
                  <button className="flex items-center text-white bg-amber-600 px-3 py-2 md:px-4 md:py-2 rounded hover:bg-amber-700 transition-colors text-sm md:text-base">
                    <ShoppingBag className="h-4 w-4 mr-1 md:mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevBestSeller} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-amber-800"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button 
              onClick={nextBestSeller} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-amber-800"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {bestSellers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBestSeller(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    index === currentBestSeller ? 'bg-amber-700' : 'bg-amber-300'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link
              to="/products"
              className="px-5 py-2 md:px-6 md:py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors inline-flex items-center text-sm md:text-base"
            >
              View All Products <ChevronRight className="ml-1 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src={feet}
                alt="lotion" 
                className="rounded-lg shadow-xl w-4/5 md:w-3/4"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 lg:pl-12">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">Our Story</h2>
              <p className="mb-4 text-gray-700">
                We partner directly with women's cooperatives in West Africa to source the 
                highest quality shea butter and natural ingredients while ensuring fair trade 
                practices and sustainable harvesting methods.
              </p>
              <p className="mb-6 text-gray-700">
                Every purchase supports these communities and traditional knowledge that has 
                been passed down for generations. What began as a small mission to connect 
                artisans with global markets has grown into a community of care and beauty.
              </p>
              <Link
                to="/about"
                className="flex items-center text-amber-700 font-medium hover:text-amber-900 transition-colors"
              >
                Read our full story <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">Why Choose Our Shea Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center bg-amber-100 p-4 rounded-full mb-4">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-amber-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-amber-800">100% Organic</h3>
              <p className="text-gray-700 text-sm md:text-base">
                All ingredients are naturally derived and ethically sourced, free from harmful 
                chemicals and synthetic additives.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center bg-amber-100 p-4 rounded-full mb-4">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-amber-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-amber-800">Women Empowerment</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Supporting women-led cooperatives and providing fair wages, creating 
                sustainable livelihoods for families.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md text-center sm:col-span-2 md:col-span-1">
              <div className="inline-flex items-center justify-center bg-amber-100 p-4 rounded-full mb-4">
                <Gift className="h-6 w-6 md:h-8 md:w-8 text-amber-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-amber-800">Traditional Wisdom</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Formulas based on generations of skincare knowledge and time-tested 
                natural remedies for various skin concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section with Carousel */}
      <div className="py-12 md:py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">What Our Customers Say</h2>
          
          {/* Testimonials Carousel */}
          <div className="relative mx-auto max-w-md sm:max-w-lg md:max-w-xl">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex mb-3 md:mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 md:mb-8 italic text-sm md:text-base">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="font-semibold text-amber-800 text-sm md:text-base">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevTestimonial} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-amber-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-amber-800"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    index === currentTestimonial ? 'bg-amber-700' : 'bg-amber-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-12 md:py-16 bg-white text-amber-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Join Our Community</h2>
          <p className="mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
            Subscribe to our newsletter for exclusive offers, skincare tips, and updates on new products.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 md:gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 md:py-3 rounded-lg flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base border border-amber-200"
            />
            <button className="px-6 py-2 md:py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors whitespace-nowrap text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Landing;
