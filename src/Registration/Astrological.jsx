import React, { useState } from "react";

const Astrological = () => {
  const [fileName, setFileName] = useState("");
  const [dosha, setDosha] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>

      <div className="bg-white min-h-auto pb-44">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Astrological Details
        </h1>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-blue-900"></div>
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-blue-900"></div>
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-blue-900"></div>
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-blue-900"></div>
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-blue-900"></div>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-600 mt-4">
          Provide us with your astrological information
        </p>

        {/* Form Fields */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">
          {/* Star */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Star</label>
            <input
              type="text"
              placeholder="Enter your star"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Gothram */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Gothram</label>
            <input
              type="text"
              placeholder="Enter your Gothram"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Padham */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Padham</label>
            <input
              type="text"
              placeholder="Enter your Padham"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Place of Birth */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Place of Birth</label>
            <input
              type="text"
              placeholder="Enter Place of Birth"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Time of Birth */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Time of Birth*</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>


          {/* Upload Horoscope */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Upload Horoscope (pdf, png, jpeg, jpg etc.)
            </label>

            {/* Custom File Input */}
            <div className="flex items-center gap-4">
              <label className="bg-blue-900 text-white px-4 py-2 rounded cursor-pointer">
                Choose File
                <input
                  type="file"
                  accept=".pdf,.png,.jpeg,.jpg"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {/* File Name */}
              <span className="text-gray-700 text-sm truncate max-w-[150px]">
                {fileName ? fileName : "No file chosen"}
              </span>
            </div>
          </div>

          {/* Dosha */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">Dosha</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="dosha"
                  value="yes"
                  checked={dosha === "yes"}
                  onChange={() => setDosha("yes")}
                  className="w-5 h-5 accent-blue-900"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="dosha"
                  value="no"
                  checked={dosha === "no"}
                  onChange={() => setDosha("no")}
                  className="w-5 h-5 accent-blue-900"
                />
                No
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="dosha"
                  value="dontknow"
                  checked={dosha === "dontknow"}
                  onChange={() => setDosha("dontknow")}
                  className="w-5 h-5 accent-blue-900"
                />
                Don't Know
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-500 py-3 flex justify-evenly">
          <button className="text-white font-medium px-4 py-2 border border-white rounded">
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

export default Astrological;
