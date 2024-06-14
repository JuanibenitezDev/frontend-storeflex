import React from "react";
import BannerOne from "../components/BannerOne";
import Store from "../components/Store";
import Categories from "../components/Categories";

function Home() {
  return (
    <div>
      <div>
        <BannerOne />
        <Store type="Trending" />
        <Categories />
      </div>
    </div>
  );
}

export default Home;
