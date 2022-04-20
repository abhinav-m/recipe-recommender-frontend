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
  image,
}: CardProps): JSX.Element => {
  const [animate, setAnimate] = React.useState(false);
  return (
    <Link
      to={`/recommend/${recipeID}`}
      key={recipeID}
      className="bg-white hover:cursor-pointer hover:scale-105 hover:bg-gray-300 hover:shadow-xl  max-w-sm rounded-xl shadow-sm  overflow-hidden transition duration-250   md:max-w-2xl p-4 m-4 "
      onMouseOver={() => setAnimate(true)}
      onMouseOut={() => setAnimate(false)}
    >
      {/* Important - flex column by default, MINIMUM WIDTH - row */}
      <div className="flex flex-col sm:flex-row  md:flex  m-5 max-w-sm items-start">
        <div className="max-w-sm text-center">
          <img src={image} className="mb-10" />
          <FontAwesomeIcon
            color="purple"
            bounce={animate}
            size={animate ? "3x" : "2x"}
            icon={faThumbsUp}
          ></FontAwesomeIcon>
          <p>{animate ? "Recommend like me" : ""}</p>
        </div>
        <div className="ml-4 pt-0 pl-0 flex-md flex-column justify-content-center">
          <div className="font-bold font-sans font-sm text-indigo-900 text-center">
            {title}
          </div>
          <ul className="font-sans text-indigo-900 font-sm m-4 list-decimal text-center ">
            {description.slice(0, 3).map((d, idx) => (
              <li key={`descroption_${idx}`}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
