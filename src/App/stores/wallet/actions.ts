import { createAction, PayloadAction } from '@reduxjs/toolkit'
import { ConnectionType } from 'libs/web3/config/connectors'

export const setConnectionType = createAction<{
  connectionType: ConnectionType | null
}>('wallet/setConnectionType')
export type SetConnectionTypeAction = PayloadAction<{ connectionType: ConnectionType | null }>
