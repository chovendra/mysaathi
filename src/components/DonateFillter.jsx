import React, { useRef, useState } from 'react'
// const causes = [
//     { label: "ALL", icon: "🩺" },
//     { label: "ANIMALS", icon: "🐾" },
//     { label: "EDUCATION", icon: "🎓" },
//     { label: "CHILDREN", icon: "😃" },
//     { label: "HUNGER", icon: "🍲" },
//     { label: "HANDICAP", icon: "♿" },
//   ];
const DonateFillter = () => {
    const containerRef = useRef(null);
      const [activeIndex, setActiveIndex] = useState(null);
    
  return (
    <div className="w-full px-5 py-10 bg-[#fef7f4] text-center">
    <h2 className="text-3xl font-bold text-black">
      Profiles 
      {/* <span className="text-red-500">Cause</span>! */}
    </h2>
    <div className="w-20 h-1 bg-blue-900 mx-auto my-2 rounded"></div>

    <div className="relative mt-8 w-full flex items-center justify-center">
    {/* Left Button */}
   

    {/* Scrollable Cards */}
    {/* <div
      ref={containerRef}
      className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 px-4 md:px-[5vw] pb-2"
    >
      {causes.map((cause, idx) => (
        <div
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`min-w-[120px] sm:min-w-[140px] flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl shadow-md border transition-all duration-300 cursor-pointer hover:scale-105
            ${
              idx === activeIndex
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-200"
            }`}
        >
          <div className="text-3xl sm:text-4xl mb-2">{cause.icon}</div>
          <span className="text-sm sm:text-base font-medium text-gray-700 text-center">
            {cause.label}
          </span>
        </div>
      ))}
    </div> */}

    {/* Right Button */}
   
  </div>
  </div>
  )
}

export default DonateFillter