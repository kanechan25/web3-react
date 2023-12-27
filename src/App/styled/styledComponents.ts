import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 65px;
  padding: 24px;
  align-items: center;
  flex: 1;
  z-index: 1;
  @media screen and (max-width: 576px) {
    padding: 16px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`;
