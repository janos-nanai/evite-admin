import React, { ReactChild } from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props: {
  onCreateGuest: () => void;
  children: ReactChild | ReactChild[];
}) => {
  return (
    <React.Fragment>
      <header>
        <MainNavigation onCreateGuest={props.onCreateGuest} />
      </header>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
