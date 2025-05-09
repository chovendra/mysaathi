import React from "react";

const AboutComponents = () => {
  return (
    <div className="w-full h-[45vh] relative  mt-[4.1vw]">
      <div
        className={`w-full h-full bg-cover bg-center`}
        style={{
          backgroundImage: `url("/HeaderImages/3.jpg")`,
          width: "100%",
          height: "100%",
          objectPosition: "center",
          objectFit: "cover",
        }}
      ></div>
      {/* <div className="absolute w-full h-full bg-black top-0 opacity-30 "></div> */}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
<h1 className="text-red-700">Home <span className="text-white"> / About US</span></h1>
<h1 className="text-6xl font-bold">About Us</h1>
      </div>
    </div>
  );
};

export default AboutComponents;
