import styled from "styled-components";

export const Container = styled.div`
  height: 9.4vh;
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding-left: 2%;
  padding-right: 2%;
`;

export const Title = styled.text`
  font-family: "Arial", serif;
  font-weight: bold;
  font-size: 1.3rem;
  align-self: center;

  margin-right: 3%;
  
  text-align: center;
  transition: all 0.4s linear;

  @media (max-width: 1280px) {
    font-size: 0%;
  }
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
