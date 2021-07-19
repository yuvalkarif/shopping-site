import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  transition: opacity 150ms ease-out;
  ::before {
    opacity: 0;
    content: "${(props) => props.text} ";

    text-align: left;
    position: absolute;
    background-color: white;
    align-self: center;
    font-size: 0.7rem;
    transition: opacity 150ms ease-in-out;
    padding: 1rem 1rem;
    padding-bottom: 6rem;
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &::after {
    content: "ADD TO CART";
    white-space: nowrap;
    opacity: 0;
    top: 89%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    position: absolute;
    font-weight: bold;
    align-self: center;
    font-size: 0.85rem;
    transition: opacity 150ms ease-in-out;
    padding: 1rem 1rem;

    padding-bottom: 6rem;
    align-self: end;
  }

  :hover {
    opacity: 80%;

    &::before {
      opacity: 80%;
    }
    &::after {
      opacity: 80%;
    }
  }
`;

export const Info = styled.div`
  display: grid;
  max-width: 200px;
  grid-template: 1fr 1fr / 1fr 1fr;
  gap: 0px;
  height: 100%;
  margin-left: 0.3rem;
  margin-top: 0.5rem;

  #price {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    align-self: center;
    text-align: right;
    margin-right: 0.2rem;

    :after {
      content: "₪";
      font-size: 0.7rem;
      line-height: 120%;
    }
  }
  #brand {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    text-align: left;
  }
  #model {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    font-size: 0.75rem;
    text-align: left;
    font-style: oblique;
  }
`;
