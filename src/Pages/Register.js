import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../style/Register.css";

const initialUser = { email: "", password: "", username: "" };
function Register() {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `https://storeflexplswork-yvakl.ondigitalocean.app/api/auth/local/register`;
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (!!res) {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  return (
    <div className="register">
      <div className="cardRegister">
        <div>
          <h1 className="titleRegister">Create account</h1>
        </div>
        <div>
          <form className="formRegister">
            <input
              className="inputRegister"
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
            <input
              className="inputRegister"
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter your email"
            />
            <input
              className="inputRegister"
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter password"
            />
          </form>
        </div>
        <div>
          <button className="buttonRegister" onClick={signUp}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
