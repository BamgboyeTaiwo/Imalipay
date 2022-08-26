import React from "react";
import CCards from "../Cards/CCards";
import Card from "../Cards/OCards";

export default function CustomerCards() {
  return (
    <>
      <>
        {/* Header */}
        <div className="relative md:pt-4 pb-4 pt-8">
          <div className="  mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:pl-1">
                  <CCards cardname="Total customers" cardrate={"40%" } direction="increase"   cardstat="2,420" />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-1">
                  <CCards cardname="Total active customers" cardrate="10%" direction="decrease"   cardstat="1,210" cardicon="/o2.svg" />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-1">
                  <CCards cardname="Total defaulters" cardrate="20%" direction="increase"   cardstat="316" cardicon="/o3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
