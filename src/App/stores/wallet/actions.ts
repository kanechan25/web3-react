import { createAction } from '@reduxjs/toolkit'
import { ConnectionType } from 'libs/web3/config/connectors'

export const setConnectionType = createAction<{
  connectionType: ConnectionType | ''
}>('wallet/setConnectionType')
