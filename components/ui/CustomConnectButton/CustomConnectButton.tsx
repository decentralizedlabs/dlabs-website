"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import saEvent from "@utils/saEvent"
import Button from "../Button"

export default function CustomConnectButton() {
  return (
    <div onClick={() => saEvent("connect_wallet_attempt")}>
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
                    accountStatus={{
                      smallScreen: "avatar",
                      largeScreen: "full"
                    }}
                    chainStatus={{ smallScreen: "none", largeScreen: "full" }}
                    showBalance={false}
                  />
                )
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </div>
  )
}

// TODO: Add signature version
