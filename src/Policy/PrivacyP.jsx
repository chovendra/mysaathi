import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-[55vh] relative bg-red-600 ">
          <div
            className={`w-full h-full bg-cover bg-center`}
            style={{
              backgroundImage: `url("/images/hand.jpg")`,
              width: "100%",
              height: "100%",
              objectPosition: "center",
              objectFit: "cover",
            }}
          ></div>
          {/* Gradient overlay */}
        <div className="absolute w-full h-full top-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-45"></div>

        {/* Light overlay */}
        <div className="absolute w-fit h-full bg-blue-900 top-0 opacity-10"></div>

          <div className="absolute top-8/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-white text-2xl">
              Home <span className="text-white text-2xl"> / Privacy Policy </span>
            </h1>
            <h1 className="text-6xl font-bold">Privacy Policy</h1>
          </div>
        </div>
        <div className="w-full h-auto p-10 px-[15vw]">
          

          <p className="pt-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consectetur veritatis, molestias nobis velit quia libero et
            repellendus assumenda ipsa laboriosam architecto dignissimos. Quis
            eos eum, voluptas iusto iste et expedita autem voluptatem,
            repudiandae in quod ratione itaque? Itaque quos perspiciatis
            necessitatibus doloremque architecto alias deserunt minus ducimus,
            vitae, explicabo sunt! Minus, nam. Culpa velit ea provident alias
            accusantium dolore? Illo laboriosam voluptates eveniet maxime?
            Molestias quis libero dignissimos? Nesciunt quas ea magnam nulla et
            voluptate sequi, eius consequatur, adipisci, aperiam corporis quidem
            est unde suscipit? Sapiente assumenda in aperiam autem inventore
            necessitatibus molestiae quod recusandae officia odit blanditiis
            iste corrupti eius, quae nisi dolore beatae iure omnis, velit
            voluptas quos voluptatem. Quidem vitae maxime veniam numquam ad modi
            corporis quaerat, doloribus quos atque optio dolores debitis
            repellendus, excepturi totam quo alias, illum a. Porro debitis aut
            ipsum assumenda dolores, nulla, perferendis eligendi quam minima,
            omnis amet quas accusamus reiciendis ab magni ipsa. Aperiam maxime
            animi asperiores tempora laboriosam libero optio quaerat sapiente
            esse exercitationem neque ut veniam distinctio odio ipsa, harum
            labore repudiandae minus reiciendis. Explicabo doloribus iusto
            repellat deserunt quasi adipisci enim libero maiores magnam aliquid?
            Nesciunt voluptatibus, laborum ut velit earum eveniet maxime error
            fuga quibusdam quod!
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
