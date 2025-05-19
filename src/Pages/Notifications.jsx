import React from 'react';

const notifications = [
  {
    id: 1,
    name: 'Rahul Mehra',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    message: 'sent you a friend request',
    type: 'Employee',
    time: '5 min ago',
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    message: 'shared a new project update',
    type: 'Project',
    time: '28 min ago',
  },
  {
    id: 3,
    name: 'Vikas Singh',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
    message: 'added you to a vendor group',
    type: 'Vendor',
    time: '1 hr ago',
  }, {
    id: 4,
    name: 'Rahul Mehra',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    message: 'sent you a friend request',
    type: 'Employee',
    time: '5 min ago',
  },
  
];

const Notifications = () => {
  return (
    <>
   <div className='w-full h-[90px]'/>
        <div className="max-w-xl mx-auto py-10 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800">Notifications</h1>
      <p className="text-center text-gray-600 mt-2 text-sm">
        Everything you need to know about the product and billing.
      </p>

      {/* Notifications List */}
      <div className="mt-8 space-y-5">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-200"
          >
            {/* Left Content */}
            <div className="flex items-start gap-3">
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                {/* Name & Message */}
                <p className="text-[15px] text-gray-800">
                  <span className="font-semibold">{item.name}</span> {item.message}
                </p>

                {/* Type & Time */}
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{item.type}</span>
                  <span className="mx-1">•</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>

            {/* Dots vertically aligned */}
          <div className="flex flex-col justify-center items-center space-y-2">
            {/* Dot 1 */}
            <button className="text-gray-400 hover:text-gray-600 transition">
                <svg
                className="w-1 h-1 rounded-full bg-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <circle cx="10" cy="3" r="2" />
                </svg>
            </button>

            {/* Dot 2 */}
            <button className="text-gray-400 hover:text-gray-600 transition">
                <svg
                className="w-1 h-1 rounded-full bg-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <circle cx="10" cy="10" r="2" />
                </svg>
            </button>

            {/* Dot 3 */}
            <button className="text-gray-400 hover:text-gray-600 transition">
                <svg
                className="w-1 h-1 rounded-full bg-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                >
                <circle cx="10" cy="17" r="2" />
                </svg>
            </button>
            </div>

          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default Notifications;
