import styled from "styled-components";

export const FooterTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 470px;
    color: #FFFFFF;
    letter-spacing: -22px;
    margin-top: 200px;


    @media (max-width: 575.98px) {
        font-size: 180px;
        margin-top: 415px;
      }

    @media (min-width: 576px) and (max-width: 767.98px) {
      font-size: 200px;
      margin-top: 415px;
      }
    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: 300px;
      margin-top: 300px;
      }
    @media (min-width: 992px) and (max-width: 1199.98px) {
      font-size: 400px;
      margin-top: 415px;
      }
`;


export const Container = styled.div`
  width: 100%;
  background: linear-gradient(white 5%, #8cd4c8);
`;

export const Container2 = styled.div`
  color: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 20px;
`;

export const Ulist1 = styled.ul`
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 450px ;
`;

export const List1 = styled.li`
  list-style: none;
  margin: 0 30px;
  color: red;
  font-size: 25px;
  color: black;
`;

export const Ulist2 = styled.ul`
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 550px ;
`;

export const List2 = styled.li`
  list-style: none;
  margin: 0 15px;
  color: red;
  font-size: 15px;
  color: black;
  font-weight: lighter;
`;
