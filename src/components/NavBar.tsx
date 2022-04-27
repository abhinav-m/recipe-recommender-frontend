import {
  faCoffee,
  faHeart,
  faBowlFood,
  faUtensilSpoon,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
  heading: String;
  subheading: String;
  newUser: Boolean;
  USER_KEY: String;
};

const NavBar = ({
  heading,
  subheading,
  newUser,
  USER_KEY,
}: NavBarProps): JSX.Element => {
  const [clickCount, setCount] = React.useState(0);
  const [animationComplete, setAnimationComplete] = React.useState(false);
  let animateHeart = false;
  let timeout = null;

  if (clickCount == 3) {
    timeout = setTimeout(() => {
      setAnimationComplete(true);
      clearTimeout(timeout);
    }, 3000);
    animateHeart = true;
  }

  return (
    <div className="flex flex-row mt-5 items-center  justify-around space-evenly">
      <Link to="/">
        <h1 className="text-xl sm:text-2xl text-center text-slate-500/55 font-bold align-center">
          <FontAwesomeIcon
            icon={faUtensils}
            color="grey"
            size="1x"
            className="mr-1 md:mr-4"
          ></FontAwesomeIcon>
          <p className="hidden sm:inline-block">{heading + " "}</p>
          <p className="inline-block ml-1 md:ml-2">{subheading}</p>
        </h1>
        <h3 className="hidden md:block text-sm font-bold">
          {"A recommender system"} <span className="font-bold">BUILT</span>
          {" for your tastebuds™"}
        </h3>
      </Link>
      <p className="inline-block  sm:hidden text-center text-xs text-slate-500 ">
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

        <a
          className="text-blue-500 ml-1"
          rel="nooopener noreferrer"
          href="https://www.linkedin.com/in/amishra93/"
        >
          Abhinav
        </a>
      </p>

      <h3 className="text-center text-sky-800 font-semibold justify-self-center">
        <p className="hidden md:inline-block text-center text-md text-slate-500 mt-2">
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
      </h3>
      <p className="text-center  text-xs md:text-md lg:text-lg">
        {`Welcome `}
        <a className="font-sans font-semibold underline decoration-2 underline decoration-indigo-500">
          {USER_KEY}
        </a>
        {" !"}
      </p>
    </div>
  );
};

export default NavBar;
