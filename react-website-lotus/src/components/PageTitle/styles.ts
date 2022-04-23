import styled from "styled-components";

export const Title = styled.p`
  font-size: 7.88rem;
  margin: 1% 0% 0% 4.8%;

  @media (max-width: 300px) {
   font-size: 2rem;
  }


  @media (max-width: 1280px) {
    font-size: 500%;
  }

  @media (max-width: 630px) {
    font-size: 240%;
  }
`;

export const Subtitle = styled.p`
  font-size: 7.88rem;
  margin-left: 10.88%;
  margin-top: -2.2%;
  margin-bottom: 3%;

  @media (min-width: 200px, max-width: 400px) {
    font-size: 2rem;
   } 

  @media (max-width: 1280px) {
    font-size: 500%;
  }

  @media (max-width: 630px) {
    font-size: 240%;
  }
`;
