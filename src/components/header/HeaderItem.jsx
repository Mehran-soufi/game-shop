import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderItem = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const navigate = useNavigate();
  return (
    <div className="header-items">
      <div className="header-item">
        <i className="fa-solid fa-heart"title="like" onClick={()=>navigate('/likes')}></i>
        {
          favorites.length > 0 ? <span>{favorites.length}</span> : null
        }
       
      </div>
      <div className="header-item">
        <i className="fa-solid fa-bag-shopping"title="cart" onClick={()=>navigate('/shopping-cart')}></i>
        {
          cartItems.length > 0 ? <span>{cartItems.length}</span> : null
        }
       
      </div>
    </div>
  );
};

export default HeaderItem;
