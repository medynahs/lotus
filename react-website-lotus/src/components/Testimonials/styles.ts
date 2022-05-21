import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4%;
`;

export const Title = styled.p`
  font-size: 6.5rem;
  margin-left: 9%;

  @media (max-width: 300px) {
    font-size: 2rem;
  }

  @media (max-width: 1280px) {
    font-size: 500%;
  }

  @media (max-width: 630px) {
    font-size: 240%;
  }

  @media (max-width: 600px) {
    margin-left: 14%;
    margin-top: 5%;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
    margin-left: 20%;
    margin-top: 5%;
  }
`;

export const Subtitle = styled.p`
  font-size: 6.5rem;
  margin: -1% 0% 0% 18%;


  @media (max-width: 1280px) {
    font-size: 500%;
  }

  @media (max-width: 630px) {
    font-size: 240%;
  }

  @media (max-width: 600px) {
    margin-left: 24%;
  }

  @media (max-width: 300px) {
    font-size: 2rem;
    margin-left: 34%;
  }
`;

export const TestimonialsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 6% 2% 6%;

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const TestimonialDiv = styled.div`
  width: 24%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 780px) {
    width: 100%;
    height: 10rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 6%;

  @media (max-width: 780px) {
    margin-bottom: 1%
  }

  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

export const Author = styled.p`
  font-size: 1.5rem;
  margin-top: 4%;

  @media (max-width: 300px) {
    font-size: 1.3rem;
  }
`;
