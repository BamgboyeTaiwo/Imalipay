import React from "react";

export default function OCards({ cardname, cardstat, cardicon }: any) {
  return (
    <>
      <div className="relative bg-white p-4 flex flex-col break-words rounded mb-6 xl:mb-0 shadow-lg">
        <div className="img mb-4">
          <img src={cardicon} alt="" srcSet="" />
        </div>
        <div className="ht">
          <p className="text-[#667085] test-sm ">{cardname}</p>
          <p className="text-2xl mt-2 ">{cardstat}</p>
        </div>
      </div>
    </>
  );
}

{
  /* <p className="text-sm text-blueGray-400 mt-4">
<span className={" mr-2"}>
  {/* <i
    className={
      statArrow === "up"
        ? "fas fa-arrow-up"
        : statArrow === "down"
        ? "fas fa-arrow-down"
        : ""
    }
  ></i>{" "} */
}
{
  /* {statPercent}% */
}
// </span>
// {/* <span className="whitespace-nowrap">{statDescripiron}</span> */}
// </p> */}
