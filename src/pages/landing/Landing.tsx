import axios from "axios";
import * as React from "react";
import Carousel from "../../components/Carousel.tsx";

type LandingPageProps = {
  title: string;
};

const LandingPage = ({ title }: LandingPageProps): JSX.Element => {
  const { useState, useEffect } = React;

  const [data, setData] = useState({ recipeData: [] });

  useEffect(() => {
    const dataFetcher = async () => {
      const result = await axios("http://localhost:8080/recipes");
      setData({ recipeData: result.data });
    };
    dataFetcher();
  });

  return (
    <div className="text-bold text-center m-16 text-slate-600 font-sans">
      {title}
      {data && data.recipeData && data.recipeData.length > 0 ? (
        <Carousel data={data.recipeData} />
      ) : null}
    </div>
  );
};

export default LandingPage;
