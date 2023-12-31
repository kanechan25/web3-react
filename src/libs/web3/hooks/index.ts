import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useMemo, useState } from 'react'
import { getContractETH } from '../services'

export function useTokenETHBalance() {
  const { account, chainId } = useWeb3React()
  const ETHContract = getContractETH(chainId)
  console.log('ETHContract', ETHContract)
  const [currentBalance, setCurrentBalance] = useState<number>()
  useEffect(() => {
    async function getCurrentBalance() {
      if (account) {
        const userBalanceOf = await ETHContract.balanceOf(account)
        setCurrentBalance(parseInt(userBalanceOf) / 1e18) //ETH 1e18
      }
    }
    getCurrentBalance()
  }, [ETHContract, account])

  return currentBalance
}
