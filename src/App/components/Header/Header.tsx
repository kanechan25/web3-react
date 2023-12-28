import React, { useState } from "react";
import styled from "styled-components";
import { Box, Menu as Menulist } from "@mui/material";
import Logo from "assets/images/wallets/metamask.png";
import Web3Connection from "libs/web3Components/Web3Connection";
import TabItem from "App/components/Header/TabItem";
import MenulistMobile from "App/components/Header/MenuListMobile";
import { routes } from "App/pages/routes";

export default function Header() {
  const [activePage, setActivePage] = useState<string>("home");

  const handleActive = (page: string) => {
    setActivePage(page);
  };

  function getTabItemList() {
    return (
      <>
        {routes?.map((route) => {
          return (
            <div key={route.id}>
              <TabItem
                to={route.href}
                content={route.name}
                onClick={() => handleActive(route.id)}
                isActive={activePage === route.id}
              />
            </div>
          );
        })}
      </>
    );
  }
  return (
    <HeaderContainer>
      <LogoIcon href="." onClick={() => handleActive("home")}>
        <WrapIcon>
          <img width={"50px"} src={Logo} alt="logo" />
        </WrapIcon>
      </LogoIcon>
      {/* Web navbar view */}
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: "30px" }}>
        {getTabItemList()}
      </Box>
      <Box className="web3-connect-button">
        <Web3Connection />
      </Box>
      {/* Mobile navbar view */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MenulistMobile>
          <CommonCenterBox>{getTabItemList()}</CommonCenterBox>
        </MenulistMobile>
      </Box>
    </HeaderContainer>
  );
}

const CommonCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;

const LogoIcon = styled.a`
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

const WrapIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`;
