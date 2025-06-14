"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Marquee = () => {
  useGSAP(() => {
    gsap.to(".motion .text", {
      xPercent: -100,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });
  });
  return (
    <div className=" w-full py-20 rounded-t-3xl bg-[#004D43]">
      <div className=" motion whitespace-nowrap flex border-t-2  border-b-2 gap-10 border-zinc-300 pb-1">
        <h1 className="text font-10xl text-[17vw] leading-none uppercase font-bold -m-b-[7vw] tracking-tighter ">
          We are Ochi
        </h1>
        <h1 className="text font-10xl text-[17vw] leading-none uppercase  font-bold -m-b-[7vw]  tracking-tighter ">
          We are Ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
