import React from "react";
import { CustomersDefaulters, CustomersRecon } from "../../data/dummy";

export default function TableReconcilation() {
  return (
    <>
      <div className="overflow-x-auto relative mt-8 rounded-[10px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-[10px]">
          <thead className="text-xs text-gray-700 uppercase bg-[#F3F3F3]">
            <tr>
              <th scope="col" className="py-3 px-6">
                <input type="checkbox" name="headbox" id="" />
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                DATE
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                ACCOUNT
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                INVOICE TOTAL
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                AMOUNT RECEIVED
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                PERCENTAGE RECONCILED
              </th>
            </tr>
          </thead>
          <tbody>
            {CustomersRecon.map((customer, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="py-4 px-6">
                    <input type="checkbox" className="bg-[#D0D0D0]" name="headbox" id="" style={{ background: "white" }} />
                  </td>
                  <td className="py-4 px-6">{customer.date}</td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex flex-row">
                      <div className="img w-[36px] h-[36px] mr-2">
                        <img src={customer.icon} alt="" srcSet="" className="sm:w-full" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[#101828]">{customer.accountname}</p>
                        <span className="text-[#667085] opacity-75">{customer.accountnumber}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">{customer.invoicetotal}</td>
                  <td className="py-4 px-6">
                {customer.amountrecieved}
                  </td>
                  <td className="py-4 px-6">
                  <div className="flex py-1 px-1 w-fit bg-[#ECFDF3] rounded-lg">
                        <span className="text-xs text-[#027A48]">{customer.percentage}</span>
                      </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="flex w-full">
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
      </div> */}
    </>
  );
}
