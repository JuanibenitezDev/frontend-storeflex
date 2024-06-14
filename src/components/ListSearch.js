import React from "react";
import Card from "./Card";
import useFetch from "../Hook/useFetch";

function ListSearch({ maxPrice, sort, catId, subCats }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][title][$contains]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default ListSearch;
