import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const MedicalDetails = () => {
  const [currentStep, setCurrentStep] = useState(9);
  const [diet, setDiet] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("No");

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>
      <div className="bg-white min-h-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Medical Details
        </h1>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={12} />

        

        {/* Form Section */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-5 pb-36">
          {/* Instructions */}
        <h3 className="text-xl font-semibold">Let us know about your Family</h3>
          {/* Weight */}
          <label className="block text-gray-700 font-medium">
            Weight (In Kgs)*
          </label>
          <input
            type="text"
            placeholder="Weight"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Height */}
          <label className="block text-gray-700 font-medium">
            Height (In Cms)*
          </label>
          <input
            type="text"
            placeholder="Height"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Blood Group */}
          <label className="block text-gray-700 font-medium">Blood Group*</label>
          <input
            type="text"
            placeholder="Blood Group"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Your Diet */}
          <label className="block text-gray-700 font-medium">Your Diet</label>
          <div className="flex flex-wrap gap-3">
            {["Veg", "Non-Veg", "Eggetarian"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setDiet(option)}
                className={`px-4 py-2 border rounded-full ${
                  diet === option
                    ? "bg-blue-900 text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Medical Histories */}
          <label className="block text-gray-700 font-medium">
            Any medical histories
          </label>
          <div className="flex gap-4">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="medicalHistory"
                  value={option}
                  checked={medicalHistory === option}
                  onChange={(e) => setMedicalHistory(e.target.value)}
                  className="text-blue-900"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          {/* If Yes, mention */}
          {medicalHistory === "Yes" && (
            <>
              <label className="block text-gray-700 font-medium">
                If Yes, mention
              </label>
              <input
                type="text"
                placeholder="Medical History"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          {/* Physical Status */}
          <label className="block text-gray-700 font-medium">
            Physical Status
          </label>
          <input
            type="text"
            placeholder="Normal/Differently Abled"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default MedicalDetails;
