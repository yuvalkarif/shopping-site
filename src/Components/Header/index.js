import React from "react";
import { Wrapper, CartLogo, Logo, Text } from "./Header.styles";
import { Link } from "react-router-dom";

const Header = ({ setShowCart, showCart, cart }) => (
  <Wrapper>
    <Logo>getFilm</Logo>

    <Link to="/">HOME</Link>

    <Link to="/shop">SHOP</Link>

    <CartLogo
      onClick={() => {
        setShowCart(!showCart);
      }}
    >
      CART_{cart.length}
    </CartLogo>
  </Wrapper>
);

export default Header;
