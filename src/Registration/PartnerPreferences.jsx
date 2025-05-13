import React, { useState } from "react";

const PartnerPreferences = () => {
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [height, setHeight] = useState("");
  const [caste, setCaste] = useState("");
  const [subCaste, setSubCaste] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [complexion, setComplexion] = useState("");
  const [expectations, setExpectations] = useState("");

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>

      <div className="bg-white min-h-auto pb-36">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Partner Preferences
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
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-600 mt-4">
          Let us know what you are looking in your partner.
        </p>

        {/* Form Section */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">
          {/* Age From */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Age From
            </label>
            <select
              value={ageFrom}
              onChange={(e) => setAgeFrom(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">Select</option>
              {[18, 19, 20, 21, 22, 23, 24, 25].map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* Age To */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Age To
            </label>
            <select
              value={ageTo}
              onChange={(e) => setAgeTo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">Select</option>
              {[22, 23, 24, 25, 26, 27, 28, 29, 30].map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>

          {/* Height */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Height (In Cms)*
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Caste */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Caste*</label>
            <select
              value={caste}
              onChange={(e) => setCaste(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">Select</option>
              {["Brahmin", "Rajput", "Yadav", "Vaishya", "Other"].map(
                (casteOption) => (
                  <option key={casteOption} value={casteOption}>
                    {casteOption}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Sub Caste */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Sub Caste (Optional)
            </label>
            <input
              type="text"
              value={subCaste}
              onChange={(e) => setSubCaste(e.target.value)}
              placeholder="Enter sub caste"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Mother Tongue */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Mother Tongue*
            </label>
            <input
              type="text"
              value={motherTongue}
              onChange={(e) => setMotherTongue(e.target.value)}
              placeholder="Enter mother tongue"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Marital Status */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Marital Status
            </label>
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">Select</option>
              {["Single", "Divorced", "Widowed", "Separated"].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Complexion */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Complexion
            </label>
            <select
              value={complexion}
              onChange={(e) => setComplexion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">Select</option>
              {["Fair", "Wheatish", "Dusky", "Dark"].map((tone) => (
                <option key={tone} value={tone}>
                  {tone}
                </option>
              ))}
            </select>
          </div>

          {/* Partner Expectations */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Partner Expectations*
            </label>
            <textarea
              value={expectations}
              onChange={(e) => setExpectations(e.target.value)}
              rows="4"
              placeholder="Write your expectations here..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
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

export default PartnerPreferences;
