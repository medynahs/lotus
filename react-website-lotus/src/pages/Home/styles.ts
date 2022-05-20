import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: black;
`;

export const Title = styled.text`
  font-size: 2.8rem;
  color: white;
  text-align: center;
  position: absolute;
  left: 35%;
  top: 50%;

  @media (max-width: 720px) {
    font-size: 2.1rem;
  }

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.text`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  position: absolute;
  left: 45%;
  top: 56%;

  @media (max-width: 720px) {
    font-size: 1rem;
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;
