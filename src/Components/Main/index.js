//React
import React from "react";
import { useState } from "react";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Cart from "../Cart";
import Shop from "../Shop";
//Data
import { items } from "../Item/Items";
//Styled
import { useEffect } from "react/cjs/react.development";
import Header from "../Header";
import Home from "../Home";
import ItemPage from "../Item/ItemPage";
import Item from "../Item/Index";

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
      <Switch>
        <Route exact path="/shop">
          <Shop
            items={items}
            setCart={setCart}
            cart={cart}
            total={total}
            setTotal={setTotal}
          ></Shop>
        </Route>
        <Route
          path="/shop/:id"
          render={(routeProps) => (
            <ItemPage
              {...routeProps}
              setCart={setCart}
              cart={cart}
              total={total}
              setTotal={setTotal}
            ></ItemPage>
          )}
        ></Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </>
  );
};

export default Main;
