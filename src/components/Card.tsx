import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";

type CardProps = {
  recipeID: string;
  title: string;
  description: string[];
  image: string;
};

const Card = ({
  recipeID,
  title,
  description,
  category,
  image,
}: CardProps): JSX.Element => {
  const [animate, setAnimate] = React.useState(false);
  return (
    <Link
      to={`/recommend/${recipeID}`}
      key={recipeID}
      className="bg-white"
      onMouseOver={() => setAnimate(true)}
      onMouseOut={() => setAnimate(false)}
    >
      <div className="max-w-sm mb-10 ml-5 rounded overflow-hidden shadow-lg hover:bg-slate-100 transition-all duration-300">
        <img
          className="w-full h-1/4"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title}
            <FontAwesomeIcon
              color="purple"
              bounce={animate}
              className="ml-2"
              size={"1x"}
              icon={faThumbsUp}
            ></FontAwesomeIcon>
          </div>
          <p className="text-gray-700 text-base">{description[0] + ",..."}</p>
          {/* <p>{animate ? "Recommend like me" : ""}</p> */}
        </div>
        <div className="px-6 pt-4 pb-2">
          {category.slice(0, 3).map((d, idx) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Important - flex column by default, MINIMUM WIDTH - row
      <div className="flex-row m-5 min-w-md items-center justify-center">
        <div className="min-w-md text-center">
          <img src={image} className="h-30 w-40 mb-10" />
          <div className="font-bold font-sans font-sm text-indigo-900 text-center">
            {title}
          </div>
          <FontAwesomeIcon
            color="purple"
            bounce={animate}
            size={animate ? "3x" : "2x"}
            icon={faThumbsUp}
          ></FontAwesomeIcon>
          <p>{animate ? "Recommend like me" : ""}</p>
        </div>
        <div className="ml-4 pt-0 pl-0 flex-md flex-column justify-content-center">
          <ul className="font-sans text-indigo-900 font-sm m-4 font-semibold text-center ">
            {category.slice(0, 3).map((d, idx) => (
              <li key={`descroption_${idx}`}>{d}</li>
            ))}
          </ul>
        </div>
      </div> */}
    </Link>
  );
};

export default Card;
