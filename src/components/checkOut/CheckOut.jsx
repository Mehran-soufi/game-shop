import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, postOrder } from "../../redux/action";
import { useNavigate } from "react-router-dom";

import loadingimg from "../../assest/loading/loading.gif";
import errorimg from "../../assest/error/error.png";

import { CircularProgress } from "@mui/material";

const CheckOut = ({ address }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.Profile);
  const { orderData, orderLoading } = useSelector((state) => state.order);
  const gender = data[0]?.user.gender;
  const [payable, setPayable] = useState(0);
  const [shipping, setShipping] = useState(0);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const carts = JSON.parse(localStorage.getItem("cartItems")) || [];

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

  useEffect(() => {
    dispatch(getProfile());
    setShipping(getTotalPrice() * 0.02);
    setPayable(getTotalPrice() + shipping);
  }, [shipping]);

  useEffect(() => {
    if (orderData) {
      navigate("/");
      localStorage.removeItem("cartItems");
    }
  }, [orderData]);

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
          <div className="check-out">
            <div className="check-out_details">
              <div className="check-title">
                <p>Products:</p>
              </div>
              <div className="check-item">
                {carts.map((item) => (
                  <div className="check-products" key={item._id}>
                    <div className="check-products-img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="check-products-item">
                      <h3>{item.name.substring(0, 30)}...</h3>
                      <p>
                        color: <span>{item.color}</span>{" "}
                      </p>
                      <p>
                        total: <span>{getItemQuantity(item)}</span>{" "}
                      </p>
                      <p>
                        price:{" "}
                        <span>{getItemQuantity(item) * item.price}$</span>{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="check-out_details">
              <div className="check-title">
                <p>Send to:</p>
              </div>
              <div className="check-address" title="city">
                <i className="fa-solid fa-city"></i>
                <p>{address.city}</p>
              </div>
              <div className="check-address" title="address">
                <i className="fa-solid fa-map"></i>
                <p>{address.address}</p>
              </div>
              <div className="check-address" title="postal code">
                <i className="fa-solid fa-envelopes-bulk"></i>
                <p>{address.postalCode}</p>
              </div>
              <div className="check-address" title="phone">
                <i className="fa-solid fa-phone"></i>
                <p>{address.phoneNumber}</p>
              </div>
              <div className="check-address" title="name">
                <i className="fa-solid fa-user"></i>
                {gender == "male" ? <p>Mr</p> : <p>Mrs</p>}
                <p>{data[0]?.user?.firstname}</p>
                <p>{data[0]?.user?.lastname}</p>
              </div>
            </div>
            <div className="check-out_details">
              <div className="check-title">
                <p>Check out:</p>
              </div>
              <div className="check-out_det">
                <p>total products:</p>
                <span>{cartItems.length}</span>
              </div>
              <div className="check-out_det">
                <p>total price:</p>
                <span>{getTotalPrice().toFixed(2)} $</span>
              </div>
              <div className="check-out_det">
                <p>discount:</p>
                <span>0$</span>
              </div>
              <div className="check-out_det">
                <p>shipping price:</p>
                <span>{shipping}$</span>
              </div>
              <div className="check-out_det">
                <p>amount payable:</p>
                <span>{payable}$</span>
              </div>
            </div>
            <div className="check-out__btn">
              <button className="edit" onClick={() => navigate(-1)}>
                edit
              </button>
              {orderLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <button
                  className="payable"
                  onClick={() =>
                    dispatch(postOrder(cartItems, address, payable, shipping))
                  }
                >
                  payable
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CheckOut;
