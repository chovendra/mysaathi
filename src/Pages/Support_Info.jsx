import React from "react";
import { Link } from "react-router-dom";
const Support_Info = () => {
  return (
   <div className="max-w-screen-2xl m-auto lg:px-[8vw] ">
     <div className=" w-full lg:px-12 px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-blue-900 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">Find your Special </span> Someone
        </h1>
        <h4 className="text-base sm:text-lg md:text-xl mt-2 mb-4">A beautiful beginning to your forever love story starts from here.</h4>
        <p className="text-[#666666] text-base sm:text-lg md:text-xl mt-5 max-w-xl">
          MySaathi is a beautiful platform crafted to bring hearts together and turn stories into lifelong journeys. Here, every connection begins with trust and blossoms into something meaningful. Discover your perfect partner where emotions matter more than profiles. It’s a space where genuine love, understanding, and companionship come first. Because every beautiful life deserves a beautiful partner to walk beside. ❤️
        </p>

        <Link to={"/donate"}>
        <button className="mt-8 py-3 px-6 border-2 cursor-pointer rounded-lg bg-blue-900 text-white flex items-center text-sm sm:text-base hover:bg-blue-600 transition">
          <svg
            className="mr-2"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(247,247,247,1)"
            >
            <path d="M2 8.5C2 5.46243 4.46243 3 7.5 3C9.36016 3 11.0046 3.92345 12 5.33692C12.9954 3.92345 14.6398 3 16.5 3C19.5376 3 22 5.46243 22 8.5C22 16 11.9999 21.4852 11.9999 21.4852C11.9999 21.4852 2 16 2 8.5Z"></path>
          </svg>
          Find Matches
        </button>
            </Link>
      </div>
      <div className="w-30"></div>

      {/* Right Icons Section */}
      <div className="w-full lg:w-[25vw] grid grid-cols-2 lg:gap-y-12 lg:gap-x-10 gap-y-12 justify-items-center ">
        {[
          { img: "heart.svg", label: "Find your true match" },
          { img: "shield.svg", label: "Love starts with trust" },
          { img: "face.svg", label: "Real connections matter" },
          { img: "life.svg", label: "Embrace lifelong journeys" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Circle with image */}
            <div className="w-20 h-20 sm:w-28 sm:h-28  rounded-full flex items-center justify-center bg-rose-400 ">
              <img
                className="w-10 sm:w-14 object-contain "
                src={`/images/${item.img}`}
                alt={`icon-${i}`}
              />
            </div>

            {/* Text below circle */}
            <span className="mt-3 text-center text-sm w-28">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Support_Info;
