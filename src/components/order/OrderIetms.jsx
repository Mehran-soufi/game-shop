import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersId } from "../../redux/action";
import loadingimg from "../../assest/loading/loading.gif";
import errorimg from "../../assest/error/error.png";
import { useNavigate, useParams } from "react-router-dom";

const OrderItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams();
  const { data, loading, error } = useSelector((state) => state.ordersId);
  useEffect(() => {
    dispatch(getOrdersId(_id));
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-home">
          <img src={loadingimg} alt="loading" />
          <h2>loading...</h2>
        </div>
      ) : error ? (
        <div className="loading-home">
          <img src={errorimg} />
          <h2>Unfortunately, a problem has occurred</h2>
        </div>
      ) : (
        <section>
          <div className="orders">
            {data.map((order) => (
              <div className="orders-item" key={order._id}>
                <div className="order-det">
                  <i className="fa-solid fa-circle-check"></i>
                  <strong>delivered</strong>
                </div>
                <div className="order-det-p">
                  <p className="p-m">
                    order id:
                    <span>{order._id.substring(18, 24)}</span>
                  </p>
                  <p className="p-m">
                    amount:
                    <span>{order.totalPrice}$</span>
                  </p>
                  <p className="p-m">
                    address:
                    <span>{order.shippingAddress.city}</span>,
                    <span>{order.shippingAddress.address}</span>
                  </p>
                </div>
                <div className="order-det no-border">
                  <div className="order-det_img">
                    {order.orderItems.map((item) => (
                      <>
                        <div className="order-item-img" key={item._id}>
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                          />
                          <h3>{item.product.name.substring(0, 15)}</h3>
                          <p>
                            color:
                            <span>{item.product.color}</span>
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default OrderItems;
