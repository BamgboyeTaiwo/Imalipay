import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navlinks } from "../../data/dummy";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 lg:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden  bg-white border-r border-[#E5E5E5] flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 lg:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <img src="/menu.svg" alt="" />
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              <img src="/logo.svg" alt="" />
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">{/* <NotificationDropdown /> */}</li>
            <li className="inline-block relative">{/* <UserDropdown /> */}</li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex  lg:pl-0  md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden  pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      <img src="/logo.svg" alt="" className="w-[150px] hmm" />
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <img src="/times.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            {/* Heading */}
            <h6 className="md:min-w-full px-2 text-[#808080]  lg:w-[80%] sm:mx-auto lg:mx-0 text-blueGray-500 text-xs uppercase font-light block pt-1 pb-4 no-underline">
              Quick Menu
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col  mt-1 sm:w-[200px] lg:w-[80%] flex flex-col list-none">
              {Navlinks.map((link, index) => {
                return (
                  <li key={index} className="items-center">
                    <Link href={link.link}>
                      <a
                        className={
                          "text-sm opacity-75 text-black py-3 flex text-center  " +
                          (router.pathname.indexOf(`/${link.link}`) !== -1
                            ? "font-semibold hover:text-lightBlue-600"
                            : "font-base opacity-75 hover:text-blueGray-500") 
                        }
                      >
                        <img src={`/` + link.icon} className="text-red-400  my-auto px-2" alt="" />
                        {link.name}
                      </a>
                    </Link>
                  </li>
                );
              })}

              {/* <li className="items-center">
                <Link href="/customers">
                  <a
                    className={
                      "text-xs text-black  uppercase py-3 flex text-center  " +
                      (router.pathname.indexOf("/customers") !== -1
                        ? "font-bold hover:text-lightBlue-600"
                        : "font-light hover:text-blueGray-500")
                    }
                  >
                    <img src="/team_dashboard.svg" className="my-auto px-2" alt="" />
                    Overview
                  </a>
                </Link>
              </li> */}

              {/* <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1 ? "opacity-75" : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Settings
                  </a>
                </Link>
                    </li> */}


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
