import React from "react";
import { FaArrowUp } from "react-icons/fa";
const About = () => {
  return (
    <div className="w-full bg-[#CDEA68] rounded-3xl py-15 ">
      <h1 className="text-[#212121] text-[4vw] leading-[4.5vw] tracking-tight px-15">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="border-[#A5BC57] w-full mt-20 border-t-[1px] flex gap-10">
        <div className="w-1/2 px-15">
          <h1 className="text-[#212121] text-[4vw] tracking-tight">
            Our approach:
          </h1>
          <button className="rounded-full px-9 py-4 text-white bg-[#212121] uppercase flex items-center justify-center gap-8 mt-3 ">
            Read More
            <div className="rounded-full w-2 h-2 bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 pt-3 pr-15 ">
          <img
            className="rounded-2xl hover:scale-96 transition-transform ease-in-out"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
