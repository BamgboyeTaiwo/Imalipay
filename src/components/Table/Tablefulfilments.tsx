import Link from "next/link";
import React from "react";
import { CustomersFulfilments } from "../../data/dummy";

export default function Tablefulfilments() {
  return (
    <>
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="flex flex-row mt-11 justify-between">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 sm:w-[50vw] lg:w-80 text-xs outline-none bg-white text-[#9B9B9B] rounded-lg border border-[#DCDCDC] "
            placeholder="Search for items"
          />
        </div>
        <div className="bg-white flex text-center rounded-lg border border-[#DCDCDC]">
          <span className="my-auto px-3 text-xs text-[#222222] ">Export</span>
        </div>
      </div>
      <div className="overflow-x-auto relative mt-4 rounded-[10px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-[10px]">
          <thead className="text-xs text-gray-700 uppercase bg-[#F3F3F3]">
            <tr>
              <th scope="col" className="py-3 px-6">
                <input type="checkbox" name="headbox" id="" />
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                CUSTOMERS
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                DATE
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                VEHICLE MODEL
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                COL.STATUS
              </th>
            </tr>
          </thead>
          <tbody className="text-[#101828]">
            {CustomersFulfilments.map((customer, index) => {
              return (
                <Link key={index} href={`/fulfilment/${index}`}>
                  <tr className="bg-white border-b">
                    <td className="py-4 px-6">
                      <input type="checkbox" className="bg-[#D0D0D0]" name="headbox" id="" style={{ background: "white" }} />
                    </td>
                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex flex-row">
                        <div className="img w-[36px] h-[36px] mr-2">
                          <img src={customer.icon} alt="" srcSet="" className="sm:w-full" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[#101828]">{customer.name}</p>
                          <span className="text-[#667085] opacity-75">{customer.number}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">{customer.price}</td>
                    <td className="py-4 px-6">{customer.date}</td>
                    <td className="py-4 px-6">{customer.vehiclemodel}</td>
                    <td className="py-4 px-6">
                      {customer.colstatus === "Active" ? (
                        <div className="flex py-1 px-1 w-fit bg-[#ECFDF3] rounded-lg">
                          <span className="text-xs text-[#027A48]">Active</span>
                        </div>
                      ) : (
                        <div className="flex py-1 w-fit px-2 bg-[#FEF3F2] rounded-lg">
                          <span className="text-xs mx-auto text-[#B42318]">Failed</span>
                        </div>
                      )}
                    </td>
                    {/* <td className="py-4 px-6">
                    <a href="#" className="font-medium text-[#667085] hover:underline">
                      View
                    </a>
                  </td> */}
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex w-full">
        <nav className="mt-6 mx-auto">
          <ul className="inline-flex mx-auto items-center -space-x-px">
            <li>
              <a href="#" className="py-2 mx-2 px-3 text-[#667085]  rounded leading-tight  bg-[#EAEAEA] border  ">
                1
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 mx-1 text-[#667085]  rounded leading-tight  ">
                2
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3  text-[#667085]  rounded leading-tight  ">
                3
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3  text-[#667085] rounded leading-tight  ">
                .....
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3  text-[#667085]  rounded leading-tight  ">
                8
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3  text-[#667085]  rounded leading-tight  ">
                9
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 text-[#667085]  rounded leading-tight  ">
                10
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
