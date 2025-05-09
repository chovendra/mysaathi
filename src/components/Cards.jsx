import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: "/images/profile.png",
      title: "Arvind Pandey",
      hobby:
        "Dreamer & Doer | Capturing moments, one click at a time Coffee lover, adventure seeker | Making memories, not excuses",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Bhopal | Profession | Age 28, Height 5'6 ,Mother Tongue",
    },
    {
      id: 2,
      image: "/images/profile.png",
      title: "Arvind Pandey",
      hobby:
        "Dreamer & Doer | Capturing moments, one click at a time Coffee lover, adventure seeker | Making memories, not excuses",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Bhopal | Profession | Age 28, Height 5'6 ,Mother Tongue",
    },
    {
      id: 3,
      image: "/images/profile.png",
      title: "Arvind Pandey",
      hobby:
        "Dreamer & Doer | Capturing moments, one click at a time Coffee lover, adventure seeker | Making memories, not excuses",
      donors: 235,
      goal: "₹51,224",
      achieved: "₹32,890",
      subtitle: "Bhopal | Profession | Age 28, Height 5'6 ,Mother Tongue",
    },
    {
      id: 4,
      image: "/images/profile.png",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.slice(0, visibleCards).map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md text-center transform hover:scale-105 transition border border-gray-200"
          >
            <img
              src={card.image}
              alt={card.subtitle}
              className="w-full h-80 object-cover rounded-t-lg"
            />
            <div className="p-3 text-left">
              <h2 className="text-[17px] font-semibold text-gray-800 mt-2">
                {card.title}
              </h2>
              <p className="text-[13.5px] text-gray-800 mt-1">
                {card.subtitle}
              </p>
              <p className="text-[12.5px] text-gray-600 mt-1">{card.hobby}</p>

              <div className="flex gap-2 mt-3">
                <button className="bg-blue-900 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-800 transition w-1/2">
                  Send Interest
                </button>
                <button className="border border-blue-900 text-blue-900 px-3 py-1.5 rounded-lg text-sm hover:bg-blue-50 transition w-1/2">
                  Shortlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <button
          onClick={showAllCards}
          className="bg-blue-900 text-white px-18 py-3 rounded-2xl hover:bg-blue-800 transition"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Cards;
