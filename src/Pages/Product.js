import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../Hook/useFetch";

import "../style/Product.css";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

//const baseURL = "http://localhost:1337";

function Product() {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data } = useFetch(`/products/${id}?populate=*&`);
  return (
    <div className="product">
      <div className="leftProduct">
        <div className="images">
          <img
            className="imgProduct"
            src={data?.attributes?.img?.data?.attributes?.url}
            alt=""
            onClick={(e) => setSelectedImg("img")}
          ></img>
          <img
            className="imgProduct"
            src={data?.attributes?.img2?.data?.attributes?.url}
            alt=""
            onClick={(e) => setSelectedImg("img2")}
          ></img>
        </div>
        <div className="mainImg">
          <img
            className="imgMain"
            alt=""
            src={data?.attributes?.[selectedImg]?.data?.attributes?.url}
          ></img>
        </div>
      </div>
      <div className="rightProduct">
        <h1 className="titleProdoc">{data?.attributes?.title}</h1>
        <p className="descProduct">{data?.attributes?.desc}</p>
        <span className="price">${data?.attributes?.price}</span>
        <div className="quantity">
          <button
            className="productButton"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="productButton"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              })
            )
          }
        >
          <FaCartPlus /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FaHeart /> ADD TO WISH LIST
          </div>
        </div>
        <div className="info"></div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
