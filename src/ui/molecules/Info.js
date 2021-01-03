import styled from "styled-components";

export const Info = styled.div`
  max-width: 30rem;
  display: grid;
  grid-gap: 0.75rem;
  position: relative;
`;

export const InfoNumber = styled.div`
  position: absolute;
  top: -35%;
  left: -10%;
  font-family: "Bitter", serif;
  font-size: 10rem;
  z-index: -1;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.1;
`;
