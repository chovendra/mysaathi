import React from "react";

// 👉 Array of objects containing image and text
const items = [
  { img: "/images/Heart Img.png", text: "Arvind just donated Rs 5000!" },
  { img: "/images/Heart Img.png", text: "Jay Pawar just donated Rs 5000!" },
  { img: "/images/Heart Img.png", text: "Ankit just donated Rs 2000!" },
  { img: "/images/Heart Img.png", text: "Jay Pawar just donated Rs 2000!" },
  { img: "/images/Heart Img.png", text: "Rishav just donated Rs 300!" },
  { img: "/images/Heart Img.png", text: "Jay Pawar just donated Rs 300!" },
];

const TextMarquee = () => {
  // duplicate list to create seamless loop
  const loopItems = items.concat(items);

  return (
    <div className="w-full bg-[#fef0c5] py-4 overflow-hidden ">
      <div className="whitespace-nowrap animate-marquee hover:[animation-play-state:paused] flex items-center gap-12 px-4">
        {loopItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 text-black md:text-xl font-medium hover:text-yellow-500 transition-colors duration-300"
          >
            <img src={item.img} alt="icon" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;

