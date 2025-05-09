
import React, { useEffect, useRef, useState } from "react";

const people = [
  {
    name: "Dhruv & Nikita",
    title: "Campaigner",
    image: "/images/couple.jpg",
    description: "We met on Shaadi.com recently and our families spoke one another. Soon later, our partially arranged marriage has turned into a love marriage.",
  },
  {
    name: "Dhruv & Nikita",
    title: "Campaigner",
    image: "/images/couple.jpg",
    description: "We met on Shaadi.com recently and our families spoke one another. Soon later, our partially arranged marriage has turned into a love marriage.",
  },
  {
    name: "Dhruv & Nikita",
    title: "Campaigner",
    image: "/images/couple.jpg",
    description: "We met on Shaadi.com recently and our families spoke one another. Soon later, our partially arranged marriage has turned into a love marriage.",
  },
 
  // ... (repeat or add more unique entries)
];

const WallOfLove = () => {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const CARD_WIDTH = 420;
  const VISIBLE_CARDS = 1;

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: CARD_WIDTH,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update pagination dot based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const page = Math.round(scrollLeft / CARD_WIDTH) % people.length;
      setCurrentPage(page);
    }
  };

  return (
    <div className="lg:w-full lg:min-h-screen bg-[#FBE6E4] flex flex-col items-center justify-start py-10">
      {/* Heading */}
      
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Wall of <span className="text-blue-900">Love</span>!
      </h1>
      <div className="w-20 h-1 bg-blue-900 rounded-full mb-8"></div>

      {/* Slider */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex lg:space-x-5 overflow-x-auto lg:p-8 no-scrollbar w-full lg:w-full lg:max-w-7xl scroll-smooth"
      >
        {/* Repeat list for infinite feel */}
        {[...people, ...people].map((person, index) => (
          <div
            key={index}
            className="lg:flex-shrink-0 lg:w-[400px] lg:h-[400px] flex-shrink-0 w-[350px] h-[450px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition hover:scale-105 duration-300"
          >
            {/* <h3 className="text-lg font-semibold mb-2">
              Successfully raised <span className="text-red-500 font-bold">₹1,00,000</span> for a life-saving liver transplant
            </h3> */}
            <img
              src={person.image}
              alt={person.name}
              className="w-70 h-50  object-cover mb-4 "
            />
            <h2 className="text-xl font-bold text-blue-700">{person.name}</h2>
            {/* <p className="text-gray-500 text-xs">{person.title}</p> */}
            <p className="mt-4 text-gray-700 text-center w-[90%] text-sm">{person.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex mt-6 space-x-2">
        {people.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${currentPage === index ? "bg-blue-900" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default WallOfLove;
























// import React, { useEffect, useRef } from "react";

// const people = [
//   {
//     name: "Dhruv Pandey",
//     title: "Campaigner",
//     image:
//       "https://images.unsplash.com/photo-1676083140049-c106e01c754c?w=600&auto=format&fit=crop",
//     description:
//       "With support, we successfully raised for a critical liver transplant. The platform's transparency and reach played a vital role in making this life-saving difference. We are deeply grateful for the generosity of donors who came together to support this cause.",
//   },
//   {
//     name: "Dhruv Pandey",
//     title: "Campaigner",
//     image:
//       "https://images.unsplash.com/photo-1676083140049-c106e01c754c?w=600&auto=format&fit=crop",
//     description:
//       "With support, we successfully raised for a critical liver transplant. The platform's transparency and reach played a vital role in making this life-saving difference. We are deeply grateful for the generosity of donors who came together to support this cause.",
//   },
//   {
//     name: "Dhruv Pandey",
//     title: "Campaigner",
//     image:
//       "https://images.unsplash.com/photo-1676083140049-c106e01c754c?w=600&auto=format&fit=crop",
//     description:
//       "With support, we successfully raised for a critical liver transplant. The platform's transparency and reach played a vital role in making this life-saving difference. We are deeply grateful for the generosity of donors who came together to support this cause.",
//   },
//   {
//     name: "Dhruv Pandey",
//     title: "Campaigner",
//     image:
//       "https://images.unsplash.com/photo-1676083140049-c106e01c754c?w=600&auto=format&fit=crop",
//     description:
//       "With support, we successfully raised for a critical liver transplant. The platform's transparency and reach played a vital role in making this life-saving difference. We are deeply grateful for the generosity of donors who came together to support this cause.",
//   },
//   {
//     name: "Dhruv Pandey",
//     title: "Campaigner",
//     image:
//       "https://images.unsplash.com/photo-1676083140049-c106e01c754c?w=600&auto=format&fit=crop",
//     description:
//       "With support, we successfully raised for a critical liver transplant. The platform's transparency and reach played a vital role in making this life-saving difference. We are deeply grateful for the generosity of donors who came together to support this cause.",
//   },
//   {
//     name: "Dhruv Pandey",
//     title: "Campaigner",
//     image:
//       "https://images.unsplash.com/photo-1676083140049-c106e01c754c?w=600&auto=format&fit=crop",
//     description:
//       "With support, we successfully raised for a critical liver transplant. The platform's transparency and reach played a vital role in making this life-saving difference. We are deeply grateful for the generosity of donors who came together to support this cause.",
//   },
//   {
//     name: "Dhruv Pandey",
//     title: "Campaigner",
//     image:
//       "https://images.unsplash.com/photo-1676083140049-c106e01c754c?w=600&auto=format&fit=crop",
//     description:
//       "With support, we successfully raised for a critical liver transplant. The platform's transparency and reach played a vital role in making this life-saving difference. We are deeply grateful for the generosity of donors who came together to support this cause.",
//   },
// ];

// const WallOfLove = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollBy({
//           left: 420, // adjust card width scroll
//           behavior: "smooth",
//           scrollX: "infinite"
//         });
//       }
//     }, 3000); // every 3 second auto move

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="lg:w-full lg:min-h-screen bg-[#FBE6E4] flex flex-col items-center justify-start py-10">
//       {/* Heading */}
//       <h1 className="text-4xl font-bold text-gray-800 mb-2">
//         Wall of <span className="text-red-500">Love</span>!
//       </h1>
//       <div className="w-20 h-1 bg-red-500 rounded-full mb-8"></div>

//       {/* Slider */}
//       <div
//         ref={scrollRef}
//         className="flex lg:space-x-6 overflow-x-auto lg:p-6 no-scrollbar w-full lg:w-full lg:max-w-7xl"
//       >
//         {people.map((person, index) => (
//           <div
//             key={index}
//             className="lg:flex-shrink-0 lg:w-[400px] lg:h-[450px] flex-shrink-0 w-[350px] h-[450px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition hover:scale-105 duration-300"
//           >
//             <h3 className="text-lg font-semibold mb-2">
//               Successfully raised{" "}
//               <span className="text-red-500 font-bold">₹1,00,000</span> for a
//               life-saving liver transplant
//             </h3>
//             <img
//               src={person.image}
//               alt={person.name}
//               className="w-24 h-24 rounded-full object-cover mb-4"
//             />
//             <h2 className="text-xl font-bold">{person.name}</h2>
//             <p className="text-gray-500 text-xs">{person.title}</p>
//             <p className="mt-4 text-gray-700 text-center w-[90%] text-sm">{person.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WallOfLove;
