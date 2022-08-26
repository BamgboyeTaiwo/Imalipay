import React from "react";
import { Customerscust, CustomersOverview } from "../../data/dummy";

export default function Table() {
  const value = 10;
  return (
    <>
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="flex flex-row justify-between">
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

      <div className="overflow-x-auto mt-8 relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs  uppercase bg-[#F3F3F3] ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMERS
              </th>
              <th scope="col" className="py-3 px-6">
                DATE REGISTERED
              </th>
              <th scope="col" className="py-3 px-6">
                HYC STATUS
              </th>
              <th scope="col" className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {Customerscust.map((items, index) => {
              return (
                <tr key={items.id} className="bg-white border-b ">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-[#101010] whitespace-nowrap ">
                    #3066
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-row">
                      <div className="img w-[36px] h-[36px] mr-2">
                        <img src="/Avatar.png" alt="" srcSet="" className="sm:w-full" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[#101828]">P</p>
                        <span className="text-[#667085] opacity-75">76874689-1049</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">06 Jan, 2022</td>
                  <td className="py-4 px-6">
                    {items.kyc === "Verified" ? (
                      <div className="flex py-1 px-1 w-max bg-[#ECFDF3] rounded-lg">
                        <img src="/greentick.svg" />
                        <span className="text-xs mx-1 text-[#027A48]">Verified</span>
                      </div>
                    ) : (
                      <div className="flex py-1 w-fit px-2 bg-[#FEF3F2] rounded-lg">
                        <span className="text-xs mx-auto text-[#B42318]">Pending</span>
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <a href={`/customers/${index}`} className="font-medium text-[#667085] hover:underline">
                      View
                    </a>
                  </td>
                </tr>
              );
            })}
            {/* <tr className="bg-white border-b ">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="py-4 px-6 font-medium text-[#101010] whitespace-nowrap ">
                #3066
              </th>
              <td className="py-4 px-6">
                <div className="flex flex-row">
                  <div className="img w-[36px] h-[36px] mr-2">
                    <img src="/Avatar.png" alt="" srcSet="" className="sm:w-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#101828]">P</p>
                    <span className="text-[#667085] opacity-75">76874689-1049</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">06 Jan, 2022</td>
              <td className="py-4 px-6">
                {.transactionStatus === "Successful" ? (
                  <div className="flex py-1 px-1 w-fit bg-[#ECFDF3] rounded-lg">
                    <span className="text-xs text-[#027A48]">Sucessful</span>
                  </div>
                ) : (
                  <div className="flex py-1 w-fit px-2 bg-[#FEF3F2] rounded-lg">
                    <span className="text-xs mx-auto text-[#B42318]">Failed</span>
                  </div>
                )}
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
        <nav className=" hidden flex justify-between items-center pt-4" aria-label="Table navigation">
          <ul className="inline-flex mx-auto items-center -space-x-px">
            <li>
              <a href="#" className="block py-2 px-3 ml-0 leading-tight  bg-white rounded-l-lg border ">
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 leading-tight  bg-white border  ">
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ...
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                100
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
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
