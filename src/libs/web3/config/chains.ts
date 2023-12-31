export enum ChainId {
  ARBITRUM_ONE = 42161,
  ARBITRUM_GOERLI = 421613,
  AVALANCHE = 43114,
  BASE_GOERLI = 84531,
  BASE = 8453,
  BNB = 56,
  CELO = 42220,
  CELO_ALFAJORES = 44787,
  GNOSIS = 100,
  GOERLI = 5,
  MAINNET = 1,
  MOONBEAM = 1284,
  OPTIMISM = 10,
  OPTIMISM_GOERLI = 420,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  SEPOLIA = 11155111,
}
// NOTE: chains SUPPORTED_CHAINS have to have logo icon in the CHAIN_INFO
// to show SUPPORTED_CHAINS's logo when users connect wrong chain networks
export const SUPPORTED_CHAINS = [ChainId.MAINNET, ChainId.ARBITRUM_ONE]
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number]
