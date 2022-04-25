import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/Card.tsx";
import Carousel from "../../components/Carousel.tsx";
import Loader from "../../components/Loader.tsx";

type LandingPageProps = {
  title: string;
};

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Card
            title={item[1].title}
            recipeID={item[1].recipe_id}
            category={item[1].category}
            image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
            description={item[1].ingredients}
          />
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, items }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  // history.push({
  //   pathname: window.location.pathname,
  //   search: "?page=1",
  // });

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setSearchParams({ page: event.selected + 1 });
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ReactPaginate
        className="block text-center flex flex-row w-300 justify-evenly mt-5 mb-5 min-w-300 max-w-300"
        breakLabel="..."
        pageClassName="w-10 flex flex-col justify-center align-middle h-10  bg-blue-300 rounded-md hover:bg-purple-200 hover:cursor-pointer transition-all"
        pageLinkClassName="flex flex-col justify-center w-10 h-10 align-middle"
        activeClassName="bg-purple-200"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      <div className="flex flex-row flex-wrap justify-center">
        <Items currentItems={currentItems} />
      </div>
    </div>
  );
}

const LandingPage = ({ title }: LandingPageProps): JSX.Element => {
  const { useState, useEffect } = React;

  const [data, setData] = useState({ recipeData: {} });
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });

  useEffect(() => {
    const dataFetcher = async () => {
      const result = await axios(
        "https://fathomless-dawn-38291.herokuapp.com/recipes"
      );
      setData({ recipeData: result.data });
      setLoading(false);
      setSearchParams({ page: "1" });
      window.document.title = `Masala - Home`;
    };
    dataFetcher();
  }, [Object.keys(data).length]);

  return (
    <div className="">
      <p className="text-lg text-center mt-8 text-slate-800 font-sans">
        {title}
      </p>
      {/* {!loading ? (
        <Carousel data={data.recipeData} />
      ) : (
        <Loader loading={loading} />
      )} */}
      {!loading ? (
        <PaginatedItems
          itemsPerPage={8}
          items={Object.entries(data.recipeData)}
        />
      ) : null}
    </div>
  );
};

export default LandingPage;
