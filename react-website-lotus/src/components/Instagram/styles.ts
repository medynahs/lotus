import styled from "styled-components";

export const Container = styled.div`
  height: 78vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardDiv = styled.div`
  @media (max-width: 1380px) {
    width: 0%;
    height: 0%;
  }
`;

export const Title = styled.a`
  font-size: 7.88rem;
  margin: -32% 0% 0% 6.4%;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    font-size: 500%;
  }

  @media (max-width: 630px) {
    font-size: 240%;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
  }
`;

export const InstaName = styled.a`
  font-size: 7rem;
  margin: -5.5% 4.9% 0% 0%;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    font-size: 500%;
  }

  @media (max-width: 630px) {
    font-size: 240%;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
  }
`;
