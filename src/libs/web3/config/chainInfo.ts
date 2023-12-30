import { ChainId, SUPPORTED_CHAINS } from 'libs/web3/config/chains'
import {
  UNI_LIST,
  OPTIMISM_LIST,
  ARBITRUM_LIST,
  CELO_LIST,
  PLASMA_BNB_LIST,
  AVALANCHE_LIST,
  BASE_LIST,
} from 'libs/web3/config/tokenLists'
import ethereumLogo from 'assets/images/chains/ethereumCircle.png'
import avaxLogo from 'assets/images/chains/avaxCircle.png'
import arbitrumLogo from 'assets/images/chains/arbitrumCircle.png'
import bnbLogo from 'assets/images/chains/bnbCircle.svg'
import celoLogo from 'assets/images/chains/celoRectangle.png'
import polygonLogo from 'assets/images/chains/polygonCircle.png'
import optimismLogo from 'assets/images/chains/optimismCircle.png'

import { RPC_URLS } from 'libs/web3/config/rpcUrl'

export const METAMASK_URL = 'https://metamask.io/'

type ChainInfo = {
  bridge?: string
  explorer: string[]
  label: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
  defaultListUrl?: string
  statusPage?: string
  rpcUrl: string[]
  iconUrls?: string[]
}

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [ChainId.MAINNET]: {
    explorer: ['https://etherscan.io/'],
    defaultListUrl: UNI_LIST,
    label: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.MAINNET],
    iconUrls: [ethereumLogo],
  },
  [ChainId.POLYGON]: {
    explorer: ['https://polygonscan.com/'],
    defaultListUrl: UNI_LIST,
    label: 'Polygon',
    nativeCurrency: { name: 'Polygon Matic', symbol: 'MATIC', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.POLYGON],
    iconUrls: [polygonLogo],
  },
  [ChainId.GOERLI]: {
    explorer: ['https://goerli.etherscan.io/'],
    defaultListUrl: UNI_LIST,
    label: 'Görli',
    nativeCurrency: { name: 'Görli Ether', symbol: 'görETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.GOERLI],
  },
  [ChainId.SEPOLIA]: {
    explorer: ['https://sepolia.etherscan.io/'],
    defaultListUrl: UNI_LIST,
    label: 'Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'SepoliaETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.SEPOLIA],
  },
  [ChainId.OPTIMISM]: {
    bridge: 'https://app.optimism.io/bridge',
    defaultListUrl: OPTIMISM_LIST,
    explorer: ['https://optimistic.etherscan.io/'],
    label: 'Optimism',
    statusPage: 'https://optimism.io/status',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.OPTIMISM],
    iconUrls: [optimismLogo],
  },
  [ChainId.OPTIMISM_GOERLI]: {
    bridge: 'https://app.optimism.io/bridge',
    defaultListUrl: OPTIMISM_LIST,
    explorer: ['https://goerli-optimism.etherscan.io/'],
    label: 'Optimism Görli',
    statusPage: 'https://optimism.io/status',
    nativeCurrency: { name: 'Optimism Goerli Ether', symbol: 'görOpETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.OPTIMISM_GOERLI],
  },
  [ChainId.ARBITRUM_ONE]: {
    bridge: 'https://bridge.arbitrum.io/',
    defaultListUrl: ARBITRUM_LIST,
    explorer: ['https://arbiscan.io/'],
    label: 'Arbitrum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.ARBITRUM_ONE],
    iconUrls: [arbitrumLogo],
  },
  [ChainId.ARBITRUM_GOERLI]: {
    bridge: 'https://bridge.arbitrum.io/',
    defaultListUrl: ARBITRUM_LIST,
    explorer: ['https://goerli.arbiscan.io/'],
    label: 'Arbitrum Goerli',
    nativeCurrency: { name: 'Goerli Arbitrum Ether', symbol: 'goerliArbETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.ARBITRUM_GOERLI],
  },
  [ChainId.POLYGON_MUMBAI]: {
    bridge: 'https://wallet.polygon.technology/polygon/bridge/deposit',
    explorer: ['https://mumbai.polygonscan.com/'],
    label: 'Polygon Mumbai',
    nativeCurrency: { name: 'Polygon Mumbai Matic', symbol: 'mMATIC', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.MAINNET],
  },
  [ChainId.CELO]: {
    bridge: 'https://www.portalbridge.com/#/transfer',
    defaultListUrl: CELO_LIST,
    explorer: ['https://celoscan.io/'],
    label: 'Celo',
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.CELO],
  },
  [ChainId.CELO_ALFAJORES]: {
    bridge: 'https://www.portalbridge.com/#/transfer',
    defaultListUrl: CELO_LIST,
    explorer: ['https://alfajores-blockscout.celo-testnet.org/'],
    label: 'Celo Alfajores',
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.CELO_ALFAJORES],
    iconUrls: [celoLogo],
  },
  [ChainId.BNB]: {
    bridge: 'https://cbridge.celer.network/1/56',
    defaultListUrl: PLASMA_BNB_LIST,
    explorer: ['https://bscscan.com/'],
    label: 'BNB Chain',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.BNB],
    iconUrls: [bnbLogo],
  },
  [ChainId.AVALANCHE]: {
    bridge: 'https://core.app/bridge/',
    defaultListUrl: AVALANCHE_LIST,
    explorer: ['https://snowtrace.io/'],
    label: 'Avalanche',
    nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.AVALANCHE],
    iconUrls: [avaxLogo],
  },
  [ChainId.BASE]: {
    bridge: 'https://bridge.base.org/deposit',
    defaultListUrl: BASE_LIST,
    explorer: ['https://basescan.org/'],
    label: 'Base',
    statusPage: 'https://status.base.org/',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: RPC_URLS[ChainId.BASE],
  },
}

// Declaration for connections
export const DEFAULT_CHAIN_ID = ChainId.MAINNET
export const DEFAULT_CHAIN_URL = RPC_URLS[ChainId.MAINNET][0]
export const CHAIN_RPC_URL_MAP: Record<ChainId, string[]> = SUPPORTED_CHAINS.reduce((map, chainId) => {
  map[chainId] = RPC_URLS[chainId]
  return map
}, {} as Record<ChainId, string[]>)
