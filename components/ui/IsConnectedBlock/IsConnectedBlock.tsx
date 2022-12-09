"use client"

import { useAppContext } from "app/components/context"

export default function IsConnectedBlock({
  children
}: {
  children: JSX.Element
}) {
  const { isConnected } = useAppContext()

  return isConnected && children
}
