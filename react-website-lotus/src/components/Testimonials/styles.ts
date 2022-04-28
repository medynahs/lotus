import styled from "styled-components";

export const Container = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4%;
`;

export const Title = styled.p`
  font-size: 7.88rem;
  margin-left: 6%;

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

export const Subtitle = styled.p`
  font-size: 7.88rem;
  margin: -1% 0% 0% 18%;

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

export const TestimonialsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 6% 2% 6%;
`;

export const TestimonialDiv = styled.div`
  width: 24%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 6%;
`;

export const Author = styled.p`
  font-size: 1.5rem;
  margin-top: 4%;
`;
