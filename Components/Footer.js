import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-screen  bg-white">
      <div className="w-full  h-full px-15 py-20 pb-0">
        <div className="w-full flex h-full">
          {/*Left Section */}
          <div className="w-[45vw] h-full flex flex-col tracking-tighter leading-none ">
            <h1 className="text-[6vw] uppercase font-bold tracking-tighter whitespace-nowrap leading-none -mb-4 text-[#212121] ">
              eye-
            </h1>{" "}
            <h1 className="text-[6vw] uppercase font-bold whitespace-nowrap tracking-tighter leading-none  text-[#212121]">
              opening
            </h1>
          </div>
          {/*Right Section */}
          <div className="w-[55vw] h-full  overflow-hidden ">
            {" "}
            <div className="w-full h-[18%]  overflow-hidden">
              <h1 className="text-8xl uppercase font-bold whitespace-nowrap tracking-tighter leading-none m-0 text-[#212121] ">
                Presentations
              </h1>
            </div>
            <div className="w-full flex flex-col h-[82%] overflow-hidden">
              {/* Social Links */}
              <div className="w-full h-[30%] flex flex-col">
                <h1 className="text-[#4D4D4D] text-xl font-medium">S:</h1>
                <div className="flex flex-col gap-1">
                  {["instagram", "twitter", "facebook", "linkedin"].map(
                    (platform, index) => (
                      <a
                        key={index}
                        className="text-[#4D4D4D] text-lg relative group w-fit cursor-pointer"
                      >
                        {platform}
                        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Location & Menu */}
              <div className="w-full h-[48%] grid grid-cols-2 py-5">
                {/* Location */}
                <div>
                  <h1 className="text-[#4D4D4D] text-xl font-medium">L:</h1>
                  <div className="flex flex-col gap-1">
                    {[
                      "202-1965 W 4th Ave",
                      "Vancouver, Canada",
                      "30 Chukarina St",
                      "Lviv, Ukraine",
                    ].map((address, i) => (
                      <a
                        key={i}
                        className="text-[#4D4D4D] text-lg relative group w-fit cursor-pointer"
                      >
                        {address}
                        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Menu */}
                <div className="justify-self-end">
                  <h1 className="text-[#4D4D4D] text-xl font-medium">M:</h1>
                  <div className="flex flex-col gap-1">
                    {[
                      "Home",
                      "Services",
                      "Our work",
                      "About us",
                      "Insights",
                      "Contact us",
                    ].map((item, i) => (
                      <a
                        key={i}
                        className="text-[#4D4D4D] text-lg relative group w-fit cursor-pointer"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="w-full h-[22%] py-5">
                <h1 className="text-[#4D4D4D] text-xl font-medium">E:</h1>
                <a
                  href="mailto:hello@ochi.design"
                  className="text-[#4D4D4D] text-lg relative group w-fit cursor-pointer"
                >
                  hello@ochi.design
                  <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
