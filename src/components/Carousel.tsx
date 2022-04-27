import * as React from "react";
import Card from "./Card.tsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type RecipeDataProps = {
  _id: string;
  title: string;
  category: string[];
  image: string;
  ingredients: string[];
};

const CarouselWrapper = ({ data }): JSX.Element => {
  let width = window.screen.width;

  let slidePercentage = 100;

  if (width < 1000 && width > 650) {
    slidePercentage = 40;
  }

  if (width >= 1200) {
    slidePercentage = 33;
  }
  return (
    <div className="flex flex-wrap align-center justify-center md:flex-row lg:flex-row content-center text-center">
      <Carousel
        infiniteLoop
        autoPlay
        stopOnHover
        className="w-3/4"
        showStatus
        showThumbs={false}
        centerMode
        centerSlidePercentage={slidePercentage}
      >
        {Object.entries(data).map((d) => (
          <Card
            title={d[1].title || d[1]["Recipe Name"]}
            recipeID={d[1].recipe_id || d[1]["Recipe_id"]}
            category={
              typeof d[1].category == "string"
                ? d[1].category
                    .replaceAll("'", "")
                    .replaceAll("[", "")
                    .replaceAll("]", "")
                    .split(",")
                    .slice(0, 3)
                : d[1].category
            }
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
            description={
              typeof d[1].ingredients == "string"
                ? d[1].ingredients.replaceAll("'", "").split(",").slice(0, 3)
                : d[1].ingredients
            }
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
