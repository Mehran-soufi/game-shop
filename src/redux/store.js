import { composeWithDevTools } from "redux-devtools-extension";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import {
  search,
  products,
  Oneproduct,
  Signin,
  Signup,
  Profile,
  changeProfile,
  changePassword,
  favorite,
  cart,
  order,
  orders,
  ordersId
} from "./reducer";
const reducers = combineReducers({
  search,
  products,
  Oneproduct,
  Signin,
  Signup,
  Profile,
  changeProfile,
  changePassword,
  favorite,
  cart,
  order,
  orders,
  ordersId
});
const middleWare = [thunk];
const initalState = {
  cart: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [], 
  },
  favorite: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
};

const store = createStore(
  reducers,
  initalState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
