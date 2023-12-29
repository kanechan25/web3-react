import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import { useActions, useAppSelector } from 'App/hooks'

import { ConnectionType, switchNetwork } from 'libs/web3/config/connectors'
import { CHAIN_INFO, INPUT_CHAIN_URL } from 'libs/web3/config/constants'
import { PageContainer } from 'App/styles/styled'

const Web3Info = () => {
  const { chainId, account } = useWeb3React()
  const connectionType = useAppSelector(({ wallet }) => wallet.connectionType)
  const { setConnectionType } = useActions()

  return (
    <PageContainer>
      {INPUT_CHAIN_URL === '' && <h2 className='error'>Please set your RPC URL in config.ts</h2>}
      <div>Current connectionType: {connectionType}</div>
      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`Wallet Account: ${account}`}</h3>
      {account && (
        <button
          style={{ height: '2000px' }}
          onClick={() => switchNetwork(1, ConnectionType.INJECTED)}
        >{`Switch to ${CHAIN_INFO[1].label}`}</button>
      )}
    </PageContainer>
  )
}

export default Web3Info
