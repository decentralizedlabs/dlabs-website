"use client"

import "@rainbow-me/rainbowkit/styles.css"
import { appName } from "app/layout/components"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { createConfig, configureChains, WagmiConfig, mainnet } from "wagmi"
import { goerli } from "viem/chains"

const env = String(process.env.NEXT_PUBLIC_ENV)
const alchemyId = String(process.env.NEXT_PUBLIC_ALCHEMY_ID)

const customChains = [env === "goerli" ? goerli : mainnet]
const { chains, publicClient } = configureChains(customChains, [
  alchemyProvider({ apiKey: alchemyId }),
  publicProvider()
])

const { connectors } = getDefaultWallets({
  appName,
  projectId: "26a03d94a14be94f80505f3daef1c58d",
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function WalletProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        coolMode
        showRecentTransactions={true}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
