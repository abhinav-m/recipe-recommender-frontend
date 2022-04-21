import axios from "axios";
import * as React from "react";
import Carousel from "../../components/Carousel.tsx";
import Loader from "../../components/Loader.tsx";

type LandingPageProps = {
  title: string;
};

const LandingPage = ({ title }: LandingPageProps): JSX.Element => {
  const { useState, useEffect } = React;

  const [data, setData] = useState({ recipeData: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetcher = async () => {
      const result = await axios(
        "https://fathomless-dawn-38291.herokuapp.com/recipes"
      );
      setData({ recipeData: result.data });
      setLoading(false);
      window.document.title = `Masala - Home`;
    };
    dataFetcher();
  }, [Object.keys(data).length]);

  return (
    <div className="">
      <p className="text-lg text-center mt-8 text-slate-800 font-sans">
        {title}
      </p>
      {!loading ? (
        <Carousel data={data.recipeData} />
      ) : (
        <Loader loading={loading} />
      )}
    </div>
  );
};

export default LandingPage;
