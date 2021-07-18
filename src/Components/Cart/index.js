import React from "react";
import { useEffect } from "react/cjs/react.development";

import { Wrapper, Button } from "./Cart.styles";

const Cart = ({ cart, setShowCart, showCart }) => {
  return (
    <Wrapper>
      <Button onClick={() => setShowCart(false)}>X</Button>
      <div>Shopping Cart ({cart.length})</div>

      <ul>
        {cart.map((item) => (
          <>
            <li>
              {item.model + " "} {" " + item.price + "₪"}
            </li>
          </>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Cart;
