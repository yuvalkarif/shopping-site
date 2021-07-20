import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  padding: 0 2rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;

  img {
    align-self: TOP;

    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
`;
export const Content = styled.div`
  margin-left: 2rem;
  /* padding-top: 2rem; */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    font-weight: normal;
    font-size: 1rem;
  }
  h2 {
    margin: 0;
    font-weight: normal;
  }
  h3 {
    margin: 0;
    font-weight: normal;
    font-size: 0.8rem;
  }
`;

export const Info = styled.div`
  h3 {
    transform: translateY(20%);
    position: relative;
    font-weight: normal;
    /* text-decoration: underline; */
    text-align: left;
    font-size: 2rem;

    :after {
      content: "₪";
      font-size: 0.7rem;
      line-height: 120%;
      margin-left: 0.1rem;
    }
  }
`;

export const AddToCart = styled.button`
  border: none;
  font-family: inherit;
  padding: 0.75rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
