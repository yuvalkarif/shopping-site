import React from "react";

import {
  Wrapper,
  Button,
  ItemInfo,
  Title,
  CheckoutButton,
  Total,
  MiniButton,
} from "./Cart.styles";

const Cart = ({ cart, setShowCart, showCart, setCart, total }) => {
  return (
    <Wrapper>
      <Button onClick={() => setShowCart(false)}>X</Button>
      <Title>Shopping Cart({cart.length})</Title>

      <ul>
        {cart.map((item) => {
          return (
            <>
              <li>
                <MiniButton
                  onClick={() => {
                    const arr = [...cart];
                    const index = cart.indexOf(item);
                    if (index !== -1) {
                      arr.splice(index, 1);
                      setCart(arr);
                    }
                  }}
                >
                  x
                </MiniButton>
                <ItemInfo>
                  <div id="brand">{item.brand}</div>
                  <div id="price">{item.price}</div>
                  <div id="model">{item.model}</div>
                </ItemInfo>
              </li>
            </>
          );
        })}
      </ul>
      <div>
        <Total>Total: {total}</Total>
        <CheckoutButton>{">"}Checkout</CheckoutButton>
      </div>
    </Wrapper>
  );
};

export default Cart;
