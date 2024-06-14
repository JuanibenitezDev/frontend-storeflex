import React, { useState } from "react";
import imagen from "../assets/StoreFlex.png";
import "../style/Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaUserLargeSlash } from "react-icons/fa6";

import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "../Hook/helper";
import SearchForm from "./SearchForm";
function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const { jwt } = userData();
  const isLoggedIn = !!jwt;

  return (
    <div className="containerNav">
      <Link to={"/"}>
        <img src={imagen} alt="" className="imgNav"></img>
      </Link>
      <div className="inputNav">
        <SearchForm />
      </div>
      <div className="iconsNav">
        <div className="cartIconNav" onClick={() => setOpen(!open)}>
          <FaCartShopping />
          <span className="spanNav">{products.length}</span>
        </div>
        {isLoggedIn ? (
          <Link to={"/logout"}>
            <FaUserLargeSlash className="loginNav" />
          </Link>
        ) : (
          <Link to={"/login"}>
            <FaUser className="loginNav" />
          </Link>
        )}
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
