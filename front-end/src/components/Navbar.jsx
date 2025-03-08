import React from "react";

function Navbar() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left Side */}
          <div className="flex items-center space-x-4">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Course</a>
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
            <a href="#" className="hover:text-gray-600">
              Home
            </a>
            <a href="#" className="hover:text-gray-600">
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
            {/* Search Bar */}
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
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />
                <svg
                  className="swap-off h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,6a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM16.36,17A1,1,0,0,0,17,16.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z" />
                </svg>
                <svg
                  className="swap-on h-6 w-6 fill-current text-gray-700 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,6.05,6.05,0,0,1-3.37.73A6.15,6.15,0,0,1,9.06,5.49a6.59,6.59,0,0,1,.25-2A1,1,0,0,0,6,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A6.14,6.14,0,0,1,7.06,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A6.11,6.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>

            {/* Sign In Button (Fixed) */}
            <div className="flex items-center">
              <a
                href="#"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-slate-800 transition duration-300"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
