import axios from "axios";
import {
  searchLoading,
  searchSuccess,
  searchFailed,
  productLoading,
  productSuccess,
  productFailed,
  productOneLoading,
  productOneSuccess,
  productOneFailed,
  signinLoading,
  signinSuccess,
  signinFailed,
  signupLoading,
  signupSuccess,
  signupFailed,
  profileLoading,
  profileSuccess,
  profileFailed,
  changeProfileLoading,
  changeProfileSuccess,
  changeProfileFailed,
  changePasswordLoading,
  changePasswordSuccess,
  changePasswordFailed,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  checkOutLoading,
  checkOutSuccess,
  checkOutFailed,
  ordersLoading,
  ordersSuccess,
  ordersFailed,
  ordersIdLoading,
  ordersIdSuccess,
  ordersIdFailed,
} from "./canstants";

import { toast } from "react-toastify";
import Swal from "sweetalert2";

// search
export const getProductSearch = () => async (dispatch, getState) => {
  dispatch({
    type: searchLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/product/");
    dispatch({
      type: searchSuccess,
      payload: { data: [...data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: searchFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        loading: false,
      },
    });
  }
};

// product
export const getProducts = () => async (dispatch, getState) => {
  dispatch({
    type: productLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/product/");
    dispatch({
      type: productSuccess,
      payload: { data: [...data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: productFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        loading: false,
      },
    });
  }
};

export const getOneProduct = (_id) => async (dispatch, getState) => {
  dispatch({
    type: productOneLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/product/${_id ? `${_id}` : ""}`
    );
    dispatch({
      type: productOneSuccess,
      payload: { data: [data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: productOneFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        loading: false,
      },
    });
  }
};

// register
export const postSignUp = (values) => async (dispatch, getState) => {
  dispatch({
    type: signupLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.post("http://kzico.runflare.run/user/signup", {
      username: values.username.toString(),
      email: values.email.toString(),
      password: values.password.toString(),
      mobile: values.phoneNumber.toString(),
    });
    dispatch({
      type: signupSuccess,
      payload: { data: [data], error: "", loading: false },
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully logged in",
      showConfirmButton: false,
      timer: 3000,
    });
  } catch (error) {
    dispatch({
      type: signupFailed,
      payload: {
        data: [],
        error: toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        loading: false,
      },
    });
  }
};

export const postSignIn = (values) => async (dispatch, getState) => {
  dispatch({
    type: signinLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.post("http://kzico.runflare.run/user/login", {
      email: values.email.toString(),
      password: values.password.toString(),
    });
    dispatch({
      type: signinSuccess,
      payload: { data: [data], error: "", loading: false },
    });
    localStorage.setItem("userToken", JSON.stringify(data?.user.token));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully logged in",
      showConfirmButton: false,
      timer: 3000,
    });
    window.location.replace("/");
  } catch (error) {
    dispatch({
      type: signinFailed,
      payload: {
        data: [],
        error: toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        loading: false,
      },
    });
  }
};

// profile
export const getProfile = () => async (dispatch, getState) => {
  dispatch({
    type: profileLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });
    dispatch({
      type: profileSuccess,
      payload: { data: [data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: profileFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        error,
        loading: false,
      },
    });
  }
};

export const putChangeProfile = (values) => async (dispatch, getState) => {
  dispatch({
    type: changeProfileLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.put(
      "http://kzico.runflare.run/user/change-profile",
      {
        firstname: values.firstName.toString(),
        lastname: values.lastName.toString(),
        gender: values.gender.toString(),
        age: parseInt(values.age),
        city: values.city.toString(),
      },
      {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: data.message,
      showConfirmButton: false,
      timer: 3000,
    });
    dispatch({
      type: changeProfileSuccess,
      payload: { data: [data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: changeProfileFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        error,
        loading: false,
      },
    });
  }
};

export const putChangePassword = (values) => async (dispatch, getState) => {
  dispatch({
    type: changePasswordLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.put(
      "http://kzico.runflare.run/user/change-password",
      {
        old_password: values.oldPassword.toString(),
        new_password: values.newPassword.toString(),
      },
      {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: data.message,
      showConfirmButton: false,
      timer: 3000,
    });
    dispatch({
      type: changePasswordSuccess,
      payload: { data: [data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: changePasswordFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        error,
        loading: false,
      },
    });
  }
};

// favorite
export const addToFavorites = (item) => (dispatch, getState) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: item,
  });

  const favorites = getState().favorite.favorites;
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("added to the favorites list", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const removeFromFavorites = (item) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FAVORITE,
    payload: item,
  });

  const favorites = getState().favorite.favorites;
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.error("removed from the favorites list", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

// shopping cart

export const addToCart = (item) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });

  const cartItems = getState().cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  toast.success("added to the shopping cart", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const removeFromCart = (item) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });

  const cartItems = getState().cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  toast.error("removed from the shopping cart", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const decreaseQuantity = (item) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

  if (existingItem && existingItem.quantity > 1) {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: item,
    });

    const updatedCartItems = getState().cart.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }
};

// order
export const postOrder =
  (cartItem, address, payable, shipping) => async (dispatch, getState) => {
    dispatch({
      type: checkOutLoading,
      payload: { orderData: [], error: "", orderLoading: true },
    });
    try {
      const { data } = await axios.post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: cartItem.map((item) => ({
            product: item._id,
            qty: item.quantity,
          })),
          shippingAddress: {
            address: address.address,
            city: address.city,
            postalCode: address.postalCode,
            phone: address.phoneNumber,
          },
          paymentMethod: "cash",
          shippingPrice: shipping.toString(),
          totalPrice: payable,
        },
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for your purchase",
        showConfirmButton: false,
        timer: 3000,
      });
      dispatch({
        type: checkOutSuccess,
        payload: { orderData: [data], error: "", orderLoading: false },
      });
    } catch (error) {
      dispatch({
        type: checkOutFailed,
        payload: {
          orderData: [],
          error: toast.error(error.message, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          }),
          error,
          orderLoading: false,
        },
      });
    }
  };

export const getOrders = () => async (dispatch, getState) => {
  dispatch({
    type: ordersLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get("http://kzico.runflare.run/order/", {
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    });
    dispatch({
      type: ordersSuccess,
      payload: { data: [data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: ordersFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        error,
        loading: false,
      },
    });
  }
};

export const getOrdersId = (_id) => async (dispatch, getState) => {
  dispatch({
    type: ordersIdLoading,
    payload: { data: [], error: "", loading: true },
  });
  try {
    const { data } = await axios.get(
      `http://kzico.runflare.run/order/${_id ? `${_id}` : ""}`,
      {
        headers: {
          authorization: `Bearer ${JSON.parse(
            localStorage.getItem("userToken")
          )}`,
        },
      }
    );
    dispatch({
      type: ordersIdSuccess,
      payload: { data: [data], error: "", loading: false },
    });
  } catch (error) {
    dispatch({
      type: ordersIdFailed,
      payload: {
        data: [],
        error: toast.error(error.message, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        }),
        error,
        loading: false,
      },
    });
  }
};
