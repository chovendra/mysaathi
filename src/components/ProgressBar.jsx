import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center mt-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Dots */}
          <div
            className={`w-4 h-4 rounded-full ${
              currentStep >= step ? "bg-blue-900" : "bg-gray-300"
            }`}
          ></div>

          {/* Line */}
          {index !== steps.length - 1 && (
            <div
              className={`h-1 w-10 ${
                currentStep > step ? "bg-blue-900" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
