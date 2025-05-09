import React, { useState } from "react";

const PersonalDetails = () => {
  const [childrenCount, setChildrenCount] = useState(0);

  const increaseCount = () => {
    setChildrenCount(childrenCount + 1);
  };

  const decreaseCount = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  return (
    <>
      <div className="w-full h-[90px]"></div>
      <div className="bg-gray-50 min-h-screen ">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 ">
          Personal Details
        </h1>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-3 mt-4">
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>

        {/* Form Section */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-6 space-y-5">
          {/* Gender */}
          <div>
            <label className="font-medium">
              Gender<span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="font-medium">
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>

          {/* Native Place */}
          <div>
            <label className="font-medium">Native Place</label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>Select Native Place</option>
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          {/* Caste */}
          <div>
            <label className="font-medium">Caste</label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>Select Caste</option>
              <option>Brahmin</option>
              <option>Rajput</option>
              <option>Other</option>
            </select>
          </div>

          {/* Sub Caste */}
          <div>
            <label className="font-medium">Sub Caste</label>
            <input
              type="text"
              placeholder="Enter Sub Caste"
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>

          {/* Mother Tongue */}
          <div>
            <label className="font-medium">Mother Tongue</label>
            <input
              type="text"
              placeholder="Enter Mother Tongue"
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>

          {/* Marital Status */}
          <div>
            <label className="font-medium">Marital Status</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input type="radio" name="marital" className="mr-1" /> Unmarried
              </label>
              <label>
                <input type="radio" name="marital" className="mr-1" /> Divorced
              </label>
              <label>
                <input type="radio" name="marital" className="mr-1" /> Widowed
              </label>
            </div>
          </div>

          {/* How long married */}
          <div>
            <label className="font-medium">How long were you married?</label>
            <div className="flex gap-3 mt-1">
              <select className="w-1/2 border border-gray-300 rounded p-2">
                <option>Year</option>
                <option>1</option>
                <option>2</option>
              </select>
              <select className="w-1/2 border border-gray-300 rounded p-2">
                <option>Month</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>

          {/* Children */}
          <div className=" rounded-xl">
            <label className="font-medium">Children, if any?</label>
            <div className="flex items-center mt-1">
              <button
                type="button"
                onClick={decreaseCount}
                className="text-xl font-bold bg-gray-300 w-8 h-8 flex items-center justify-center rounded"
              >
                -
              </button>
              <div className="text-lg font-semibold w-8 text-center">
                {childrenCount.toString().padStart(2, "0")}
              </div>
              <button
                type="button"
                onClick={increaseCount}
                className="text-xl font-bold bg-gray-300 w-8  flex items-center justify-center rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Living with children */}
          <div>
            <label className="font-medium">Living with children?</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input type="radio" name="living" className="mr-1" /> Yes
              </label>
              <label>
                <input type="radio" name="living" className="mr-1" /> No
              </label>
            </div>
          </div>

          {/* Complexion */}
          <div>
            <label className="font-medium mb-10">Complexion</label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>Select Complexion</option>
              <option>Fair</option>
              <option>Wheatish</option>
              <option>Dusky</option>
            </select>
          </div>
        </div>
        <div className="w-full h-[10vh]">

        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 mt-[10vh] w-full bg-blue-500  py-3 flex justify-evenly border-b-2">
          <button className=" text-white font-medium px-4 py-2 border border-white rounded">
            Cancel
          </button>
          <button className="text-blue-900 font-medium bg-white px-6 py-2 rounded">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
