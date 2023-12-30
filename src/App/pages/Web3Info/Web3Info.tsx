import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { useAppSelector } from 'App/hooks'
import { PageContainer } from 'App/styles/styled'
import { shortenString } from 'App/utils'

const Web3Info = () => {
  const { chainId, account } = useWeb3React()
  const connectionType = useAppSelector(({ wallet }) => wallet.connectionType)
  return (
    <PageContainer>
      <div>Current connectionType: {connectionType}</div>
      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`Wallet Account: ${account && shortenString(account, 7, 5)}`}</h3>
    </PageContainer>
  )
}

export default Web3Info
