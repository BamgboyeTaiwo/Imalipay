import React from "react";
import DCards from "../Cards/DCards";
import Card from "../Cards/OCards";

export default function DefaultersCards() {
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
                  <DCards cardname="Total default amount (NGN)" cardstat="3,160,010" cardicon="/d1.svg"/>
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-1">
                  <DCards cardname="Total default (NGN)" cardstat="890,100" cardicon="/d2.svg" />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-1">
                  <DCards cardname="Total number of defaulters" cardstat="316" cardicon="/d3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
