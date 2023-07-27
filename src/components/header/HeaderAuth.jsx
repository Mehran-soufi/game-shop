import React, { useEffect, useState } from "react";
import HeaderRegister from "./HeaderRegister";
import HeaderProfile from "./HeaderProfile";

const HeaderAuth = ({auth,setAuth}) => {

  useEffect(() => {
    if (!localStorage.getItem("userToken")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <div className="header-auth">
      {auth ? <HeaderRegister /> : <HeaderProfile auth={auth} setAuth={setAuth} />}
    </div>
  );
};

export default HeaderAuth;
