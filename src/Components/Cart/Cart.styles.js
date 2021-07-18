import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* padding: 7.5rem 20rem; */
  min-width: 200px;
  padding: 2rem;
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
