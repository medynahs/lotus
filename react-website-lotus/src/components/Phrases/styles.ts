import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 94vh;
  flex-direction: column;
  background: radial-gradient(
    rgba(174, 217, 210, 1) 22%,
    rgba(201, 237, 230, 1) 40%,
    rgba(255, 255, 255, 1) 55%
  );
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
  font-size: 8rem;
  margin-top: -1%;
`;