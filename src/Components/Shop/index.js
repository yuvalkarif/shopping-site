import React from "react";
import { useState } from "react";

//Components
import Item from "../Item/Index";
import Cart from "../Cart";
//Data
import { items } from "../Item/Items";
//Styled
import { CartLogo, Content, Header, Logo } from "./Shop.styles";
import { useEffect } from "react/cjs/react.development";

const Shop = () => {
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
      <Header>
        <Logo>getFilm</Logo>
        <CartLogo
          onClick={() => {
            setShowCart(!showCart);
          }}
        >
          CART_{cart.length}
        </CartLogo>
      </Header>

      <Content>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            brand={item.brand}
            model={item.model}
            price={item.price}
            img={item.img}
            setCart={setCart}
            cart={cart}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </Content>
    </>
  );
};

export default Shop;
