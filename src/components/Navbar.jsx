
import React from "react";
import { BookCheck, Globe, Headset, House, LogIn, Phone, PhoneCallIcon, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between px-10 w-full h-20 fixed top-0 left-0 bg-transparent z-10">
      <div className="flex gap-10 items-center">
        <p className="font-bold text-white">Logo</p>
      </div>

      <span className="flex gap-5 items-center transition-duration-200 text-1xl">
        <House className="w-5 h-5 text-white" />
        <a href="/" className="block text-white hover:text-amber-300">
          Home
        </a>

        <a href="/about" className="block text-white hover:text-amber-300">
          About Us
        </a>
        <Globe className="w-5 h-5 text-white" />
        <a href="/browse" className="block text-white hover:text-amber-300">
          Browse More
        </a>
        <BookCheck className="w-5 h-5 text-white"/>
        <a href="/blog" className="block text-white hover:text-amber-300">
          Blog
        </a>
        <Headset className="w-5 h-5 text-white"/>
        <a href="/contact" className="block text-white hover:text-amber-300">
          Contact
        </a>
        <ShoppingCart className="w-5 h-5 text-white" />
        <a href="/shop" className="block text-white hover:text-amber-300">
          Shopping
        </a>
        <LogIn className="w-5 h-5 text-white" />
        <a href="/signin" className="block text-white hover:text-amber-300">
          Sign In
        </a>
      </span>
    </nav>
  );
};

export default NavBar;
