import React from "react";

const Featured = () => {
  return (
    <div className="w-full  py-10 bg-zinc-100">
      <div className="w-full">
        <div className="w-full pt-16 pb-5 text-[4vw] border-zinc-400 border-b-[1px] text-[#212121]">
          <h1 className="px-15">Featured Projects</h1>
        </div>

        {/*section1*/}

        <div className=" card w-full py-15  gap-4 flex px-15">
          <div className="w-1/2 h-[38vw] uppercase">
            <h1 className="pb-3 text-[#212121] text-1 font-normal ">
              Salience Labs :
            </h1>
            <div className=" group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png)] relative cursor-pointer">
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden left-full">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"salience lab".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-2">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  brand identity
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  pitch deck
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[38vw]">
            <h1 className="pb-3 text-[#212121] uppercase text-l font-normal">
              Cardboard Spaceship :
            </h1>
            <div className=" group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png)] relative z-0 cursor-pointer">
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"cardboard spaceship".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-4">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  branded template
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  sales deck
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  social media templates
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
        </div>
        {/*section2*/}
        <div className=" card w-full py-15  gap-4 flex px-15">
          <div
            className="w-1/2 h-[38vw] uppercase
           text-l font-normal"
          >
            {" "}
            <h1 className="pb-3 text-[#212121]">AH2 & Matt Horn :</h1>
            <div className=" cursor-pointer group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png)] relative">
              {" "}
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden left-full">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"ah2 & matt horn".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-2">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  pitch deck
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[38vw]">
            {" "}
            <h1
              className="pb-3 text-[#212121] uppercase
             text-l font-normal"
            >
              Fyde :
            </h1>
            <div className=" cursor-pointer group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png)] relative">
              {" "}
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"fyde".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-4">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  audit
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  copy writting
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  sales deck
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  slides design
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
        </div>
        {/*section3*/}
        <div className=" card w-full py-15  gap-4 flex px-15">
          <div
            className="w-1/2 h-[38vw] uppercase
           text-l font-normal"
          >
            {" "}
            <h1 className="pb-3 text-[#212121]">vise:</h1>
            <div className=" cursor-pointer group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png)] relative">
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden left-full">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"vise".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-2">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  agency
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  company presentation
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[38vw]">
            {" "}
            <h1
              className="pb-3 text-[#212121] uppercase
             text-l font-normal"
            >
              all things go:
            </h1>
            <div className=" cursor-pointer group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-1326x1101.png)] relative">
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"all things go".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-4">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  brand identity
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  pitch deck
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
        </div>
        {/*section4*/}
        <div className=" card w-full py-15  gap-4 flex px-15">
          <div
            className="w-1/2 h-[38vw] uppercase
           text-l font-normal"
          >
            {" "}
            <h1 className="pb-3 text-[#212121]">trawa :</h1>
            <div className=" cursor-pointer group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg)] relative">
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden left-full">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"trawa".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-2">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  brand identity
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  design research
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  investor deck
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-[38vw]">
            {" "}
            <h1
              className="pb-3 text-[#212121] uppercase
             text-l font-normal"
            >
              black book :
            </h1>
            <div className=" cursor-pointer group rounded-xl h-full w-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/06/Frame-3876-1326x1101.jpg)] relative">
              <div className="-translate-x-1/2 top-1/2 -translate-y-1/2 leading-none absolute z-[66] overflow-hidden">
                <h1 className="text-[6vw] tracking-tighter text-[#CDEA68]  whitespace-nowrap font-bold uppercase bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
                  {"black book".split("").map((item, index) => {
                    return <span>{item}</span>;
                  })}
                </h1>
              </div>
            </div>
            <div className="button flex items-center gap-3 py-4">
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  investor deck
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  redesign
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
              <button className=" group overflow-hidden border-1 border-zinc-600 rounded-full px-4 py-1 uppercase text-[#212121] relative">
                <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
                  review
                </span>
                <div className="absolute bottom-0 left-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10"></div>
              </button>
            </div>
          </div>
        </div>

        {/* section sp*/}
      </div>
      <div className="p-[9vw] flex justify-center items-center pb-[3vw] ">
        <button className="px-[1.5vw] py-4 bg-[#212121] text-white rounded-full uppercase flex items-center justify-center gap-6 cursor-pointer">
          view all case studies
          <div className="rounded-full text-4xl bg-white h-2.5 w-2.5"></div>
        </button>
      </div>
    </div>
  );
};

export default Featured;
