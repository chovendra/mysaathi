import React from "react";
import "./HorizontalScroll.css"; // Animation aur gradient ke liye extra CSS
// import NavBar from "./NavBar"
// import logo1 from '/public/images/logo.png';
// import logo2 from '/public/images/c_logo2.png';
// import logo3 from '/public/images/C_logo3.png';
// import logo4 from '/public/images/C_logo4.png';
// import logo5 from '/public/images/C_logo5.png';
import Footer from "./Footer";
import { Link, Links } from "react-router";

// const logos = [logo1, logo2, logo3, logo4, logo5,
//   logo1, logo2, logo3, logo4, logo5
// ];


// const logos = [
//   "/images/Collaboration logo1.png",
//   "../assets/images/c_logo2.png",
//   "../assets/images/C_logo3.png",
//   "../assets/images/C_logo4.png",
//   "../assets/images/C_logo5.png",
  
// ];
const HorizontalScroll = () => {
  return (
    <div className="lg:w-full w-full  lg:h-auto bg-[#F3F7F5]">
      <h1 className="text-center text-4xl py-5 text-red-500 font-bold"><span className="text-black">Our</span> Collaborations</h1>
      <div className="w-30 mb-5 bg-red-500 h-1 rounded-full m-auto"></div>

      <p className="text-center lg:w-[850px] text-lg m-auto">
        Trust is trusted by leading organizations and CSRs for its transparent
        operations and timely updates. We ensure accountability at every step,
        keeping our partners informed about the impact of their contributions.
      </p>

      <div className="lg:slider relative lg:w-[1000px] lg:lg:mt-[5vw] h-[150px] lg:h-[150px] items-center justify-center flex overflow-hidden mx-auto">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-[200px] z-10" />
      <div className="absolute right-0 top-0 h-full w-[200px] z-10" />

      {/* Slide Track */}
      <div className="slide-track flex items-center justify-center w-[calc(250px*14)] animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="slide w-[250px] h-[100px] flex items-center justify-center">
            <img src={logo} alt={`logo-${index}`} className="h-[150px] w-[250px] object-contain" />
          </div>
        ))}
      </div>
    </div>

    <div className="w-full bg-white mt-10 lg:mt-[10vh] flex flex-col lg:flex-row">
  {/* Image Section */}
  <div className="w-full lg:w-[50%] h-[300px] lg:h-[60vh] lg:relative lg:left-[10vw] flex items-center justify-center">
    <img
      className="w-[90%] h-[90%] lg:w-[80%] lg:h-[80%] object-cover rounded-2xl shadow-xl"
      src="/square/2.jpg"
      alt="support"
    />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-[50%] bg-[#F8F4E9] flex flex-col items-center justify-center space-y-4 p-6 lg:p-0 text-center">
    <h1 className="text-2xl font-bold">Make the world better with us</h1>
    <p className="text-zinc-500 max-w-[90%] md:max-w-[70%]">
      Every effort counts. Together, we can create meaningful change.
      Even the smallest contributions make a big impact.
    </p>

    <div className="flex flex-col w-full  items-center ">
    <Link to={"/donate"}>
    
      <button className="border-2 border-white rounded-lg lg:w-[13vw] px-6 bg-[#E53935] text-white py-2">
        Donate Now
      </button>
    </Link>
      <br />
      <Link to={"/contact"}>
      <button className="border-2 border-white rounded-lg lg:w-[13vw] px-6 bg-[#E53931] text-white py-2">
        Collaborate with Us
      </button>
      </Link>

      <br />
      <Link>
      <button className="border-2 border-white rounded-lg lg:w-[13vw] px-6 bg-white text-red-500 py-2">
        Career
      </button>
      </Link>
    </div>
  </div>
</div>

{/* <Footer /> */}
    </div>
  );
};

export default HorizontalScroll;
