import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const UploadPhotos = () => {
  const [currentStep, setCurrentStep] = useState(10);
  const [profilePic, setProfilePic] = useState(null);
  const [additionalPhotos, setAdditionalPhotos] = useState(Array(6).fill(null));
  const [familyPhotos, setFamilyPhotos] = useState(Array(3).fill(null));
  const [idProofs, setIdProofs] = useState(Array(3).fill(null));

  // Handler for single image
  const handleImageChange = (e, setter, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (index === null) {
        setter(reader.result);
      } else {
        setter((prev) => {
          const updated = [...prev];
          updated[index] = reader.result;
          return updated;
        });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>
      <div className="bg-white min-h-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Upload Photos
        </h1>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={12} />

        {/* Instructions */}
        <h1 className="text-2xl font-semibold text-gray-700 mt-6 text-center">
          Upload photos of you and your family.
        </h1>

        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl mt-6 space-y-6 pb-36">
          {/* Profile Picture */}
          <h2 className="text-lg font-semibold text-center text-gray-700">
            Profile Picture
          </h2>
          <div className="flex justify-center">
            <label className="w-32 h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer overflow-hidden">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
              ) : (
                "+"
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, setProfilePic)}
              />
            </label>
          </div>

          {/* Additional Photos */}
          <h2 className="text-lg font-semibold text-gray-700 mt-4">
            Additional Photos
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {additionalPhotos.map((photo, index) => (
              <label
                key={index}
                className="w-full h-24 border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer overflow-hidden"
              >
                {photo ? (
                  <img src={photo} alt={`Additional ${index}`} className="object-cover w-full h-full" />
                ) : (
                  "+"
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setAdditionalPhotos, index)}
                />
              </label>
            ))}
          </div>

          {/* Family Photos */}
          <h2 className="text-lg font-semibold text-gray-700 mt-4">
            Family Photos (Optional)
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {familyPhotos.map((photo, index) => (
              <label
                key={index}
                className="w-full h-24 border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer overflow-hidden"
              >
                {photo ? (
                  <img src={photo} alt={`Family ${index}`} className="object-cover w-full h-full" />
                ) : (
                  "+"
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setFamilyPhotos, index)}
                />
              </label>
            ))}
          </div>

          {/* ID Proofs */}
          <h2 className="text-lg font-semibold text-gray-700 mt-4">
            Upload ID Proofs (Adhaar Card, Pan Card)
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {idProofs.map((photo, index) => (
              <label
                key={index}
                className="w-full h-24 border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer overflow-hidden"
              >
                {photo ? (
                  <img src={photo} alt={`ID ${index}`} className="object-cover w-full h-full" />
                ) : (
                  "+"
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, setIdProofs, index)}
                />
              </label>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-2">
            IDs will not be shared with any user or third party. It is only for
            verification.
          </p>
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

export default UploadPhotos;
