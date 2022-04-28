import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const Paragraph = styled.text`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  margin-bottom: 4%;
  margin-top: 6%;
  font-family: "Raleway", sans-serif;
`;


export const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

export const Link = styled.a`
  font-size: 8.4rem;
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
`;
