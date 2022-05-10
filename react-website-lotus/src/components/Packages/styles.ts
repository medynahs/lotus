import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;

 

`;

export const Card1Div = styled.div`
  width: 45%;
  height: 82%;
  margin-top: 8%;
  margin-right: 2.5%;

  @media (max-width: 1500px) {
    width: 40%;
    height: 200px;
    background-color: blue;
  }
`;

export const Card2Div = styled.div`
  width: 45%;
  height: 82%;
  margin-left: 2.5%;

  @media (max-width: 1500px) {
    width: 40%;
  }
 
`;