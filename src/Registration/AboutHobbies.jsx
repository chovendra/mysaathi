import React, { useState } from "react";

const AboutHobbies = () => {
  const [alcohol, setAlcohol] = useState("");
  const [smoke, setSmoke] = useState("");
  const [eatingHabit, setEatingHabit] = useState("");

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>

      <div className="bg-white min-h-auto pb-45">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          More About Hobbies
        </h1>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-blue-900"></div>
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-blue-900"></div>
          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
          <div className="h-1 w-10 bg-gray-300"></div>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>

        {/* Subheading */}
        <p className="text-center text-gray-600 mt-4">
          Let us know more about your hobbies
        </p>

        {/* Questions */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">

          {/* Alcohol */}
          <div>
            <h2 className="font-medium text-gray-700 mb-2">Do you drink alcohol?</h2>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="alcohol"
                  value="yes"
                  checked={alcohol === "yes"}
                  onChange={() => setAlcohol("yes")}
                  className="w-5 h-5 accent-blue-900"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="alcohol"
                  value="no"
                  checked={alcohol === "no"}
                  onChange={() => setAlcohol("no")}
                  className="w-5 h-5 accent-blue-900"
                />
                No
              </label>
            </div>
          </div>

          {/* Smoke */}
          <div>
            <h2 className="font-medium text-gray-700 mb-2">Do you smoke?</h2>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="smoke"
                  value="yes"
                  checked={smoke === "yes"}
                  onChange={() => setSmoke("yes")}
                  className="w-5 h-5 accent-blue-900"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="smoke"
                  value="no"
                  checked={smoke === "no"}
                  onChange={() => setSmoke("no")}
                  className="w-5 h-5 accent-blue-900"
                />
                No
              </label>
            </div>
          </div>

          {/* Eating Habits */}
          <div>
            <h2 className="font-medium text-gray-700 mb-2">Eating Habits?</h2>
            <div className="flex flex-wrap gap-4">
              {["Veg", "Non-Veg", "Eggetarian", "Vegan"].map((item, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eating"
                    value={item}
                    checked={eatingHabit === item}
                    onChange={() => setEatingHabit(item)}
                    className="w-5 h-5 accent-blue-900"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-500 py-3 flex justify-evenly">
          <button className="text-white font-medium px-4 py-2 border border-white rounded">
            Back
          </button>
          <button className="text-blue-900 font-medium bg-white px-6 py-2 rounded">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutHobbies;
