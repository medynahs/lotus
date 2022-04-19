import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
`;

export const IconDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const IconCloseDiv = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
  &:hover {
    cursor: pointer;
    transform: scaleX(1);
  }
`;

export const ModalDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 24px 28px 24px 28px;
`;
