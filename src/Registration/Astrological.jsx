import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Astrological = () => {
  const [fileName, setFileName] = useState("");
  const [dosha, setDosha] = useState("");
  const [formData, setFormData] = useState({
    star: "",
    gothram: "",
    padham: "",
    placeOfBirth: "",
    timeOfBirth: "",
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    // Validation
    if (
      !formData.star ||
      !formData.gothram ||
      !formData.padham ||
      !formData.placeOfBirth ||
      !formData.timeOfBirth ||
      !dosha
    ) {
      alert("Please fill all required fields.");
      return;
    }

    
    navigate("/qualifications");
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>

      <div className="bg-white min-h-auto pb-44">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Astrological Details
        </h1>

        <div className="flex items-center justify-center gap-0 mt-6">
          {[...Array(11)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  index <= 5 ? "bg-blue-900" : "bg-gray-200"
                }`}
              ></div>
              {index < 10 && (
                <div
                  className={`h-0.5 w-3 ${
                    index <= 4 ? "bg-blue-900" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-600 mt-4">
          Provide us with your astrological information
        </p>

        {/* Form Fields */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">
          {/* Star */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Star<span className="text-red-500">*  </span></label>
            <input
              type="text"
              name="star"
              value={formData.star}
              onChange={handleChange}
              placeholder="Enter your star"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Gothram */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Gothram<span className="text-red-500">*  </span></label>
            <input
              type="text"
              name="gothram"
              value={formData.gothram}
              onChange={handleChange}
              placeholder="Enter your Gothram"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Padham */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Padham<span className="text-red-500">*  </span></label>
            <input
              type="text"
              name="padham"
              value={formData.padham}
              onChange={handleChange}
              placeholder="Enter your Padham"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Place of Birth */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Place of Birth<span className="text-red-500">*  </span></label>
            <input
              type="text"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              placeholder="Enter Place of Birth"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Time of Birth */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">Time of Birth<span className="text-red-500">*  </span></label>
            <input
              type="date"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Upload Horoscope */}
          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Upload Horoscope (pdf, png, jpeg, jpg etc.)
            </label>
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
              <span className="text-gray-700 text-sm truncate max-w-[150px]">
                {fileName ? fileName : "No file chosen"}
              </span>
            </div>
          </div>

          {/* Dosha */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">Dosha<span className="text-red-500">*  </span></label>
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

export default Astrological;
