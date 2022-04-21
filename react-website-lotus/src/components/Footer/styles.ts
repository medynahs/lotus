import styled from "styled-components";

import { FooterProps } from ".";

export const FooterTitle = styled.h1<FooterProps>`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 470px;
    color: #FFFFFF;
    letter-spacing: -22px;
    margin-top: 200px
`;


export const Container = styled.div<FooterProps>`
  width: 100%;
  height: 90%;
  position: fixed;
  bottom: 0; 
  left: 0;
  background: linear-gradient(white 5%, #8cd4c8);
`;

export const Container2 = styled.div<FooterProps>`
  color: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
`;

export const Ulist1 = styled.ul<FooterProps>`
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 450px ;
`;

export const List1 = styled.li<FooterProps>`
  list-style: none;
  margin: 0 30px;
  color: red;
  font-size: 25px;
  color: black;
`;

export const Ulist2 = styled.ul<FooterProps>`
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 550px ;
`;

export const List2 = styled.li<FooterProps>`
  list-style: none;
  margin: 0 15px;
  color: red;
  font-size: 15px;
  color: black;
  font-weight: lighter;
`;

export const SignUp = styled.text<FooterProps>`
  font-size: 60px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
`;
