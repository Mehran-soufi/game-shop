import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getProducts,
  removeFromFavorites,
} from "../../redux/action";

import loadingimg from "../../assest/loading/loading.gif";
import errorimg from "../../assest/error/error.png";

import ProductSkeleton from "../products/ProductSkeleton";
import { useNavigate } from "react-router-dom";

const LikeItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  const favoritesList = useSelector((state) => state.cart.favorites);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [width, setwidth] = useState(true);

  const isFavorite = (itemId) => {
    return favorites.some((item) => item._id === itemId);
  };

  const handleRemoveFromFavorite = (item) => {
    if (isFavorite(item._id)) {
      dispatch(removeFromFavorites(item));
    }
  };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getProducts());

    window.scrollTo({ top: 0 });

    if (document.documentElement.offsetWidth > 500) {
      setwidth(true);
    } else {
      setwidth(false);
    }
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
      ) : (
        <section>
          <div className="products">
            <div className="products-lists">
              <div className="products-list">
                {loading || error ? (
                  <ProductSkeleton />
                ) : (
                  <>
                    {favorites.map((item) => (
                      <div className="pr-item" key={item._id}>
                        <div
                          className="pr-item_img"
                          onClick={() =>
                            navigate(`/product/${item._id.toString()}`)
                          }
                        >
                          <img src={item.image} alt={item.name} />
                          {item.countInStock === 0 ? (
                            <span>Finished</span>
                          ) : null}
                        </div>
                        <div className="pr-item_detail">
                          <div
                            className="pr-det_name"
                            onClick={() =>
                              navigate(`/product/${item._id.toString()}`)
                            }
                          >
                            <h2>{item.name.substring(0, 20)}...</h2>
                          </div>
                          <div className="pr-det_detail">
                            <p
                              title="remove from favorite"
                              onClick={() => handleRemoveFromFavorite(item)}
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </p>
                            <p
                              title="add to cart"
                              onClick={() => handleAddToCart(item)}
                            >
                              <i className="fa-solid fa-cart-shopping"></i>
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

export default LikeItems;
