import { ConnectionType } from 'libs/web3/config/connectors'

export interface IWallet {
  connectionType: ConnectionType | null
  isOpenModal: boolean
}
