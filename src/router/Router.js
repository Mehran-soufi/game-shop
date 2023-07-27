import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import PageNoutFound from "../components/pageNotFound/PageNoutFound";
import BackTop from "../components/backTop/BackTop";
import Products from "../components/products/Products";
import Auth from "../components/auth/Auth";
import Likes from "../components/likes/Likes";
import MouseProducts from "../components/products/MouseProducts";
import KeyboardProducts from "../components/products/KeyboardProducts";
import Product from "../components/product/Product";
import Profile from "../components/profile/Profile";
import Setting from "../components/setting/Setting";
import ChangeProfile from "../components/setting/ChangeProfile";
import ChangePassword from "../components/setting/ChangePassword";
import ChangeAvatar from "../components/setting/ChangeAvatar";
import Cart from "../components/cart/Cart";
import Address from "../components/checkOut/Address";
import CheckOut from "../components/checkOut/CheckOut";
import { useState } from "react";
import Order from "../components/order/Order";
import OrderIetms from "../components/order/OrderIetms";

function Router() {
  const [address, setAddress] = useState([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:_id" element={<Product />} />
        <Route path="/products/mouse" element={<MouseProducts />} />
        <Route path="/products/keyboard" element={<KeyboardProducts />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />}>
          <Route path="change-profile" element={<ChangeProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="upload-avatar" element={<ChangeAvatar />} />
        </Route>
        <Route path="/likes" element={<Likes />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route
          path="/shopping-cart/order/address"
          element={<Address setAddress={setAddress} address={address} />}
        />
        <Route
          path="/shopping-cart/order/check-out"
          element={<CheckOut address={address} />}
        />
        <Route path="/orders" element={<Order />} />
        <Route path="/order-items/:_id" element={<OrderIetms />} />
        <Route path="*" element={<PageNoutFound />} />
      </Routes>
      <BackTop />
      <Footer />
    </>
  );
}

export default Router;
