import React, { useState } from 'react';

const Hobbies = () => {
  const [selectedCreative, setSelectedCreative] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const creativeOptions = ['Painting', 'Singing', 'Dancing', 'Writing', 'Photography', 'Cooking'];
  const categoryOptions = ['Sports', 'Music', 'Travel', 'Technology', 'Gaming', 'Books'];

  const toggleCreative = (hobby) => {
    if (selectedCreative.includes(hobby)) {
      setSelectedCreative(selectedCreative.filter(item => item !== hobby));
    } else {
      setSelectedCreative([...selectedCreative, hobby]);
    }
  };

  const toggleCategory = (hobby) => {
    if (selectedCategory.includes(hobby)) {
      setSelectedCategory(selectedCategory.filter(item => item !== hobby));
    } else {
      setSelectedCategory([...selectedCategory, hobby]);
    }
  };

  return (
    <>
   <div className='w-full h-[90px]'></div>
    <div className="bg-gray-50 min-h-auto">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800 ">Your Hobbies</h1>

      {/* Progress Dots */}
      <div className="flex justify-center items-center gap-3 mt-4">
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>

      {/* Instructions */}
      <p className="text-center text-gray-600 mt-4">Please select at least 5 hobbies!</p>

      {/* Creative Section */}
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-6 space-y-5">

        <h2 className="text-lg font-semibold text-gray-700">Creative</h2>
        <div className="flex flex-wrap gap-3">
          {creativeOptions.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => toggleCreative(item)}
              className={`px-4 py-2 border rounded-full ${
                selectedCreative.includes(item)
                  ? 'bg-blue-900 text-white'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Category Section */}
        <h2 className="text-lg font-semibold text-gray-700 mt-6">Category</h2>
        <div className="flex flex-wrap gap-3">
          {categoryOptions.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => toggleCategory(item)}
              className={`px-4 py-2 border rounded-full ${
                selectedCategory.includes(item)
                  ? 'bg-blue-900 text-white'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className=" w-full bg-blue-900 p-4 flex justify-evenly border-b">
        <button className="text-white font-medium px-4 py-2 border border-white rounded">Cancel</button>
        <button className="text-blue-900 font-medium bg-white px-6 py-2 rounded">Continue</button>
      </div>

    </div>
     </>
  );
};

export default Hobbies;
