import React, { useState } from "react";
import MatchesLeft from "./MatchesLeft";
import MatchesRight from "./MatchesRight";

const Matches = () => {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <>
      <div className="w-full h-[90px]"/>
      <div className="w-full h-[80px] px-5 ">
        <nav className="flex mb-5" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3 lg:space-x-10">
            {/* Today's Matches */}
            <li aria-current="page">
              <button
                onClick={() => setActiveTab("today")}
                className={`text-base font-bold md:ml-2 pb-1 border-b-2 ${
                  activeTab === "today"
                    ? "text-indigo-600 border-indigo-600"
                    : "text-gray-900 border-transparent hover:text-indigo-800"
                }`}
              >
                Today's Matches
              </button>
            </li>

            {/* My Match */}
            <li>
              <button
                onClick={() => setActiveTab("my")}
                className={`text-base font-bold pb-1 border-b-2 ${
                  activeTab === "my"
                    ? "text-indigo-600 border-indigo-600"
                    : "text-gray-900 border-transparent hover:text-indigo-800"
                }`}
              >
                My Match
              </button>
            </li>

            {/* Recently Viewed */}
            <li>
              <button
                onClick={() => setActiveTab("recent")}
                className={`text-base font-bold pb-1 border-b-2 ${
                  activeTab === "recent"
                    ? "text-indigo-500 border-indigo-500"
                    : "text-gray-900 border-transparent hover:text-indigo-800"
                }`}
              >
                Recently Viewed
              </button>
            </li>

            {/* More Matches */}
            <li>
              <button
                onClick={() => setActiveTab("more")}
                className={`text-base font-bold pb-1 border-b-2 ${
                  activeTab === "more"
                    ? "text-indigo-600 border-indigo-600"
                    : "text-gray-900 border-transparent hover:text-indigo-800"
                }`}
              >
                More Matches
              </button>
            </li>
          </ol>
        </nav>

        <h3 className="text-2xl font-bold">
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
