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
      <div className="text-sm max-w-sm max-h-sm mb-10 ml-5 rounded overflow-hidden shadow-lg hover:bg-slate-100 transition-all duration-300">
        <img
          className="w-full h-1/4"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-md sm:text-base">
            {title}
            <FontAwesomeIcon
              color="purple"
              bounce={animate}
              className="ml-2"
              size={"1x"}
              icon={faThumbsUp}
            ></FontAwesomeIcon>
          </div>
          <p className="hidden md:inline-block text-gray-700 text-md sm:text-base">
            {description[0] + "..."}
          </p>
        </div>
        <div className="px-6 pt-2 pb-2">
          {category.slice(0, 3).map((d, idx) => (
            <span
              key={`cat_${recipeID + idx}`}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
