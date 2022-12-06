"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import Button from "../Button"

export default function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted
      }) => {
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none"
              }
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Button
                    label="Connect Wallet"
                    onClick={openConnectModal}
                    type="button"
                    secondary
                  />
                )
              }

              if (chain.unsupported) {
                return (
                  <Button
                    label="Wrong network"
                    onClick={openChainModal}
                    type="button"
                    secondary
                  />
                )
              }

              return (
                <ConnectButton
                  accountStatus={{ smallScreen: "avatar" }}
                  chainStatus={{ smallScreen: "none", largeScreen: "full" }}
                />
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
