import React from "react";
import { Content } from "./Home.styles";
import BGImg from "./../Item/Photos/First-film-camera6.jpeg";

const Home = () => {
  return (
    <>
      <Content imgSrc={BGImg}>
        <h1>Get Your Film Camera Now.</h1>
        <h2>start shopping from our great selection of cameras</h2>
      </Content>
    </>
  );
};

export default Home;
