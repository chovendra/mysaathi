import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const AboutYourself = () => {
  const [currentStep, setCurrentStep] = useState(11);
  const [aboutText, setAboutText] = useState("");

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>
      <div className="bg-white min-h-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          About Yourself
        </h1>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={12} />

        {/* Sub-Heading */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 text-center">
          Write few lines which defines you best
        </h2>

        {/* TextArea */}
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl mt-6  pb-50">
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            placeholder="About Yourself"
            rows={6}
            className="w-full border-2 border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            className="text-white font-medium px-4 py-2 border border-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 12))}
            className="text-blue-900 font-medium bg-white px-6 py-2 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutYourself;
