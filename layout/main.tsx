import React from "react";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";

// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

import Sidebar from "../src/components/Sidebar/Sidebar";
import Navbar from "../src/components/Navbar/Navbar";
import HeaderCards from "../src/components/Header/HeaderCards";
import Headtitle from "../src/components/Header/Headtitle";
import { useRouter } from "next/router";
import SidebarS from "../src/components/Sidebar/sidebarR";

export default function Admin({ children }) {
  const { asPath, pathname } = useRouter();
  // console.log(asPath, pathname);
  
  
  return (
    <>
    {
      asPath ==='/reconcilation' ? <SidebarS/> : <Sidebar />
    }
      
      <div className="relative lg:ml-64 ">
        {/* <AdminNavbar /> */}
        <Navbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mt-[1vh] mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
