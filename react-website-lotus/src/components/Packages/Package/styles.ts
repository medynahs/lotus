import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 105%;
`;

export const ImageContainer = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 4%;
  width: 100%;
  height:60%;

`;

export const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 6%;

  @media (max-width: 500px) {
   font-size: 1.6rem;
   }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 1%;

  @media (max-width: 500px) {
    font-size: 0.7rem;
    }

`;

export const MoreInfoText = styled.p`
  font-family: "Arial", serif;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 6%;
  &:hover {
    cursor: pointer;
    color: #6d6c6c;
  }

  
  @media (max-width: 500px) {
    font-size: 0.9rem;
    }
`;
