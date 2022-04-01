import * as React from "react";

type CardProps = {
  title: string;
  description: string[];
  image: string;
};

const Card = ({ title, description, image }: CardProps): JSX.Element => {
  return (
    <div className="bg-white max-w-sm rounded-xl shadow-md overflow-hidden  md:max-w-2xl p-4 m-4">
      {/* Important - flex column by default, MINIMUM WIDTH - row */}
      <div className="flex flex-col sm:flex-row  md:flex  m-5 max-w-sm items-start">
        <div className="max-w-sm">
          <img src={image} />
        </div>
        <div className="ml-4 pt-0 pl-0 flex-md flex-column justify-content-center">
          <div className="font-bold font-sans font-sm text-indigo-900 text-center">
            {title}
          </div>
          <ul className="font-sans text-indigo-900 font-sm m-4 list-decimal text-center ">
            {description.slice(0, 3).map((d) => (
              <li>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
