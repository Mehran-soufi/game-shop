import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useState } from "react";

const Auth = () => {
  const [auth, setAuth] = useState(true);
  const [btnSignIn, setBtnSignIn] = useState(true);
  const [btnSignUp, setBtnSignUp] = useState(false);
  const navigate = useNavigate();

  const signin = () => {
    setAuth(true);
    setBtnSignIn(true);
    setBtnSignUp(false);
  };
  const signup = () => {
    setAuth(false);
    setBtnSignIn(false);
    setBtnSignUp(true);
  };


  return (
    <section>
      <div className="authorisation">
        <div className="form">
          <div className="logo" onClick={() => navigate("/")}>
            game shop
          </div>
          <div className="form-auth_items">
            <button className={btnSignIn ?"active" : ""} onClick={signin}>sign in</button>
            <button className={btnSignUp ?"active" : ""} onClick={signup}>sign up</button>
          </div>
          <div className="form-item">{auth ? <SignIn /> : <SignUp />}</div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
