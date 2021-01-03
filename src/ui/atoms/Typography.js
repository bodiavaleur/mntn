import styled, { css } from "styled-components";

const textDefaults = css`
  font-size: 1rem;
  font-family: "Rubik", sans-serif;
  color: ${({ theme, accent }) =>
    accent ? theme.colors.accent : theme.colors.text};
`;

export const Text = styled.p`
  ${textDefaults}
  ${({ opacity, theme }) => opacity && `color: ${theme.colors.textTransparent}`}
`;

export const Link = styled.a`
  ${textDefaults};
  font-size: 0.8rem;
  text-decoration: none;
`;

export const Title = styled.h1`
  ${textDefaults}
  font-family: "Bitter", serif;
  font-weight: 600;
  font-size: 1.75rem;

  ${({ lg }) => lg && `font-size: 2.5rem;`}
`;

export const Heading = styled.h3`
  ${textDefaults}
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;

  &::before {
    content: "";
    margin-right: 1rem;
    height: 0.125rem;
    width: 3rem;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const ColumnTitle = styled.h4`
  ${textDefaults}
  margin: 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`;
