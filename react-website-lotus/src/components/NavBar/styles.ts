import styled from "styled-components";

export const Container = styled.div`
  height: 90px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding-left: 2%;
`;

export const Title = styled.text`
  font-family: "Arial", serif;
  font-weight: bold;
  font-size: 22px;
  align-self: center;
  transition: all 0.4s linear;
  &:hover {
    cursor: pointer;
    color: #6d6c6c;
  }
`;

export const RightContainer = styled.div`
  height: 90px;
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.a`
  color: black;
  font-size: 34px;
  align-self: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const LogInText = styled.text`
  font-family: "Arial", serif;
  font-size: 18px;
  margin-left: 20px;
  margin-right: 20px;
  transition: all 0.4s linear;
  &:hover {
    cursor: pointer;
    color: #6d6c6c;
  }
`;
