import React from "react";

export default function MailBox() {
  return (
    <>
      <div className="w-full h-[90px]" />
      <div className="flex bg-white">
        {/* Sidebar */}
        <div className="w-64 border-r p-6">
          <h2 className="mb-6 text-xl font-semibold">Requests</h2>
          <nav className="space-y-4">
            <a href="#" className="block text-blue-600 font-medium">
              Sent Requests
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Received Requests
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Pending Requests
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Accepted Requests
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-2">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


            <ProfileCard status="pending" />
            <ProfileCard status="pending" />
            <ProfileCard status="declined" />
            <ProfileCard status="accepted" />
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
    <div className="border-8 border-blue-900 rounded-2xl overflow-hidden max-w-xl mx-auto">



      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4">
        <h3 className="text-xl font-medium">Arvind Pandey</h3>
      </div>
      <div className="p-4">
        <div className="flex gap-4">
          <div className="w-24 h-28 flex-shrink-0">
            <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
              <img
                src="/public/images/profile.png"
                alt="Profile"
                width="96"
                height="112"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile details */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              <span>26 yrs - 5'6" - Brahmin</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <span>B. Tech - Software Professional - Delhi</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-900"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                <path d="M13 5v2" />
                <path d="M13 17v2" />
                <path d="M13 11v2" />
              </svg>
              <span>INR 500000 Per Annum</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex border-t">
        {status !== "pending" && (
          <div
            className={`w-1/2 p-3 text-center ${
              status === "accepted" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status === "accepted" ? "Accepted" : "Declined"}
          </div>
        )}
        {status === "pending" && (
          <div className="w-1/2 p-3 text-center text-gray-500">Pending</div>
        )}
        <div className="w-1/2 border-l p-3 text-center">
          <button className="text-blue-600 hover:text-blue-800">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
