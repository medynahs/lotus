import styled from "styled-components";

export const Container = styled.div`
  width: 820px;
  height: 745px;
  background-color: #D7F3EC;
`;

export const ImageContainer = styled.div`
  width: 820px;
  height: 600px;
  background-color: #F5F5F5;
  margin-bottom: 30px;
`;

export const Title = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  display: flex;
  justify-content: center;
`;

export const MoreInfoText = styled.p`
  font-size: 20px;
  display: flex;
  justify-content: center;
  font-family: "Arial", serif;
  font-weight: bold;
  margin-top: 2%;
  &:hover {
    cursor: pointer;
    color: #6d6c6c;
  }
`;
