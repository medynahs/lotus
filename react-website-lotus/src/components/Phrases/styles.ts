import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 94vh;
  flex-direction: column;
  padding: 0% 3% 0% 3%;

  background: linear-gradient(
    180deg,
    white 10%,
    rgba(174, 217, 210, 1) 50%,
    rgba(201, 237, 230, 1) 65%,
    white
  );

  @media (max-width: 550px) {
    height: 50vh;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

export const TextsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

export const Text = styled.text`
  font-size: 7.2rem;
  margin-top: -1%;
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 5rem;
  }

  @media (max-width: 920px) {
    font-size: 3.6rem;
  }

  @media (max-width: 550px) {
    font-size: 2.1rem;
  }
`;
