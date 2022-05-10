import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10% 0% 10% 0%;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card1Div = styled.div`
  @media (max-width: 350px) {
    height: 20rem;
  }

`;

export const Card2Div = styled.div`
  @media (max-width: 785px) {
    width: 0%;
    height: 0%;
  }
`;

export const Card3Div = styled.div`
  @media (max-width: 1060px) {
    width: 0%;
    height: 0%;
  }
`;

export const Card4Div = styled.div`
  @media (max-width: 1380px) {
    width: 0%;
    height: 0%;
  }
`;

export const Title = styled.a`
  font-size: 7.88rem;
  margin: 0% 0% 2% 8%;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    font-size: 5.8rem;
  }

  @media (max-width: 660px) {
    font-size: 4rem;
  }

  @media (max-width: 420px) {
    font-size: 3rem;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
  }
`;

export const InstaName = styled.a`
  font-size: 7rem;
  margin: 1% 4.9% 0% 0%;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    font-size: 5.6rem;
  }

  @media (max-width: 660px) {
    font-size: 4rem;
  }

  @media (max-width: 420px) {
    font-size: 2.8rem;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
  }
`;
