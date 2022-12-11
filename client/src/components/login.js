import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
// import { fetchData } from "./utility";
const Login = () => {
  const Navigate = useNavigate();

  const [user, setuser] = useState({ email: "", password: "" });
  const [eye, setEye] = useState(false);

  // const [currentUser, setCurrentUser] = useState(null);

  const Tooglebtn = () => {
    setEye((prevEye) => !prevEye);
  };

  const handleLogin = () => {
    //  fetchData("POST", "/", false, {
    //   email: user.email,
    //   password: user.password,
    // })
    axios({
      url: "http://localhost:3005",
      method: "POST",
      headers: {},
      data: { email: user.email, password: user.password },
    })
      .then((loginData) => {
        localStorage.setItem("authorization", loginData.data.authToken);
        Navigate("/propertylist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login_container">
      <div className="login">
        <h1 className="loginh1">Logo</h1> <br />
        <p>Enter your credentials to access your account</p> <br />
        <input
          className="logininput"
          type="text"
          id="userid"
          placeholder="User ID"
          onChange={(e) => {
            setuser({ ...user, email: e.target.value });
          }}
        />{" "}
        <br />
        <div className="input-element-wrapper">
          <input
            className="logininput"
            type={eye ? "text" : "password"}
            id="passwordLI"
            placeholder="Password"
            onChange={(e) => {
              setuser({ ...user, password: e.target.value });
            }}
          />
          {/* if(!validator.ispassword(data.password) && !validator.ispassword(data.password)){
            alert('please enter valid credentials');
          } */}
          <button className="eye" onClick={Tooglebtn}>
            {eye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <button className="signinbtn" onClick={handleLogin}>
          Sign In
        </button>{" "}
        <br />
        <p
          onClick={() => {
            Navigate("/signup");
          }}
          className="signuptext"
        >
          Sign Up
        </p>
      </div>
      <p className="footer">Don't have an account? SignUp</p>
    </div>
  );
};

export default Login;
