import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MatcheDetails = () => {
  const params = useParams();
  console.log(params);

  const [isImageOpen, setIsImageOpen] = useState(false);

  const memberData = {
    image: "/images/profile.png",
    memberId: "M-XYZ123",
    name: "Arvind Pandey",
    location: "Bhopal",
    profession: "Software Engineer",
    age: "28",
    height: "5'6\"",
    motherTongue: "Hindi",
    hobby:
      "Dreamer & Doer | Capturing moments, one click at a time Coffee lover, adventure seeker | Making memories, not excuses",
    details: {
      dob: "30-10-1980",
      caste: "Hindu",
      nativePlace: "Delhi",
      highestDegree: "PG",
      lastCollege: "IIT Delhi",
      work: "Software Engineer",
      birthPlace: "Delhi",
      star: "LEO",
      siblings: "1 Brother",
      fatherProfession: "Engineer",
      motherProfession: "Housewife",
    },
  };

  return (
    <>
      <div className="w-full h-[90px]" />

      <div className="px-4 md:px-12">
        <div className="container mx-auto p-4 space-y-5">
          <div className="flex justify-between items-center border-b pb-3">
            <p className="text-gray-600 font-medium text-sm md:text-base">All matches 1/3513</p>
            <button className="flex items-center gap-1 text-black font-semibold text-sm hover:underline bg-gray-200 border border-gray-400 rounded-full px-4 py-1">
              Next <ArrowRight size={16} />
            </button>
          </div>

          {/* Profile Card */}
          <div className="flex flex-col md:flex-row bg-gray-100 rounded-xl shadow-xl overflow-hidden max-w-8xl relative">
            <img
              src={memberData.image}
              alt={memberData.name}
              className="w-full md:w-56 h-64 object-cover cursor-pointer"
              onClick={() => setIsImageOpen(true)}
            />
            <div className="p-4 flex-1 relative">
              <h2 className="text-lg font-bold text-gray-800">{memberData.name}</h2>
              <p className="text-sm text-gray-700 mt-1">
                {memberData.location} | {memberData.profession} | Age {memberData.age}, Height {memberData.height} | Mother Tongue
              </p>
              <p className="text-[13px] text-gray-600 mt-2">{memberData.hobby}</p>

              <div className="flex flex-wrap md:flex-nowrap gap-3 mt-4 md:mt-0 md:absolute bottom-4 right-4">
                <button className="bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 w-full md:w-auto">
                  Send Interest
                </button>
                <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded text-sm hover:bg-blue-50 w-full md:w-auto">
                  Shortlist
                </button>
              </div>
            </div>
          </div>

          {/* Image Modal */}
          {isImageOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="relative">
                <button
                  onClick={() => setIsImageOpen(false)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow text-black"
                >
                  ❌
                </button>
                <img
                  src={memberData.image}
                  alt={memberData.name}
                  className="max-w-[90vw] max-h-[90vh] rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Personal Details */}
            <div className="md:col-span-2 bg-white border rounded-xl p-5 space-y-3 min-h-[700px]">
              <h3 className="text-base font-semibold text-gray-800 mb-3 pl-3 md:pl-10">Personal Details</h3>
              <div className="space-y-3 text-sm text-gray-700 pl-3 md:pl-10">
                <p><strong>Date of birth :</strong> {memberData.details.dob}</p>
                <p><strong>Caste :</strong> {memberData.details.caste}</p>
                <p><strong>Native Place :</strong> {memberData.details.nativePlace}</p>
              </div>

              <h3 className="text-base font-semibold text-gray-800 mt-4 pl-3 md:pl-10">Education</h3>
              <div className="space-y-3 text-sm text-gray-700 pl-3 md:pl-10">
                <p><strong>Highest Degree :</strong> {memberData.details.highestDegree}</p>
                <p><strong>Last College :</strong> {memberData.details.lastCollege}</p>
              </div>

              <h3 className="text-base font-semibold text-gray-800 mt-4 pl-3 md:pl-10">Profession</h3>
              <div className="text-sm text-gray-700 pl-3 md:pl-10">
                <p><strong>I work as :</strong> {memberData.details.work}</p>
              </div>

              <h3 className="text-base font-semibold text-gray-800 mt-4 pl-3 md:pl-10">Astro Details</h3>
              <div className="space-y-3 text-sm text-gray-700 pl-3 md:pl-10">
                <p><strong>Place of Birth :</strong> {memberData.details.birthPlace}</p>
                <p><strong>Star :</strong> {memberData.details.star}</p>
              </div>

              <h3 className="text-base font-semibold text-gray-800 mt-4 pl-3 md:pl-10">Family</h3>
              <div className="space-y-3 text-sm text-gray-700 pl-3 md:pl-10">
                <p><strong>Siblings :</strong> {memberData.details.siblings}</p>
                <p><strong>Father's Profession :</strong> {memberData.details.fatherProfession}</p>
                <p><strong>Mother's Profession :</strong> {memberData.details.motherProfession}</p>
              </div>

              <div className="border rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 mt-5 bg-[#f8fafc]">
                <img src="/images/saathi.jpg" alt="Assisted Service" className="w-28 rounded" />
                <div className="flex-1 pl-0 md:pl-10">
                  <h4 className="text-sm font-semibold text-gray-800">Assisted service</h4>
                  <p>Personalised matchmaking service</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Find your match <span className="text-green-600 font-medium">10x faster</span>
                  </p>
                  <ul className="text-xs text-gray-600 pl-2 mt-1 space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-400 text-white text-[10px]">✔️</span>
                      Guaranteed matches
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-400 text-white text-[10px]">✔️</span>
                      Better response
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-400 text-white text-[10px]">✔️</span>
                      Save time & effort
                    </li>
                  </ul>
                  <button className="mt-2 bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600">
                    Know more
                  </button>
                </div>
                <img src="/images/a3.png" alt="Matchmaking" className="w-60 h-60 object-cover rounded ml-auto hidden md:block" />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <div className="bg-orange-100 border rounded-xl p-3 text-center">
                <h4 className="text-sm font-medium text-gray-800 mb-3">Millions of happy marriages</h4>
                <p>Matched Through</p>
                <div className="flex justify-center">
                  <img src="/images/saathi.jpg" alt="Success Story" className="rounded mb-2 w-20 h-10 object-cover" />
                </div>
                <img src="/images/couple.jpg" alt="Success Story" className="rounded mb-2" />
                <p className="text-xs text-gray-700">Sachin Sati & Nisha</p>
                <button className="mt-2 bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600">
                  Read Their Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatcheDetails;
