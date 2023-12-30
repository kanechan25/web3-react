import React from 'react'

import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
  tryDeactivateConnector,
} from 'libs/web3/config/connectors'
import { Button } from '@mui/material'
import { useActions } from 'App/hooks'
import { IconWrapper } from 'App/styles/styled'

export const Option = ({
  isEnabled,
  isConnected,
  connectionType,
  iconWallet,
}: {
  isEnabled: boolean
  isConnected: boolean
  connectionType: ConnectionType
  iconWallet: string
}) => {
  const { setConnectionType, setOpenModal } = useActions()
  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(getConnection(connectionType).connector)
      // undefined means the deactivation failed
      if (deactivation === undefined) {
        return
      }
      setConnectionType({ connectionType: deactivation })
      setOpenModal({ isOpenModal: false })
      return
    }

    const activation = await tryActivateConnector(getConnection(connectionType).connector)
    if (!activation) {
      return
    }
    setConnectionType({ connectionType: activation })
    setOpenModal({ isOpenModal: false })
    return
  }

  return (
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
      onClick={onClick}
      disabled={!isEnabled}
    >
      <span>{`${isConnected ? 'Disconnect' : 'Connect'} ${connectionType}`}</span>
      <IconWrapper size={30}>
        <img src={iconWallet} alt={'icon'} />
      </IconWrapper>
    </Button>
  )
}
