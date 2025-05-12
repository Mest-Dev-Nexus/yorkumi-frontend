import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[url('assets/images/shea.png')] bg-cover bg-center">
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Login Form */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-700">Welcome Back to Yorkumi</h2>
          <p className="mt-2 text-sm text-gray-600">Login to continue your skincare journey</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-amber-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
