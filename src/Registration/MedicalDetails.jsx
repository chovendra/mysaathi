import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation

const MedicalDetails = () => {
  const [currentStep, setCurrentStep] = useState(9);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [diet, setDiet] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("No");
  const [historyDetails, setHistoryDetails] = useState("");
  const [physicalStatus, setPhysicalStatus] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => {
    // Validation check
    if (!weight || !height || !bloodGroup) {
      alert("Weight, Height and Blood Group required.");
      return;
    }

    if (medicalHistory === "Yes" && !historyDetails) {
      alert("Medical History details required.");
      return;
    }

    if (!physicalStatus) {
      alert("Physical Status required.");
      return;
    }

   
    navigate("/uploadphotos"); 
  };

  const handleCancel = () => {
    navigate(-1); 
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>
      <div className="bg-white min-h-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800">Medical Details</h1>

        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(11)].map((_, index) => (
            <React.Fragment key={index}>
              <div className={`w-4 h-4 rounded-full ${index <= 8 ? 'bg-blue-900' : 'bg-gray-300'}`}></div>
              {index < 10 && (
                <div className={`h-1 w-6 ${index <= 7 ? 'bg-blue-900' : 'bg-gray-300'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-5 pb-36">
          <h3 className="text-xl font-semibold">Let us know about your Family</h3>

          <label className="block text-gray-700 font-medium">Weight (In Kgs)<span className="text-red-500">*  </span></label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-gray-700 font-medium">Height (In Cms)<span className="text-red-500">*  </span></label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-gray-700 font-medium">Blood Group<span className="text-red-500">*  </span></label>
          <input
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            placeholder="Blood Group"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block text-gray-700 font-medium">Your Diet</label>
          <div className="flex flex-wrap gap-3">
            {["Veg", "Non-Veg", "Eggetarian"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setDiet(option)}
                className={`px-4 py-2 border rounded-full ${
                  diet === option ? "bg-blue-900 text-white" : "border-gray-300 text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <label className="block text-gray-700 font-medium">Any medical histories</label>
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

          {medicalHistory === "Yes" && (
            <>
              <label className="block text-gray-700 font-medium">If Yes, mention</label>
              <input
                type="text"
                value={historyDetails}
                onChange={(e) => setHistoryDetails(e.target.value)}
                placeholder="Medical History"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </>
          )}

          <label className="block text-gray-700 font-medium">Physical Status<span className="text-red-500">*  </span></label>
          <input
            type="text"
            value={physicalStatus}
            onChange={(e) => setPhysicalStatus(e.target.value)}
            placeholder="Normal/Differently Abled"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button
            onClick={handleCancel}
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

export default MedicalDetails;
