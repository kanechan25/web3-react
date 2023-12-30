import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect'

import { Connection, ConnectionType, onConnectionError } from 'libs/web3/config/connectors'
import { CHAIN_RPC_URL_MAP } from 'libs/web3/config/chainInfo'

export function buildWalletConnectConnector() {
  const [web3WalletConnect, web3WalletConnectHooks] = initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect({
        actions,
        options: {
          rpc: CHAIN_RPC_URL_MAP,
          qrcode: true,
        },
        onError: onConnectionError,
      })
  )
  const walletConnectConnection: Connection = {
    connector: web3WalletConnect,
    hooks: web3WalletConnectHooks,
    type: ConnectionType.WALLET_CONNECT,
  }
  return walletConnectConnection
}
