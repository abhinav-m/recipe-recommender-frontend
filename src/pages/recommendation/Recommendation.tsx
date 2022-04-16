import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel.tsx";

type LandingPageProps = {
  recipeID: string;
};

const RecommendationPage = (props): JSX.Element => {
  const { useState, useEffect } = React;

  const { id } = useParams();

  const [data, setData] = useState({ recipeData: {} });

  useEffect(() => {
    const dataFetcher = async () => {
      const result = await axios(`http://localhost:8080/recommendation/${id}`);
      setData({ recipeData: result.data });
    };
    dataFetcher();
  }, [id]);

  return (
    <div className="text-bold text-center m-16 text-slate-600 font-sans">
      {`Here are the recommended recipes similar to the one you selected`}
      {data && data.recipeData ? <Carousel data={data.recipeData} /> : null}
    </div>
  );
};

export default RecommendationPage;
