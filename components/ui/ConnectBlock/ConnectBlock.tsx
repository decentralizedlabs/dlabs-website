"use client"

import { CustomConnectButton } from "@components/ui"
import { useAppContext } from "app/components/context"

type Props = { children: JSX.Element; isSignable?: boolean }

export default function ConnectBlock({ children, isSignable = false }: Props) {
  const { isConnected, isSigned } = useAppContext()

  return isConnected && (!isSignable || isSigned) ? (
    children
  ) : (
    <>
      <div className="flex flex-col items-center py-6 mx-auto max-w-screen-xs">
        <h1>{!isConnected ? "Connect your wallet" : "Sign in"}</h1>
        <p className="py-10 sm:text-lg">
          {!isConnected
            ? "Connect your wallet to view this page"
            : "Sign in to view this page"}
        </p>
        <CustomConnectButton isSignable={isSignable} />
      </div>
    </>
  )
}
