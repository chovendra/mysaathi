import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: "/images/boy.jpg",
      title: "Help The Poor To Build A Better World",
      subtitle:
        "Your donation can help educate thousands of people and make the world more beautiful.",
    },
  ];

  const [currentSlide] = useState(0);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image with Blue Gradient */}
      <div
  className="absolute w-full h-full bg-cover bg-center"
  style={{
    backgroundImage: `url(${slides[currentSlide].image})`,
    transform: "scaleX(-1)",
    backgroundPosition: "center 10%",  
  }}
>

        <div className="absolute w-full h-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-45"></div>
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-start h-full px-5 lg:px-10">
        {/* Left Text Section */}
        <div className="lg:w-1/2 w-full text-left mb-10 lg:mb-0 lg:pl-5">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg lg:text-2xl mb-8 text-white">
            {slides[currentSlide].subtitle}
          </p>
          <Link to="/donate">
            {/* <button className="bg-blue-600 border border-white px-6 py-3 rounded hover:bg-blue-700 transition text-lg text-white">
              Donate Now
            </button> */}
          </Link>
        </div>

        {/* Extra Gap */}
        <div className="hidden lg:block w-32"></div>

        {/* Right Register Form */}
        <div className="lg:w-[420px] w-full bg-white rounded-xl p-6 text-gray-800 mt-5 lg:mt-20">
          <h2 className="text-xl font-bold text-center mb-4">
            Register, It’s FREE!
          </h2>

          {/* Full Name */}
          <label className="block mb-1 font-medium text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          {/* Phone Number */}
          <label className="block mb-1 font-medium text-sm">Phone Number</label>
          <div className="flex mb-3 gap-2">
            <input
              type="text"
              value="+91"
              disabled
              className="w-14 p-2 border border-gray-300 rounded bg-gray-100 text-center text-sm"
            />
            <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter your number"
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, '');
            }}
          />

          </div>

          {/* Email */}
          <label className="block mb-1 font-medium text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          {/* Password */}
          <label className="block mb-1 font-medium text-sm">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          {/* Terms and Conditions */}
          <div className="flex items-start mb-3">
            <input type="checkbox" id="terms" className="mt-1 mr-2" />
            <label htmlFor="terms" className="text-xs leading-tight">
              By clicking you agree to our{" "}
              <span className="text-blue-600 font-medium">
                terms and conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 font-medium">
                privacy policies
              </span>
              .
            </label>
          </div>

          {/* Register Button */}
          <button className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-600 transition mb-2 text-sm">
            Register
          </button>

          {/* Already have an account */}
          <p className="text-center text-xs">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
