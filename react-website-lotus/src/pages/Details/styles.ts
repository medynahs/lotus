import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  height: 55%;
  width: 38%;
  align-self: center;
  margin-right: 2%;
`;

export const InfoContainer = styled.div`
  height: 90%;
  width: 32%;
  margin-top: 6.9%;
  display: flex;
  flex-direction: column;
`;

export const Id = styled.text`
  color: black;
  font-size: 0.9rem;
  margin-bottom: 2.5%;
  font-family: "Nunito Sans", sans-serif;
`;

export const Title = styled.text`
  color: black;
  font-size: 1.6rem;
`;

export const Price = styled.text`
  color: black;
  font-size: 1.1rem;
  font-family: "Nunito Sans", sans-serif;
`;

export const Description = styled.text`
  color: black;
  font-size: 1.1rem;
  font-family: "Nunito Sans", sans-serif;
  margin-top: 1.7rem;
`;

export const InfoTitle = styled.div`
  color: black;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #817f83;
  }
`;

export const Row = styled.hr`
  color: black;
  heigth: 2rem;
  width: 100%;
  margin-top: 4%;
`;

export const BlackButton = styled.button`
  color: white;
  width: 100%;
  margin-top: 4%;
  background-color: black;
  font-size: 1rem;
  font-weight: bold;
  padding: 2%;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  margin-top: 2.5%;
`;
