import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const carts = useSelector((state) => state.cart.cartItems);

  const [isCartEmpty, setIsCartEmpty] = useState(false);

  useEffect(() => {
    if (carts.length === 0) {
      setIsCartEmpty(true);
    } else {
      setIsCartEmpty(false);
    }
  }, [carts]);

  return <section>{isCartEmpty ? <CartEmpty /> : <CartItems />}</section>;
};

export default Cart;
