import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 5%;
`;

export const Paragraph = styled.text`
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  margin-top: 6%;
  font-weight: 600;

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
  font-size: 6rem;
  text-decoration: none;
  position: relative;
  color: black;

  &:hover {
    cursor: pointer;
  }

  img &:hover {
    display: block;
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
