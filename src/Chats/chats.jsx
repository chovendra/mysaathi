import React, { useState } from 'react';

const Chats = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [popupImage, setPopupImage] = useState(null); 

  const chatPersons = [
    {
      id: 1,
      name: 'Rahul Mehra',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      lastMessage: 'Chal milte hain',
      time: '5 min ago',
      unreadCount: 2,
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      lastMessage: 'Project bhej diya',
      time: '10 min ago',
      unreadCount: 0,
    },
    {
      id: 3,
      name: 'Vikas Singh',
      image: 'https://randomuser.me/api/portraits/men/60.jpg',
      lastMessage: 'Mast hai bhai!',
      time: 'Just now',
      unreadCount: 5,
    },
  ];

  const messages = {
    1: [
      { from: 'me', text: 'Hey Rahul, kya haal hai?' },
      { from: 'Rahul Mehra', text: 'Badiya yaar!' },
    ],
    2: [
      { from: 'me', text: 'Hey Ananya, project bhej dena.' },
      { from: 'Ananya Sharma', text: 'Bhej diya.' },
    ],
    3: [
      { from: 'me', text: 'Design dekh liya kya?' },
      { from: 'Vikas Singh', text: 'Mast hai bro!' },
    ],
  };

  return (
    <>
      <div className="w-full h-[85px]" />

      <div className="flex h-[calc(100vh-95px)] bg-gray-200">

        {/* Left side-bar */}
        <div
          className={`w-full md:w-1/3 bg-white border-r border-gray-300 flex flex-col ${
            selectedPerson ? 'hidden md:flex' : 'flex'
          }`}
        >
          <div className="p-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
          </div>

          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {chatPersons.map((person) => (
              <div
                key={person.id}
                onClick={() => setSelectedPerson(person.id)}
                className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 ${
                  selectedPerson === person.id ? 'bg-blue-50' : ''
                }`}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-12 h-12 rounded-full object-cover cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopupImage(person.image);
                  }}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[16px] font-medium">{person.name}</h3>
                    <span className="text-[11px] text-blue-900">{person.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-blue-900 truncate w-[150px]">{person.lastMessage}</p>
                    {person.unreadCount > 0 && (
                      <span className="bg-blue-900 text-white text-xs rounded-full px-2 py-0.5">
                        {person.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right chat window */}
        <div
          className={`flex-1 flex flex-col ${
            selectedPerson ? 'flex' : 'hidden md:flex'
          }`}
        >
          {selectedPerson ? (
            <>
              {/* Top bar */}
              <div className="flex items-center gap-3 bg-white p-3 border-b border-gray-300">
                <button
                  className="block md:hidden text-blue-900 text-2xl"
                  onClick={() => setSelectedPerson(null)}
                >
                  <i className="ri-arrow-left-line"></i>
                </button>

                <img
                  src={chatPersons.find((p) => p.id === selectedPerson).image}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  onClick={() =>
                    setPopupImage(chatPersons.find((p) => p.id === selectedPerson).image)
                  }
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {chatPersons.find((p) => p.id === selectedPerson).name}
                </h3>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-100 space-y-3 md:pb-0 pb-20">
                {messages[selectedPerson]?.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.from === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`p-2.5 text-sm max-w-xs ${
                        message.from === 'me'
                          ? 'bg-blue-900 text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-none'
                          : 'bg-blue-900 text-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div className="flex items-center p-3 bg-white border-t border-gray-300 md:static fixed bottom-0 w-full md:w-auto h-auto">
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 p-2.5 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
                <button className="ml-2 px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-600 transition">
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center flex-1 text-gray-500">
              <p className="text-lg">Select a person to start chatting</p>
            </div>
          )}
        </div>
      </div>

      {/* Image Popup Modal */}
        {popupImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    onClick={() => setPopupImage(null)}
  >
    <div
      className="relative w-full h-full flex items-center justify-center p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={popupImage}
        alt="Popup"
        className="rounded-lg w-[95vw] h-auto max-h-[95vh] object-contain shadow-2xl"
      />
      <button
        onClick={() => setPopupImage(null)}
        className="absolute top-5 right-5 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-3xl shadow-lg"
      >
        &times;
      </button>
    </div>
  </div>
)}

    </>
  );
};

export default Chats;
