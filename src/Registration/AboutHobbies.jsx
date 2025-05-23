import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutHobbies = () => {
  const [alcohol, setAlcohol] = useState("");
  const [smoke, setSmoke] = useState("");
  const [eatingHabit, setEatingHabit] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    if (alcohol && smoke && eatingHabit) {
      navigate("/familydetails");
    }
  };

  const handleBack = () => {
    navigate("/hobbies"); 
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>

      <div className="bg-white min-h-auto pb-45">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          More About Hobbies
        </h1>

        <div className="flex items-center justify-center gap-0 mt-6">
            {[...Array(11)].map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    index <= 2 ? "bg-blue-900" : "bg-gray-200"
                  }`}
                ></div>
                {index < 10 && (
                  <div
                    className={`h-0.5 w-3 ${
                      index <= 1 ? "bg-blue-900" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
        </div>


        <p className="text-center text-gray-600 mt-4">
          Let us know more about your hobbies
        </p>

        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">
          <div>
            <h2 className="font-medium text-gray-700 mb-2">Do you drink alcohol?<span className="text-red-500">*  </span></h2>
            <div className="flex gap-6">
              {["yes", "no"].map((val) => (
                <label key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="alcohol"
                    value={val}
                    checked={alcohol === val}
                    onChange={() => setAlcohol(val)}
                    className="w-5 h-5 accent-blue-900"
                  />
                  {val}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium text-gray-700 mb-2">Do you smoke?<span className="text-red-500">*  </span></h2>
            <div className="flex gap-6">
              {["yes", "no"].map((val) => (
                <label key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="smoke"
                    value={val}
                    checked={smoke === val}
                    onChange={() => setSmoke(val)}
                    className="w-5 h-5 accent-blue-900"
                  />
                  {val}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-medium text-gray-700 mb-2">Eating Habits?<span className="text-red-500">*  </span></h2>
            <div className="flex flex-wrap gap-4">
              {["Veg", "Non-Veg", "Eggetarian", "Vegan"].map((item) => (
                <label key={item} className="flex items-center gap-2">
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
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button
            onClick={handleBack}
            className="text-white font-medium px-4 py-2 border border-white rounded"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!alcohol || !smoke || !eatingHabit}
            className={`font-medium px-6 py-2 rounded ${
              alcohol && smoke && eatingHabit
                ? "text-blue-900 bg-white"
                : "text-gray-300 bg-gray-100 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutHobbies;
