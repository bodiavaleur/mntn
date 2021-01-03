import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 50rem;
  display: grid;
  grid-gap: 3.5rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column-reverse;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    ${({ reverse }) => reverse && `flex-direction: row-reverse;`}
  }
`;

export const ContentImage = styled.img`
  width: 15rem;
  height: 20rem;
  margin: 1rem;
`;
