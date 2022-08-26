import React from "react";
import Headtitle from "../../components/Header/Headtitle";
import Tablefulfilments from "../../components/Table/Tablefulfilments";

export default function Fulfilmentscreen() {
  return (
    <>
      <div className="w-full pt-6 flex flex-row justify-between">
        <div className=" ">
          <span className="text-lg text-[#222222] font-semibold font-inter">Fulfilment</span>
        </div>
        <div className="bg-[#014342] flex text-center rounded-lg border border-[#DCDCDC]">
          <span className="my-auto px-3 py-2 text-xs text-white ">Register</span>
        </div>
      </div>
      <Tablefulfilments />
    </>
  );
}
