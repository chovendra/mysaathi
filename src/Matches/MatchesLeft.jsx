import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const MatchesLeft = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterIconClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleApplyClick = () => {
    alert("Filter applied!");
    setIsFilterOpen(false);
  };

  return (
    <>
      {/* Topbar for mobile */}
      <div className="flex justify-between items-center p-4 lg:hidden mt-10 bg-white ">
        <h1 className="font-bold text-xl">Filter</h1>
        <i
          className="ri-equalizer-2-line text-2xl cursor-pointer hover:text-indigo-600"
          onClick={handleFilterIconClick}
        ></i>
      </div>

      {/* Filter Section */}
      <div
        className={`fixed top-0 left-0 h-full w-full shadow-lg p-5 bg-white lg:bg-transparent transform transition-transform duration-300 ease-in-out z-50
        ${isFilterOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:relative lg:translate-x-0 lg:w-[30%] lg:h-auto lg:shadow-none`}
      >
        {/* Close icon for mobile */}
        <div className="w-full flex justify-between lg:hidden">
          <h1 className="font-bold text-xl">Filter</h1>
          <i
            className="ri-close-line text-3xl cursor-pointer hover:text-indigo-900"
            onClick={handleFilterIconClick}
          ></i>
        </div>

        {/* Filter Options */}
        <div className="space-y-5 mt-5">
          <div>
            <label className="font-semibold">Age Range</label>
            <div className="flex flex-col sm:flex-row gap-1 mt-1">
              <select className="border px-2 py-2 rounded w-full sm:w-auto">
                <option>18</option>
                <option>19</option>
              </select>
              <select className="border px-2 py-2 rounded w-full sm:w-auto">
                <option>22</option>
                <option>23</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="font-semibold">City</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>Delhi</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-semibold">Height</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>5'0"</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="font-semibold">Complexion</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>Fair</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-semibold">Marital Status</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>Never Married</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="font-semibold">Qualification</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>Graduate</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-semibold">Profession</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>Software Engineer</option>
              </select>
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-6">
            <button
              onClick={handleApplyClick}
              className="w-full bg-indigo-900 hover:bg-indigo-600 text-white font-semibold py-2 rounded transition"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesLeft;
