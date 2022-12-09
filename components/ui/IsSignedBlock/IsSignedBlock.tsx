"use client"

import { useAppContext } from "app/components/context"

export default function IsConnectedBlock({
  children
}: {
  children: JSX.Element
}) {
  const { isConnected, isSigned } = useAppContext()

  return isConnected && isSigned && children
}
