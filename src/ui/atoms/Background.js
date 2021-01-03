import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  &::before {
    content: "";
    width: 100%;
    height: 70%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      330.24deg,
      rgba(11, 29, 38, 0) 31.06%,
      #0b1d26 108.93%
    );
  }

  &::after {
    content: "";
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 90%);
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`;
