import { Chain } from "wagmi"
import { networkUrl } from "./alchemy"

export const base = {
  id: 8453,
  name: "Base Mainnet",
  network: "base",
  nativeCurrency: {
    decimals: 18,
    name: "Base",
    symbol: "ETH"
  },
  rpcUrls: {
    public: { http: [networkUrl()] },
    default: { http: [networkUrl()] }
  },
  blockExplorers: {
    etherscan: { name: "BaseScan", url: "https://basescan.org/" },
    default: { name: "BaseScan", url: "https://basescan.org/" }
  }
} as const satisfies Chain
