import React, { useState } from 'react'
import { Box } from '@mui/material'
import Logo from 'assets/images/wallets/metamask.png'
import Web3Connection from 'libs/web3/components/ConnectionButton'
import TabItem from 'App/components/Header/Items/TabItem'
import MenulistMobile from 'App/components/Header/Items/MenuListMobile'
import { routes } from 'App/pages/routes'
import { CommonCenterColBox, CommonCenterRowBox, HeaderContainer, HeaderLogo } from 'App/styles/styled'
import SwitchSupportedChain from 'libs/web3/components/SwitchSupportedChain'

export default function Header() {
  const [activePage, setActivePage] = useState<string>('home')

  const handleActive = (page: string) => {
    setActivePage(page)
  }

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
          )
        })}
      </>
    )
  }
  return (
    <HeaderContainer>
      <HeaderLogo href='.' onClick={() => handleActive('home')}>
        <img width={'50px'} src={Logo} alt='logo' />
      </HeaderLogo>
      {/* Web navbar view */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px' }}>{getTabItemList()}</Box>
      <CommonCenterRowBox style={{ gap: '4px' }} className='web3-connect-button'>
        <SwitchSupportedChain />
        <Web3Connection />
      </CommonCenterRowBox>
      {/* Mobile navbar view */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <MenulistMobile>
          <CommonCenterColBox>{getTabItemList()}</CommonCenterColBox>
        </MenulistMobile>
      </Box>
    </HeaderContainer>
  )
}
