import * as React from "react";
import { Outlet } from "react-router-dom";
import Carousel from "./Carousel.tsx";

type LayoutProps = {
  heading: string;
};

const Layout = ({ heading }: LayoutProps): JSX.Element => {
  return (
    <div className="bg-white m-4 sm:m-4 md:m-10 lg:m-10 xl:m-16">
      <h1 className="text-xl text-center">{heading}</h1>

      <Outlet />
    </div>
  );
};

export default Layout;
