import React, { useEffect, useState } from "react";

import mouse from "../../assest/category/mouse.png";
import keyboard from "../../assest/category/keyboard.png";
import loadingimg from "../../assest/loading/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-home">
          <img src={loadingimg} />
          <h2>loading...</h2>
        </div>
      ) : (
        <section>
          <div className="products">
            <div className="products-category">
              <div className="products-category_items">
                <div
                  className="pr-ca_item"
                  onClick={() => navigate("/products/mouse")}
                >
                  <img src={mouse} alt="mouse" />
                  <p>mouse</p>
                </div>
                <div
                  className="pr-ca_item"
                  onClick={() => navigate("/products/keyboard")}
                >
                  <img src={keyboard} alt="keyboard" />
                  <p>keyboard</p>
                </div>
              </div>
            </div>
            <div className="products-lists">
              <div className="products-list">
                {loading || error ? (
                  <ProductSkeleton />
                ) : (
                  <>
                    {data.map((item) => (
                      <div
                        className="pr-item"
                        key={item._id}
                        onClick={() =>
                          navigate(`/product/${item._id.toString()}`)
                        }
                      >
                        <div className="pr-item_img">
                          <img src={item.image} alt={item.name} />
                          {item.countInStock === 0 ? (
                            <span>Finished</span>
                          ) : null}
                        </div>
                        <div className="pr-item_detail">
                          <div className="pr-det_name">
                            <h2>{item.name.substring(0, 20)}...</h2>
                          </div>
                          <div className="pr-det_detail">
                            <p>{item.price} $</p>
                            <p>
                              <i className="fa-solid fa-star"></i>
                              <span>({item.rating})</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
