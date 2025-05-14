import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#fef9f5] text-[#280b05] min-h-screen py-12 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#280b05] mb-2">Contact Us</h1>
          <p className="text-lg text-[#5e3c2c]">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#6B4226] mb-4">Get in Touch</h2>
              <p className="text-[#5e3c2c]">
                Visit our store or contact us through phone, email, or WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-amber-700" />
                <a href="tel:+233269392148" className="hover:text-amber-700">
                  +233 269-392-148
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-amber-700" />
                <a
                  href="mailto:enquiries@yorkumishea.com"
                  className="hover:text-amber-700"
                >
                  enquiries@yorkumishea.com
                </a>
              </p>
              <p className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-amber-700 mt-1" />
                <span>
                  Sakumono Chapel Square/Spintex Road, <br /> Accra – Ghana
                </span>
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-semibold text-[#6B4226] mb-2">Working Hours</h3>
              <ul className="text-[#5e3c2c] space-y-1">
                <li>Monday - Friday: 9:00AM – 8:30PM</li>
                <li>Saturday: 7:30AM – 8:30PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-[#6B4226] font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-amber-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div>
              <label className="block text-[#6B4226] font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-amber-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>

            <div>
              <label className="block text-[#6B4226] font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-amber-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#6B4226] hover:bg-[#8B5E3C] text-white px-6 py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
