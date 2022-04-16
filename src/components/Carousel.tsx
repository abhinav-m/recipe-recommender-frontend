import * as React from "react";
import Card from "./Card.tsx";

// type CarouselProps = {

// }

/* 
Chef John's Shrimp Etouffee	Stews Etouffee Recipes		
['¾ teaspoon paprika ', '¼ teaspoon ground thyme ', '¼ teaspoon dried oregano ', '¼ teaspoon cayenne pepper ', '¼ teaspoon garlic powder ', '¼ teaspoon onion powder ', '¼ teaspoon white pepper ', '¼ teaspoon ground black pepper ', '2 pounds shrimp, peeled and deveined ', '½ teaspoon salt ', '1 tablespoon vegetable oil ', '3 tablespoons butter ', '⅓ cup diced onion ', '⅓ cup diced green bell pepper ', '⅓ cup thinly sliced celery ', '2 tablespoons all-purpose flour, or as needed ', '½ cup diced tomatoes ', '1\u2009¾ cups chicken stock, or as needed ', '½ teaspoon Worcestershire sauce ', '1 dash hot sauce, or more to taste ', ' salt to taste ', '¼ cup sliced green onions ', '2 cups cooked rice, or to taste ']
*/
// const recipe = {
//   title: "Chef John's Shrimp Etouffee Stews Etouffee Recipes",
//   ingredients: [
//     "¾ teaspoon paprika ",
//     "¼ teaspoon ground thyme ",
//     "¼ teaspoon dried oregano ",
//     "¼ teaspoon cayenne pepper ",
//     "¼ teaspoon garlic powder ",
//     "¼ teaspoon onion powder ",
//     "¼ teaspoon white pepper ",
//     "¼ teaspoon ground black pepper ",
//     "2 pounds shrimp, peeled and deveined ",
//     "½ teaspoon salt ",
//     "1 tablespoon vegetable oil ",
//     "3 tablespoons butter ",
//     "⅓ cup diced onion ",
//     "⅓ cup diced green bell pepper ",
//     "⅓ cup thinly sliced celery ",
//     "2 tablespoons all-purpose flour, or as needed ",
//     "½ cup diced tomatoes ",
//     "1\u2009¾ cups chicken stock, or as needed ",
//     "½ teaspoon Worcestershire sauce ",
//     "1 dash hot sauce, or more to taste ",
//     " salt to taste ",
//     "¼ cup sliced green onions ",
//     "2 cups cooked rice, or to taste ",
//   ],
//   image:
//     "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
// };

type RecipeDataProps = {
  _id: string;
  title: string;
  category: string[];
  image: string;
  ingredients: string[];
};

