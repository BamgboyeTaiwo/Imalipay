import React from "react";
import DCards from "../Cards/DCards";
import Card from "../Cards/OCards";
import RCards from "../Cards/Rcards";

export default function ReconCards() {
  return (
    <>
      <>
        {/* Header */}
        <div className="relative md:pt-4 pb-4 pt-8">
          <div className="  mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-1">
                  {/* <Card cardname="Total outstanding balance" cardstat="6,709,288" cardicon="/Featuredicon.svg" /> */}
                  <RCards cardname="Total order transactions" cardstat="6,708,321" cardicon="/r11.svg" />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-1">
                  <RCards cardname="Total collections" cardstat="2,240,059" cardicon="/r2.svg" />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-1">
                  {/* <DCards cardname="Total number of defaulters" cardstat="316" cardicon="/r2.svg" /> */}
                  <>
                    <div className="relative justify-between bg-white p-4 flex flex-row break-words rounded mb-6 xl:mb-0 shadow-lg">
                      {/* <div className="img mb-4 flex flex-row justify-between">
                        <img src='/' alt="" srcSet="" />
                        <img src="/icon3dots.svg" alt="" srcSet="" />
                      </div> */}
                      <div className="ht mt-auto">
                        <p className="text-[#667085] font-light test-sm ">Reconcile</p>
                        <p className="text-2xl mt-2 ">53/100%</p>
                      </div>
                      <div>
                      {/* <img src='/r3.svg' alt="" srcSet="" /> */}
                      <img src='/r4.svg' alt="" srcSet="" className="xlg:py-[0.65rem] sm:w-[100px] w-[130px]" />
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
