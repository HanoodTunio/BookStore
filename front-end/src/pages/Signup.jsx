import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create an Account
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
          Sign up to get started
        </p>

        {/* Full Name Input */}
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 mt-1 border 
                      border-gray-300 dark:border-gray-600 
                      rounded-md outline-none focus:ring-2 
                      focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 
                      text-black dark:text-white"
          />
        </div>

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

        {/* Confirm Password Input */}
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-3 py-2 mt-1 border 
                      border-gray-300 dark:border-gray-600 
                      rounded-md outline-none focus:ring-2 
                      focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 
                      text-black dark:text-white"
          />
        </div>

        {/* Sign Up Button */}
        <div className="mt-6">
          <Link to="/">
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md 
                             hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </Link>
        </div>

        {/* Already have an account? Login */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/Login">
            <a className="text-blue-600 dark:text-blue-400 hover:underline">
              Login
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
