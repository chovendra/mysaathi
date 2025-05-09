import React, { useState } from "react";
import Cards from "../components/Cards"
const CardsContainer = () => {
  // Dummy data for cards (you can replace with your data)
  const cardData = [
  
      
  ];

  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards
  const maxInitialCards = 8; // Maximum cards to show without button click

  const showMoreCards = () => {
    setVisibleCards(cardData.length); // Show all cards on button click
  };

  return (
    <div className="container mx-auto py-5">
    
      <div className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      
          
        </div>
      </div>

      {/* Show More Button */}
      {cardData.length > maxInitialCards && visibleCards <= maxInitialCards && (
        <div className="text-center mt-4">
          <button
            onClick={showMoreCards}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardsContainer;