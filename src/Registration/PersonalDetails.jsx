import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [childrenCount, setChildrenCount] = useState(0);
  const [maritalStatus, setMaritalStatus] = useState(""); 
  const navigate = useNavigate();

  const increaseCount = () => {
    setChildrenCount(childrenCount + 1);
  };

  const decreaseCount = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  // form valid check
  const formValid = gender && dob;

  return (
    <>
      <div className="w-full h-[110px] bg-white"></div>
      <div className="bg-white min-h-screen overflow-y-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 ">
          Personal Details
        </h1>

        {/* Progress */}
        <div className="flex items-center justify-center gap-0 mt-6">
          {[...Array(11)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  index <= 0 ? "bg-blue-900" : "bg-gray-200"
                }`}
              ></div>
              {index < 10 && (
                <div
                  className={`h-0.5 w-3 ${
                    index <= -1 ? "bg-blue-900" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-xl mt-6 space-y-5 pb-36">
          {/* Gender */}
          <div>
            <label className="font-medium">
              Gender<span className="text-red-500">*</span>
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 mt-1"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="font-medium">
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>

          {/* Native Place */}
          <div>
            <label className="font-medium">Native Place</label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>Select Native Place</option>
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          {/* Caste */}
          <div>
            <label className="font-medium">Caste</label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>Select Caste</option>
              <option>Brahmin</option>
              <option>Rajput</option>
              <option>Other</option>
            </select>
          </div>

          {/* Sub Caste */}
          <div>
            <label className="font-medium">Sub Caste</label>
            <input
              type="text"
              placeholder="Enter Sub Caste"
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>

          {/* Mother Tongue */}
          <div>
            <label className="font-medium">Mother Tongue</label>
            <input
              type="text"
              placeholder="Enter Mother Tongue"
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>

          {/* Marital Status */}
          <div>
            <label className="font-medium">Marital Status</label>
            <div className="flex gap-4 mt-1">
              <label>
                <input
                  type="radio"
                  name="marital"
                  className="mr-1"
                  value="Unmarried"
                  checked={maritalStatus === "Unmarried"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
                Unmarried
              </label>
              <label>
                <input
                  type="radio"
                  name="marital"
                  className="mr-1"
                  value="Divorced"
                  checked={maritalStatus === "Divorced"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
                Divorced
              </label>
              <label>
                <input
                  type="radio"
                  name="marital"
                  className="mr-1"
                  value="Widowed"
                  checked={maritalStatus === "Widowed"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
                Widowed
              </label>
            </div>
          </div>

          {/* Conditionally show these fields only if maritalStatus is Divorced or Widowed */}
          {(maritalStatus === "Divorced" || maritalStatus === "Widowed") && (
            <>
              {/* How long married */}
              <div>
                <label className="font-medium">How long were you married?</label>
                <div className="flex gap-3 mt-1">
                  <select className="w-1/2 border border-gray-300 rounded p-2">
                    <option>Year</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <select className="w-1/2 border border-gray-300 rounded p-2">
                    <option>Month</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>

              {/* Children */}
              <div>
                <label className="font-medium">Children, if any?</label>
                <div className="flex items-center mt-1">
                  <button
                    type="button"
                    onClick={decreaseCount}
                    className="text-xl font-bold bg-gray-300 w-8 h-8 flex items-center justify-center rounded"
                  >
                    -
                  </button>
                  <div className="text-lg font-semibold w-8 text-center">
                    {childrenCount.toString().padStart(2, "0")}
                  </div>
                  <button
                    type="button"
                    onClick={increaseCount}
                    className="text-xl font-bold bg-gray-300 w-8 flex items-center justify-center rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Living with children */}
              <div>
                <label className="font-medium">Living with children?</label>
                <div className="flex gap-4 mt-1">
                  <label>
                    <input type="radio" name="living" className="mr-1" /> Yes
                  </label>
                  <label>
                    <input type="radio" name="living" className="mr-1" /> No
                  </label>
                </div>
              </div>
            </>
          )}

          {/* Complexion */}
          <div>
            <label className="font-medium">Complexion</label>
            <select className="w-full border border-gray-300 rounded p-2 mt-1">
              <option>Select Complexion</option>
              <option>Fair</option>
              <option>Wheatish</option>
              <option>Dusky</option>
            </select>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button
            onClick={() => navigate("/")}
            className="text-white font-medium px-4 py-2 border border-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => navigate("/hobbies")}
            disabled={!formValid}
            className={`font-medium px-6 py-2 rounded ${
              !formValid
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-900"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
