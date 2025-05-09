// import React, { useRef , useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardsContainer from "../Pages/CardsContainer";
import Cards from "../components/Cards";
import DonateFillter from "../components/DonateFillter";

// const causes = [
//   { label: "ALL", icon: "🩺" },
//   { label: "ANIMALS", icon: "🐾" },
//   { label: "EDUCATION", icon: "🎓" },
//   { label: "CHILDREN", icon: "😃" },
//   { label: "HUNGER", icon: "🍲" },
//   { label: "HANDICAP", icon: "♿" },
// ];

const Cause = () => {
  // const containerRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(null);

 

  return (
    <div className="w-full lg:p-[8vw] px-5 bg-[#FDF5F4]">
        <div className="w-full px-5 bg-[#fef7f4] text-center">
      {/* <h2 className="text-3xl font-bold text-black">
        Donate for a <span className="text-red-500">Cause</span>!
      </h2>
      <div className="w-20 h-1 bg-red-500 mx-auto my-2 rounded"></div> */}
      {/* <div className="relative mt-8 w-full">
     
      <div
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
      </div>


     
    </div> */}
    </div>
   <div className="flex grid-cols-4 gap-5">
  <Cards />
   
   
   </div>
    </div>
  );
};

export default Cause;