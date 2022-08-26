import React from "react";

export default function Searchbar() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row border sm:w-[60vw] p-3 lg:w-[25vw] bg-white rounded-lg ">
          <img src="/searchicon.svg" className="my-auto" />
          <input
            type="text"
            name=""
            id=""
            className="my-auto text-[#9B9B9B] outline-none px-2 bg-transparent placeholder:text-sm"
            placeholder="Search for driver’s name"
          />
        </div>
        <div className="bg-white flex text-center rounded-lg border border-[#DCDCDC]">
            <span className="my-auto px-3 text-xs text-[#222222] ">Export</span>
        </div> 
      </div>
    </>
  );
}
