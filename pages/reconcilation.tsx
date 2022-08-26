// import React from "react";
import Reconcilationscreen from "../src/UI/Reconcilation/Reconcilation";
import Layout from "../layout/main";
import NestedLayout from "../layout/recon";

export default function Page() {
  return (
    <div>
      <Reconcilationscreen />
    </div>
  );
}

Page.getLayout = function getLayout(page: any) {
  return (
  <NestedLayout>
    {page}
    </NestedLayout>
    )
};
