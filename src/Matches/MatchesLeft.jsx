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

  const handleApplyClearClick = () => {
    alert("Filter cleared!");
    setIsFilterOpen(false);
  };

  return (
    <>
      {/* Topbar for mobile */}
      <div className="flex justify-between items-center p-2 lg:hidden bg-white shadow">
        <h1 className="font-bold text-xl">Filter</h1>
        <i
          className="ri-equalizer-2-line text-2xl cursor-pointer hover:text-indigo-600"
          onClick={handleFilterIconClick}
        ></i>
      </div>

      {/* Filter Section */}
      <div
        className={`fixed top-0 left-0 h-screen w-full p-5 pt-[68px] bg-white lg:bg-transparent z-10 overflow-y-auto transition-transform duration-300 ease-in-out
${isFilterOpen ? "translate-x-0" : "-translate-x-full"} 
lg:relative lg:translate-x-0 lg:w-[30%] lg:h-auto lg:overflow-y-visible lg:shadow-none`}

      >
        {/* Mobile header */}
        <div className="w-full flex justify-between items-center lg:hidden">
          <h1 className="font-bold text-xl">Filter</h1>
          <i
            className="ri-close-line text-3xl cursor-pointer hover:text-indigo-900"
            onClick={handleFilterIconClick}
          ></i>
        </div>

        <h1 className="font-bold text-xl lg:block hidden">Filter Options</h1>

        {/* Filter Options */}
        <div className="space-y-5 mt-2">
          {/* Age Range */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <label className="font-semibold">From</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>18</option>
                <option>19</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-semibold">To</label>
              <select className="border px-2 py-2 rounded w-full">
                <option>22</option>
                <option>23</option>
              </select>
            </div>
          </div>

          {/* Other Filters */}
          <div className="flex flex-col sm:flex-row gap-2">
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

          <div className="flex flex-col sm:flex-row gap-2">
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

          <div className="flex flex-col sm:flex-row gap-2">
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
          <div className="space-x-2">
            <button
              onClick={handleApplyClick}
              className="bg-indigo-900 hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded transition cursor-pointer"
            >
              Apply Filter
            </button>
            <button
              onClick={handleApplyClearClick}
              className="bg-red-900 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded transition cursor-pointer"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesLeft;
