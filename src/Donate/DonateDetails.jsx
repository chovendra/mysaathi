import React, { useState } from "react";
import TextMarquee from "../components/TextMarquee";
import { SiPhonepe } from "react-icons/si";
import { LuHeartHandshake, LuMessageCircleHeart } from "react-icons/lu";
import { FaGooglePay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "./DonateDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdOutlineSecurity } from "react-icons/md";
import Cards from "../components/Cards";
import { Link, useParams } from "react-router";


const DonateDetails = ({ strokeWidth = 8, percentage = 40 } ) => {

  const [activeSection, setActiveSection] = useState("Story");


  const params =  useParams()
  console.log(params) 
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
    M 50,50 m 0,-${radius}
    a ${radius},${radius} 0 1 1 0,${2 * radius}
    a ${radius},${radius} 0 1 1 0,-${2 * radius}
  `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: "#007dbc",
    strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };
  const slides = [
    { id: 1, image: "/images/Slider2.jpg" },
    { id: 2, image: "/images/Slider2.jpg" },
    { id: 3, image: "/images/Slider2.jpg" },
  ];
  return (
    
    <>
      <div className="bg-white pt-10">
        <div className="w-full h-full pt-10"></div>
        <section className="w-full">
          <TextMarquee />
          <h1 className="text-2xl bg-white w-[80%] m-auto font-bold text-start">
            Bentley Owen Raphael is a brave 9-year-old boy fighting the toughest
            battle of his life. Diagnosed with relapsed Acute Lymphoblastic
            Leukaemia.
          </h1>
        </section>
        <div className="w-full h-screen flex p-4">
          {/* Left Section */}
          <div className="example lg:w-[60%] w-full flex flex-col overflow-y-auto overflow-x-hidden">
            {/* Swiper Section */}
            <div className="lg:w-full lg:min-h-[75vh] w-full rounded-2xl">
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]} // Add Autoplay module
                loop={true}
                autoplay={{ delay: 3000 }}
                className="mySwiper rounded-2xl"
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="w-full h-[75vh] rounded-2xl object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Raised Section */}
            <div className="w-full flex justify-center items-center ">
              <div className="grid grid-cols-3 items-center justify-start">
                <div className="flex  justify-center items-center p-1 lg:p-6">
                  <svg
                    className="w-24 h-24 md:w-32 md:h-32"
                    viewBox="0 0 100 100"
                  >
                    {/* Background Circle (Trail) */}
                    <path
                      d={pathDescription}
                      strokeWidth={strokeWidth}
                      fillOpacity={0}
                      className="stroke-gray-300"
                    />

                    {/* Progress Circle (Path) */}
                    <path
                      d={pathDescription}
                      strokeWidth={strokeWidth}
                      fillOpacity={0}
                      style={progressStyle}
                    />

                    {/* Percentage Text */}
                    <text
                      x={50}
                      y={50}
                      className="fill-[#007dbc] text-xl md:text-2xl font-bold"
                      dominantBaseline="central"
                      textAnchor="middle"
                    >
                      {`${percentage}%`}
                    </text>
                  </svg>
                </div>
                <div className="lg:w-full w-[100vw] ">
                  <h1 className="text-xl font-bold">Raised</h1>
                  <h2 className="text-lg ">
                    Rs.50,000 {" "}
                    
                    <span className="font-semibold">of Rs. 500,000</span>
                  </h2>
                </div>
              </div>
              <div>
                <a className="lg:px-5 lg:py-3 bg-gray-200 lg:rounded-4xl w-[20%] " href="#">
                  1000 Donors
                </a>
              </div>
            </div>

            {/* Donor Cards */}
            <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:h-[450px]">
             
                <div className="lg:w-[45%] mb-2 lg:mb-0 ">
                  <div className="border gap-5 p-6 border-zinc-200 bg-[#F0F0F0]  flex space-x-4 py-2">
                    <div className="avatar avatar-online rounded-full">
                      <div className="lg:w-[70px] w-[50px] h-[50px] mr-2 lg:h-[70px] rounded-full">
                        <img
                          className="w-full rounded-full h-full object-cover object-center"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                          alt="Donor Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-thin text-zinc-400">Created by</h1>
                      <span className="font-medium">Name@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[45%] ">
                  <div className="border gap-5 p-6 border-zinc-300 bg-[#F0F0F0]  flex space-x-4 py-2">
                    <div className="avatar avatar-online rounded-full">
                      <div className="lg:w-[70px] w-[50px] h-[50px] mr-2 lg:h-[70px] rounded-full">
                        <img
                          className="w-full rounded-full h-full object-cover object-center"
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                          alt="Donor Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-thin text-zinc-400">Created by</h1>
                      <span className="font-medium">Name@gmail.com</span>
                    </div>
                  </div>
                </div>
              
            </div>

           {/* Buttons Section */}
  <div className="w-full h-[200px] flex items-center text-center justify-between mt-15 mb-15 lg:w-full lg:h-[200px] lg:flex lg:items-center lg:text-center lg:justify-between lg:mt-15 lg:mb-15 ">
    {["Story", "Document", "Updates"].map((btn, index) => (
      <button
        key={index}
        onClick={() => setActiveSection(btn)}
        className={`lg:px-10 lg:py-3 px-5 py-3 lg:w-[13vw] text-center rounded-lg shadow-xl ${
          activeSection === btn
            ? "bg-red-500 text-white"
            : "border border-red-400 bg-[#F0F0F0]"
        }`}
      >
        {btn}
      </button>
    ))}
  </div>

  {/* Conditionally Render Sections */}
  {activeSection === "Story" && (
    <article className="w-full h-auto  p-5">
      <p className="text-lg">
        {/* Your Story Content */}
        Give Bentley a Chance to Live
        <br />
        <br />
        Bentley Owen Raphael is a brave 9-year-old boy fighting the
      toughest battle of his life. Diagnosed with relapsed Acute
      Lymphoblastic Leukaemia, he underwent a stem cell transplant
      with his mother as the donor. Despite the initial success,
      Bentley’s condition took a devastating turn. He is now in the
      ICU, struggling with kidney failure, uncontrollable seizures,
      and severe hypertension.
        {/* ... rest of your story content ... */}
        <br />
      <br />
      His parents are doing everything they can, but the hospital bill
      has climbed to RM650,000—an amount they can’t afford. Watching
      their son fight for his life while facing this financial burden
      is heartbreaking.
      <br />
      <br />
      Bentley deserves a chance to grow up, laugh, and live a full
      life. Your kindness can give him that chance. Please donate and
      help this family through their darkest hour. Every contribution
      counts.
      </p>
      <br />
    <p className="text-lg">
      The Impact of Your Support
      <br />
      <br />
      Your generous contributions will directly help with:
      <br />
      ✅ Critical Surgeries & Emergency Care
      <br />
      ✅ Hospital Expenses & Essential Medications
      <br />
      ✅ Physiotherapy & Long-Term Recovery
      <br />
      <br />
      Every donation brings hope and healing—support today! 💙✨
    </p>
    </article>
  )}

  {activeSection === "Document" && (
    <div className="w-full h-auto p-10 shadow-lg">
      <h1 className="text-2xl text-black">Document</h1>
      <hr className="w-full mb-5" />
      <img
        src="https://images.unsplash.com/photo-1584445584400-1a7cc5de77ae?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Document"
      />
    </div>
  )}

  {activeSection === "Updates" && (
    <>
      <div className="w-full mt-5 space-y-6">
        <h1 className="text-3xl">Updates</h1>
        <p className="text-lg">
        Feel free to reach out to the campaigner for the latest update
        on this fundraiser.
        </p>
        <h3 className="text-2xl text-red-500">
          <span>#1 | </span> 27/02/2025
        </h3>
      </div>
      {/* Update Images */}
      <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:h-[40vh] w-full h-[100vh]">
        <div className="lg:w-[45%] lg:h-full w-full mb-2">
          <img
            className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="lg:w-[45%] lg:h-full w-full mb-2">
          <img
            className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg"
            src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
      {/* Update Details */}
      <p className="text-xl py-5">
    Dear Donors,
    <br />
    <br />
    We at Annapurna Seva & Prerna Foundation extend our heartfelt
    gratitude for your generous contributions. Your support is
    bringing nourishment, care, and hope to those in need. Your
    invaluable support ensures that families in need receive
    nutritious meals and essentials to sustain their well-being.
    <br />
    <br />
    We are truly grateful for your generosity—it continues to bring
    positive change to so many lives. Thank you for standing with us
    in this mission
    <br /> <br />
    Warm Regards,Annapurna Seva & Prerna Foundation
  </p>
    </>
  )}
            {/* Contributors Section */}
            <div className="w-full bg-[#FFFAFA] p-10 mt-10">
              <h1 className="text-2xl font-bold">Contributors</h1>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="border-b p-6 border-t-zinc-500 border-b-zinc-500 flex space-x-4 py-2"
                >
                  <div className="avatar avatar-online rounded-full">
                    <div className="w-[70px] h-[70px] rounded-full">
                      <img
                        className="w-full rounded-full h-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
                        alt="Contributor Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold">Sanyogita</h1>
                    <span className="font-light">$1000</span>
                    <p className="font-light text-zinc-400">Name@gmail.com</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center bg-[#FFFAFA]">
            <Link to={""}>
            <button className=" text-red-500 border-2 hover:text-white px-4 py-2 rounded hover:bg-red-700 transition">
              View All Supporters 
            </button>
          </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[40%] lg:block hidden lg:visible invisible bg-rose-50 p-5 px-10 ">
            <div className="w-full flex items-center  justify-between text-lg">
              <h1
                className="font-bold
            "
              >
                Donate
              </h1>
              <h3 className="underline">1000 Donars</h3>
            </div>
            <div className="w-  -ml-5">
              <div className="w-full h-[220px] flex flex-col justify-center items-center ">
                <div className="grid grid-cols-3  items-center justify-start">
                  <div className="flex justify-center items-center p-4">
                    <svg
                      className="w-24 h-24 md:w-32 md:h-32"
                      viewBox="0 0 100 100"
                    >
                      {/* Background Circle (Trail) */}
                      <path
                        d={pathDescription}
                        strokeWidth={strokeWidth}
                        fillOpacity={0}
                        className="stroke-gray-300"
                      />

                      {/* Progress Circle (Path) */}
                      <path
                        d={pathDescription}
                        strokeWidth={strokeWidth}
                        fillOpacity={0}
                        style={progressStyle}
                      />

                      {/* Percentage Text */}
                      <text
                        x={50}
                        y={50}
                        className="fill-[#007dbc] text-xl md:text-2xl font-bold"
                        dominantBaseline="central"
                        textAnchor="middle"
                      >
                        {`${percentage}%`}
                      </text>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h1 className="text-xl font-bold">Raised</h1>
                    <h2 className="text-lg">
                      Rs.50,000 of{" "}
                      <span className="font-semibold">Rs. 500,000</span>
                    </h2>
                  </div>
                </div>
                <button className="text-white bg-red-500 px-6 py-4 rounded-full w-1/2 text-center m-auto shadow-2xl">
                  {" "}
                  Donate Now
                </button>
              </div>
            </div>
            <div className="pt-10">
              <h1 className="text-zinc-300 text-lg">Give Through:</h1>
              <div>
                <h1 className="font-semibold text-xl py-5">UPI</h1>
                <div className="w-full flex items-center justify-between  h-[15px] mb-10 mt-10">
                  <div>
                  {/* <img width="48" height="48" src="https://img.icons8.com/material-rounded/48/phone-pe.png" alt="phone-pe"/> */}
                  <SiPhonepe  className="text-5xl text-[#673AB7]"/>
                    <h1>PhonePe</h1>
                  </div>
                  <div className="">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/google-pay.png"
                      alt="google-pay"
                    />
                    <h1>G Pay</h1>
                  </div>

                  <div>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/96/bhim.png"
                      alt="bhim"
                    />
                    Bhim UPI
                  </div>
                  <div>
                    <img
                      width="50"
                      height="64"
                      src="https://img.icons8.com/puffy-filled/64/more--v3.png"
                      alt="more--v3"
                    />
                    Others
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="capitalize py-5 font-semibold text-xl">
                Other Options
              </h1>

              <div>
                <div className="w-full text-lg py-10 flex items-center justify-between h-[15px]">
                  <div>
                    <img
                      width="48"
                      height="96"
                      src="https://img.icons8.com/color/96/paytm.png"
                      alt="paytm"
                    />
                    Paytm
                  </div>
                  <div>
                    <img
                      width="44"
                      height="94"
                      src="https://img.icons8.com/3d-fluency/94/card-verification-value.png"
                      alt="card-verification-value"
                    />
                    Cr/Dr Cards
                  </div>
                  <div>
                    <img
                      width="48"
                      height="64"
                      src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-online-banking-finance-kiranshastry-lineal-kiranshastry-1.png"
                      alt="external-online-banking-finance-kiranshastry-lineal-kiranshastry-1"
                    />
                    Net Banking
                  </div>
                  <div>
                    <img
                      width="48"
                      height="96"
                      src="https://img.icons8.com/color/96/gift-card.png"
                      alt="gift-card"
                    />
                    Gift Cards
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section end */}
        </div>
        <div className="w-full h-[50vh] bg-[#FBFAF8] p-10">
          <h1 className="text-2xl">
            Your easy, powerFul, and trusted home for help
          </h1>
          <div className="lg:w-full lg:h-full lg:flex space-y-5 w-full">
            <div className="lg:w-[33.4%] lg:h-full   lg:flex lg:flex-1/2 lg:items-center inline-flex lg:justify-center w-full p-3">
              <LuMessageCircleHeart className="lg:text-[5vw] font-thin text-[13vw] mr-3" />
              <h2>
                Easy <br />
                <span>Donate quickly and easily</span>
              </h2>
            </div>
            <div className="lg:w-[33.4%] lg:h-full  p-3 lg:flex lg:flex-1/2 lg:items-center inline-flex lg:justify-center w-full">
              <LuHeartHandshake className="lg:text-[5vw] mr-5 font-thin text-[15vw]" />
              <h2>
                Powerful <br />
                <span>
                  Send help right to the people and causes you care about{" "}
                </span>
              </h2>
            </div>
            <div className="lg:w-[33.4%] lg:h-full p-3 lg:flex lg:flex-1/2 lg:items-center inline-flex lg:justify-center w-full">
              <MdOutlineSecurity className="lg:text-[5vw] mr-5 font-thin text-[12vw]" />
              <h2>
                Trusted <br />
                <span>Your donation is protected with us.</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-10 p-10">
          <h1 className="text-4xl">
            Support <span className="text-red-500"> More Causes</span>
          </h1>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default DonateDetails;


// import React from "react";
// import TextMarquee from "../components/TextMarquee";
// import { SiPhonepe } from "react-icons/si";
// import { LuHeartHandshake, LuMessageCircleHeart } from "react-icons/lu";
// import { FaGooglePay } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./DonateDetails.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { MdOutlineSecurity } from "react-icons/md";
// import Cards from "../components/Cards";

// const DonateDetails = ({ strokeWidth = 8, percentage = 40 }) => {
//   const radius = 50 - strokeWidth / 2;
//   const pathDescription = `
//     M 50,50 m 0,-${radius}
//     a ${radius},${radius} 0 1 1 0,${2 * radius}
//     a ${radius},${radius} 0 1 1 0,-${2 * radius}
//   `;

//   const diameter = Math.PI * 2 * radius;
//   const progressStyle = {
//     stroke: "#007dbc",
//     strokeLinecap: "round",
//     strokeDasharray: `${diameter}px ${diameter}px`,
//     strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
//   };

//   const slides = [
//     { id: 1, image: "/images/Slider2.jpg" },
//     { id: 2, image: "/images/Slider2.jpg" },
//     { id: 3, image: "/images/Slider2.jpg" },
//   ];

//   return (
//     <>
//       <div className="bg-white pt-4 sm:pt-6 md:pt-10">
//         <div className="w-full h-10 sm:h-16 md:h-24"></div>
//         <section className="w-full">
//           <TextMarquee />
//           <h1 className="text-xl sm:text-2xl md:text-3xl bg-white w-[90%] sm:w-[85%] md:w-[80%] m-auto font-bold text-start py-4 sm:py-6">
//             Bentley Owen Raphael is a brave 9-year-old boy fighting the toughest
//             battle of his life. Diagnosed with relapsed Acute Lymphoblastic
//             Leukaemia.
//           </h1>
//         </section>
//         <div className="w-full flex flex-col lg:flex-row p-4 sm:p-6 md:p-10">
//           {/* Left Section */}
//           <div className="w-full lg:w-[60%] flex flex-col overflow-y-auto">
//             {/* Swiper Section */}
//             <div className="w-full lg:min-h-[75vh] rounded-2xl mb-6">
//               <Swiper
//                 navigation={true}
//                 modules={[Navigation, Autoplay]}
//                 loop={true}
//                 autoplay={{ delay: 3000 }}
//                 className="mySwiper rounded-2xl"
//               >
//                 {slides.map((slide) => (
//                   <SwiperSlide key={slide.id}>
//                     <img
//                       src={slide.image}
//                       alt={`Slide ${slide.id}`}
//                       className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] rounded-2xl object-cover"
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             {/* Raised Section */}
//             <div className="w-full h-auto sm:h-[300px] md:h-[400px] flex justify-center items-center mb-6">
//               <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-start gap-4">
//                 <div className="flex justify-center items-center p-2 sm:p-4">
//                   <svg
//                     className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
//                     viewBox="0 0 100 100"
//                   >
//                     <path
//                       d={pathDescription}
//                       strokeWidth={strokeWidth}
//                       fillOpacity={0}
//                       className="stroke-gray-300"
//                     />
//                     <path
//                       d={pathDescription}
//                       strokeWidth={strokeWidth}
//                       fillOpacity={0}
//                       style={progressStyle}
//                     />
//                     <text
//                       x={50}
//                       y={50}
//                       className="fill-[#007dbc] text-lg sm:text-xl md:text-2xl font-bold"
//                       dominantBaseline="central"
//                       textAnchor="middle"
//                     >
//                       {`${percentage}%`}
//                     </text>
//                   </svg>
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
//                     Raised
//                   </h1>
//                   <h2 className="text-base sm:text-lg md:text-xl">
//                     Rs.50,000 of{" "}
//                     <span className="font-semibold">Rs. 500,000</span>
//                   </h2>
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <a
//                     className="px-3 sm:px-5 py-2 sm:py-3 bg-gray-200 rounded-full text-sm sm:text-base"
//                     href="#"
//                   >
//                     1000 Donors
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Donor Cards */}
//             <div className="w-full flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[450px] mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//               {[...Array(2)].map((_, index) => (
//                 <div key={index} className="w-full sm:w-[45%]">
//                   <div className="border p-4 sm:p-6 border-zinc-300 bg-[#F0F0F0] flex space-x-4 py-2">
//                     <div className="avatar avatar-online rounded-full">
//                       <div className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full">
//                         <img
//                           className="w-full rounded-full h-full object-cover object-center"
//                           src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
//                           alt="Donor Avatar"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <h1 className="font-thin text-zinc-400 text-sm sm:text-base">
//                         Created by
//                       </h1>
//                       <span className="font-medium text-sm sm:text-base">
//                         Name@gmail.com
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons Section */}
//             <div className="w-full h-auto flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//               {["Story", "Document", "Updates"].map((btn, index) => (
//                 <button
//                   key={index}
//                   className={`px-4 sm:px-10 py-2 sm:py-3 text-center w-full sm:w-auto rounded-lg shadow-xl ${
//                     btn === "Story"
//                       ? "bg-red-500 text-white"
//                       : "border border-red-400 bg-[#F0F0F0] text-black"
//                   }`}
//                 >
//                   {btn}
//                 </button>
//               ))}
//             </div>

