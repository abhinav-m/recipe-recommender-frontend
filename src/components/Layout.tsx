import { generateSlug } from "random-word-slugs";
import * as React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  faCoffee,
  fa,
  faHeartbeat,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel.tsx";
import NavBar from "./NavBar.tsx";

type LayoutProps = {
  heading: string;
  subheading: string;
};

const Layout = ({ heading, subheading }: LayoutProps): JSX.Element => {
  let USER_KEY = window.localStorage.getItem("USER_KEY");
  let newUser = false;

  if (!USER_KEY) {
    newUser = true;
    const slug = generateSlug(3, { format: "title" });
    window.localStorage.setItem("USER_KEY", slug);
    USER_KEY = slug;
  }

  if (USER_KEY) {
    gtag("config", "G-230GB5N9V3", {
      user_id: USER_KEY,
    });
    gtag("set", "user_properties", {
      crm_id: USER_KEY,
    });
  }

  return (
    <div className="bg-white mt-2 sm:m-4 md:m-5 lg:m-5 xl:m-5">
      <NavBar
        heading={heading}
        subheading={subheading}
        newUser={newUser}
        USER_KEY={USER_KEY}
      />

      <Outlet />
    </div>
  );
};

export default Layout;
