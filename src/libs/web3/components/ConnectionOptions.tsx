import React from 'react'

import { ConnectionType, getHasMetaMaskExtensionInstalled } from 'libs/web3/config/connectors'
import { METAMASK_URL } from 'libs/web3/config/chainInfo'
import { Option } from 'libs/web3/components/Option'
import iconMetamask from 'assets/images/wallets/metamask.png'
import iconCoinbase from 'assets/images/wallets/coinbaseWalletIcon.svg'
import iconWalletCn from 'assets/images/wallets/walletConnectIcon.svg'
import { Box, Button } from '@mui/material'
import { IconWrapper } from 'App/styles/styled'

type ConnectionOptionsProps = {
  currentConnectionType: ConnectionType | null
  isConnectionActive: boolean
}
export const ConnectionOptions: React.FC<ConnectionOptionsProps> = ({ currentConnectionType, isConnectionActive }) => {
  const hasMetaMaskExtension = getHasMetaMaskExtensionInstalled()
  const isNoOptionActive = !isConnectionActive || (isConnectionActive && currentConnectionType === null)

  return (
    <Box sx={{ p: 2 }}>
      {hasMetaMaskExtension ? (
        <Option
          isEnabled={isNoOptionActive || currentConnectionType === ConnectionType.INJECTED}
          isConnected={currentConnectionType === ConnectionType.INJECTED}
          connectionType={ConnectionType.INJECTED}
          iconWallet={iconMetamask}
        />
      ) : (
        <a href={METAMASK_URL} target='__blank'>
          <Button
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              p: '8px 24px',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#efefef',
              },
              textTransform: 'none',
            }}
          >
            <span>Install Metamask</span>
            <IconWrapper size={24}>
              <img src={iconMetamask} alt={'icon'} />
            </IconWrapper>
          </Button>
        </a>
      )}
      <Option
        isEnabled={isNoOptionActive || currentConnectionType === ConnectionType.COINBASE_WALLET}
        isConnected={currentConnectionType === ConnectionType.COINBASE_WALLET}
        connectionType={ConnectionType.COINBASE_WALLET}
        iconWallet={iconCoinbase}
      />
      <Option
        isEnabled={isNoOptionActive || currentConnectionType === ConnectionType.WALLET_CONNECT}
        isConnected={currentConnectionType === ConnectionType.WALLET_CONNECT}
        connectionType={ConnectionType.WALLET_CONNECT}
        iconWallet={iconWalletCn}
      />
    </Box>
  )
}
