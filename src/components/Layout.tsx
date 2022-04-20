import { generateSlug } from "random-word-slugs";
import * as React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel.tsx";

type LayoutProps = {
  heading: string;
};

const Layout = ({ heading }: LayoutProps): JSX.Element => {
  let USER_KEY = window.localStorage.getItem("USER_KEY");
  let newUser = false;

  if (!USER_KEY) {
    newUser = true;
    const slug = generateSlug(3, { format: "title" });
    window.localStorage.setItem("USER_KEY", slug);
    USER_KEY = slug;
  }
  return (
    <div className="bg-white mt-2 sm:m-4 md:m-5 lg:m-5 xl:m-5">
      <h1 className="text-xl text-center text-slate-500/55 font-bold">
        {heading}
      </h1>
      <h3 className="text-center text-sky-800 font-semibold mt-5">
        {"A recommender system"} <a className="font-bold">BUILT</a>
        {" for your tastebuds™"}
        <p className="text-center text-sm mt-5 text-slate-500">
          {"Made with "}
          <FontAwesomeIcon color="red" icon={faHeart} />
          {" and "} <FontAwesomeIcon color="brown" icon={faCoffee} /> {" by "}
          <a className="text-blue-500" href="https://github.com/abhinav-m">
            Abhinav Mishra
          </a>
        </p>
      </h3>
      <p className="text-center mt-6 ">
        {`Welcome ${!newUser ? "back " : ""}`}
        <a className="font-sans font-semibold underline decoration-2 underline decoration-indigo-500">
          {USER_KEY}
        </a>
      </p>

      <Outlet />
    </div>
  );
};

export default Layout;
