import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { useAppSelector } from 'App/hooks'
import { ChainId } from 'libs/web3/config/chains'
import { switchNetwork } from 'libs/web3/config/connectors'
import { CHAIN_INFO, INPUT_CHAIN_URL } from 'libs/web3/config/chainInfo'
import { PageContainer } from 'App/styles/styled'
import { Box } from '@mui/material'

const Web3Info = () => {
  const { chainId, account } = useWeb3React()
  const switchChainId = ChainId.BNB
  const connectionType = useAppSelector(({ wallet }) => wallet.connectionType)
  return (
    <PageContainer>
      {INPUT_CHAIN_URL === '' && <h2 className='error'>Please set your RPC URL in config.ts</h2>}
      <div>Current connectionType: {connectionType}</div>
      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`Wallet Account: ${account}`}</h3>
      {account && (
        <button
          style={{ height: '50px' }}
          onClick={() => switchNetwork(switchChainId, connectionType)}
        >{`Switch to ${CHAIN_INFO[switchChainId].label}`}</button>
      )}
    </PageContainer>
  )
}

export default Web3Info