//             {/* Story Section */}
//             <article className="w-full h-auto p-4 sm:p-5 mb-6">
//               <p className="text-base sm:text-lg">
//                 Give Bentley a Chance to Live
//                 <br />
//                 <br />
//                 Bentley Owen Raphael is a brave 9-year-old boy fighting the
//                 toughest battle of his life. Diagnosed with relapsed Acute
//                 Lymphoblastic Leukaemia, he underwent a stem cell transplant
//                 with his mother as the donor. Despite the initial success,
//                 Bentley’s condition took a devastating turn. He is now in the
//                 ICU, struggling with kidney failure, uncontrollable seizures,
//                 and severe hypertension.
//                 <br />
//                 <br />
//                 His parents are doing everything they can, but the hospital bill
//                 has climbed to RM650,000—an amount they can’t afford. Watching
//                 their son fight for his life while facing this financial burden
//                 is heartbreaking.
//                 <br />
//                 <br />
//                 Bentley deserves a chance to grow up, laugh, and live a full
//                 life. Your kindness can give him that chance. Please donate and
//                 help this family through their darkest hour. Every contribution
//                 counts.
//               </p>
//               <br />
//               <p className="text-base sm:text-lg">
//                 The Impact of Your Support
//                 <br />
//                 <br />
//                 Your generous contributions will directly help with:
//                 <br />
//                 ✅ Critical Surgeries & Emergency Care
//                 <br />
//                 ✅ Hospital Expenses & Essential Medications
//                 <br />
//                 ✅ Physiotherapy & Long-Term Recovery
//                 <br />
//                 <br />
//                 Every donation brings hope and healing—support today! 💙✨
//               </p>
//             </article>

