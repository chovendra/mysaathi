import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutYourself = () => {
  const [aboutText, setAboutText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (aboutText.trim() === "") {
      alert("Please write something about yourself before continuing.");
      return;
    }

    setSuccessMessage("Register Successfully!");
    setTimeout(() => {
      navigate("/");  
    }, 2000);
  };

  const handleCancel = () => {
    navigate(-1);  
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>
      <div className="bg-white min-h-auto">
        {successMessage && (
          <div className="text-center bg-green-100 text-green-800 font-semibold py-2 mb-4">
            {successMessage}
          </div>
        )}

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          About Yourself
        </h1>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(11)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-4 h-4 rounded-full ${
                  index <= 10 ? "bg-blue-900" : "bg-gray-300"
                }`}
              ></div>
              {index < 10 && (
                <div
                  className={`h-1 w-6 ${
                    index <= 9 ? "bg-blue-900" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Sub-Heading */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 text-center">
          Write few lines which defines you best<span className="text-red-500">*  </span>
        </h2>

        {/* TextArea */}
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl mt-6 pb-50">
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            placeholder="About Yourself"
            rows={6}
            className="w-full border-2 border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!!successMessage}  
          />
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button
            onClick={handleCancel}
            className="text-white font-medium px-4 py-2 border border-white rounded"
            disabled={!!successMessage} 
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            className="text-blue-900 font-medium bg-white px-6 py-2 rounded"
            disabled={!!successMessage} 
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutYourself;
