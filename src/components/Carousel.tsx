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
  return (
    <div className="flex flex-col flex-wrap justify-center md:flex-row lg:flex-row content-center">
      <Carousel
        infiniteLoop
        autoPlay
        stopOnHover
        showStatus
        emulateTouch
        showThumbs={false}
        centerMode
        centerSlidePercentage={30}
      >
        {Object.entries(data).map((d) => (
          <Card
            title={d[1].title || d[1]["Recipe Name"]}
            recipeID={d[1].recipe_id || d[1]["Recipe_id"]}
            category={
              typeof d[1].category == "string"
                ? d[1].category.slice(2, -2).split(",")
                : d[1].category
            }
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
            description={
              typeof d[1].ingredients == "string"
                ? d[1].ingredients.split(",").slice(0, 3)
                : d[1].ingredients
            }
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
