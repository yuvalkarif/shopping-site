import styled from "styled-components";

export const Content = styled.div`
  ::before {
    position: absolute;
    content: "";
    /* background-image: url(${(props) => props.imgSrc}); */
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center;
    background-size: contain;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    aspect-ratio: 3/2;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(85%) blur(0.02rem);

    margin-top: 30rem;
  }
  transition: filter 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    :before {
      filter: grayscale(55%) blur(0rem);
    }
  }
  h1 {
    position: relative;
    filter: grayscale(0%);
    z-index: 1;
    color: white;
    font-weight: normal;
    font-size: 1.5rem;
    transition: all 150ms ease-in-out;
    margin: 0;
    margin-top: 5rem;
    word-wrap: break-word;
    font-weight: normal;
    text-align: center;
    border-radius: 5px;
    color: black;
    padding: 0.1rem 10rem;
  }
  h2 {
    position: relative;
    filter: grayscale(0%);
    z-index: 1;
    color: white;
    font-weight: normal;
    font-size: 0.75rem;
    transition: all 150ms ease-in-out;
    margin: 0;
    margin-top: 0rem;
    word-wrap: break-word;
    font-weight: normal;
    text-align: center;
    border-radius: 5px;
    color: black;
    padding: 0rem 10rem;
    color: grey;
  }
`;
