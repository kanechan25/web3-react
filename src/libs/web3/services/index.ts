import { ethers } from 'ethers'
import ERC20ABI from 'libs/abis/erc20.json'
import { RPC_URLS } from 'libs/web3/config/rpcUrl'
import { ChainId } from 'libs/web3/config/chains'

export const getContractETH = (chainId: ChainId | undefined) => {
  const ETHAddress = '0x0d8775f648430679a709e98d2b0cb6250d2887ef'
  const rpcUrl = chainId && RPC_URLS[chainId][2]
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
  const ETHContract = new ethers.Contract(ETHAddress, ERC20ABI, provider)
  return ETHContract
}
