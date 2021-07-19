import React from "react";
import { Container, Info } from "./Item.styles";

const Item = ({
  brand,
  model,
  price,
  img,
  setCart,
  cart,
  item,
  total,
  setTotal,
}) => {
  return (
    <Container
      text={item.description.substring(0, 135) + "... "}
      onClick={() => {
        setCart((oldCart) => [...oldCart, item]);

        console.log(total, cart);
      }}
    >
      <img src={img} width="200" alt="minister-d"></img>
      <Info>
        <div id={`brand`}>{brand}</div>
        <div id={`model`}>{model}</div>
        <div id={`price`}>{price}</div>
      </Info>
    </Container>
  );
};

export default Item;
