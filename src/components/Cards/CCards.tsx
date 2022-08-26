import React from "react";

export default function OCards({ cardname,cardrate,direction, cardstat, cardicon }: any) {
  return (
    <>
      <div className="relative bg-white p-4 px-6 flex flex-col break-words rounded mb-6 xl:mb-0 shadow-lg">
        <div className="img mb-3">
          <p className="text-xs">{cardname}</p>
        </div>
        <div className="stat">
          <p className="text-2xl mt-2 ">{cardstat}</p>
          <span className="text-xs mt-4 flex " > 
          {
            direction === 'increase'? 
                <img src="icongreenarrowup.svg" className="mx-1" /> :
                <img src="iconredarrowdown.svg" className="mx-1" /> 
          }
          <span className={`pr-1 ${direction === 'increase'? 'text-[#027A48]': 'text-[#B42318]'}`}>{cardrate}</span> vs last months</span>
        </div>
        {/* <div className="ht">
          <p className="text-[#667085] test-sm ">{cardname}</p>
          <p className="text-2xl mt-2 font-semibold">{cardstat}</p>
        </div> */}
      </div>
    </>
  );
}
