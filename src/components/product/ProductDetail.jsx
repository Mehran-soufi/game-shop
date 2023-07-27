import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToFavorites,
  decreaseQuantity,
  removeFromCart,
  removeFromFavorites,
} from "../../redux/action";

const ProductDetail = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isFavorite = (itemId) => {
    return favorites.some((item) => item._id === itemId);
  };

  const handleAddToFavorite = (item) => {
    if (!isFavorite(item._id)) {
      dispatch(addToFavorites(item));
    }
  };

  const handleRemoveFromFavorite = (item) => {
    if (isFavorite(item._id)) {
      dispatch(removeFromFavorites(item));
    }
  };

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

  return (
    <div className="one-pr-det">
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.name}</h1>
          <div className="pr-det-section">
            <div className="pr-section">
              <div className="det-prodct-item">
                <p>rating:</p>
                <span>{item.rating}</span>
                <i className="fa-solid fa-star"></i>
                <span className="reviews">({item.numReviews})</span>
              </div>
              <div className="det-prodct-item">
                <p>category:</p>
                <span>{item.category}</span>
              </div>
              <div className="det-prodct-item">
                <p>color:</p>
                <span>{item.color}</span>
                {item.color === "white" ? (
                  <div className="white" title="white">
                    <span></span>
                  </div>
                ) : item.color === "black" ? (
                  <div className="black" title="black">
                    <span></span>
                  </div>
                ) : (
                  <div className="pink" title="pink">
                    <span></span>
                  </div>
                )}
              </div>
              <div className="det-prodct-item">
                <p>brand:</p>
                <span>{item.brand}</span>
              </div>
            </div>
            <div className="pr-section section-rs">
              <div className="det-prodct-item">
                {!isFavorite(item._id) ? (
                  <>
                    <p>Add to favorites:</p>
                    <span>
                      <i
                        className="fa-regular fa-heart favorites"
                        onClick={() => handleAddToFavorite(item)}
                      ></i>
                    </span>
                  </>
                ) : (
                  <>
                    <p>remove frome favorites:</p>
                    <span>
                      <i
                        className="fa-solid fa-heart favorites"
                        onClick={() => handleRemoveFromFavorite(item)}
                      ></i>
                    </span>
                  </>
                )}
              </div>
              <div className="det-prodct-item">
                <p>Seller:</p>
                <span>game shop</span>
              </div>
              <div className="det-prodct-item">
                <p>price:</p>
                <span className="price">{item.price} $</span>
              </div>
              <div className="det-product-cart">
                {item.countInStock === 0 && (
                  <span className="not-available">
                    The product is not available
                  </span>
                )}
                {item.countInStock > 0 && (
                  <>
                    {getItemQuantity(item) === 0 ? (
                      <>
                        <div className="add-to-cart">
                          <button onClick={() => handleAddToCart(item)}>
                            add to cart
                          </button>
                          {item.countInStock < 5 && (
                            <span>
                              There are {item.countInStock} left in stock
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="cart-control">
                          <div className="buttons">
                            {getItemQuantity(item) === 1 ? (
                              <button
                                onClick={() => handleRemoveFromCart(item)}
                              >
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
                          {item.countInStock < 5 && (
                            <div className="stock">
                              <span>
                                There are {item.countInStock} left in stock
                              </span>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
