"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LandingPage = () => {
  useGSAP(() => {
    gsap.set(".start-bg", { y: "100%" });
    gsap.set(".arrow-bg", { scale: 0, opacity: 0 });
    let tl = gsap.timeline();
    tl.from(".headline", {
      x: -100,
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.4,
    });

    tl.from(
      ".box",
      {
        scale: 0,
        rotate: 360,
        duration: 0.6,
        delay: 0.2,
      },
      "+=0.2"
    );
  }, []);

  const handleMouseEnter = () => {
    // Start button hover
    gsap.to(".start-bg", {
      y: 0,
      duration: 0.2,
      ease: "linear",
    });
    gsap.to(".start span", {
      color: "#000",
      duration: 0.2,
      ease: "linear",
    });

    // Arrow hover in
    handleArrowEnter();
  };

  const handleMouseLeave = () => {
    // Start button leave
    gsap.to(".start-bg", {
      y: "100%",
      duration: 0.2,
      ease: "linear",
    });
    gsap.to(".start span", {
      color: "#fff",
      duration: 0.2,
      ease: "linear",
    });

    // Arrow hover out
    handleArrowLeave();
  };

  const handleArrowEnter = () => {
    gsap.to(".arrow-bg", {
      scale: 1,
      opacity: 1,
      duration: 0.2,
      ease: "linear",
    });
    gsap.to(".arrow span", {
      color: "#000",
      duration: 0.2,
      ease: "linear",
    });
  };

  const handleArrowLeave = () => {
    gsap.to(".arrow-bg", {
      scale: 0,
      opacity: 0,
      duration: 0.2,
      ease: "linear",
    });
    gsap.to(".arrow span", {
      color: "#fff",
      duration: 0.2,
      ease: "linear",
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="mt-40 px-15">
        {["We Create", "Eye-Opening", "Presentations"].map((items, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <div className="box w-[8.8vw] h-[5vw] rounded overflow-hidden ">
                  <img
                    className="object-center"
                    src="https://images.unsplash.com/photo-1651813338290-2f869def49b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwcmVuZGVyfGVufDB8MHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </div>
              )}
              <h1 className="headline font-mono font-bold text-[8vw] leading-[7.1vw] tracking-tighter uppercase items-center h-full flex">
                {items}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center px-15 py-3">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p
            key={index}
            className="text-white tracking-tight relative group w-fit cursor-pointer"
          >
            {items}
            <span className="absolute left-0 bottom-0 h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left duration-300"></span>
          </p>
        ))}

        <div className="flex items-center gap-5 relative">
          {/* Start Button */}
          <div
            className="start group relative overflow-hidden uppercase rounded-full border border-zinc-500 px-4 py-1 text-sm text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative z-10">start the project</span>
            <div className="start-bg absolute top-0 left-0 w-full h-full bg-white z-0 translate-y-[100%]"></div>
          </div>

          {/* Arrow Button */}
          <div className="arrow w-8 h-8 rounded-full border border-zinc-500 flex items-center justify-center relative overflow-hidden">
            <span className="rotate-45 relative z-10">
              <FaArrowUp />
            </span>
            <div className="arrow-bg absolute top-0 left-0 w-full h-full bg-white z-0 rounded-full opacity-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
