import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 2%;
  width: 100%;

  @media (max-width: 1130px) {
   flex-direction: column;
   height: 100%;
   padding-top: 0%;
  }
`;

export const Card1Div = styled.div`
  width: 100%;
  height: 82%;
  margin-top: 8%;

  @media (max-width: 1130px) {
    margin-top: 0%;
    margin-right: 0%;
    margin-bottom: 10%;
  
  }
`;

export const Card2Div = styled.div`
  width: 100%;
  height: 82%;
  margin-left: 2.5%;

  @media (max-width: 1130px) {
    margin-left: 0%;
  }
`;
