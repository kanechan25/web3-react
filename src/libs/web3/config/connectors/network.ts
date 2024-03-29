import { initializeConnector } from '@web3-react/core'
import { Network } from '@web3-react/network'

import { Connection, ConnectionType } from 'libs/web3/config/connectors'
import { CHAIN_RPC_URL_MAP, DEFAULT_CHAIN_ID } from 'libs/web3/config/chainInfo'

export function buildNetworkConnector() {
  const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
    (actions) =>
      new Network({
        actions,
        urlMap: CHAIN_RPC_URL_MAP,
        defaultChainId: DEFAULT_CHAIN_ID,
      })
  )
  const networkConnection: Connection = {
    connector: web3Network,
    hooks: web3NetworkHooks,
    type: ConnectionType.NETWORK,
  }

  return networkConnection
}
