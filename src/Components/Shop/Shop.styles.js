import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;

  align-items: center;
`;

export const Logo = styled.div`
  /* background-color: black;
  color: white;
   */
  display: flex;

  padding: 1rem 3rem;
`;
export const CartLogo = styled.div`
  cursor: pointer;
`;
