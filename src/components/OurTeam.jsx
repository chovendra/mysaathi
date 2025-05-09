// import React from 'react'

// const OurTeam = () => {
//   return (
//     <div className='lg:w-full lg:h-screen h-[100vh] bg-red-50'>
// <h1 className='text-center text-4xl py-10'>Meet <span className='text-red-500'>Our Code Team</span>  </h1>
// <div className='h-1 w-30  m-auto bg-red-600 rounded-full'></div>
//    <div className='lg:w-full lg:h-[60vh] w-full h-[45vh] gap-5 flex overflow-x-auto whitespace-nowrap m-auto lg:flex lg:items-center lg:justify-evenly'>
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] h-[15vh] w-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] h-[15vh] w-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
//     <div className='lg:w-[23%] lg:h-full'>
//         <img className='rounded-full mt-10 lg:h-[25vh] lg:w-[25vh] h-[15vh] w-[15vh] object-center object-cover m-auto' src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1 className='text-3xl text-center mt-10'>Sahil Kumar</h1>
//         <h4 className='text-red-500  text-center italic'>Co-Founder</h4>
//     </div>
   
   
//    </div>
//    <p className='text-center text-xl'>Driven by passion and diversity, our team strives to make <br /> a positive impact on millions of lives.</p>
//     </div>
//   )
// }

// export default OurTeam


import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Sahil Kumar',
      role: 'Co-Founder',
      img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop',
    },
    {
      name: 'Riya Sharma',
      role: 'Frontend Developer',
      img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2000&auto=format&fit=crop',
    },
    {
      name: 'Riya Sharma',
      role: 'Frontend Developer',
      img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2000&auto=format&fit=crop',
    },
   
  ];

  return (
    <div className='w-full h-auto bg-red-50 px-4 sm:px-8 py-12'>
      <h1 className='text-center text-3xl sm:text-4xl font-bold mb-4'>
        Meet <span className='text-red-500'>Our Code Team</span>
      </h1>
      <div className='h-1 w-24 bg-red-600 mx-auto rounded-full mb-10' />

      {/* Responsive Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-xl p-6 text-center'
          >
            <img
              src={member.img}
              alt={member.name}
              className='w-32 h-32 mx-auto rounded-full object-cover mb-4'
            />
            <h2 className='text-xl font-semibold'>{member.name}</h2>
            <p className='text-red-500 italic text-sm'>{member.role}</p>
          </div>
        ))}
      </div>

      <p className='text-center text-lg mt-10'>
        Driven by passion and diversity, our team strives to make <br className='hidden sm:block' />
        a positive impact on millions of lives.
      </p>
    </div>
  );
};

export default OurTeam;
