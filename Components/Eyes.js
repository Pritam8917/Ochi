import React from "react";
import { useEffect, useState } from "react";
const Eyes = () => {
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
    <div className=" eyes w-full h-screen overflow-hidden ">
      <div className=" w-full h-full bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)] bg-center bg-cover relative flex ">
        <div className="left-1/2 top-1/2 flex  absolute -translate-x-[50%] -translate-y-[50%] gap-7">
          <div className="h-[15vw] w-[15vw] rounded-full bg-white relative items-center justify-center flex">
            <h1 className="z-99">PLAY</h1>
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
            <h1 className="z-99">PLAY</h1>
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
      </div>
    </div>
  );
};

export default Eyes;
