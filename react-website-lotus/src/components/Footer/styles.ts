import styled from "styled-components";

export const FooterTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30rem;
  color: #ffffff;
  letter-spacing: -22px;
  margin-top: 16rem;
  margin-right: 1rem;

  @media (max-width: 1430px) {
    font-size: 28rem;
  }

  @media (max-width: 1360px) {
    font-size: 26rem;
  }

  @media (max-width: 1240px) {
    font-size: 23rem;
  }

  @media (max-width: 1082px) {
    font-size: 20rem;
  }

  @media (max-width: 932px) {
    font-size: 18rem;
  }

  @media (max-width: 820px) {
    font-size: 16rem;
  }

  @media (max-width: 722px) {
    font-size: 14rem;
  }

  @media (max-width: 630px) {
    font-size: 12rem;
  }

  @media (max-width: 576px) {
    font-size: 9rem;
  }

  @media (max-width: 370px) {
    font-size: 7.5rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(white 5%, #efdcdb);
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const Ulist1 = styled.div`
  position: absolute;
  display: flex;
  margin-top: 450px;
  width: 100%;
  justify-content: center;
`;

export const List1 = styled.a`
  text-decoration: none;
  margin: 0 30px;
  color: red;
  font-size: 1.6rem;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    font-size: 1.4rem;
  }

  @media (max-width: 650px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 0rem;
  }
`;

export const Ulist2 = styled.ul`
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 550px;
`;

export const List2 = styled.a`
  margin: 0 15px;
  color: red;
  font-size: 1.1rem;
  color: black;
  font-weight: lighter;
  text-decoration: none;

  @media (max-width: 720px) {
    @media (max-width: 720px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 0rem;
  }
`;
