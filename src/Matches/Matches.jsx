import React, { useState } from "react";
import MatchesLeft from "./MatchesLeft";
import MatchesRight from "./MatchesRight";

const Matches = () => {
  const [activeTab, setActiveTab] = useState("today");

  const tabs = [
    { id: "today", label: "Today's Matches" },
    { id: "my", label: "My Match" },
    { id: "recent", label: "Recently Viewed" },
    { id: "more", label: "More Matches" },
    { id: "premium", label: "Premium Matches" },
    { id: "nearby", label: "Nearby Matches" },
    { id: "verified", label: "Verified Profiles" },
  ];

  return (
    <>
      <div className="w-full h-[90px]" />
      <div className="w-full h-[80px] px-5 ">
        {/* Scrollable button nav */}
        <nav className="overflow-x-auto scrollbar-hide">
          <ol className="flex space-x-6 md:space-x-8 lg:space-x-10 pb-3">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap text-base font-bold pb-1 border-b-2 ${
                    activeTab === tab.id
                      ? "text-indigo-600 border-indigo-600"
                      : "text-gray-900 border-transparent hover:text-indigo-800"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <h3 className="text-2xl font-bold mt-4">
          4,564 Matches based on your{" "}
          <span className="text-red-500">Preferences</span>
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        <MatchesLeft />
        <MatchesRight />
      </div>
    </>
  );
};

export default Matches;
