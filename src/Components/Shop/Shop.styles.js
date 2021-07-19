import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

export const Header = styled.div`
  justify-content: space-between;

  max-width: 1280px;
  padding: 0 2rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 50% 1fr 1fr 20%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". . . .";
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  a {
    text-align: center;
  }
`;

export const Logo = styled.div`
  /* background-color: black;
  color: white;
   */
  /* display: flex;

  padding: 1rem 0rem; */
`;
export const CartLogo = styled.div`
  cursor: pointer;

  text-align: center;
  width: fit-content;
  margin-left: auto;

  :before {
    /* content: "> "; */

    /* animation: arrowLeft 1s ease-in infinite; */
    @keyframes arrowLeft {
      0% {
        opacity: 0;
        margin-right: 0.5rem;
      }
      50% {
        opacity: 1;
      }
      75% {
        opacity: 0.9;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
