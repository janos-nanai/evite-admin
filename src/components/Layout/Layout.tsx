import React, { ReactChild } from "react";

import MainNavigation from "./MainNavigation";
import NewGuest from "../Form/NewGuest";
import NewPartner from "../Form/NewPartner";
import NewChild from "../Form/NewChild";
import UpdateGuest from "../Form/UpdateGuest";
import UpdatePartner from "../Form/UpdatePartner";
import UpdateChild from "../Form/UpdateChild";
import LoginAdmin from "../Form/LoginAdmin";

const Layout = (props: { children: ReactChild | ReactChild[] }) => {
  return (
    <React.Fragment>
      <LoginAdmin />
      <NewGuest />
      <NewPartner />
      <NewChild />
      <UpdateGuest />
      <UpdatePartner />
      <UpdateChild />
      <header>
        <MainNavigation />
      </header>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
