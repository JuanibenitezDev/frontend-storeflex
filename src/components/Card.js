import React from "react";
import { Link } from "react-router-dom";
import "../style/Card.css";

//const baseURL = "https://storeflexplswork-yvakl.ondigitalocean.app/";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/Product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img
            className="firstImg"
            src={item.attributes?.img?.data?.attributes?.url}
            alt={item.name}
          />
          <img
            src={item.attributes?.img2?.data?.attributes?.url}
            alt=""
            className="secondImg"
          />
        </div>

        <h1 className="nameCard">{item.attributes.title}</h1>

        <div className="priceCard">
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
