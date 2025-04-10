import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
// import logo from "../assets/images/yorkumi.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#280b05] text-[#e1e6eb] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              {/* <img src={logo} alt="Yorkumi" className="h-16 mb-4" /> */}
              <h2 className="text-2xl font-bold mb-2">Yorkumi Shea</h2>
            </div>
            <p className="text-[#e2e5e7] mb-4">
              Sourcing our ingredients from women, we bring shea butter, black
              soap, neem & other natural raw ingredients to life so you can be
              nurtured.
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/yorkumi_gh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 border border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@yorkumishea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 border border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok size={18} />
                </a>
                <a
                  href="https://www.facebook.com/yorkumigh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 border border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://wa.me/233269392148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 border border-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold pb-2 mb-4 border-b-2 border-amber-700">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-amber-700 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-amber-700 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-amber-700 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-amber-700 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-amber-700 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold pb-2 mb-4 border-b-2 border-amber-700">
              Working Hours
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00AM - 8:30PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>7:30AM - 8:30PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold pb-2 mb-4 border-b-2 border-amber-700">
              Contact Us
            </h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-amber-700" />
                <a
                  href="tel:+233269392148"
                  className="hover:text-amber-700 transition-colors"
                >
                  +233 269-392-148
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-amber-700" />
                <a
                  href="mailto:enquiries@yorkumishea.com"
                  className="hover:text-amber-700 transition-colors"
                >
                  enquiries@yorkumishea.com
                </a>
              </p>
              <p className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-amber-700 mt-1" />
                <span>
                  Sakumono Chapel Square/Spintex Road,
                  <br />
                  Accra – Ghana
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-amber-700 text-center">
          <p>© 2024 – Yorkumi Shea</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
