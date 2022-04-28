import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 100%;
`;

export const Title = styled.a`
  font-size: 7.88rem;
  margin-left: 6%;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
  }

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
