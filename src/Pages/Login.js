import React, { useState } from "react";
import "../style/Login.css";
import imagen from "../assets/StoreFlexVertical.png";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { storeUser } from "../Hook/helper";

const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `https://storeflexplswork-yvakl.ondigitalocean.app/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <div className="login">
      <div className="cardLogin">
        <div className="leftLogin">
          <Link to={"/"}>
            <img className="imgLogin" src={imagen} alt=" "></img>
          </Link>
        </div>
        <div className="rightLogin">
          <h1 className="titleLogin">Login</h1>
          <div className="formLogin">
            <input
              className="inputLogin"
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <input
              className="inputLogin"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            <button className="buttonLogin" onClick={handleLogin}>
              Login
            </button>
            <span>Don't you have an account?</span>
            <Link to={"/register"}>
              <button className="buttonRegister">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
