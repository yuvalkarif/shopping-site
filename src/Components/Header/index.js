import React from "react";
import { Wrapper, CartLogo, Logo } from "./Header.styles";

const Header = ({ setShowCart, showCart, cart }) => (
  <div>
    <Wrapper>
      <Logo>getFilm</Logo>

      <a href="/">HOME</a>

      <a href="/">SHOP</a>

      <CartLogo
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        CART_{cart.length}
      </CartLogo>
    </Wrapper>
  </div>
);

export default Header;
