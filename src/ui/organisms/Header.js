import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;
