import React from 'react'
import { Button, Menu, MenuItem, Tooltip, TooltipProps, tooltipClasses, styled } from '@mui/material'
import { IconWarning } from 'assets/images/icons'
import { ChainId, SUPPORTED_CHAINS } from 'libs/web3/config/chains'
import { getLogoChain, getNameChain, isSupportedChain } from 'libs/web3/utils'
import { switchNetwork } from 'libs/web3/config/connectors'
import { useAppSelector } from 'App/hooks'
import { useWeb3React } from '@web3-react/core'

const WarningTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#000',
    color: '#75ba75',
    fontSize: 16,
    maxWidth: 200,
  },
}))
const SwitchSupportedChain = () => {
  const { chainId, account } = useWeb3React()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClickSelectChain = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseSelectChain = () => {
    setAnchorEl(null)
  }
  const connectionType = useAppSelector(({ wallet }) => wallet.connectionType)
  const isSupportedChainId = isSupportedChain(chainId)
  const chainLogo = getLogoChain(chainId)

  const handleSwitchChain = (chainId: ChainId) => {
    switchNetwork(chainId, connectionType)
    handleCloseSelectChain()
  }
  return (
    <div>
      {account && isSupportedChainId && (
        <Button sx={{ minWidth: 'unset' }} variant='text' onClick={handleClickSelectChain}>
          <img height={36} src={chainLogo} alt='icon' />
        </Button>
      )}
      {account && !isSupportedChainId && (
        <WarningTooltip title={`Your wallet's current network is unsupported!`} placement='bottom-end'>
          <Button sx={{ minWidth: 'unset' }} variant='text' onClick={handleClickSelectChain}>
            <IconWarning iconColor='red' width='30' height='30' />
          </Button>
        </WarningTooltip>
      )}
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseSelectChain}
        MenuListProps={{}}
      >
        {SUPPORTED_CHAINS?.map((chainId) => {
          const logoChain = getLogoChain(chainId)
          return (
            <MenuItem
              sx={{ display: 'flex', justifyContent: 'flex-start', gap: '8px' }}
              key={chainId}
              onClick={() => handleSwitchChain(chainId)}
            >
              <img height={30} src={logoChain} alt='scrollLogo' />
              {getNameChain(chainId)}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

export default SwitchSupportedChain
