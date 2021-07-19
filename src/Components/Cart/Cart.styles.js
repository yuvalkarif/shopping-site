import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* padding: 7.5rem 20rem; */
  max-height: 30rem;
  overflow: auto;
  min-width: 200px;
  padding: 0.6rem;
  z-index: 2;
  animation: appear 200ms ease-in-out;
  border: solid 1px rgba(0, 0, 0, 1);
  border-radius: 3px;

  background-color: rgba(255, 255, 255, 0.96);

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  float: right;
  border: none;
  border-style: none;
  background: none;
`;

export const CheckoutButton = styled.button`
  float: right;
  border: 0px dashed rgba(174, 164, 146, 0.57);

  padding-top: 0.3rem;
  background: none;

  font: inherit;

  cursor: pointer;
`;

export const ItemInfo = styled.div`
  display: grid;
  border-bottom: 1px dashed;
  grid-template: 1fr / 1fr 1fr;
  gap: 0px;

  margin-left: 0.3rem;
  margin-top: 0.5rem;
  margin-right: 2rem;

  /* #brand {
    font-size: 1rem;
  }

  #model {
    font-size: 0.65rem;
  } */
  #price {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    align-self: center;
    text-align: right;

    margin-right: 0.35rem;

    :after {
      content: "₪";
      font-size: 0.7rem;
      line-height: 120%;
      padding-left: 0.1rem;
    }
  }
  #brand {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    text-align: left;
    align-self: start;
    margin-right: 5rem;
  }
  #model {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    font-size: 0.75rem;
    text-align: left;
    margin-top: 1rem;
    align-self: end;
    font-style: oblique;
  }
`;
export const Title = styled.div`
  text-decoration: underline;
  text-align: center;
`;

export const Total = styled.div`
  text-align: center;
  :after {
    content: "₪";
    font-size: 0.7rem;
    line-height: 120%;
    padding-left: 0.1rem;
  }
`;
