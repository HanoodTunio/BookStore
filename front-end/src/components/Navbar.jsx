import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply the theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 transition duration-200 z-50 ${
        sticky ? "shadow-md bg-base-200" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-4">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/course">Course</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-bold cursor-pointer">bookStore</a>
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex space-x-6">
          <a href="/" className="hover:text-gray-600">
            Home
          </a>
          <a href="/course" className="hover:text-gray-600">
            Course
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact
          </a>
          <a href="#" className="hover:text-gray-600">
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <label className="px-3 py-1 border flex items-center gap-2 rounded-md">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow px-2 py-1 border-none outline-none focus:ring-0"
                placeholder="Search"
              />
            </label>
          </div>

          {/* Theme Toggle */}
          <div className="p-2 rounded-lg">
            <button onClick={toggleTheme} className="swap swap-rotate">
              {theme === "light" ? (
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17Z" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 fill-current text-gray-700 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,6.05,6.05,0,0,1-3.37.73A6.15,6.15,0,0,1,9.06,5.49a6.59,6.59,0,0,1,.25-2A1,1,0,0,0,6,2.36,10.14,10.14,0,1,0,22,14.05A1,1,0,0,0,21.64,13Z" />
                </svg>
              )}
            </button>
          </div>

          <Link
            to="/Login"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-slate-800 transition duration-300"
          >
            <button className="flex items-center">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
