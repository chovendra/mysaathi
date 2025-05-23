import React, { useState } from "react";
import { FaUser, FaBriefcase, FaRupeeSign } from "react-icons/fa";

export default function MailBox() {
  const [activeTab, setActiveTab] = useState("sent");

  const tabs = [
    { id: "sent", label: "Sent Requests" },
    { id: "received", label: "Received Requests" },
    { id: "pending", label: "Pending Requests" },
    { id: "accepted", label: "Accepted Requests" },
  ];

  return (
    <>
      <div className="w-full h-[95px]" />

      <div className="flex flex-col md:flex-row bg-white">
  {/* Sidebar */}
  <div className="w-full md:w-64 border-b md:border-r p-4 md:p-6">
    <h2 className="mb-4 text-xl font-semibold">Requests</h2>
    <nav className="flex md:block md:space-y-4 space-x-4 md:space-x-0 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`block font-medium cursor-pointer ${
            activeTab === tab.id
              ? "text-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  </div>

        {/* Main content */}
        <div className="flex-1 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProfileCard status="pending" />
            <ProfileCard status="pending" />
            <ProfileCard status="declined" />
            <ProfileCard status="accepted" />
            <ProfileCard status="declined" />
            <ProfileCard status="accepted" />
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileCard({ status }) {
  return (
    <div className="border-8 border-blue-900 rounded-2xl overflow-hidden w-full sm:max-w-xl mx-auto">
      <div className="bg-gradient-to-r from-blue-900 to-blue-900 text-white p-4">
        <h3 className="text-xl font-medium">Arvind Pandey</h3>
      </div>

      <div className="p-4">
        <div className="flex sm:flex-row gap-4">
          <div className="w-22 h-28 sm:w-32 sm:h-32 flex-shrink-0 bg-red-900 rounded-md overflow-hidden">
            <img
              src="/images/profile.png"
              alt="Profile"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <div className="flex-1 space-y-2 text-[15px]">
            <div className="flex items-center gap-2">
              <FaUser className="text-blue-900" />
              <span>26 yrs - 5'6" - Brahmin</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-blue-900" />
              <span>B. Tech - Software Professional - Delhi</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRupeeSign className="text-blue-900" />
              <span>INR 500000 Per Annum</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-t border-gray-200 text-[14px]">
        {status !== "pending" && (
          <div
            className={`w-1/2 p-3 text-center font-semibold ${
              status === "accepted" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status === "accepted" ? "Accepted" : "Declined"}
          </div>
        )}
        {status === "pending" && (
          <div className="w-1/2 p-3 text-center text-gray-500">Pending</div>
        )}
        <div className="w-1/2 border-l p-3 text-center border-gray-200">
          <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

