//React
import React from "react";
import { useState } from "react";
//Router
import { Switch, Route } from "react-router-dom";
//Components
import Cart from "../Cart";
import Shop from "../Shop";
import Footer from "../Footer";
//Data
import { items } from "../Item/Items";
//Styled
import { useEffect } from "react";
import Header from "../Header";
import Home from "../Home";
import ItemPage from "../Item/ItemPage";

import { Wrapper } from "./Main.styles.js";

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
    <Wrapper>
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
        <Route exact path="/shopping-site/shop">
          <Shop
            items={items}
            setCart={setCart}
            cart={cart}
            total={total}
            setTotal={setTotal}
          ></Shop>
        </Route>
        <Route
          path="/shopping-site/shop/:id"
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
        <Route path="/shopping-site/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Main;
