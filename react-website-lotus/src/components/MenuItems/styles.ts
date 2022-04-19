import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  color: black;
  font-size: 42px;
  text-decoration: none;
  position: relative;
  margin-top: 4%;

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
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  margin-top: -5%;
`;

export const ImgOne = styled.div`
  margin-top: 18%;
  margin-right: 1%;
`;

export const ImgTwo = styled.div`
  margin-left: 1%;
`;

export const ImgThree = styled.div`
  margin-left: 28%;
  margin-top: -12%;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
  align-items: center;
  background-color: #8cd4c8;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(174, 217, 210, 1) 35%,
    rgba(201, 237, 230, 1) 51%,
    rgba(255, 255, 255, 1) 70%
  );
`;
