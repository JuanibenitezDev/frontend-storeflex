import React from "react";
import Card from "./Card";
import "../style/Store.css";

import useFetch from "../Hook/useFetch";

const Store = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div>
      <div className="trendingProducts">
        <h1 className="titleStore">{type} product</h1>
        <div className="cardStore">
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Store;
