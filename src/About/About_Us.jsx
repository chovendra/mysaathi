import React from "react";
import AboutComponents from "../components/AboutComponents";
import NavBar from "../components/NavBar";
import OurTeam from "../components/OurTeam";
import Volunteers from "../Pages/Volunteers";
import { HorizontalRule } from "@mui/icons-material";
import HorizontalScroll from "../components/HorizontalScroll";

const About_Us = () => {
  return (
    <div className="w-full h-auto">
      <NavBar />
      <br />
      <AboutComponents />

      <div className="w-full h-full text-center leading-8 p-5">
        <h1 className="text-4xl ">
          A Timely Solution for{" "}
          <span className="text-red-600 ">Today’s Needs</span>{" "}
        </h1>

        <div className="h-1 w-20 mb-10 mt-5 bg-[#E53935] m-auto"></div>

        <p className="p text-xl">
          We recognized this long before the pandemic. Even then, we were aware
          that millions of Indians faced overwhelming healthcare costs, with
          only a few having insurance to protect them during medical crises. We
          saw how a single critical illness could wipe out a family's life
          savings, often trapping them in debt for years. Shockingly, over 50
          million Indians have already been pushed into poverty due to medical
          expenses.
        </p>
        <br />
        <p className="p text-xl">
          This is why we launched Sanyogita Trust—to offer a compassionate,
          community-driven way to support those facing life-threatening
          illnesses and to empower individuals to extend a helping hand to those
          in need.
        </p>
        <br />
        <p className="p text-xl">
          Today, we understand this reality even more deeply. We know that
          accessible healthcare financing is not a privilege but a necessity,
          that medical emergencies are more frequent than we assume, and that no
          one is immune to financial hardship. That’s why we are evolving beyond
          just a platform—we are building solutions that can help a struggling
          farmer save his newborn just as much as they can support a doctor
          fighting to afford his wife’s cancer treatment.
        </p>
      </div>

      <div className="lg:w-full lg:h-[80vh] lg:flex">
        <div className="lg:w-[90%] lg:h-[80%] h-[100%] text-white bg-[#E53935] lg:p-30 p-5">
          <h1 className="lg:text-4xl text-3xl">Health Comes First</h1>
          <div className="h-1 bg-white w-36 rounded-full mb-8 mt-2"></div>
          <p className="lg:text-lg text-xl">
            Sanyogati is dedicated to supporting a wide range of causes, from
            nonprofit initiatives to personal and creative endeavors. However,
            in today's post-pandemic world, access to healthcare funding is not
            just important—it is essential. No one should have to choose between
            financial stability and life-saving treatment. At Sanyogati, we
            believe healthcare financing must be a priority, ensuring that help
            reaches those in need when they need it most.
          </p>
        </div>
        {/* <div className="w-[50%] h-[40 30 50 50] bg-green-800 "></div> */}
        <div
          className="lg:w-full lg:h-full w-[100%] h-[80%]"
          style={{
            clipPath: "polygon(0 0%, 100% 0%, 100% 80%, 58% 94%, 0 80%)",
          }}
        >
          {/* content yahan likhna hai */}
          <div className="text-white text-3xl font-bold">
            <img
              src="/square/5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
        <h1 className="text-3xl font-bold text-center leading-10">
          Our <span className="text-red-500">Focus</span>{" "}
        </h1>
        <div className="w-20 m-auto h-1 rounded-full mt-5 bg-[#E53935] "></div>
        <h3 className="lg:text-2xl text-2xl text-center mt-10">
          Healthcare That Saves Lives Now and Builds a Safer Future.
        </h3>
        <p className="lg:text-center lg:text-lg lg:w-1/2 mt-10 text-xl text-center">
          We are crafting cutting edge technology and financial solutions to
          enable individuals to raise funds for medical emergencies, critical
          illnesses, and a wide range of social and personal causes. Our
          platform has empowered lakes of people to create impact through timely
          contributions, transformation fundraisers, and collective action.
        </p>
      </div>
      <div className="lg:w-full lg:relative lg:mt-10 lg:h-[80vh] lg:flex  w-full h-auto">
        <div className="bg-blue-200 w-[50]"></div>
        <div></div>
        <div className="lg:w-[50%] relative h-[100%] bg-[#9DAEC8]">
          <img
          className="w-full h-[90%] object-cover object-center"
            src="/square/3.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-[50%] lg:absolute  right-0 bottom-0 h-[100%] bg-[#DCA99D]">
          <img className="w-[100%] lg:absolute h-[90%] object-cover object-center top-[8vh]"
            src="/square/4.jpg"
            alt=""
          />
        </div>
      </div>
<OurTeam />
<Volunteers />
<HorizontalScroll />
    </div>
  );
};

export default About_Us;
