import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FamilyDetails = () => {
  const navigate = useNavigate();

  const [fatherProfession, setFatherProfession] = useState("");
  const [motherProfession, setMotherProfession] = useState("");
  const [siblings, setSiblings] = useState("");
  const [marriedSiblings, setMarriedSiblings] = useState("");
  const [fashionStyle, setFashionStyle] = useState("");

  // Validation & Navigation
  const handleContinue = () => {
    if (
      !fatherProfession.trim() ||
      !motherProfession.trim() ||
      !siblings.trim() ||
      marriedSiblings === "" ||
      fashionStyle === ""
    ) {
      alert("Please fill all the required fields!");
      return;
    }

    
    navigate("/partnerpreferences");  
  };

  const handleBack = () => {
    navigate(-1);  
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>

      <div className="bg-white min-h-auto pb-36">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Family Details
        </h1>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-0 mt-6">
          {[...Array(11)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  index <= 3 ? "bg-blue-900" : "bg-gray-200"
                }`}
              ></div>
              {index < 10 && (
                <div
                  className={`h-0.5 w-3 ${
                    index <= 2 ? "bg-blue-900" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>


        {/* Subheading */}
        <p className="text-center text-gray-600 mt-4">
          Let us know more about your family
        </p>

        {/* Form Section */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">
          {/* Father's Profession */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Father's Profession<span className="text-red-500">*  </span>
            </label>
            <input
              type="text"
              value={fatherProfession}
              onChange={(e) => setFatherProfession(e.target.value)}
              placeholder="Enter father's profession"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Mother's Profession */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Mother's Profession<span className="text-red-500">*  </span>
            </label>
            <input
              type="text"
              value={motherProfession}
              onChange={(e) => setMotherProfession(e.target.value)}
              placeholder="Enter mother's profession"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Number of Siblings */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              No. of Siblings<span className="text-red-500">*  </span>
            </label>
            <input
              type="number"
              value={siblings}
              onChange={(e) => setSiblings(e.target.value)}
              placeholder="Enter number of siblings"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          {/* Married Siblings */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Of which how many are married?<span className="text-red-500">*  </span>
            </label>
            <select
              value={marriedSiblings}
              onChange={(e) => setMarriedSiblings(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            >
              <option value="">Select</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Fashion Style */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Fashion Style?<span className="text-red-500">*  </span>
            </label>
            <div className="flex gap-6">
              {["Traditional", "Western", "Both"].map((style, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="fashion"
                    value={style}
                    checked={fashionStyle === style}
                    onChange={() => setFashionStyle(style)}
                    className="w-5 h-5 accent-blue-900"
                  />
                  {style}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button
            onClick={handleBack}
            className="text-white font-medium px-4 py-2 border border-white rounded"
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            className="text-blue-900 font-medium bg-white px-6 py-2 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FamilyDetails;
