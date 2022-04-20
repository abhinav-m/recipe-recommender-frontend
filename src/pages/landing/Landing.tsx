import axios from "axios";
import * as React from "react";
import Carousel from "../../components/Carousel.tsx";

type LandingPageProps = {
  title: string;
};

const LandingPage = ({ title }: LandingPageProps): JSX.Element => {
  const { useState, useEffect } = React;

  const [data, setData] = useState({ recipeData: {} });

  useEffect(() => {
    const dataFetcher = async () => {
      const result = await axios(
        "https://fathomless-dawn-38291.herokuapp.com/recipes"
      );
      setData({ recipeData: result.data });
    };
    dataFetcher();
  }, [Object.keys(data).length]);

  return (
    <div className="text-bold text-center m-16 text-slate-600 font-sans">
      {title}
      {data && data.recipeData ? <Carousel data={data.recipeData} /> : null}
    </div>
  );
};

export default LandingPage;
