import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";


const Hobbies = () => {
  const [selectedCreative, setSelectedCreative] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [currentStep, setCurrentStep] = useState(2); // Starting from step 2 for Hobbies page
  const navigate = useNavigate();


  const creativeOptions = [
    "Painting",
    "Singing",
    "Dancing",
    "Writing",
    "Photography",
    "Cooking",
  ];
  const categoryOptions = [
    "Sports",
    "Music",
    "Travel",
    "Technology",
    "Gaming",
    "Books",
  ];

  const toggleCreative = (hobby) => {
    if (selectedCreative.includes(hobby)) {
      setSelectedCreative(selectedCreative.filter((item) => item !== hobby));
    } else {
      setSelectedCreative([...selectedCreative, hobby]);
    }
  };

  const toggleCategory = (hobby) => {
    if (selectedCategory.includes(hobby)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== hobby));
    } else {
      setSelectedCategory([...selectedCategory, hobby]);
    }
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>
      <div className="bg-white min-h-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 ">
          Your Hobbies
        </h1>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={4} />

        {/* Instructions */}
        <p className="text-center text-gray-600 mt-4">
          Please select at least 5 hobbies!
        </p>

        {/* Creative Section */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-5 pb-36">
          <h2 className="text-lg font-semibold text-gray-700">Creative</h2>
          <div className="flex flex-wrap gap-3">
            {creativeOptions.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => toggleCreative(item)}
                className={`px-4 py-2 border rounded-full ${
                  selectedCreative.includes(item)
                    ? "bg-blue-900 text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Category Section */}
          <h2 className="text-lg font-semibold text-gray-700 mt-6">
            Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {categoryOptions.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => toggleCategory(item)}
                className={`px-4 py-2 border rounded-full ${
                  selectedCategory.includes(item)
                    ? "bg-blue-900 text-white"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-500 py-3 flex justify-evenly">
          <button
            onClick={() => navigate("/")}
            className="text-white font-medium px-4 py-2 border border-white rounded"
            >
            Back
            </button>

            <button
            onClick={() => alert("Next Page")}  // आगे का page बना कर इसका route कर लेना
            className="text-blue-900 font-medium bg-white px-6 py-2 rounded"
            >
            Next
        </button>

        </div>
      </div>
    </>
  );
};

export default Hobbies;
