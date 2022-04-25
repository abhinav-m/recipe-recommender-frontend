import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFaceFrown,
  faFaceGrinBeam,
  faFaceMeh,
  faFaceGrinHearts,
  faFaceSmileBeam,
  faStar,
  faHome,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel.tsx";
import Loader from "../../components/Loader.tsx";
import { Link } from "react-router-dom";

type LandingPageProps = {
  recipeID: string;
};

const RecommendationPage = (props): JSX.Element => {
  const { useState, useEffect } = React;

  const { id } = useParams();

  const [data, setData] = useState({ recipeData: {} });
  const [dataSecond, setDataSecond] = useState({ recipeDataTFIDF: {} });
  const [origData, setOrigData] = useState({ data: {} });

  const stars = [1, 2, 3, 4, 5];
  const [idx, setIdx] = useState(-1);
  const [rated, setRated] = useState(false);
  const [loading, setLoading] = useState(true);

  const [helperTextShown, showHelperText] = useState(true);

  const handleRatingClick = (e) => {
    let { id } = e.target;
    if (!id) {
      id = e.target.parentElement.id;
    }
    const USER_KEY = window.localStorage.getItem("USER_KEY");
    const [rated_id, rating] = id.split("-");
    let USER_RATED = window.localStorage.getItem("USER_RATINGS");

    if (USER_RATED) {
      USER_RATED = JSON.parse(USER_RATED);
      USER_RATED.push([rated_id, rating]);
    } else {
      USER_RATED = [[rated_id, rating]];
    }

    axios.post(
      "https://fathomless-dawn-38291.herokuapp.com/rate_recommendation",
      { user: USER_KEY, recipe_id: rated_id, rating_score: rating }
    );

    if (window && window.gtag) {
      window.gtag("event", "user_rated", {
        user_id: USER_KEY,
        recipe_key: rated_id,
        value: rating,
      });
    }

    window.localStorage.setItem("USER_RATINGS", JSON.stringify(USER_RATED));
    setRated(true);
  };

  useEffect(() => {
    const dataFetcher = async () => {
      setLoading(true);
      setRated(false);
      const result = await axios(
        `https://fathomless-dawn-38291.herokuapp.com/recommendation/${id}`
      );

      const recommendationIngredients = await axios(
        `https://fathomless-dawn-38291.herokuapp.com/recommendations_tfidf/${id}`
      );

      const original = await axios(
        `https://fathomless-dawn-38291.herokuapp.com/recipe/${id}`
      );
      setOrigData({ data: original.data });
      setData({ recipeData: result.data });
      setDataSecond({ recipeDataTFIDF: recommendationIngredients.data });
      setLoading(false);
      window.document.title = `Masala -  Recommendations for ${original.data.title}`;
    };
    dataFetcher();
  }, [id]);

  return (
    <div className="text-bold text-center m-8 text-slate-600 font-sans">
      <Link
        to="/"
        onMouseOver={() => showHelperText(true)}
        onMouseOut={() => showHelperText(false)}
      >
        {/* <p className={`${helperTextShown ? "animate-pulse" : "hidden"}`}>
          Try another recipe!
        </p> */}
        <FontAwesomeIcon
          color={"black"}
          className="mb-4 hover:text-blue-500"
          icon={faHome}
          size={"2x"}
        />
      </Link>
      <p className="mb-4">
        {`${loading ? "Fetching" : "Here are the"} recommended recipes ${
          !loading ? "which taste like " : ""
        } `}
        <a className="font-bold text-blue-800">
          {!loading
            ? `${origData.data.title}`
            : "similar to the one you selected"}
        </a>
      </p>
      {!loading ? (
        <div>
          <div className="transition-all duration-700 ">
            <p>
              <span
                className={`${
                  rated ? "hidden " : ""
                }flex-row justify-between hover:cursor-pointer`}
                onClick={handleRatingClick}
                onMouseOut={() => setIdx(-1)}
              >
                <FontAwesomeIcon
                  color={idx >= 0 ? "gold" : ""}
                  className="m-2"
                  id={`${id}-${1}`}
                  icon={faStar}
                  onMouseOver={() => setIdx(0)}
                  size={"2x"}
                />
                <FontAwesomeIcon
                  className="m-2"
                  color={idx >= 1 ? "gold" : ""}
                  id={`${id}-${2}`}
                  size={"2x"}
                  onMouseOver={() => setIdx(1)}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="m-2"
                  color={idx >= 2 ? "gold" : ""}
                  id={`${id}-${3}`}
                  onMouseOver={() => setIdx(2)}
                  size={"2x"}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="m-2"
                  color={idx >= 3 ? "gold" : ""}
                  id={`${id}-${4}`}
                  onMouseOver={() => setIdx(3)}
                  size={"2x"}
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="m-2"
                  color={idx >= 4 ? "gold" : ""}
                  id={`${id}-${5}`}
                  onMouseOver={() => setIdx(4)}
                  size={"2x"}
                  icon={faStar}
                />
              </span>
            </p>
            <a className={`${rated ? "hidden" : " "} mb-4`}>
              {"Leave a rating!"}
            </a>
          </div>

          {data && data.recipeData ? (
            <div>
              <Carousel data={data.recipeData} />
              <h3 className="font-bold text-center text-lg text-indigo-800">
                {"Recommendations according to "}
                <span className="text-purple-800 font-bold"> {"Taste"}</span>
                <sup className="font-semibold">{"beta"}</sup>
              </h3>
            </div>
          ) : null}
          {dataSecond && dataSecond.recipeDataTFIDF ? (
            <div className="mt-8 font-bold text-left text-indigo-800">
              <Carousel data={data.recipeData} />
              <h3 className="font-bold text-center text-lg text-indigo-800">
                {"Recommendations according to Ingredients"}
                <sup>
                  <FontAwesomeIcon
                    color="red"
                    icon={faHeart}
                    className="ml-2"
                  />
                  <a
                    className="text-blue-500 text-md ml-2"
                    rel="nooopener noreferrer"
                    href="https://www.linkedin.com/in/dhwanitrivedi9/"
                  >
                    Dhwani Trivedi
                  </a>
                </sup>
              </h3>
            </div>
          ) : null}
        </div>
      ) : (
        <Loader loading={loading} />
      )}
    </div>
  );
};

export default RecommendationPage;
