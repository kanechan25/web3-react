import { Chain, CurrentConfig } from 'libs/web3/config/config'
import { ChainId } from 'libs/web3/config/chains'
import {
  UNI_LIST,
  OPTIMISM_LIST,
  ARBITRUM_LIST,
  CELO_LIST,
  PLASMA_BNB_LIST,
  AVALANCHE_LIST,
  BASE_LIST,
} from 'libs/web3/config/tokenLists'
// Chains
const MAINNET_CHAIN_ID = 1
const POLYGON_CHAIN_ID = 137

export const INPUT_CHAIN_ID = CurrentConfig.chain === Chain.POLYGON ? POLYGON_CHAIN_ID : MAINNET_CHAIN_ID
export const INPUT_CHAIN_URL =
  CurrentConfig.chain === Chain.POLYGON ? CurrentConfig.rpc.polygon : CurrentConfig.rpc.mainnet

export const CHAIN_TO_URL_MAP = {
  [POLYGON_CHAIN_ID]: CurrentConfig.rpc.polygon,
  [MAINNET_CHAIN_ID]: CurrentConfig.rpc.mainnet,
}

type ChainInfo = {
  bridge?: string
  explorer: string
  label: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
  defaultListUrl?: string
  statusPage?: string
  rpcUrl: string[]
}

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [ChainId.MAINNET]: {
    explorer: 'https://etherscan.io/',
    defaultListUrl: UNI_LIST,
    label: 'Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: [
      // "Safe" URLs
      'https://api.mycryptoapi.com/eth',
      'https://cloudflare-eth.com',
      // "Fallback" URLs
      'https://rpc.ankr.com/eth',
      'https://eth-mainnet.public.blastapi.io',
    ],
  },
  [ChainId.POLYGON]: {
    explorer: 'https://polygonscan.com/',
    defaultListUrl: UNI_LIST,
    label: 'Polygon',
    nativeCurrency: { name: 'Polygon Matic', symbol: 'MATIC', decimals: 18 },
    rpcUrl: [
      'https://polygon-rpc.com/',
      'https://rpc-mainnet.matic.network',
      'https://matic-mainnet.chainstacklabs.com',
      'https://rpc-mainnet.maticvigil.com',
      'https://rpc-mainnet.matic.quiknode.pro',
      'https://matic-mainnet-full-rpc.bwarelabs.com',
    ],
  },
  [ChainId.GOERLI]: {
    explorer: 'https://goerli.etherscan.io/',
    defaultListUrl: UNI_LIST,
    label: 'Görli',
    nativeCurrency: { name: 'Görli Ether', symbol: 'görETH', decimals: 18 },
    rpcUrl: ['https://rpc.goerli.mudit.blog/', 'https://rpc.ankr.com/eth_goerli'],
  },
  [ChainId.SEPOLIA]: {
    explorer: 'https://sepolia.etherscan.io/',
    defaultListUrl: UNI_LIST,
    label: 'Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'SepoliaETH', decimals: 18 },
    rpcUrl: [
      // "Safe" URLs
      'https://rpc.sepolia.dev/',
      // "Fallback" URLs
      'https://rpc.sepolia.org/',
      'https://rpc2.sepolia.org/',
      'https://rpc.sepolia.online/',
      'https://www.sepoliarpc.space/',
      'https://rpc-sepolia.rockx.com/',
      'https://rpc.bordel.wtf/sepolia',
    ],
  },
  [ChainId.OPTIMISM]: {
    bridge: 'https://app.optimism.io/bridge',
    defaultListUrl: OPTIMISM_LIST,
    explorer: 'https://optimistic.etherscan.io/',
    label: 'Optimism',
    statusPage: 'https://optimism.io/status',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: ['https://mainnet.optimism.io/', 'https://rpc.ankr.com/optimism'],
  },
  [ChainId.OPTIMISM_GOERLI]: {
    bridge: 'https://app.optimism.io/bridge',
    defaultListUrl: OPTIMISM_LIST,
    explorer: 'https://goerli-optimism.etherscan.io/',
    label: 'Optimism Görli',
    statusPage: 'https://optimism.io/status',
    nativeCurrency: { name: 'Optimism Goerli Ether', symbol: 'görOpETH', decimals: 18 },
    rpcUrl: ['https://goerli.optimism.io'],
  },
  [ChainId.ARBITRUM_ONE]: {
    bridge: 'https://bridge.arbitrum.io/',
    explorer: 'https://arbiscan.io/',
    label: 'Arbitrum',
    defaultListUrl: ARBITRUM_LIST,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: ['https://arb1.arbitrum.io/rpc', 'https://arbitrum.public-rpc.com'],
  },
  [ChainId.ARBITRUM_GOERLI]: {
    bridge: 'https://bridge.arbitrum.io/',
    explorer: 'https://goerli.arbiscan.io/',
    label: 'Arbitrum Goerli',
    defaultListUrl: ARBITRUM_LIST,
    nativeCurrency: { name: 'Goerli Arbitrum Ether', symbol: 'goerliArbETH', decimals: 18 },
    rpcUrl: ['https://goerli-rollup.arbitrum.io/rpc'],
  },
  [ChainId.POLYGON_MUMBAI]: {
    bridge: 'https://wallet.polygon.technology/polygon/bridge/deposit',
    explorer: 'https://mumbai.polygonscan.com/',
    label: 'Polygon Mumbai',
    nativeCurrency: { name: 'Polygon Mumbai Matic', symbol: 'mMATIC', decimals: 18 },
    rpcUrl: [
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-mumbai.maticvigil.com',
      'https://matic-testnet-archive-rpc.bwarelabs.com',
    ],
  },
  [ChainId.CELO]: {
    bridge: 'https://www.portalbridge.com/#/transfer',
    explorer: 'https://celoscan.io/',
    label: 'Celo',
    defaultListUrl: CELO_LIST,
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    rpcUrl: [`https://forno.celo.org`],
  },
  [ChainId.CELO_ALFAJORES]: {
    bridge: 'https://www.portalbridge.com/#/transfer',
    explorer: 'https://alfajores-blockscout.celo-testnet.org/',
    label: 'Celo Alfajores',
    defaultListUrl: CELO_LIST,
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    rpcUrl: [`https://alfajores-forno.celo-testnet.org`],
  },
  [ChainId.BNB]: {
    bridge: 'https://cbridge.celer.network/1/56',
    explorer: 'https://bscscan.com/',
    label: 'BNB Chain',
    defaultListUrl: PLASMA_BNB_LIST,
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    rpcUrl: [
      'https://endpoints.omniatech.io/v1/bsc/mainnet/public',
      'https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d',
      'https://1rpc.io/bnb',
      'https://bsc-dataseed3.binance.org',
      'https://bsc-dataseed2.defibit.io',
      'https://bsc-dataseed1.ninicoin.io',
      'https://binance.nodereal.io',
      'https://bsc-dataseed4.defibit.io',
      'https://rpc.ankr.com/bsc',
    ],
  },
  [ChainId.AVALANCHE]: {
    bridge: 'https://core.app/bridge/',
    explorer: 'https://snowtrace.io/',
    label: 'Avalanche',
    defaultListUrl: AVALANCHE_LIST,
    nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
    rpcUrl: ['https://api.avax.network/ext/bc/C/rpc', 'https://avalanche-c-chain.publicnode.com'],
  },
  [ChainId.BASE]: {
    bridge: 'https://bridge.base.org/deposit',
    defaultListUrl: BASE_LIST,
    explorer: 'https://basescan.org/',
    label: 'Base',
    statusPage: 'https://status.base.org/',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrl: [
      // "Safe" URLs
      'https://mainnet.base.org/',
      'https://developer-access-mainnet.base.org/',
      'https://base.gateway.tenderly.co',
      'https://base.publicnode.com',
      // "Fallback" URLs
      'https://1rpc.io/base',
      'https://base.meowrpc.com',
    ],
  },
}

// URLs
export const METAMASK_URL = 'https://metamask.io/'
