import React from "react";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";

// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";
// import SiderbarR from '../src/components/Sidebar/sidebarR'


import Navbar from "../src/components/Navbar/Navbar";
import ReconSiderbar from "../src/components/Sidebar/Reconsiderbar";

export default function Recon({ children }:any) {
  return (
    <>
      <ReconSiderbar/>
      <div className="relative lg:ml-64 ">
        {/* <AdminNavbar /> */}
        <Navbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mt-[1vh] mx-auto w-full -m-24">
          {children}
          
        </div>
      </div>
    </>
  );
}