import React, { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Setting = () => {

  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <section>
      <div className="setting">
        <div className="setting-slide">
          <div className="slideBar-setting">
            <div className="slideBar-setting-items">
              <NavLink to="change-profile">change profile</NavLink>
              <NavLink to="change-password">change password</NavLink>
              <NavLink to="upload-avatar">change avatar</NavLink>
              <div className="logo-side">
                <div className="logo-side">game shop</div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
        <div></div>
      </div>
    </section>
  );
};

export default Setting;
