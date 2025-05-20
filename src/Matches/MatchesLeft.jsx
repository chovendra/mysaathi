import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const MatchesLeft = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterIconClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      {/* Topbar for mobile */}
      <div className="flex justify-between items-center p-4 lg:hidden mt-15 bg-white">
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
            className="ri-close-line text-3xl cursor-pointer hover:text-indigo-600"
            onClick={handleFilterIconClick}
          ></i>
        </div>

        {/* Filter Options */}
        <div className="space-y-5 mt-5">
          <span>
            Age Range
            <br />
            <select className="border px-6 py-2 rounded">
              <option value="">18</option>
              <option value="">19</option>
            </select>
            <select className="border px-6 py-2 rounded ml-5">
              <option value="">22</option>
              <option value="">23</option>
            </select>
          </span>

          <div className="flex">
            <span>
              City
              <br />
              <select className="border px-8 py-2 rounded">
                <option value="">Delhi</option>
              </select>
            </span>
            <span className="ml-5">
              Height
              <br />
              <select className="border px-10 py-2 rounded">
                <option value="">5'0"</option>
              </select>
            </span>
          </div>

          <div className="flex">
            <span>
              Complexion
              <br />
              <select className="border px-9 py-2 rounded">
                <option value="">Fair</option>
              </select>
            </span>
            <span className="ml-5">
              Marital Status
              <br />
              <select className="border px-8 py-2 rounded">
                <option value="">Never Married</option>
              </select>
            </span>
          </div>

          <div className="flex">
            <span>
              Qualification
              <br />
              <select className="border px-5 py-2 rounded">
                <option value="">Graduate</option>
              </select>
            </span>
            <span className="ml-5">
              Profession
              <br />
              <select className="border px-5 py-2 rounded">
                <option value="">Software Engineer</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesLeft;
