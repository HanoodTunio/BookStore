import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react"; // Import cross icon from lucide-react
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full max-w-md p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <form onSubmit={handleSubmit(onSubmit)} action="">
          {/* Close Button (Top-Right) */}
          <button
            onClick={() => navigate("/")} // Redirect to Home
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500"
          >
            <X size={24} />
          </button>

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
              className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 
                      rounded-md outline-none focus:ring-2 focus:ring-blue-500 
                      bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="text-red-500">The field is required</div>
            )}
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 dark:border-gray-600 
                      rounded-md outline-none focus:ring-2 focus:ring-blue-500 
                      bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="text-red-500">The field is required</div>
            )}
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

          {/* Register Link */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
