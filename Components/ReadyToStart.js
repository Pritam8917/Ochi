import React from "react";
import { useState, useEffect } from "react";
const ReadyToStart = () => {
  const [Rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;
      let deltax = mousex - window.innerWidth / 2; //distance between mouse and  body in X axis
      let deltay = mousey - window.innerHeight / 2; //distance between maouse and body in Y axis
      let angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div>
      <div className="w-full bg-[#CDEA68] relative rounded-t-2xl">
        <div className=" flex items-center justify-center pt-[10vw]">
          <div className="  overflow-hidden w-fit leading-none flex flex-col justify-center items-center ">
            <div className="left-1/2 top-3/5 flex  absolute -translate-x-[50%] -translate-y-[50%] gap-7">
              <div className="h-[15vw] w-[15vw] rounded-full bg-white relative items-center justify-center flex">
                <div className="bg-zinc-900 rounded-full h-[9vw] w-[9vw] flex absolute items-center justify-center">
                  <div
                    style={{
                      transform: `rotate(${Rotate}deg)`,
                    }}
                    className="line w-32 h-10 absolute "
                  >
                    <div className="h-6 w-6 bg-white absolute rounded-full "></div>
                  </div>
                </div>
              </div>
              <div className="h-[15vw] w-[15vw] rounded-full bg-white relative items-center justify-center flex">
                <div className="bg-zinc-900 rounded-full h-[9vw] w-[9vw] flex absolute items-center justify-center">
                  <div
                    style={{
                      transform: `rotate(${Rotate}deg)`,
                    }}
                    className="line w-32 h-10 "
                  >
                    <div className="h-6 w-6 bg-white absolute rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="uppercase text-[10vw] text-[#212121] tracking-tighter font-bold leading-none m-0">
              ready
            </h1>
            <h1 className="uppercase text-[10vw] text-[#212121] tracking-tighter font-bold leading-none m-0">
              to start
            </h1>
            <h1 className="uppercase text-[10vw] text-[#212121] tracking-normal font-bold leading-none m-0">
              the project?
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#CDEA68] flex flex-col items-center justify-center pb-15 pt-2">
        <button className="rounded-full px-10 py-4 text-white bg-[#212121] uppercase flex items-center justify-center gap-8 mt-3 ">
          start the project
          <div className="rounded-full w-2 h-2 bg-zinc-100"></div>
        </button>
        <h1 className="flex items-center justify-center py-4 text-[#212121]">
          OR
        </h1>
        <button className="rounded-full px-8 py-4 text-[#212121] border-1 border[#212121] uppercase flex items-center justify-center gap-8 mt-3 ">
          hello@ochi.design
          <div className="rounded-full w-2 h-2 bg-[#212121]"></div>
        </button>
      </div>
    </div>
  );
};

export default ReadyToStart;
