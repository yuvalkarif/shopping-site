import React from "react";
import { items } from "../Items";
import {
  Wrapper,
  Title,
  Content,
  Info,
  AddToCart,
  Bottom,
} from "./ItemPage.styles";

const ItemPage = ({ match, setCart }) => {
  const item = items.find((item) => item.id === match.params.id);
  return (
    <>
      <Wrapper>
        <img src={item.img} alt="" />
        <Content>
          <Title>
            <h1>{item.brand}</h1>
            <h2>{item.model}</h2>
            <h3>{item.year}</h3>
          </Title>
          <Info>
            <p>{item.description}</p>
            <Bottom>
              <h3>{item.price}</h3>
              <AddToCart
                onClick={() => {
                  setCart((oldCart) => [...oldCart, item]);
                }}
              >
                ADD TO CART
              </AddToCart>
            </Bottom>
          </Info>
        </Content>
      </Wrapper>
    </>
  );
};
export default ItemPage;
