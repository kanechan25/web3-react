import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppSelector } from 'App/hooks'
import { PageContainer } from 'App/styles/styled'
import { shortenString } from 'App/utils'
// import { useTokenETHBalance } from 'libs/web3/hooks'
const Web3Info = () => {
  const { chainId, account } = useWeb3React()
  const connectionType = useAppSelector(({ wallet }) => wallet.connectionType)
  // const currentETHBalance = useTokenETHBalance()
  return (
    <PageContainer>
      <div>Current connectionType: {connectionType}</div>
      <h3>{`ChainId: ${chainId}`}</h3>
      <h3>{`Wallet Account: ${account && shortenString(account, 7, 5)}`}</h3>
      {/* <h3>{`ETH Balance: ${currentETHBalance}`}</h3> */}
    </PageContainer>
  )
}

export default Web3Info
