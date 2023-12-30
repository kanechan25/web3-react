import styled from 'styled-components'

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const BodyWrapper = styled.div`
  background: #75ba75;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 100px 0px;
  flex: 1;
  z-index: 1;
`
export const PageContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  padding: 0 16px 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  box-sizing: border-box;
  color: #000;
  overflow-y: hidden;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 2;
`

export const CommonCenterColBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const CommonCenterRowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const CommonSpaceRowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`

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
`
export const IconWrapper = styled.div<{ size?: number | null }>`
  & > img {
    height: ${({ size }) => (size ? size + 'px' : '24px')};
    width: ${({ size }) => (size ? size + 'px' : '24px')};
  }
`