//             {/* Document */}
//             <div className="w-full h-auto p-4 sm:p-10 mb-6 shadow-lg">
//               <h1 className="text-xl sm:text-2xl text-black">Document</h1>
//               <hr className="w-full my-4" />
//               <img
//                 src="https://plus.unsplash.com/premium_vector-1714148691911-5e79c7aa7454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt=""
//                 className="w-full h-auto object-cover rounded-lg"
//               />
//             </div>

//             {/* Updates */}
//             <div className="w-full mt-6 space-y-4 mb-6">
//               <h1 className="text-2xl sm:text-3xl">Updates</h1>
//               <p className="text-base sm:text-lg">
//                 Feel free to reach out to the campaigner for the latest update
//                 on this fundraiser.
//               </p>
//               <h3 className="text-xl sm:text-2xl text-red-500">
//                 <span>#1 | </span> 27/02/2025
//               </h3>
//             </div>

//             {/* Updates Images */}
//             <div className="w-full flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[40vh] mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//               <div className="w-full sm:w-[45%] h-[30vh] sm:h-full">
//                 <img
//                   className="w-full h-full object-cover object-center rounded-xl shadow-lg"
//                   src="https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt=""
//                 />
//               </div>
//               <div className="w-full sm:w-[45%] h-[30vh] sm:h-full">
//                 <img
//                   className="w-full h-full object-cover object-center rounded-xl shadow-lg"
//                   src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D"
//                   alt=""
//                 />
//               </div>
//             </div>

