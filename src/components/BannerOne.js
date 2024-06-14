import React from "react";
import imagen from "../assets/Banner1.png";
import "../style/BannerOne.css";
import { Link } from "react-router-dom";

function BannerOne() {
  return (
    <div>
      <Link to={"/catalogue"}>
        <img src={imagen} alt="" className="imgBannerOne"></img>
      </Link>
    </div>
  );
}

export default BannerOne;
