import React from "react";
import Card from "../Cards/OCards";

export default function HeaderCards() {
  return (
    <>
      <>
        {/* Header */}
        <div className="relative md:pt-4 pb-4 pt-8">
          <div className="  mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-0">
                  <Card
                    cardname="Total outstanding balance"
                    cardstat="6,709,288"
                    cardicon="/o1.svg"

                  />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-3">
                  <Card
                    cardname="Total repayment pending "
                    cardstat="72,864"
                    cardicon="/o2.svg"

                  />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 sm:px-4 lg:px-0">
                  <Card
                    cardname="Total trasaction counts"
                    cardstat="3,062"
                    cardicon="/o3.svg"

                  />
                </div>
                {/* <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                  <Card
                  // statSubtitle="NEW USERS"
                  // statTitle="2,356"
                  // statArrow="down"
                  // statPercent="3.48"
                  // statPercentColor="text-red-500"
                  // statDescripiron="Since last week"
                  // statIconName="fas fa-chart-pie"
                  // statIconColor="bg-orange-500"
                  />
                </div> */}
                {/* <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                  <Card
                  // statSubtitle="SALES"
                  // statTitle="924"
                  // statArrow="down"
                  // statPercent="1.10"
                  // statPercentColor="text-orange-500"
                  // statDescripiron="Since yesterday"
                  // statIconName="fas fa-users"
                  // statIconColor="bg-pink-500"
                  />
                </div> */}
                {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <Card
                  // statSubtitle="PERFORMANCE"
                  // statTitle="49,65%"
                  // statArrow="up"
                  // statPercent="12"
                  // statPercentColor="text-emerald-500"
                  // statDescripiron="Since last month"
                  // statIconName="fas fa-percent"
                  // statIconColor="bg-lightBlue-500"
                />
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
