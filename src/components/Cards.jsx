import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: "/images/profile.png",
      memberId: 'M-' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      title: "Arvind Pandey",
      hobby:
        "Dreamer & Doer | Capturing moments, one click at a time Coffee lover, adventure seeker | Making memories, not excuses",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Bhopal | Profession | Age 28, Height 5'6 ,Mother Tongue",
    },
  
  ];

  const [visibleCards, setVisibleCards] = useState(9);

  const showAllCards = () => {
    setVisibleCards(cardData.length);
  };

  return (
    <div className="container mx-auto py-5">
  <div className="flex flex-wrap justify-center gap-6">
    {cardData.slice(0, visibleCards).map((card) => (
      <div
        key={card.id}
        className="bg-white rounded-xl shadow-lg text-center transform hover:scale-105 transition border border-gray-200 w-[350px] h-auto"
      >
        <div className="relative">
          <img
            src={card.image}
            alt={card.subtitle}
            className="w-full h-80 object-cover object-fit rounded-t-xl"
          />
     
          <div className="absolute bottom-2 right-2  bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            Member ID: {card.memberId}
          </div>
        </div>

        <div className="p-4 text-left">
          <h2 className="text-[18px] font-semibold text-gray-800 mt-1">
            {card.title}
          </h2>
          <p className="text-[14px] text-gray-800 mt-1">{card.subtitle}</p>
          <p className="text-[13px] text-gray-600 mt-1">{card.hobby}</p>

          <div className="flex gap-3 mt-3">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-[13.5px] hover:bg-blue-800 transition w-1/2">
              Send Interest
            </button>
            <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg text-[13.5px] hover:bg-blue-50 transition w-1/2">
              Shortlist
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default Cards;