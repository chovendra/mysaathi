// import React from "react";

// const About = () => {
//   return (
//     <div className=" relative w-full h-screen mb-[5vw] overflow-hidden">
//       <h2 className="text-5xl mt-10 text-center font-bold text-black">
//         Donate for a <span className="text-red-500">Cause</span>!
//       </h2>
//       <div className="w-20 h-1 bg-red-500 mx-auto my-2 rounded"></div>

//       <div className="w-full p-[6vw] h-full ">
//         <div className=" w-full h-full relative flex">
//           <div className="w-[40%] h-[100%] object-center object-cover overflow-hidden">
//             <img
//               className="w-full h-[50%] object-center object-cover"
//               src=" https://plus.unsplash.com/premium_photo-1666264200754-1a2d5f2f6695?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
//               alt=""
//             />
//             <img
//               className="w-full h-[50%] object-center object-cover"
//               src="https://images.unsplash.com/photo-1743999941326-ef5cc0120e8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D "
//               alt=""
//             />
//           </div>
//           <div className="w-[63%]  z-10 leading-[2.5vw] bg-white rounded-2xl drop-shadow-2xl p-10 absolute top-12.5 right-0 h-[80%] ">
//             <h1 className="text-4xl ">
//               A team of{" "}
//               <span className="text-red-600">Soft Hearted People</span>!
//             </h1>
//             <p className="mt-5 text-md">
//               We’ve transformed the crowdfunding industry with our unique
//               platform, enabling people worldwide to donate directly toward
//               products needed by NGOs. Built on trust, transparency, and
//               empathy, we are dedicated to uniting communities and making a
//               meaningful, lasting impact. We’ve transformed the crowdfunding
//               industry with our unique platform, enabling people worldwide to
//               donate directly toward products needed by NGOs. Built on trust,
//               transparency, and empathy, we are dedicated to uniting communities
//               and making a meaningful, lasting impact.{" "}
//             </p>
//             <div className="flex items-center justify-evenly">
//               <h1 className="text-center text-5xl font-semibold text-red-500">
//                 50+ <br />
//                 <span className="text-center text-black text-lg font-normal">
//                   team Member
//                 </span>
//               </h1>
//               <h1 className="text-center text-5xl font-semibold text-red-500">
//                 4000 + <br />
//                 <span className="text-center text-black text-lg font-normal">
//                   Donations
//                 </span>
//               </h1>
//               <h1 className="text-center text-5xl font-semibold text-red-500">
//                 Rs 50 L + <br />
//                 <span className="text-center text-black text-lg font-normal">
//                   Raised
//                 </span>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img className="absolute opacity-25 -bottom-10 -right-36 w-[35vw]" src="/src/assets/images/Frame Elements.png" alt="" />
//     </div>
//   );
// };

// export default About;


import React from "react";

const About = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white py-12">
      {/* Heading */}
      <h2 className="text-[5vw] sm:text-4xl md:text-5xl text-center font-bold text-black leading-tight">
        About <span className="text-blue-900">My Saathi</span>!
      </h2>
      <div className="w-20 h-1 bg-blue-900 mx-auto my-3 rounded"></div>

      {/* Content */}
      <div className="w-full px-[6vw] md:px-20 py-12 relative">
  <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative">

    {/* Left: Image */}
    <div className="w-full lg:w-[40%] relative z-0">
      <img
        className="w-full h-[50vh] md:h-[60vh] object-cover object-center rounded-xl shadow-lg transition-all duration-300"
        src="/images/hand.jpg"
        alt="Helping Hand"
      />
    </div>

    {/* Right: Text */}
    <div className="w-full lg:w-[65%] bg-white rounded-2xl shadow-2xl p-[5vw] md:p-10 flex flex-col justify-between relative z-10 lg:-ml-[8vw]">
      <div>
        <h1 className="text-[5vw] sm:text-3xl md:text-4xl font-bold leading-tight">
          A team of <span className="text-blue-900">Soft Hearted People</span>!
        </h1>
        <p className="mt-5 text-[3.5vw] sm:text-base md:text-lg text-gray-700 leading-relaxed">
          MySaathi is a trusted platform designed to help you find your perfect life partner with ease and confidence. We focus on meaningful connections built on trust, compatibility, and shared values. Our goal is to make your journey to love simple, beautiful, and lasting. Join us to start your story towards a happy and fulfilling life together.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-between items-center gap-6 mt-8">
        <div className="text-center flex-1 min-w-[100px]">
          <h1 className="text-[7vw] sm:text-3xl md:text-4xl font-bold text-blue-900">50+</h1>
          <p className="text-black text-[3vw] sm:text-sm md:text-lg">Team Members</p>
        </div>
        <div className="text-center flex-1 min-w-[100px]">
          <h1 className="text-[7vw] sm:text-3xl md:text-4xl font-bold text-blue-900">4000+</h1>
          <p className="text-black text-[3vw] sm:text-sm md:text-lg">Donations</p>
        </div>
        <div className="text-center flex-1 min-w-[100px]">
          <h1 className="text-[7vw] sm:text-3xl md:text-4xl font-bold text-blue-900">₹50L+</h1>
          <p className="text-black text-[3vw] sm:text-sm md:text-lg">Raised</p>
        </div>
      </div>
    </div>

  </div>
</div>



      {/* Background Decoration */}
      <img
        className="absolute opacity-20 -bottom-10 -right-36 w-[60vw] max-w-[500px] hidden md:block"
        src="/images/Frame Elements.png"
        alt=""
      />
    </div>
  );
};

export default About;


