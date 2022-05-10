import styled from "styled-components";

export const Container = styled.div`
  height: 98vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const Paragraph = styled.text`
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
  margin-top: 6%;
  font-family: "Raleway", sans-serif;

  @media (max-width: 920px) {
    font-size: 1rem;
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;


export const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

export const Link = styled.a`
  font-size: 7.2rem;
  text-decoration: none;
  position: relative;
  color: black;

  &:hover {
    cursor: pointer;
  }

  ::after {
    content: "";
    width: 100%;
    height: 0.6rem;
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

  @media (max-width: 1280px) {
    font-size: 7rem;
  }

  @media (max-width: 920px) {
    font-size: 5.5rem;
  }

  @media (max-width: 550px) {
    font-size: 3.5rem;
  }
`;