//             {/* Update Details */}
//             <p className="text-lg sm:text-xl py-4 sm:py-5 mb-6">
//               Dear Donors,
//               <br />
//               <br />
//               We at Annapurna Seva & Prerna Foundation extend our heartfelt
//               gratitude for your generous contributions. Your support is
//               bringing nourishment, care, and hope to those in need. Your
//               invaluable support ensures that families in need receive
//               nutritious meals and essentials to sustain their well-being.
//               <br />
//               <br />
//               We are truly grateful for your generosity—it continues to bring
//               positive change to so many lives. Thank you for standing with us
//               in this mission
//               <br />
//               <br />
//               Warm Regards, Annapurna Seva & Prerna Foundation
//             </p>

//             {/* Contributors Section */}
//             <div className="w-full bg-[#FFFAFA] p-4 sm:p-10 mt-6">
//               <h1 className="text-xl sm:text-2xl font-bold">Contributors</h1>
//               {[...Array(4)].map((_, index) => (
//                 <div
//                   key={index}
//                   className="border-b p-4 sm:p-6 border-t-zinc-500 border-b-zinc-500 flex space-x-4 py-2"
//                 >
//                   <div className="avatar avatar-online rounded-full">
//                     <div className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full">
//                       <img
//                         className="w-full rounded-full h-full object-cover object-center"
//                         src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
//                         alt="Contributor Avatar"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <h1 className="font-bold text-sm sm:text-base">Sanyogita</h1>
//                     <span className="font-light text-sm sm:text-base">$1000</span>
//                     <p className="font-light text-zinc-400 text-xs sm:text-sm">
//                       Name@gmail.com
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center justify-center bg-[#FFFAFA] py-4">
//               <button className="border-2 py-2 sm:py-4 w-[80%] sm:w-[40%] m-auto rounded-xl border-red-300 text-lg sm:text-2xl text-red-300 hover:bg-red-300 hover:text-white transition">
//                 View All Supporters
//               </button>
//             </div>
//           </div>

//           {/* Right Section (Hidden on mobile/tablet, visible on desktop) */}
//           <div className="hidden lg:block lg:w-[40%] bg-white p-4 sm:p-5 md:p-10">
//             <div className="w-full flex items-center justify-between text-lg sm:text-xl">
//               <h1 className="font-bold">Donate</h1>
//               <h3 className="underline">1000 Donors</h3>
//             </div>
//             <div className="w-full mt-4">
//               <div className="w-full h-[200px] sm:h-[220px] flex flex-col justify-center items-center">
//                 <div className="grid grid-cols-1 sm:grid-cols-3 items-center justify-start gap-4">
//                   <div className="flex justify-center items-center p-2 sm:p-4">
//                     <svg
//                       className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
//                       viewBox="0 0 100 100"
//                     >
//                       <path
//                         d={pathDescription}
//                         strokeWidth={strokeWidth}
//                         fillOpacity={0}
//                         className="stroke-gray-300"
//                       />
//                       <path
//                         d={pathDescription}
//                         strokeWidth={strokeWidth}
//                         fillOpacity={0}
//                         style={progressStyle}
//                       />
//                       <text
//                         x={50}
//                         y={50}
//                         className="fill-[#007dbc] text-lg sm:text-xl md:text-2xl font-bold"
//                         dominantBaseline="central"
//                         textAnchor="middle"
//                       >
//                         {`${percentage}%`}
//                       </text>
//                     </svg>
//                   </div>
//                   <div className="text-center sm:text-left">
//                     <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
//                       Raised
//                     </h1>
//                     <h2 className="text-base sm:text-lg md:text-xl">
//                       Rs.50,000 of{" "}
//                       <span className="font-semibold">Rs. 500,000</span>
//                     </h2>
//                   </div>
//                 </div>
//                 <button className="text-white bg-red-500 px-4 sm:px-6 py-2 sm:py-4 rounded-full w-1/2 text-center mt-4 shadow-2xl hover:bg-red-600 transition">
//                   Donate Now
//                 </button>
//               </div>
//             </div>
//             <div className="pt-6 sm:pt-10">
//               <h1 className="text-zinc-300 text-lg sm:text-xl">Give Through:</h1>
//               <div>
//                 <h1 className="font-semibold text-xl sm:text-2xl py-4 sm:py-5">
//                   UPI
//                 </h1>
//                 <div className="w-full flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[15px] mb-6 sm:mb-10 mt-4 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
//                   <div className="flex items-center space-x-2">
//                     <SiPhonepe className="text-3xl sm:text-5xl text-[#673AB7]" />
//                     <h1 className="text-base sm:text-lg">PhonePe</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <FaGooglePay className="text-3xl sm:text-5xl text-green-500" />
//                     <h1 className="text-base sm:text-lg">G Pay</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       width="48"
//                       height="48"
//                       src="https://img.icons8.com/color/96/bhim.png"
//                       alt="bhim"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Bhim UPI</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       width="50"
//                       height="64"
//                       src="https://img.icons8.com/puffy-filled/64/more--v3.png"
//                       alt="more--v3"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Others</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h1 className="capitalize py-4 sm:py-5 font-semibold text-xl sm:text-2xl">
//                 Other Options
//               </h1>
//               <div>
//                 <div className="w-full text-lg sm:text-xl py-6 sm:py-10 flex flex-col sm:flex-row items-center justify-between h-auto sm:h-[15px]">
//                   <div className="flex items-center space-x-2 mb-4 sm:mb-0">
//                     <img
//                       width="48"
//                       height="96"
//                       src="https://img.icons8.com/color/96/paytm.png"
//                       alt="paytm"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Paytm</h1>
//                   </div>
//                   <div className="flex items-center space-x-2 mb-4 sm:mb-0">
//                     <img
//                       width="44"
//                       height="94"
//                       src="https://img.icons8.com/3d-fluency/94/card-verification-value.png"
//                       alt="card-verification-value"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Cr/Dr Cards</h1>
//                   </div>
//                   <div className="flex items-center space-x-2 mb-4 sm:mb-0">
//                     <img
//                       width="48"
//                       height="64"
//                       src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-online-banking-finance-kiranshastry-lineal-kiranshastry-1.png"
//                       alt="external-online-banking-finance-kiranshastry-lineal-kiranshastry-1"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Net Banking</h1>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <img
//                       width="48"
//                       height="96"
//                       src="https://img.icons8.com/color/96/gift-card.png"
//                       alt="gift-card"
//                       className="w-6 sm:w-12"
//                     />
//                     <h1 className="text-base sm:text-lg">Gift Cards</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-[40vh] sm:h-[50vh] bg-[#FBFAF8] p-4 sm:p-6 md:p-10">
//           <h1 className="text-xl sm:text-2xl md:text-3xl">
//             Your easy, powerful, and trusted home for help
//           </h1>
//           <div className="w-full h-full flex flex-col sm:flex-row items-center justify-between mt-4">
//             <div className="w-full sm:w-[33.4%] h-auto flex items-center justify-center space-x-2 mb-4 sm:mb-0">
//               <LuMessageCircleHeart className="text-3xl sm:text-4xl md:text-5xl font-thin" />
//               <div>
//                 <h2 className="text-base sm:text-lg md:text-xl">Easy</h2>
//                 <span className="text-sm sm:text-base">Donate quickly and easily</span>
//               </div>
//             </div>
//             <div className="w-full sm:w-[33.4%] h-auto flex items-center justify-center space-x-2 mb-4 sm:mb-0">
//               <LuHeartHandshake className="text-3xl sm:text-4xl md:text-5xl font-thin" />
//               <div>
//                 <h2 className="text-base sm:text-lg md:text-xl">Powerful</h2>
//                 <span className="text-sm sm:text-base">
//                   Send help right to the people and causes you care about
//                 </span>
//               </div>
//             </div>
//             <div className="w-full sm:w-[33.4%] h-auto flex items-center justify-center space-x-2">
//               <MdOutlineSecurity className="text-3xl sm:text-4xl md:text-5xl font-thin" />
//               <div>
//                 <h2 className="text-base sm:text-lg md:text-xl">Trusted</h2>
//                 <span className="text-sm sm:text-base">Your donation is protected with us.</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full h-auto mt-6 sm:mt-8 p-4 sm:p-6 md:p-10">
//           <h1 className="text-2xl sm:text-3xl md:text-4xl">
//             Support <span className="text-red-500">More Causes</span>
//           </h1>
//           <Cards />
//         </div>
//       </div>
//     </>
//   );
// };

// export default DonateDetails;




















{/* All Button section*/}















  {/* Buttons Section */}
  // <div className="w-full h-[200px] flex items-center text-center justify-between mt-15 mb-15 lg:w-full lg:h-[200px] lg:flex lg:items-center lg:text-center lg:justify-between lg:mt-15 lg:mb-15 ">
  //   {["Story", "Document", "Updates"].map((btn, index) => (
  //     <button
  //       key={index}
  //       className={`lg:px-10  lg:py-3 px-5 py-3 lg:w-[13vw] text-center rounded-lg shadow-xl ${
  //         btn === "Story"
  //           ? "bg-red-500"
  //           : "border border-red-400 bg-[#F0F0F0]"
  //       }`}
  //     >
  //       {btn}
  //     </button>
  //   ))}
  // </div>

  // {/* Story Section */}
  // <article className="w-full h-auto  p-5">
  //   <p className="text-lg">
  //     Give Bentley a Chance to Live
  //     <br />
  //     <br />
  //     Bentley Owen Raphael is a brave 9-year-old boy fighting the
  //     toughest battle of his life. Diagnosed with relapsed Acute
  //     Lymphoblastic Leukaemia, he underwent a stem cell transplant
  //     with his mother as the donor. Despite the initial success,
  //     Bentley’s condition took a devastating turn. He is now in the
  //     ICU, struggling with kidney failure, uncontrollable seizures,
  //     and severe hypertension.
  //     <br />
  //     <br />
  //     His parents are doing everything they can, but the hospital bill
  //     has climbed to RM650,000—an amount they can’t afford. Watching
  //     their son fight for his life while facing this financial burden
  //     is heartbreaking.
  //     <br />
  //     <br />
  //     Bentley deserves a chance to grow up, laugh, and live a full
  //     life. Your kindness can give him that chance. Please donate and
  //     help this family through their darkest hour. Every contribution
  //     counts.
  //   </p>
  //   <br />
  //   <p className="text-lg">
  //     The Impact of Your Support
  //     <br />
  //     <br />
  //     Your generous contributions will directly help with:
  //     <br />
  //     ✅ Critical Surgeries & Emergency Care
  //     <br />
  //     ✅ Hospital Expenses & Essential Medications
  //     <br />
  //     ✅ Physiotherapy & Long-Term Recovery
  //     <br />
  //     <br />
  //     Every donation brings hope and healing—support today! 💙✨
  //   </p>
  // </article>

  // {/* Document */}

  // <div className="w-full h-auto p-10 shadow-lg">
  //   <h1 className="text-2xl text-black">Document</h1>
  //   <hr className="w-full mb-5" />

  //   <img
  //     src="https://plus.unsplash.com/premium_vector-1714148691911-5e79c7aa7454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //     alt=""
  //   />
  // </div>

  // {/* Updates */}

  // <div className="w-full mt-5 space-y-6">
  //   <h1 className="text-3xl">Updates</h1>
  //   <p className=" text-lg">
  //     Feel free to reach out to the campaigner for the latest update
  //     on this fundraiser.
  //   </p>
  //   <h3 className="text-2xl text-red-500">
  //     <span>#1 | </span> 27/02/2025
  //   </h3>
  // </div>

  // {/* Updates Images */}

  // <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:h-[40vh] w-full h-[100vh]">
  //   <div className="lg:w-[45%] lg:h-full w-full mb-2">
  //     <img
  //       className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg "
  //       src="https://images.unsplash.com/photo-1588410670460-cdab54625253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //       alt=""
  //     />
  //   </div>
  //   <div className="lg:w-[45%] lg:h-full w-full mb-2">
  //     <img
  //       className="w-[100%] h-[100%] object-cover object-center rounded-xl shadow-lg"
  //       src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFieXxlbnwwfHwwfHx8MA%3D%3D"
  //       alt=""
  //     />
  //   </div>
  // </div>

  // {/* Update Details */}

  // <p className="text-xl py-5">
  //   Dear Donors,
  //   <br />
  //   <br />
  //   We at Annapurna Seva & Prerna Foundation extend our heartfelt
  //   gratitude for your generous contributions. Your support is
  //   bringing nourishment, care, and hope to those in need. Your
  //   invaluable support ensures that families in need receive
  //   nutritious meals and essentials to sustain their well-being.
  //   <br />
  //   <br />
  //   We are truly grateful for your generosity—it continues to bring
  //   positive change to so many lives. Thank you for standing with us
  //   in this mission
  //   <br /> <br />
  //   Warm Regards,Annapurna Seva & Prerna Foundation
  // </p> -->
