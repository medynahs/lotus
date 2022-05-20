import styled, { css } from "styled-components";
export interface NavProps {
  isVisible?: boolean;
}

export const Container = styled.section<NavProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 2rem;
    right: 3.8rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    transform: scale(0.7);
    transition: 0.7s;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > svg {
        transform: rotate(0deg);
      }
      nav {
        transform: scale(1);
      }
    `}
`;

export const Link = styled.a`
  color: black;
  font-size: 2.7rem;
  text-decoration: none;
  position: relative;
  margin-top: 4%;

  &:hover {
    cursor: pointer;
  }

  ::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: black;
    transform: scaleX(0);
    transition: all 0.45s;
  }

  :hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 390px) {
    font-size: 2rem;
  }
`;

export const OpenContainer = styled.nav`
  height: 9.4vh;
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding-left: 2%;
  padding-right: 2%;
`;

export const RightContainer = styled.div`
  height: 9.4vh;
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 540px) {
    margin-right: 4%;
  }
`;

export const Logo = styled.a`
  color: black;
  font-size: 2rem;
  align-self: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 540px) {
    font-size: 158%;
    margin-left: 4%;
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  height: 50%;
  align-items: center;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(174, 217, 210, 1) 20%,
    rgba(201, 237, 230, 1) 40%,
    rgba(255, 255, 255, 1) 70%
  );

  @media (max-width: 1600px) {
    width: 30%;
  }

  @media (max-width: 1430px) {
    width: 35%;
  }

  @media (max-width: 1190px) {
    width: 45%;
  }

  @media (max-width: 860px) {
    width: 55%;
  }

  @media (max-width: 702px) {
    width: 65%;
  }

  @media (max-width: 590px) {
    width: 100%;
  }

  @media (max-width: 415px) {
    width: 150%;
  }

  @media (max-width: 350px) {
    background: white;
  }
`;
