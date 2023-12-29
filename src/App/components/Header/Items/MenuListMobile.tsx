import React, { useState } from 'react'
import { Box, Menu as Menulist } from '@mui/material'

import menuIcon from 'assets/images/icons/dropdown-arrow.png'

const MenulistMobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  return (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none', cursor: 'pointer' } }} onClick={handleOpenNavMenu}>
        <img src={menuIcon} height={20} alt={''} />
      </Box>
      <Menulist
        className='menu-navbar-mobile'
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          marginright: '20px',
        }}
      >
        <div style={{ display: 'block', padding: '12px' }}>{children}</div>
      </Menulist>
    </>
  )
}
export default MenulistMobile
