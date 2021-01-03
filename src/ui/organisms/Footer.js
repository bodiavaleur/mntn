import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const FooterDescription = styled.div`
  max-width: 20rem;
  display: grid;
  grid-template-rows: 1.5rem 3rem 1rem;
  grid-gap: 1rem;
  padding: 1rem 0;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
`;

export const FooterColumn = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 2rem repeat(5, 1rem);
  grid-gap: 0.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0 1rem;
  }
`;
