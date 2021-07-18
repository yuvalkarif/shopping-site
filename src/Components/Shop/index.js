import React from "react";
import { useState } from "react";

//Components
import Item from "../Item/Index";
import Cart from "../Cart";
//Data
import { items } from "../Item/Items";
//Styled
import { CartLogo, Content, Header, Logo } from "./Shop.styles";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {showCart && (
        <Cart cart={cart} setShowCart={setShowCart} showCart={showCart}></Cart>
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
          />
        ))}
      </Content>
    </>
  );
};

export default Shop;
