import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/action";

import loadingimg from "../../assest/loading/loading.gif";
import errorimg from "../../assest/error/error.png";

import { useNavigate } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getOrders());
    window.scrollTo({ top: 0 });
  }, []);

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
      ) :  (
        <section>
          <div className="orders">
            {data[0]?.map((item, index) => (
              <div className="orders-item" key={item._id}>
                <div className="order-det">
                  <i className="fa-solid fa-circle-check"></i>
                  <strong>delivered</strong>
                </div>
                <div className="order-det-p">
                  <p>
                    order:
                    <span>{index + 1}</span>
                  </p>
                  <p className="p-m">
                    order id:
                    <span>{item._id.substring(18, 24)}</span>
                  </p>
                  <p className="p-m">
                    amount:
                    <span>{item.totalPrice}$</span>
                  </p>
                </div>
                <div className="order-factor">
                  <button
                    onClick={() =>
                      navigate(`/order-items/${item._id.toString()}`)
                    }
                  >
                    View factor
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Order;
