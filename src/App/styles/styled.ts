import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const BodyWrapper = styled.div`
  background: green;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 65px;
  padding: 24px;
  flex: 1;
  z-index: 1;
  @media screen and (max-width: 576px) {
    padding: 16px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const CommonCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;

export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  margin-right: 12px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;
