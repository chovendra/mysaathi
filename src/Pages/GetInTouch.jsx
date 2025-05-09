import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Get in <span className="text-blue-900">Touch</span>!
        </h1>
        <div className="w-24 h-1 bg-blue-900 rounded-full mx-auto mt-4"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4">
        {/* Left Section - Contact Info Cards */}
        <div className="w-full md:w-2/5 flex flex-col gap-6">
          <div className="bg-white shadow-lg rounded-xl flex items-center gap-4 p-5 hover:shadow-2xl transition-all">
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full">
              <img
                src="/images/WhatsApp.png"
                alt="WhatsApp"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Connect with us on WhatsApp
              </h3>
              <p className="text-blue-900 text-sm">+91-8305425799</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl flex items-center gap-4 p-5 hover:shadow-2xl transition-all">
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full">
              <img
                width="42"
                height="42"
                src="https://img.icons8.com/external-nawicon-flat-nawicon/64/external-email-communication-nawicon-flat-nawicon-2.png"
                alt="external-email-communication-nawicon-flat-nawicon-2"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Email us now
              </h3>
              <p className="text-blue-900 text-sm">trashimanoriya@gmail.com</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl flex items-center gap-4 p-5 hover:shadow-2xl transition-all">
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full">
              <img
                width="42"
                height="42"
                src="https://img.icons8.com/external-flat-juicy-fish/60/external-phone-contact-us-flat-flat-juicy-fish-2.png"
                alt="external-phone-contact-us-flat-flat-juicy-fish-2"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Give us a call
              </h3>
              <p className="text-blue-900 text-sm">+91-8305425799</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl flex items-center gap-4 p-5 hover:shadow-2xl transition-all">
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full">
              <img
                width="42"
                height="42"
                className="w-full h-full object-cover object-center"
                src="https://img.icons8.com/color/96/place-marker--v1.png"
                alt="place-marker--v1"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Our Address
              </h3>
              <p className="text-blue-900 text-sm">
                704, 7th Floor, Palm Court, MP Nagar, Zone 2, Near DB Mall,
                Bhopal, Madhya Pradesh – 462011
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-3/5 bg-white p-8 shadow-lg rounded-xl">
          <h1 className="text-2xl  font-bold">
            Submit this form to get a{" "}
            <span className="text-blue-900">CallBack</span>!
          </h1>

          <form className="flex flex-col gap-4">
            <br />
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
