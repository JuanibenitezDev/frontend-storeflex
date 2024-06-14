import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import "../style/CartNav.css";
import { makeRequest } from "../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import { userData } from "../Hook/helper";
import { useNavigate } from "react-router-dom";
//const baseURL = "http://localhost:1337";
function Cart() {
  const { username } = userData();
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const { jwt } = userData();
  const navigate = useNavigate();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51O9nNCGo6p2kyYMT7mgkBdV8QDObHPEDKEsqhOLF8rCO9sSqr7cgiuRniGqTnJaBaHTsAozcDv9rIcHX5UnfhM0V001kyl82Qy"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      if (!!jwt) {
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Hi! {username}</h1>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="itemCart" key={item.id}>
          <img className="imgCart" src={item.img} alt="" />
          <div className="details">
            <h1 className="titleCart">{item.title?.substring(0, 31)}</h1>
            <p className="descriptionCart">{item.desc?.substring(0, 65)}</p>
            <div className="cartPrice">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <MdDelete
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>
          <span>${totalPrice()}</span>
        </span>
      </div>
      <button className="buttonCart" onClick={handlePayment}>
        PROCEED TO CHECKOUT
      </button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
