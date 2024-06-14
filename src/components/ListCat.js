import React from "react";
import Card from "./Card";
import useFetch from "../Hook/useFetch";

function ListCat({ subCats, maxPrice, sort }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&${subCats.map(
      (item) => `&[filters][categories][id][$eq]=${item}`
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

export default ListCat;
