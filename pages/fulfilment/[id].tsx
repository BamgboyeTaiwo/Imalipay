import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Customerscust, CustomersFulfilments } from "../../src/data/dummy";

export default function Fulfilmentid() {
  const { asPath, pathname } = useRouter();
  const [customerdata, setcustomerdata]:any = useState({});
  console.log(asPath.split("/")[2]);
  const path = asPath.split("/")[2];

  useEffect(() => {
    CustomersFulfilments.map((items, index) => {
      if (path === `${index}`) {
        setcustomerdata(items);
      }
    });
  }, []);

  return (
    <div>
      <div className=" pt-[2.5%]">
        <span className="text-sm text-[#101010]  font-inter">
          Go Back / <span className="text-[#707070]">{customerdata?.name}</span>
        </span>
      </div>
      <div className="board bg-white p-4 mt-8 sm:pb-10 lg:pb-14 flex lg:flex-row sm:flex-col rounded-lg">
        <div className="d1 sm:w-[80vw] lg:w-1/2 p-4 sm:border-0 lg:border-r ">
          <h4>Customer’s Profile </h4>
          <div className="flex mt-4 flex-row">
            <div>
              <img src="/AvatarOR.png" alt="" srcSet="" width="50px" />
            </div>
            <div className="my-auto mx-2">
              <p className="text-xs text-[#344054]">{customerdata?.name || ''}</p>
              <p className="text-xs text-[#667085]">Customer</p>
            </div>
          </div>
          <div className="mt-4  ">
            <div className="flex flex-row ">
              <div className="box1 sm:mr-4 ">
                <span className="text-xs font-light text-[#808080] 0">First name</span> <br />
                <input
                  type="text"
                  value={`${customerdata?.name}`.split(" ")[0]}
                  name=""
                  id=""
                  className="bg-[#FAFAFA] text-xs px-2 py-2 outline-none rounded-lg sm: lg:w-[12vw] xlg:w-[15vw]"
                />
              </div>
              <div className="box1 ">
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
            <div className="flex flex-row ">
              <div className="box1 sm:mr-4 ">
                <span className="text-xs font-light text-[#808080] 0">Gender</span> <br />
                <input
                  type="text"
                  value={`Male`}
                  name=""
                  id=""
                  className="bg-[#FAFAFA] text-xs px-2 py-2 outline-none rounded-lg sm: lg:w-[12vw] xlg:w-[15vw]"
                />
              </div>
              <div className="box1 ">
                <span className="text-xs font-light text-[#808080]">Date of Birth</span> <br />
                <input
                  type="text"
                  name=""
                  value={"21 Jul 1990"}
                  id=""
                  className="bg-[#FAFAFA] outline-none py-2 text-xs px-2 rounded-lg lg:w-[12vw] xlg:w-[15vw]"
                />
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="box1 sm:mr-4 ">
                <span className="text-xs font-light text-[#808080] 0">BVN</span> <br />
                <input
                  type="text"
                  value={`230459694042`}
                  name=""
                  id=""
                  className="bg-[#FAFAFA] text-xs px-2 py-2 outline-none rounded-lg sm: lg:w-[12vw] xlg:w-[15vw]"
                />
              </div>
              <div className="box1 ">
                <span className="text-xs font-light text-[#808080]">Phone Number</span> <br />
                <input
                  type="text"
                  name=""
                  value={"+234 705 509 4953"}
                  id=""
                  className="bg-[#FAFAFA] outline-none py-2 text-xs px-2 rounded-lg lg:w-[12vw] xlg:w-[15vw]"
                />
              </div>
            </div>

            <div className="mt-2">
              <span className="text-xs font-light text-[#808080] 0">Home Address</span>
              <div className=" flex flex-row bg-[#FAFAFA] rounded-lg">
                <input
                  type="text"
                  value={"18 Street name, Town, LGA, State, Country"}
                  name=""
                  id=""
                  className="px-2 text-[0.6rem] bg-transparent outline-none text-[#101010]  py-3 w-full"
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-light text-[#808080] 0">Location of Purchase</span>
              <div className=" flex flex-row bg-[#FAFAFA] rounded-lg">
                <input
                  type="text"
                  value={"Mega Autoshop, Lagos "}
                  name=""
                  id=""
                  className="px-2 text-[0.6rem] bg-transparent outline-none text-[#101010]  py-3 w-full"
                />
              </div>
            </div>

            <div className="mt-2">
              <span className="text-xs font-light text-[#808080] 0">Vehicle Model</span>
              <div className=" flex flex-row bg-[#FAFAFA] rounded-lg">
                <input
                  type="text"
                  value={"Toyota - Model Z"}
                  name=""
                  id=""
                  className="px-2 text-[0.6rem] bg-transparent outline-none text-[#101010]  py-3 w-full"
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-light text-[#808080] 0">Insurance Provider</span>
              <div className=" flex flex-row bg-[#FAFAFA] rounded-lg">
                <input
                  type="text"
                  value={"Company Insurance Plc"}
                  name=""
                  id=""
                  className="px-2 text-[0.6rem] bg-transparent outline-none text-[#101010]  py-3 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d2 sm:w-[90vw] sm:mx-auto lg:w-1/2 p-4  ">
          <div>
            <h5 className="text-sm text-[#808080] font-light uppercase">fulfilment details</h5>
          </div>

          <div className=" mt-4 border border-[#EAECF0] flex flex-row p-3 rounded-lg">
            <div className="d11 border-r sm:w-auto lg:w-1/2 p-2">
              <p className="text-xs text-[#667085]">Repayment amount</p>
              <span className="text-sm">₦304,600 / month</span>
            </div>
            <div className="d11 sm:w-auto lg:w-1/2 p-2 px-4">
              <p className="text-xs text-[#667085]">Value of car</p>
              <span className="text-sm">₦6,300,950</span>
            </div>
          </div>

          <div className=" mt-4 border border-[#EAECF0] flex flex-row p-3 rounded-lg">
            <div className="d11 border-r sm:w-auto lg:w-1/2 p-2">
              <p className="text-xs text-[#667085]">Repayment duration</p>
              <span className="text-xs">6 Months</span>
            </div>
            <div className="d11 sm:w-auto lg:w-1/2 p-2 px-4">
              <p className="text-xs text-[#667085]">Repayment ends</p>
              <span className="text-xs">03 Dec 2022</span>
            </div>
          </div>
          <div className=" mt-4 border border-[#EAECF0] flex flex-row p-3 rounded-lg">
            <div className="d11 border-r sm:w-auto lg:w-1/2 p-2">
              <p className="text-xs text-[#667085]">Transaction date</p>
              <span className="text-xs">Jan 6, 2022 @ 08:45</span>
            </div>
            <div className="d11 sm:w-auto lg:w-1/2 p-2 px-4">
              <p className="text-xs text-[#667085]">Status</p>
              <div className="flex py-1 mt-1 px-1 w-fit bg-[#ECFDF3] rounded-lg">
                <span className="text-xs text-[#027A48]">Active</span>
              </div>
            </div>
          </div>

          <div className="record mt-6">
            <h6 className="text-xs text-[#808080] font-light uppercase">Upcoming payment</h6>

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

                  <div className="mx-2 px-1 py-1 rounded-lg my-auto flex h-min bg-[#FFFAEB] ">
                    <span className="text-[0.75rem] my-auto mx-1 text-[#D68F00]">Pending</span>
                  </div>
                </div>

                <div className="">
                  <span className="text-xs">NGN 34,600</span>
                </div>
              </div>
            </div>
          </div>
          <div className="record mt-6">
            <h6 className="text-xs text-[#808080] font-light uppercase">Completed payment</h6>

            <div className="mt-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <img src="/pendingpaymenticon.svg" alt="" srcSet="" width="35px" />
                  <div className="flex flex-col mx-2">
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">1/4 Payment</p>
                    <p className="lg:text-xs xl:text-sm font-light text-[#808080]">21 Jul, 2022</p>
                  </div>

                  <div className="mx-2 px-1 py-1 rounded-lg my-auto flex h-min bg-[#EFF8FF] ">
                    <span className="text-[0.75rem] my-auto mx-1 text-[#175CD3]">Paid</span>
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

                  <div className="mx-2 px-1 py-1 rounded-lg my-auto flex h-min bg-[#EFF8FF] ">
                    <span className="text-[0.75rem] my-auto mx-1 text-[#175CD3]">Paid</span>
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
