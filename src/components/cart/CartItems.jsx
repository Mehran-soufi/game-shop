import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  getProducts,
  removeFromCart,
} from "../../redux/action";

import loadingimg from "../../assest/loading/loading.gif";
import errorimg from "../../assest/error/error.png";

import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const carts = JSON.parse(localStorage.getItem("cartItems")) || [];

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo({ top: 0 });
  }, []);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const getItemQuantity = (item) => {
    const cartItem = cartItems.find((cartItem) => cartItem._id === item._id);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + getItemQuantity(item) * item.price,
      0
    );
  };

  const order = () => {
    if (localStorage.getItem("userToken")) {
      navigate("/shopping-cart/order/address");
    } else {
      navigate("/auth");
    }
  };
  console.log(localStorage.getItem("userToken"));

  return (
    <>
      {loading ? (
        <div className="loading-home">
          <img src={loadingimg} />
          <h2>loading...</h2>
        </div>
      ) : error ? (
        <div className="loading-home">
          <img src={errorimg} />
          <h2>Unfortunately, a problem has occurred</h2>
        </div>
      ) : (
        <section>
          <div className="shopping-cart">
            <div className="shopping-cart_items">
              {carts.map((item) => (
                <div className="cart-items" key={item._id}>
                  <div className="cart-items_img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-items_det">
                    <div
                      className="cart-items_det-name"
                      onClick={() =>
                        navigate(`/product/${item._id.toString()}`)
                      }
                    >
                      <h2>{item.name.substring(0, 30)}...</h2>
                    </div>
                    <div className="cart-items_det-pr">
                      <div className="cart-items-price">
                        <div className="det-pr_price">
                          <p>price:</p>
                          <span>{item.price}$</span>
                        </div>
                        <div className="det-pr_price">
                          <p>total price:</p>
                          <span>{getItemQuantity(item) * item.price}$</span>
                        </div>
                      </div>
                      <div className="cart-items-btn">
                        <div className="det-pr_btn">
                          {getItemQuantity(item) === 1 ? (
                            <button onClick={() => handleRemoveFromCart(item)}>
                              <i className="fa-solid fa-trash-can"></i>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleDecreaseQuantity(item)}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                          )}

                          <span>{getItemQuantity(item)}</span>
                          {getItemQuantity(item) < item.countInStock ? (
                            <button onClick={() => handleAddToCart(item)}>
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          ) : (
                            <button className="btn-opacity">
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="shopping-cart_details">
              <div className="cart-detail">
                <div className="cart-detail-item">
                  <p>Total Items:</p>
                  <span>{cartItems.length}</span>
                </div>
                <div className="cart-detail-item">
                  <p>Total Price:</p>
                  <span>{getTotalPrice().toFixed(2)} $</span>
                </div>
                <div className="cart-detail-item">
                  <p>Discount:</p>
                  <span>0 $</span>
                </div>
                <div className="cart-detail-item">
                  <p>Payable:</p>
                  <span>{getTotalPrice().toFixed(2)} $</span>
                </div>
                <div className="cart-detail-item  no-bordar">
                  <button onClick={order}>Order</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartItems;
