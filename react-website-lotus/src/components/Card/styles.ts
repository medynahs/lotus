import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 105%;

  @media (max-width: 400px) {
    width: 21rem;
  }

  @media (max-width: 1100px) {
    width: 60rem;
  }
  
`;

export const ImageContainer = styled.div`
  background-color: #f5f5f5;
  margin-bottom: 4%;
  width: 100%;
  height: 35.8rem;

  @media (max-width: 380px) {
    height: 12rem;
  }
  
  @media (min-width: 380px) {
    height: 18rem;
  }

  @media (min-width: 500px) {
    height: 22rem;
  }

  @media (min-width: 700px) {
    height: 38rem
  }

  @media (min-width: 1000px) {
    height: 42rem
  }

  @media (min-width: 1200px) {
    height: 30rem
  }

  @media (min-width: 1400px) {
    height: 33rem
  }

  @media (min-width: 2000px) {
    height: 46rem
  }

  

  @media (min-width: 2520px) {
    height: 50rem
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 6%;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  margin-top: 1%;
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
`;
