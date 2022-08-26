import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import UserDropdown from "components/Dropdowns/UserDropdown.js";
import UserDropdown from "../Dropdown/Userdropdown";

export default function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const { asPath, pathname } = useRouter();
  return (
    <>
      {/* Navbar */}
      <nav className=" sm:hidden md:hiden lg:block lg:relative  border border-[#E5E5E5] bg-white top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full  bg-white mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          {/* <a
            className=" text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboar
          </a> */}
          <div>
            <p className="text-lg text-[#222222] font-bold">Hello Alex</p>
            <span className="text-sm text-[#707070]">Here’s what’s going on with your account.</span>
          </div>
          {/* Form */}
          {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}

          <div
            className="flex flex-row"
            onClick={() => {
              setdropdown(!dropdown);
            }}
          >
            <img className="border-r pr-3 border-[#EAEAEA]" src="/notificationicon.svg" alt="" />
            <div className="flex flex-row px-3">
              <img src="/avatar.svg" className="w-[40px]" />
              <div className="px-2 flex-col">
                <div className="flex flex-row ">
                  <p>Alex</p>
                  <img className="ml-[25%]" src="/arrowdown.svg" alt="" />
                </div>
                <span className="text-xs text-[#707070]">Vendor ID: 3945823</span>
              </div>
            </div>
          </div>

          {/* User */}
        </div>
      </nav>
      <div className={`bg-transparent ${dropdown ? "" : "hidden"} top-[5%] w-full flex absolute`}>
        <ul className="flex-col ml-auto mr-[5%]  md:flex-row list-none items-center hidden md:flex">
          <>
            <div
              // ref={popoverDropdownRef}
              className={
                // (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
              }
            >
              {asPath === "/reconcilation" ? (
                <Link href="/" onClick={(e) => e.preventDefault()}>
                  <span
                    className={
                      "text-sm py-2 hover:bg-grey-300 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                  >
                    Financial Dashboard
                  </span>
                </Link>
              ) : (
                <Link href="/reconcilation" onClick={(e) => e.preventDefault()}>
                  <span
                    className={
                      "text-sm py-2 hover:bg-grey-300 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                  >
                    Reconcilation Dashboard
                  </span>
                </Link>
              )}

              <a
                href="#imali"
                className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}
                onClick={(e) => e.preventDefault()}
              >
                Profile
              </a>
              {/* <a
                href="#pablo"
                className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a> */}
              <div className="h-0 my-2 border border-solid border-blueGray-100" />
              <a
                href="#imali"
                className={"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}
                onClick={(e) => e.preventDefault()}
              >
                Another link
              </a>
            </div>
          </>
        </ul>
      </div>

      {/* End Navbar */}
    </>
  );
}
