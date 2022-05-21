import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 150%;
  padding: 0% 3% 0% 3%;
  align-items: center;
  padding: 0% 5% 0% 5%;
  margin-bottom: 5%;
  margin-top: 10%;

  a {
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #817f83;
    font-size: 1.38rem;
  }

  @media (max-width: 550px) {
    height: 50vh;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  // background-color: pink;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const TextsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  // background-color: blue;
  width: 100%;
`;

export const Text = styled.text`
  font-size: 6.8rem;
  font-weight: 500;
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
