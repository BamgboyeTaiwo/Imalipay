import React from "react";
import CustomerCards from "../../components/Header/Customercards";
import HeaderCards from "../../components/Header/HeaderCards";
import Headtitle from "../../components/Header/Headtitle";
import Table from "../../components/Table/Table";

export default function Customerscreen() {
  return (
    <div>
      <Headtitle title="Customers"/>
      <CustomerCards/>
      <Table/>
    </div>
  );
}
