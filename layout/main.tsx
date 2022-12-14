import React from "react";

// components

import Sidebar from "../src/components/Sidebar/Sidebar";
import Navbar from "../src/components/Navbar/Navbar";
import { useRouter } from "next/router";
import ReconSiderbar from "../src/components/Sidebar/Reconsiderbar";

export default function Admin({ children }:any) {
  const { asPath, pathname } = useRouter();
  // console.log(asPath, pathname);
  
  
  return (
    <>
    {
      asPath ==='/reconcilation' ? <ReconSiderbar/> : <Sidebar />
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
