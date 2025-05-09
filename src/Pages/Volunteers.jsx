// import React from 'react'
// import OurTeam from '../components/OurTeam'
// import HorizontalScroll from '../components/HorizontalScroll'

// const Volunteers = () => {
//   return (
//     <div className='lg:w-full lg:h-auto h-screen w-full'>
// <h1 className='text-center text-4xl  py-10'>Meet <span className='text-red-500'>Our Volunteers</span>  </h1>
// <div className='h-1 w-30  m-auto bg-red-600 rounded-full'></div>
// <div className='lg:w-full lg:h-auto lg:flex lg:flex-col'>
  
//    <div className='lg:w-full lg:h-[45vh] lg:flex lg:items-center lg:justify-evenly '>
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] w-[15vh] h-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
   
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] w-[15vh] h-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] w-[15vh] h-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
   
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] w-[15vh] h-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] w-[15vh] h-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
   
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] w-[15vh] h-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
   
   
   
//    </div>

// </div>
//    {/* <p className='text-center text-xl'>Driven by passion and diversity, our team strives to make <br /> a positive impact on millions of lives.</p> */}
// {/* <HorizontalScroll /> */}
    
//     </div>
    
//   )
// }

// export default Volunteers



import React, { useState } from 'react';

const Volunteers = () => {
  const volunteers = [
    { name: 'Sahil Kumar', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Riya Patel', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Ankit Singh', role: 'Manager', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Meena Sharma', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Meena Sharma', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Meena Sharma', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Rahul Dev', role: 'Support', img: 'https://images.unsplash.com/photo-1603415526960-f7e0328b4a03?q=80&w=2000&auto=format&fit=crop' },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleVolunteers = showAll ? volunteers : volunteers.slice(0, 2);

  return (
    <div className="w-full lg: bg-white px-4 sm:px-8 py-12">
      <h1 className="text-center text-3xl sm:text-4xl font-bold">
        Meet <span className="text-red-500">Our Volunteers</span>
      </h1>
      <div className="h-1 w-24 bg-red-600 mx-auto my-4 rounded-full " />

      {/* <div className="mt-8 m-auto grid grid-cols-2 sm:grid-cols-6 gap-10 place-items-center bg-red-600"> */}
      <div className="flex items-center justify-center gap-10 ">
        {visibleVolunteers.map((vol, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={vol.img}
              alt={vol.name}
              className="rounded-full w-32 h-32 object-cover shadow-md"
            />
            <h1 className="text-xl mt-6 font-semibold">{vol.name}</h1>
            <h4 className="text-red-500 italic text-sm">{vol.role}</h4>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {volunteers.length > 2 && !showAll && (
        <div className="flex hidden justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#E53935] border-2 border-white text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Volunteers;
