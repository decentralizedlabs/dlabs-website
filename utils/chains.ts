import { Chain } from "wagmi"

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
    public: { http: [process.env.NEXT_PUBLIC_NETWORK_URL!] },
    default: { http: [process.env.NEXT_PUBLIC_NETWORK_URL!] }
  },
  blockExplorers: {
    etherscan: { name: "BaseScan", url: "https://basescan.org/" },
    default: { name: "BaseScan", url: "https://basescan.org/" }
  }
} as const satisfies Chain
