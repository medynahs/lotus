import styled from "styled-components";
import { NavBarProps } from ".";

export const Container = styled.div<NavBarProps>`
  height: 90px;
  width: 100%;
  background-color: #ffffff;
  justify-content: space-between;
  display: flex;
`;

export const Title = styled.text<NavBarProps>`
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

export const RightContainer = styled.div<NavBarProps>`
  height: 90px;
  width: 10%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

export const Logo = styled.text<NavBarProps>`
  font-size: 34px;
  margin-left: 40px;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const LogInText = styled.text<NavBarProps>`
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
