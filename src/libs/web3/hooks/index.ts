import React, { useEffect, useState } from 'react'
import { JsonRpcProvider } from '@ethersproject/providers'
import { utils } from 'ethers'
import { getRpcUrl } from 'libs/web3/utils'
import { ChainId } from 'libs/web3/config/chains'
import { formatNumberDecimal } from 'App/utils'
async function getEthBalance(address: string, chainId: number | null | undefined | ChainId): Promise<string> {
  try {
    const rpcUrl = getRpcUrl(chainId)
    const provider = new JsonRpcProvider(rpcUrl)
    const balance = await provider.getBalance(address)
    const balanceInEther = utils.formatEther(balance)
    return balanceInEther
  } catch (error) {
    throw new Error(`Error getting balance: ${(error as Error).message}`)
  }
}
export const useGetETHBalance = (address: string | undefined, chainId: number | null | undefined | ChainId) => {
  const [balance, setBalance] = useState<string | number>(0)

  useEffect(() => {
    const fetchBalance = async () => {
      if (address) {
        try {
          const balance = await getEthBalance(address, chainId)
          setBalance(formatNumberDecimal(balance || 0, 6))
        } catch (error) {
          console.error(`Error fetching balance: ${(error as Error).message}`)
        }
      }
    }
    fetchBalance()
  }, [address, chainId])
  return balance
}
