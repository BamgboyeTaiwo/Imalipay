import React, { useState } from "react";
import HeaderCards from "../../components/Header/HeaderCards";
import Headtitle from "../../components/Header/Headtitle";
import ReconCards from "../../components/Header/ReconCards";
import Searchbar from "../../components/Searchbar";
import Table from "../../components/Table/Table";
import TableOverview from "../../components/Table/TableOverview";
import TableReconcilation from "../../components/Table/TableReconcilation";

export default function Reconcilationscreen() {
  const [connectModal, setconnectModal] = useState(false);
  const [modaltype, setmodaltype] = useState("");
  const [accountno, setaccountno] = useState(1);
  const [Erpno, setErpno] = useState(1);
  const change = () => {
    setconnectModal(true);
  };
  console.log("hello");

  return (
    <>
      <div
        className={` ${connectModal === true ? "flex" : "hidden"} bg-[#00000069]  z-3 absolute flex w-[100%] h-[100%]`}
        style={{ zIndex: 3 }}
        // onClick={()=>{
        //     if (connectModal === true) {
        //         setconnectModal(false)
        //     } else {
                
        //     }
        // }}
      >
        <div
          id="popup-modal"
          // tabIndex="-1"
          className={` flex sm:pt-[25vh] lg:pt-[15vh] my-auto mx-auto w-fit h-fit overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full`}
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="flex flex-col bg-white rounded-lg shadow ">
              <button
                onClick={() => setconnectModal(false)}
                type="button"
                className={`  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-700 dark:hover:text-white`}
                data-modal-toggle="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              {modaltype === "ACC" ? (
                <>
                  <div className={`${accountno === 1 ? "" : "hidden"} px-6 py-2 pb-8  sm:w-[85vw]  lg:w-[30vw]`}>
                    <div>
                      <div>
                        <h5 className="text-sm">Connect account</h5>
                        <p className="text-xs pt-1 text-[#808080] font-light">
                          Connect your mobile account or bank statement to continue
                        </p>
                      </div>
                      <div
                        onClick={() => {
                          setaccountno(2);
                        }}
                        className="flex flex-col mt-4"
                      >
                        <img className="mx-auto" src="/cm11.svg" alt="" srcSet="" width="80px" />
                        <p className="text-xs mx-auto pt-1">Mobile money account</p>
                      </div>
                      <div
                        onClick={() => {
                          setaccountno(3);
                        }}
                        className="flex flex-col mt-4"
                      >
                        <img className="mx-auto" src="/cm22.svg" alt="" srcSet="" width="80px" />
                        <p className="text-xs mx-auto pt-1">Bank account</p>
                      </div>
                    </div>
                    <div className="btn flex flex-row"></div>
                  </div>
                  <div className={`${accountno === 2 ? "" : "hidden"} px-4 py-4 pb-6 sm:w-[80vw] lg:w-[25vw]`}>
                    <div>
                      <div className="flex w-fit hover:shadow-lg hover:rounded flex-row" onClick={() => setaccountno(1)}>
                        <img src="/backmodal.svg" alt="" srcSet="" />
                        <span className=" my-auto mx-1 font-light text-xs">Go Back</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="text-md">Mobile money account</h5>
                        <p className="text-xs pt-1 text-[#808080] font-light">Choose an option to proceed</p>
                      </div>
                      {/* <div className="flex flex-col mt-4">
                                <img className="mx-auto" src="/cm11.svg" alt="" srcSet="" width="80px" />
                                <p className="text-xs mx-auto pt-1">Mobile money account</p>
                              </div> */}
                      <div className="btn mt-4 bg-[#EAECF0] rounded-md px-2 py-3 flex flex-row">
                        <span className="mx-auto text-[#101010] text-center text-xs">Connect MPesa account</span>
                      </div>
                      <div className="btn mt-4 border border-[#222222] rounded-md px-2 py-3 flex flex-row">
                        <span className="mx-auto text-[#101010] text-center text-xs">Upload Mpesa statement</span>
                      </div>
                    </div>
                    <div className="btn flex flex-row"></div>
                  </div>
                  <div className={`${accountno === 3 ? "" : "hidden"} px-4 py-4 pb-6 sm:w-[80vw] lg:w-[25vw]`}>
                    <div>
                      <div className="flex w-fit hover:shadow-lg hover:rounded flex-row" onClick={() => setaccountno(1)}>
                        <img src="/backmodal.svg" alt="" srcSet="" />
                        <span className=" my-auto mx-1 font-light text-xs">Go Back</span>
                      </div>
                      <div className="mt-4">
                        <h5 className="text-md">Bank account</h5>
                        <p className="text-xs pt-1 text-[#808080] font-light">Choose an option to proceed</p>
                      </div>
                      {/* <div className="flex flex-col mt-4">
                                <img className="mx-auto" src="/cm11.svg" alt="" srcSet="" width="80px" />
                                <p className="text-xs mx-auto pt-1">Mobile money account</p>
                              </div> */}
                      <div className="btn mt-4 bg-[#EAECF0] rounded-md px-2 py-3 flex flex-row">
                        <span className="mx-auto text-[#101010] text-center text-xs">Connect bank account</span>
                      </div>
                      <div className="btn mt-4 border border-[#222222] rounded-md px-2 py-3 flex flex-row">
                        <span className="mx-auto text-[#101010] text-center text-xs">Upload bank statement</span>
                      </div>
                    </div>
                    <div className="btn flex flex-row"></div>
                  </div>
                </>
              ) : (
                ""
              )}

              {modaltype === "ERP" ? (
                <>
                  <div className={`${Erpno === 1 ? "" : "hidden"} px-4 py-4 pb-6 lg:w-[25vw]  sm:w-[80vw]`}>
                    <div>
                      <div className="mt-4">
                        <h5 className="text-md">Connect your ERP</h5>
                      </div>

                      <div className=" mt-4">
                        <p className="text-xs mb-1"> ERP</p>
                        <select
                          name="erp"
                          id="erp"
                          className="w-full text-xs outline-none bg-transparent border rounded-md py-3 px-2 "
                        >
                          <option value="name">Select ERP</option>
                          <option value="volvo">Xero</option>
                        </select>
                      </div>

                      <div onClick={() => setErpno(2)} className="btn mt-4 bg-[#80B539] rounded-md px-2 py-3 flex flex-row">
                        <span className="mx-auto text-white text-center text-xs">Connect</span>
                      </div>
                    </div>
                    <div className="btn flex flex-row"></div>
                  </div>
                  <div className={`${Erpno === 2 ? "" : "hidden"} px-4 py-4 pb-6 lg:w-[30vw]`}>
                    <div>
                      <div className="mt-4">
                        <h5 className="text-md">Connect with us</h5>
                        <p className="text-xs pt-1 text-[#808080] font-light">
                          Connect your mobile account or bank statement to continue
                        </p>
                      </div>
                      <div className=" mt-4">
                        <p className="text-xs mb-1"> ERP</p>
                        <select
                          name="erp"
                          id="erp"
                          className="w-full text-xs outline-none bg-transparent border rounded-md py-3 px-2 "
                        >
                          <option value="name">Select ERP</option>
                          <option value="volvo">Xero</option>
                        </select>
                      </div>

                      <div className="btn mt-4 border border-[#222222] rounded-md px-2 py-3 flex flex-row">
                        <span className="mx-auto text-[#101010] text-center text-xs">Upload bank statement</span>
                      </div>
                    </div>
                    <div className="btn flex flex-row"></div>
                  </div>
                </>
              ) : (
                ""
              )}

              {modaltype === "CSV" ? (
                <div className="px-4 py-4 pb-6 lg:w-[25vw] sm:w-[80vw]">
                  <div>
                    <div className="flex w-fit hover:shadow-lg hover:rounded flex-row" onClick={() => setconnectModal(false)}>
                      <img src="/backmodal.svg" alt="" srcSet="" />
                      <span className=" my-auto mx-1 font-light text-xs">Go Back</span>
                    </div>
                    <div className="up rounded-lg mt-4 p-4 flex flex-col bg-[#FBFBFB] border border-dashed">
                        <img className="mx-auto" src="/um1.svg" alt="" srcSet="" />
                        <span className="mx-auto text-[0.5rem] font-light text-[#808080]">Click to upload PDF file</span>
                    </div>
                    <div onClick={() =>{ setErpno(2); setconnectModal(false) }} className="btn mt-4 bg-[#80B539] rounded-md px-2 py-3 flex flex-row">
                      <span className="mx-auto text-white text-center text-xs">Submit</span>
                    </div>
                  </div>
                  <div className="btn flex flex-row"></div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`  lg:px-5 sm:px-2 relative z-1`} style={{ zIndex: 1 }} >
        <Headtitle title={"Account summary"} />
        <div className="w-full mt-4 flex sm:flex-col lg:flex-row justify-between">
          <div className="hr1 text-xs flex mb-4 flex-row bg-[#EAECF0] py-2 px-6 rounded-lg">
            <img src="/flitericon.svg" className="mx-0.5" alt="" srcSet="" />
            <span className="my-auto text-xs">Today</span>
          </div>
          <div className="hr2 flex flex-row">
            <div
              onClick={() => {
                setconnectModal(true);
                setmodaltype("ERP");
              }}
              className="hr1 flex flex-row text-xs bg-[#FFBD2E] py-2 px-4 rounded-lg"
            >
              <img src="/linkicon.png" alt="" srcSet="" width={"20px"} />
              <span className="my-auto"> Connect ERP</span>
            </div>
            <div
              onClick={() => {
                setconnectModal(true);
                setmodaltype("CSV");
              }}
              className="hr1 lg:mx-2 sm:mx-1 flex flex-row text-xs bg-[#80B539] py-2 px-4 rounded-lg"
            >
              <img src="/fileicon.svg" alt="" srcSet="" width="13px" className="mx-1" />
              <span className="my-auto text-xs text-white">Upload CSV</span>
            </div>
            <div
              onClick={() => {
                setconnectModal(true);
                setmodaltype("ACC");
              }}
              className="hr1 lg:mx-2 sm:mx-1 flex flex-row text-xs bg-[#222222] py-2 px-4 rounded-lg"
            >
              <img src="/accounticon.svg" alt="" srcSet="" />
              <span className="my-auto text-xs text-white">Connect Account</span>
            </div>
          </div>
        </div>
        <ReconCards />
        <hr className="my-8" />
        <Searchbar />
        <TableReconcilation />
      </div>
    </>
  );
}

{
  /* <div className="px-6 py-2 pb-8 ">
<div>
  <div>
    <h5 className="text-sm">Connect account</h5>
    <p className="text-xs pt-1 text-[#808080] font-light">
      Connect your mobile account or bank statement to continue
    </p>
  </div>
  <div className="flex flex-col mt-4">
    <img className="mx-auto" src="/cm11.svg" alt="" srcSet="" width="80px" />
    <p className="text-xs mx-auto pt-1">Mobile money account</p>
  </div>
  <div className="flex flex-col mt-4">
    <img className="mx-auto" src="/cm22.svg" alt="" srcSet="" width="80px" />
    <p className="text-xs mx-auto pt-1">Bank account</p>
  </div>
</div>
<div className="btn flex flex-row"></div>
{/* <button
  data-modal-toggle="popup-modal"
  type="button"
  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
>
  Yes, Im sure
</button>
<button
  data-modal-toggle="popup-modal"
  type="button"
  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
>
  No, cancel
</button> */
}
// </div> */}
