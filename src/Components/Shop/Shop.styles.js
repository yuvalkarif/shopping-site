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
