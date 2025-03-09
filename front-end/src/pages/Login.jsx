import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Welcome Back!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
          Sign in to continue
        </p>

        {/* Email Input */}
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 mt-1 border 
                      border-gray-300 dark:border-gray-600 
                      rounded-md outline-none focus:ring-2 
                      focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 
                      text-black dark:text-white"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 mt-1 border 
                      border-gray-300 dark:border-gray-600 
                      rounded-md outline-none focus:ring-2 
                      focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 
                      text-black dark:text-white"
          />
        </div>

        {/* Sign In Button */}
        <div className="mt-6">
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md 
                             hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </div>

        {/* Don't have an account? Register */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
