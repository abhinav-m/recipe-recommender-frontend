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

  // const [clickCount, setCount] = React.useState(0);
  // const [animationComplete, setAnimationComplete] = React.useState(false);
  // let animateHeart = false;
  // let timeout = null;

  // if (clickCount == 3) {
  //   timeout = setTimeout(() => {
  //     setAnimationComplete(true);
  //     clearTimeout(timeout);
  //   }, 3000);
  //   animateHeart = true;
  // }

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
      {/* <Link to="/">
        <h1 className="text-2xl text-center text-slate-500/55 font-bold">
          {heading + " " + subheading}
        </h1>
      </Link>
      <h3 className="text-center text-sky-800 font-semibold mt-5">
        {"A recommender system"} <a className="font-bold">BUILT</a>
        {" for your tastebuds™"}
        <p className="text-center text-sm mt-5 text-slate-500">
          {"Made with "}
          {animationComplete ? (
            <a
              rel="nooopener noreferrer"
              href="https://www.linkedin.com/in/navneetgujjar/"
            >
              <FontAwesomeIcon color="red" icon={faHeart} />
            </a>
          ) : (
            <FontAwesomeIcon
              color="red"
              size={animateHeart ? "3x" : "1x"}
              bounce={animateHeart}
              icon={faHeart}
              onClick={() => setCount(clickCount + 1)}
            />
          )}
          {" and "} <FontAwesomeIcon color="brown" icon={faCoffee} /> {" by "}
          <a
            className="text-blue-500"
            rel="nooopener noreferrer"
            href="https://www.linkedin.com/in/amishra93/"
          >
            Abhinav Mishra
          </a>
        </p>
      </h3> */}

      <Outlet />
    </div>
  );
};

export default Layout;