const Carousel = ({ data }): JSX.Element => {
  // const recipes = Array(5)
  //   .fill(recipe)
  //   .map((v, i) => (v["_id"] = `recipe_${i + 1}`));
  return (
    <div className="flex flex-col flex-wrap justify-center md:flex-row lg:flex-row content-center">
      {/* {recipes.map((data) => (
        <Card
          //  {...
          //      title:data.title,
          //      description:data.ingredients,
          //      image:data.image
          //  }
        //   key={data._id}
          title={data.title}
          description={data.ingredients}
          image={data.image}
        />
      ))} */}

      {Object.entries(data).map((d) => (
        <Card
          title={d[1].title}
          recipeID={d[1].recipe_id}
          image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
          description={d[1].ingredients}
        />
      ))}

      {/* <Card
        title="Chef John's Shrimp Etouffee Stews Etouffee Recipes"
        image={recipe.image}
        description={[
          "¾ teaspoon paprika ",
          "¼ teaspoon ground thyme ",
          "¼ teaspoon dried oregano ",
          "¼ teaspoon cayenne pepper ",
          "¼ teaspoon garlic powder ",
          "¼ teaspoon onion powder ",
          "¼ teaspoon white pepper ",
          "¼ teaspoon ground black pepper ",
          "2 pounds shrimp, peeled and deveined ",
          "½ teaspoon salt ",
          "1 tablespoon vegetable oil ",
          "3 tablespoons butter ",
          "⅓ cup diced onion ",
          "⅓ cup diced green bell pepper ",
          "⅓ cup thinly sliced celery ",
          "2 tablespoons all-purpose flour, or as needed ",
          "½ cup diced tomatoes ",
          "1\u2009¾ cups chicken stock, or as needed ",
          "½ teaspoon Worcestershire sauce ",
          "1 dash hot sauce, or more to taste ",
          " salt to taste ",
          "¼ cup sliced green onions ",
          "2 cups cooked rice, or to taste ",
        ]}
      /> */}

      {/* <Card
        title="Chef John's Shrimp Etouffee Stews Etouffee Recipes"
        image={recipe.image}
        description={[
          "¾ teaspoon paprika ",
          "¼ teaspoon ground thyme ",
          "¼ teaspoon dried oregano ",
          "¼ teaspoon cayenne pepper ",
          "¼ teaspoon garlic powder ",
          "¼ teaspoon onion powder ",
          "¼ teaspoon white pepper ",
          "¼ teaspoon ground black pepper ",
          "2 pounds shrimp, peeled and deveined ",
          "½ teaspoon salt ",
          "1 tablespoon vegetable oil ",
          "3 tablespoons butter ",
          "⅓ cup diced onion ",
          "⅓ cup diced green bell pepper ",
          "⅓ cup thinly sliced celery ",
          "2 tablespoons all-purpose flour, or as needed ",
          "½ cup diced tomatoes ",
          "1\u2009¾ cups chicken stock, or as needed ",
          "½ teaspoon Worcestershire sauce ",
          "1 dash hot sauce, or more to taste ",
          " salt to taste ",
          "¼ cup sliced green onions ",
          "2 cups cooked rice, or to taste ",
        ]}
      />

      <Card
        title="Chef John's Shrimp Etouffee Stews Etouffee Recipes"
        image={recipe.image}
        description={[
          "¾ teaspoon paprika ",
          "¼ teaspoon ground thyme ",
          "¼ teaspoon dried oregano ",
          "¼ teaspoon cayenne pepper ",
          "¼ teaspoon garlic powder ",
          "¼ teaspoon onion powder ",
          "¼ teaspoon white pepper ",
          "¼ teaspoon ground black pepper ",
          "2 pounds shrimp, peeled and deveined ",
          "½ teaspoon salt ",
          "1 tablespoon vegetable oil ",
          "3 tablespoons butter ",
          "⅓ cup diced onion ",
          "⅓ cup diced green bell pepper ",
          "⅓ cup thinly sliced celery ",
          "2 tablespoons all-purpose flour, or as needed ",
          "½ cup diced tomatoes ",
          "1\u2009¾ cups chicken stock, or as needed ",
          "½ teaspoon Worcestershire sauce ",
          "1 dash hot sauce, or more to taste ",
          " salt to taste ",
          "¼ cup sliced green onions ",
          "2 cups cooked rice, or to taste ",
        ]}
      />

      <Card
        title="Chef John's Shrimp Etouffee Stews Etouffee Recipes"
        image={recipe.image}
        description={[
          "¾ teaspoon paprika ",
          "¼ teaspoon ground thyme ",
          "¼ teaspoon dried oregano ",
          "¼ teaspoon cayenne pepper ",
          "¼ teaspoon garlic powder ",
          "¼ teaspoon onion powder ",
          "¼ teaspoon white pepper ",
          "¼ teaspoon ground black pepper ",
          "2 pounds shrimp, peeled and deveined ",
          "½ teaspoon salt ",
          "1 tablespoon vegetable oil ",
          "3 tablespoons butter ",
          "⅓ cup diced onion ",
          "⅓ cup diced green bell pepper ",
          "⅓ cup thinly sliced celery ",
          "2 tablespoons all-purpose flour, or as needed ",
          "½ cup diced tomatoes ",
          "1\u2009¾ cups chicken stock, or as needed ",
          "½ teaspoon Worcestershire sauce ",
          "1 dash hot sauce, or more to taste ",
          " salt to taste ",
          "¼ cup sliced green onions ",
          "2 cups cooked rice, or to taste ",
        ]}
      /> */}
    </div>
  );
};

export default Carousel;
