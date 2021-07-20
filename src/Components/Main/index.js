//React
import React from "react";
import { useState } from "react";
//Components
import Cart from "../Cart";
import Shop from "../Shop";
//Data
import { items } from "../Item/Items";
//Styled
import { useEffect } from "react/cjs/react.development";
import Header from "../Header";
import Home from "../Home";

const Main = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += parseInt(item.price);
    });
    setTotal(count);
  }, [cart]);

  return (
    <>
      {showCart && (
        <Cart
          cart={cart}
          setShowCart={setShowCart}
          showCart={showCart}
          setCart={setCart}
          total={total}
        ></Cart>
      )}
      <Header
        setShowCart={setShowCart}
        showCart={showCart}
        cart={cart}
      ></Header>
      <Home> </Home>
      {/* <Shop
        items={items}
        setCart={setCart}
        cart={cart}
        total={total}
        setTotal={setTotal}
      ></Shop> */}
    </>
  );
};

export default Main;
