import React from "react";

export const Welcome = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center w-full px-6 mt-10 bg-[url(/bg.png')]">
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 max-w-5xl">
        {/* Bear GIF */}
        <img
          src="/images/bear.gif"
          alt="bear"
          className="w-[120px] md:w-[164px] h-[160px] md:h-[205px] object-contain"
        />

        <p className="text-center font-[Jost] md:text-left text-xl md:text-[48px] leading-snug font-semibold text-black">
          “Welcome to HYRUP — the place where reality gets an upgrade.”
        </p>
      </div>
        <div className="w-[800px] h-[400px] border-3 shadow-[5px_3px_0px_black] rounded-xl bg-[#F5F5F5]/40 flex items-center justify-evenly font-[Jost] font-extrabold">
            <div className="font-Jost-800 font-extrabold text-[70px] w-1/2 ">ARE YOU A STUDENT OR STARTUP</div>
            <div className="flex flex-col items-center  gap-y-30">
                <div className="border-2 w-50 shadow-[1px_1px_2px_black] bg-[#F5F5F5] rounded-2xl px-2 py-3 text-4xl text-center font-extrabold">
                        Student
                </div>
                <div className="border-2  w-50  shadow-[1px_1px_2px_black] bg-[#F5F5F5] rounded-2xl px-2 py-3 text-4xl text-center font-extrabold">
                        Company
                </div>
            </div>
        </div>
    </div>
  );
};
