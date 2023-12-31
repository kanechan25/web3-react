import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppSelector } from 'App/hooks'
import { PageContainer } from 'App/styles/styled'
import { shortenString } from 'App/utils'
import { getNameChain } from 'libs/web3/utils'
import { useGetETHBalance } from 'libs/web3/hooks'

const Web3Info = () => {
  const { chainId, account } = useWeb3React()
  const connectionType = useAppSelector(({ wallet }) => wallet.connectionType)
  const chainName = getNameChain(chainId)
  const ETHBalance = useGetETHBalance(account, chainId)
  return (
    <PageContainer>
      <div>Current connectionType: {connectionType}</div>
      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`ETHBalance: ${ETHBalance}`}</h3>
      <h3>{`Chain Name: ${chainName ? chainName : 'We DO NOT support this chain network!'}`}</h3>
      <h3>{`Wallet Account: ${account && shortenString(account, 7, 5)}`}</h3>
    </PageContainer>
  )
}

export default Web3Info
