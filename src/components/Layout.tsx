import * as React from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  heading: string;
  children: JSX.Element;
};

const Layout = ({ heading, children }: LayoutProps): JSX.Element => {
  return (
    <div className="super_container">
      <h1>{heading}</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
