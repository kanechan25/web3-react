import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { initializeConnector } from '@web3-react/core'

import { Connection, ConnectionType, onConnectionError } from 'libs/web3/config/connectors'
import { DEFAULT_CHAIN_URL } from 'libs/web3/config/chainInfo'

export function buildCoinbaseWalletConnector() {
  const [web3CoinbaseWallet, web3CoinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
    (actions) =>
      new CoinbaseWallet({
        actions,
        options: {
          url: DEFAULT_CHAIN_URL,
          appName: 'Web3 React',
          reloadOnDisconnect: false,
        },
        onError: onConnectionError,
      })
  )
  const coinbaseWalletConnection: Connection = {
    connector: web3CoinbaseWallet,
    hooks: web3CoinbaseWalletHooks,
    type: ConnectionType.COINBASE_WALLET,
  }

  return coinbaseWalletConnection
}
