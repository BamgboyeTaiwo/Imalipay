import React from "react";

export default function DCards({ cardname, cardstat, cardicon }: any) {
  return (
    <>
      <div className="relative bg-white p-4 flex flex-col break-words rounded mb-6 xl:mb-0 shadow-lg">
        <div className="img mb-4 flex flex-row justify-between">
          <img src={cardicon} alt="" srcSet="" />
          <img src="/icon3dots.svg" alt="" srcSet="" />
        </div>
        <div className="ht">
          <p className="text-[#667085] font-light test-sm ">{cardname}</p>
          <p className="text-2xl mt-2 ">{cardstat}</p>
        </div>
      </div>
    </>
  );
}