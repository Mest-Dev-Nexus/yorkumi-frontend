import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
    whatsappNumber: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Password validation
    const password = formData.password;
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
      setError("Password must contain at least one uppercase letter, one lowercase letter, and one number.");
      return;
    }
    // WhatsApp number validation (10-15 digits, digits only)
    const phone = formData.whatsappNumber.replace(/\D/g, "");
    if (phone.length < 10 || phone.length > 15) {
      setError("WhatsApp number must contain 10-15 digits only (no + or spaces).");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setSuccess("Form is valid! (API integration is currently disabled.)");
    setFormData({ name: "", username: "", email: "", password: "", confirmPassword: "", role: "user", whatsappNumber: "", image: null });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left: Logo and welcome */}
        <div className="hidden md:flex flex-col items-center justify-center bg-amber-50 p-8 w-1/2">
          <img src={logo} alt="Yorkumi Logo" className="w-28 h-28 mb-4 rounded-full shadow" />
          <h2 className="text-2xl font-bold text-amber-700 mb-2">Welcome to Yorkumi!</h2>
          <p className="text-gray-600 text-center">Join our community and enjoy the best natural products.</p>
        </div>
        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-700 mb-6">
            Create Your Account
          </h2>
          {error && <div className="mb-4 text-red-600 text-center bg-red-100 rounded p-2">{error}</div>}
          {success && <div className="mb-4 text-green-600 text-center bg-green-100 rounded p-2">{success}</div>}
          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Ama Kusi"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters, include uppercase, lowercase, and a number. Avoid special characters.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                required
              >
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                type="text"
                name="whatsappNumber"
                placeholder="e.g. 233XXXXXXXXX"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors mt-2"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-amber-700 hover:underline font-medium">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
