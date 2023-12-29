import React from 'react'
import styled from 'styled-components'

import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
  tryDeactivateConnector,
} from 'libs/web3/config/connectors'
import { Box, Button } from '@mui/material'

export const Option = ({
  isEnabled,
  isConnected,
  connectionType,
  onActivate,
  onDeactivate,
  iconWallet,
}: {
  isEnabled: boolean
  isConnected: boolean
  connectionType: ConnectionType
  onActivate: (connectionType: ConnectionType) => void
  onDeactivate: (connectionType: null) => void
  iconWallet: string
}) => {
  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(getConnection(connectionType).connector)
      // undefined means the deactivation failed
      if (deactivation === undefined) {
        return
      }
      onDeactivate(deactivation)
      return
    }

    const activation = await tryActivateConnector(getConnection(connectionType).connector)
    if (!activation) {
      return
    }
    onActivate(activation)
    return
  }

  return (
    <Button
      sx={{
        width: '100%',
        display: 'flex',
        p: '8px 24px',
        justifyContent: 'space-between',
        '&:hover': {
          backgroundColor: '#efefef',
        },
        textTransform: 'none',
      }}
      onClick={onClick}
      disabled={!isEnabled}
    >
      <span>{`${isConnected ? 'Disconnect' : 'Connect'} ${connectionType}`}</span>
      <IconWrapper size={24}>
        <img src={iconWallet} alt={'Icon'} />
      </IconWrapper>
    </Button>
  )
}
const IconWrapper = styled.div<{ size?: number | null }>`
  align-items: center;
  justify-content: center;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '24px')};
    width: ${({ size }) => (size ? size + 'px' : '24px')};
  }
  @media screen and (max-width: 576px) {
    align-items: flex-end;
  }
`
