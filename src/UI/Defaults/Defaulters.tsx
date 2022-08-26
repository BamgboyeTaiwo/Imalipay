import React from "react";
import DefaultersCards from "../../components/Header/DeafultersCards";
import HeaderCards from "../../components/Header/HeaderCards";
import Headtitle from "../../components/Header/Headtitle";
import TableDefaulters from "../../components/Table/TableDefaulters";

export default function Defaulters() {
  return (
    <>
      <Headtitle title={"Defaulters"} />
      <DefaultersCards/>
      <TableDefaulters />
    </>
  );
}
