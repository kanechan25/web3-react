import { ChainId } from 'libs/web3/config/chains'
import { SUPPORTED_CHAINS } from 'libs/web3/config/chains'
import { CHAIN_INFO } from 'libs/web3/config/chainInfo'
import { ethers } from 'ethers'
import ERC20ABI from 'libs/abis/erc20.json'
import { RPC_URLS } from 'libs/web3/config/rpcUrl'

export function isSupportedChain(chainId: number | null | undefined | ChainId): boolean {
  return SUPPORTED_CHAINS.includes(chainId as ChainId)
}
export function getLogoChain(chainId: number | null | undefined | ChainId) {
  const iconUrls = CHAIN_INFO[chainId as ChainId]?.iconUrls
  return !!iconUrls ? iconUrls[0] : ''
}
export function getNameChain(chainId: number | null | undefined | ChainId) {
  const chainName = CHAIN_INFO[chainId as ChainId]?.label
  return chainName
}
export function getRpcUrl(chainId: number | null | undefined | ChainId) {
  const rpcUrl = chainId && RPC_URLS[chainId as ChainId]
  return !!rpcUrl ? rpcUrl[0] : ''
}
