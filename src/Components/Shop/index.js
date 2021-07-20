import React from "react";

import { Content } from "./Shop.styles";
import Item from "../Item/Index";
const Shop = ({ items, setCart, cart, setTotal, total }) => {
  return (
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
  );
};

export default Shop;
