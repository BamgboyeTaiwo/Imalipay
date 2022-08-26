import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Customerscust } from "../../src/data/dummy";

export default function Customerid() {
  const { asPath, pathname } = useRouter();
  const [customerdata, setcustomerdata]:any = useState();
  console.log(asPath.split("/")[2]);
  const path = asPath.split("/")[2];

  useEffect(() => {
    Customerscust.map((items, index) => {
      if (path === `${index}`) {
        setcustomerdata(items);
      }
    });
  }, []);

  return (
    <div>
      <div className=" pt-[2.5%]">
        <span className="text-sm text-[#101010]  font-inter">
          Go Back / <span className="text-[#707070]">{customerdata.name}</span>
        </span>
      </div>
      <div className="board bg-white p-4 mt-8 sm:pb-10 lg:pb-14 flex flex-row rounded-lg">
        <div className="d1 sm:w-[80vh] lg:w-1/2 p-4  border-r ">
          <h4>Customer’s Profile </h4>
          <div className="flex mt-4 flex-row">
            <div>
              <img src="/AvatarOR.png" alt="" srcSet="" width="50px" />
            </div>
            <div className="my-auto mx-2">
              <p className="text-xs text-[#344054]">{customerdata.name}</p>
              <p className="text-xs text-[#667085]">Customer</p>
            </div>
          </div>
          <div className="mt-4 w-full ">
            <div className="flex flex-row ">
              <div className="box1 flex-1">
                <span className="text-xs font-light text-[#808080] 0">First name</span> <br />
                <input
                  type="text"
                  value={`${customerdata?.name}`.split(" ")[0]}
                  name=""
                  id=""
                  className="bg-[#FAFAFA] text-xs px-2 py-2 outline-none rounded-lg sm: lg:w-[12vw] xlg:w-[15vw]"
                />
              </div>
              <div className="box1 flex-1">
                <span className="text-xs font-light text-[#808080]">Last name</span> <br />
                <input
                  type="text"
                  name=""
                  value={customerdata?.name?.split(" ")[1]}
                  id=""
                  className="bg-[#FAFAFA] outline-none py-2 text-xs px-2 rounded-lg lg:w-[12vw] xlg:w-[15vw]"
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-light text-[#808080] 0">Address</span>

              <div className=" flex flex-row bg-[#FAFAFA] rounded-lg px-2">
                <img src="/country.svg" alt="" srcSet="" />
                {/* <span className="my-auto">+254</span> */}
                <input
                  type="text"
                  value={customerdata?.number}
                  name=""
                  id=""
                  className="px-2 text-xs bg-transparent outline-none text-[#101010]  py-3 w-full"
                />
              </div>
            </div>
            <div className="flex mt-2 flex-row ">
              <div className="box1 flex-1">
                <span className="text-xs font-light text-[#808080] 0">Bank name</span> <br />
                <input
                  type="text"
                  value={"Access Bank PLC"}
                  name=""
                  id=""
                  className="bg-[#FAFAFA] text-[0.6rem] outline-none px-2 py-2 rounded-lg sm: lg:w-[15vh]"
                />
              </div>
              <div className="box1 flex-1">
                <span className="text-xs font-light text-[#808080]">Bank number</span> <br />
                <input
                  type="text"
                  name=""
                  value={"102848393"}
                  id=""
                  className="bg-[#FAFAFA] py-2 px-2 outline-none rounded-lg text-[0.6rem]  lg:w-[15vh]"
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-light text-[#808080] 0">Address</span>
              <div className=" flex flex-row bg-[#FAFAFA] rounded-lg">
                <input
                  type="text"
                  value={"34 Sunville Estate, Macathony Street,  Ikeja"}
                  name=""
                  id=""
                  className="px-2 text-[0.6rem] bg-transparent outline-none text-[#101010]  py-3 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d2 sm:w-[80vh] lg:w-1/2 p-4  ">
          <div>
            <h5 className="text-sm text-[#808080]">Transaction history</h5>
          </div>

          <div className=" mt-4 border border-[#EAECF0] flex flex-row p-3 rounded-lg">
            <div className="d11 border-r w-1/2 p-2">
              <p className="text-xs text-[#667085]">Amount loaned(NGN)</p>
              <span className="text-lg">404,051</span>
            </div>
            <div className="d11 w-1/2 p-2 px-4">
              <p className="text-xs text-[#667085]">Amount paid(NGN)</p>
              <span className="text-lg">120,000</span>
            </div>
          </div>

          <div className="record mt-6">
            <h6 className="text-xs text-[#808080]">Pending payment</h6>

            <div className="mt-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <img src="/pendingpaymenticon.svg" alt="" srcSet="" width="35px" />
                  <div className="flex flex-col mx-2">
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">1/4 Payment</p>
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">21 Jul, 2022</p>
                  </div>

                  <div className="mx-2 px-1 py-1 rounded-lg my-auto flex h-min bg-[#FEF3F2] ">
                    <span className="text-[0.75rem] my-auto mx-1 text-[#B42318]">Overdue</span>
                  </div>
                </div>

                <div className="">
                  <span className="text-xs">NGN 34,600</span>
                </div>
              </div>
              <div className="flex sm:mt-4 lg:mt-4 flex-row justify-between">
                <div className="flex flex-row">
                  <img src="/pendingpaymenticon.svg" alt="" srcSet="" width="35px" />
                  <div className="flex flex-col mx-2">
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">1/4 Payment</p>
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">21 Jul, 2022</p>
                  </div>

                  <div className="mx-2 px-1 py-1 rounded-lg my-auto flex h-min bg-[#FEF3F2] ">
                    <span className="text-[0.75rem] my-auto mx-1 text-[#B42318]">Overdue</span>
                  </div>
                </div>

                <div className="">
                  <span className="text-xs">NGN 34,600</span>
                </div>
              </div>
              <div className="flex sm:mt-4 lg:mt-4 flex-row justify-between">
                <div className="flex flex-row">
                  <img src="/pendingpaymenticon.svg" alt="" srcSet="" width="35px" />
                  <div className="flex flex-col mx-2">
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">1/4 Payment</p>
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">21 Jul, 2022</p>
                  </div>

                  <div className="mx-2 px-1 py-1 rounded-lg my-auto flex h-min bg-[#FEF3F2] ">
                    <span className="text-[0.75rem] my-auto mx-1 text-[#B42318]">Overdue</span>
                  </div>
                </div>

                <div className="">
                  <span className="text-xs">NGN 34,600</span>
                </div>
              </div>
              <div className="flex sm:mt-4 lg:mt-4 flex-row justify-between">
                <div className="flex flex-row">
                  <img src="/pendingpaymenticon.svg" alt="" srcSet="" width="35px" />
                  <div className="flex flex-col mx-2">
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">1/4 Payment</p>
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">21 Jul, 2022</p>
                  </div>

                  <div className="mx-2 px-1 py-1 rounded-lg my-auto flex h-min bg-[#FEF3F2] ">
                    <span className="text-[0.75rem] my-auto mx-1 text-[#B42318]">Overdue</span>
                  </div>
                </div>

                <div className="">
                  <span className="text-xs">NGN 34,600</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
