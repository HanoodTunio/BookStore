import React from "react";
import book from "../../public/book.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-32">
          <div className="space-y-14 ">
            <h1 className="text-4xl font-bold mt-2">
              Hello, Welcome here to learn something
              <span className="text-pink-500"> new everyday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda voluptates, consectetur distinctio consequatur explicabo
              dolorem facere repudiandae dignissimos hic magnam tempora labore
              facilis vitae eius dolorum obcaecati ipsum autem minus?
            </p>
            <label className="input validator">
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
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 order-1 ">
          <img
            src="/book.png"
            className="w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] lg:w-[600px] lg:h-[600px]"
            alt="Book"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
