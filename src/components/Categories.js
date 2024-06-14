import React from "react";
import "../style/Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <div className="categories">
        <h1 className="titleStore">Categories</h1>

        <div className="colCategories">
          <div className="rowCategories">
            <Link to={`/Category/1`}>
              <img
                className="imgCategories"
                src={
                  "https://e0.pxfuel.com/wallpapers/433/617/desktop-wallpaper-basketball-ring-basketball-net-minimalist-basketball-u-16-9-background.jpg"
                }
                alt=""
              />
              <button className="buttomCategories">Basketball</button>
            </Link>
          </div>
          <div className="rowCategories">
            <Link to={`/Category/5`}>
              <img
                className="imgCategories"
                src="https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2023---our-top-10-list.jpg"
                alt=""
              />
              <button className="buttomCategories">Smartphone</button>
            </Link>
          </div>
          <div className="rowCategories">
            <Link to={`/Category/3`}>
              <img
                className="imgCategories"
                src="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg"
                alt=""
              />
              <button className="buttomCategories">Pc</button>
            </Link>
          </div>
          <div className="rowCategories">
            <Link to={`/Category/4`}>
              <img
                className="imgCategories"
                src="https://wallpapers.com/images/hd/trendy-women-s-clothing-store-o1hw41upaeojuonq.jpg"
                alt=""
              />
              <button className="buttomCategories">Clothes</button>
            </Link>
          </div>
          <div className="rowCategories">
            <Link to={`/Category/2`}>
              <img
                className="imgCategories"
                src="https://wallpaperboat.com/wp-content/uploads/2020/09/14/54601/books-01.jpg"
                alt=""
              />
              <button className="buttomCategories">Books</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
