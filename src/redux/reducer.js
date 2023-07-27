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
  ordersIdFailed
} from "./canstants";

//   search
export const search = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case searchLoading:
      return payload;
    case searchSuccess:
      return payload;
    case searchFailed:
      return payload;
    default:
      return state;
  }
};

//   product
export const products = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case productLoading:
      return payload;
    case productSuccess:
      return payload;
    case productFailed:
      return payload;
    default:
      return state;
  }
};

export const Oneproduct = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case productOneLoading:
      return payload;
    case productOneSuccess:
      return payload;
    case productOneFailed:
      return payload;
    default:
      return state;
  }
};

// register
export const Signin = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case signinLoading:
      return payload;
    case signinSuccess:
      return payload;
    case signinFailed:
      return payload;
    default:
      return state;
  }
};

export const Signup = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case signupLoading:
      return payload;
    case signupSuccess:
      return payload;
    case signupFailed:
      return payload;
    default:
      return state;
  }
};

// profile
export const Profile = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case profileLoading:
      return payload;
    case profileSuccess:
      return payload;
    case profileFailed:
      return payload;
    default:
      return state;
  }
};

export const changeProfile = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case changeProfileLoading:
      return payload;
    case changeProfileSuccess:
      return payload;
    case changeProfileFailed:
      return payload;
    default:
      return state;
  }
};

export const changePassword = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case changePasswordLoading:
      return payload;
    case changePasswordSuccess:
      return payload;
    case changePasswordFailed:
      return payload;
    default:
      return state;
  }
};

// favorite
const initialStateFavorite = {
  favorites: [],
};

const savedFavorites = localStorage.getItem("favorites");
if (savedFavorites) {
  initialStateFavorite.favorites = JSON.parse(savedFavorites);
}

export const favorite = (state = initialStateFavorite, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

// shopping cart
const initialStateCarts = {
  cartItems: [],
};

export const cart = (state = initialStateCarts, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === newItem._id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === newItem._id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload._id),
      };
    case DECREASE_QUANTITY:
      const itemToDecrease = action.payload;
      const existingCartItem = state.cartItems.find((item) => item._id === itemToDecrease._id);

      if (existingCartItem && existingCartItem.quantity > 1) {
        const updatedCartItems = state.cartItems.map((item) =>
          item._id === itemToDecrease._id ? { ...item, quantity: item.quantity - 1 } : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      return state;
    default:
      return state;
  }
};

// order
export const order = (
  state = { orderData: [], error: "", orderLoading: false },
  { type, payload }
) => {
  switch (type) {
    case checkOutLoading:
      return payload;
    case checkOutSuccess:
      return payload;
    case checkOutFailed:
      return payload;
    default:
      return state;
  }
};

export const orders = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case ordersLoading:
      return payload;
    case ordersSuccess:
      return payload;
    case ordersFailed:
      return payload;
    default:
      return state;
  }
};

export const ordersId = (
  state = { data: [], error: "", loading: false },
  { type, payload }
) => {
  switch (type) {
    case ordersIdLoading:
      return payload;
    case ordersIdSuccess:
      return payload;
    case ordersIdFailed:
      return payload;
    default:
      return state;
  }
};

