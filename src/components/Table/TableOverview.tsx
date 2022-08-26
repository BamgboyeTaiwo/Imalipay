import React from "react";
import customers from "../../../pages/customers";
import { CustomersOverview } from "../../data/dummy";

export default function TableOverview() {
  return (
    <>
      <div className="overflow-x-auto pb-20 relative mt-8 rounded-[10px]">
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
                DEPOSIT
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                DATE
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                VOUCHER NO.
              </th>
              <th scope="col" className="py-3 px-6 text-[#707070]">
                TRANS. STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="bg-white border-b">
              <td className="py-4 px-6">
                <input type="checkbox" className="bg-[#D0D0D0]" name="headbox" id="" style={{ background: "white" }} />
              </td>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex flex-row">
                  <div className="img w-[36px] h-[36px] mr-2">
                    <img src="/Avatar.png" alt="" srcSet="" className="sm:w-full" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#101828]">Phoenix Baker</p>
                    <span className="text-[#667085] opacity-75">+234 803 0000</span>
                  </div>
                </div>
              </th>
              <td className="py-4 px-6"> NGN 34,600</td>
              <td className="py-4 px-6">Jan 6, 2022 • 09:21</td>
              <td className="py-4 px-6">00437E</td>
              <td className="py-4 px-6">
                <div className="flex py-1 px-2 bg-[#ECFDF3] rounded-lg">
                  <span className="text-xs text-[#027A48]">Sucessful</span>
                </div>
              </td>
            </tr> */}
            {CustomersOverview.map((customer, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="py-4 px-6">
                    <input type="checkbox" className="bg-[#D0D0D0]" name="headbox" id="" style={{ background: "white" }} />
                  </td>
                  <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex flex-row">
                      <div className="img w-[36px] h-[36px] mr-2">
                        <img src="/Avatar.png" alt="" srcSet="" className="sm:w-full" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[#101828]">{customer.name}</p>
                        <span className="text-[#667085] opacity-75">{customer.number}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6"> NGN {customer.deposit}</td>
                  <td className="py-4 px-6">{customer.date}</td>
                  <td className="py-4 px-6">{customer.voucherNo}</td>
                  <td className="py-4 px-6">
                    {customer.transactionStatus === "Successful" ? (
                      <div className="flex py-1 px-1 w-fit bg-[#ECFDF3] rounded-lg">
                        <span className="text-xs text-[#027A48]">Sucessful</span>
                      </div>
                    ) : (
                      <div className="flex py-1 w-fit px-2 bg-[#FEF3F2] rounded-lg">
                        <span className="text-xs mx-auto text-[#B42318]">Failed</span>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
