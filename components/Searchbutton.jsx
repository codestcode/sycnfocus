import React from "react";

const FancySearchBar = () => {
  return (
    <div className=" flex items-center justify-center  ">
      <div className=" w-full relative w-[314px] h-[70px] ">
        {/* Background Elements */}
        <div className=" absolute inset-0 rounded-[12px] blur-md opacity-40 bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500" />
        <div className=" absolute inset-0 rounded-[12px] blur-sm border border-gray-700" />

        {/* Input Field */}
        <div className="relative w-[600px] h-[200px] ">
  <input
    type="text"
    name="text"
    className="w-full h-full pl-[55px] pr-[45px] text-white bg-black/90 rounded-lg text-lg placeholder-transparent focus:outline-none "
    placeholder=""
  />
  <span className="typewriter absolute top-1/2 left-[55px]  -translate-y-1/2 text-white pointer-events-none text-[18px]">
    Wanna Tell Your AI Buddy how you feel today?......
  </span> 




          {/* Pink Glow Mask */}
          <div className="absolute top-[10px] left-[5px]  h-[20px] bg-pink-600 opacity-80 blur-[20px] pointer-events-none group-hover:opacity-0 transition-all duration-1000 w-[30px] " />

          {/* Search Icon */}
          <div className="absolute left-[20px] top-[15px] text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Filter Icon with Glow Border */}
          <div className=" absolute top-[8px] right-[8px] left-289 w-[40px] h-[42px] rounded-lg bg-gradient-to-b from-gray-900 via-black to-gray-800 border border-transparent flex items-center justify-center">
            <svg
              preserveAspectRatio="none"
              height="27"
              width="27"
              viewBox="4.8 4.56 14.832 15.408"
              fill="none"
            >
              <path
                d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                stroke="#d6d6e6"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancySearchBar;
