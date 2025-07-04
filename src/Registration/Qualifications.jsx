import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Qualifications = () => {
  const [currentCompany, setCurrentCompany] = useState("");
  const [workingSince, setWorkingSince] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => {
    if (currentCompany.trim() === "" || workingSince.trim() === "") {
      alert("Please fill all required fields.");
      return;
    }
    navigate("/contactdetails"); 
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>

      <div className="bg-white min-h-auto pb-32">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Professional Qualifications
        </h1>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-0 mt-6">
          {[...Array(11)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  index <= 6 ? "bg-blue-900" : "bg-gray-200"
                }`}
              ></div>
              {index < 10 && (
                <div
                  className={`h-0.5 w-3 ${
                    index <= 5 ? "bg-blue-900" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-600 mt-4">
          Let us know more about your education and profession
        </p>

        {/* Form */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">
          <h2 className="font-semibold text-gray-800 text-lg">
            Let us know more about your education and profession
          </h2>
          <h2 className="font-semibold text-gray-800 text-lg">Education</h2>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Highest Education
            </label>
            <input
              type="text"
              placeholder="Enter highest education"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Stream</label>
            <input
              type="text"
              placeholder="Enter stream"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <h2 className="font-semibold text-gray-800 text-lg">
            Professional Work Experience
          </h2>

          <div>
            <label className="block font-medium text-gray-700 mb-1">You Work With</label>
            <input
              type="text"
              placeholder="Enter your designation"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">As</label>
            <input
              type="text"
              placeholder="Enter organisation"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Current Company<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={currentCompany}
              onChange={(e) => setCurrentCompany(e.target.value)}
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Working Since<span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              value={workingSince}
              onChange={(e) => setWorkingSince(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Yearly Income
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option>Select income</option>
              <option>Below ₹5 LPA</option>
              <option>₹5-10 LPA</option>
              <option>₹10-20 LPA</option>
              <option>₹20-50 LPA</option>
              <option>₹50 LPA & Above</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Place of Work</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="workplace" className="accent-blue-900 w-5 h-5" />
                India
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="workplace" className="accent-blue-900 w-5 h-5" />
                Abroad
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Work Location / City
            </label>
            <input
              type="text"
              placeholder="Enter city"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button
            className="text-white font-medium px-4 py-2 border border-white rounded"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="text-blue-900 font-medium bg-white px-6 py-2 rounded"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Qualifications;
