"use client"

import { CustomConnectButton } from "@components/ui"
import { useAppContext } from "app/layout/context"

type Props = { children: JSX.Element; signable?: boolean }

export default function ConnectBlock({ children, signable = false }: Props) {
  const { isConnected, isSigned } = useAppContext()

  return isConnected && (!signable || isSigned) ? (
    children
  ) : (
    <div className="flex flex-col items-center py-6 text-center">
      <h2>{!isConnected ? "Connect your wallet" : "Log in with wallet"}</h2>
      <p className="max-w-screen-sm py-10 mx-auto sm:text-lg">
        {!isConnected
          ? "Connect your wallet to view this page"
          : "Sign a message with your wallet to view this page"}
      </p>
      <CustomConnectButton signable={signable} disconnectLabel />
    </div>
  )
}
