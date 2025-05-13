import React from "react";
import "remixicon/fonts/remixicon.css";
const MatchesLeft = () => {
  return (
    <>
      <div className="w-[30%] h-full p-5">
        <div className="w-full flex  justify-between">
          <h1 className="font-bold text-xl">Filter</h1>
          <i className="ri-equalizer-2-line text-2xl"></i>
        </div>
        <div className="space-y-5">
          <span>
            Age Range
            <br />
            <select className="border px-6 py-2 rounded" name="" id="">
              <option className="" value=""></option>
            </select>
            <select className="border px-6 py-2 rounded ml-5" name="" id="">
              <option className="" value=""></option>
            </select>
          </span>

          <div className="flex">
            <span className="">
              City
              <br />
              <select className="border  px-20 py-2 rounded" id=""></select>
            </span>
            <span className="ml-5">
              Height
              <br />
              <select className="border px-20 py-2 rounded" id=""></select>
            </span>
          </div>
          <div className="flex">
            <span className="">
              Complexion
              <br />
              <select className="border  px-20 py-2 rounded" id=""></select>
            </span>
            <span className="ml-5">
              Marital Status
              <br />
              <select className="border px-20 py-2 rounded" id=""></select>
            </span>
          </div>
          <div className="flex">
            <span className="">
              Qualifation
              <br />
              <select className="border  px-20 py-2 rounded" id=""></select>
            </span>
            <span className="ml-5">
              Profession
              <br />
              <select className="border px-20 py-2 rounded" id=""></select>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchesLeft;
