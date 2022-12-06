"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { View } from "@lib/content/modals"
import { useAccount } from "wagmi"

const AppContext = createContext<any>({
  isConnected: false,
  modalView: { name: "" },
  setModalView: () => null
})

export default function AppWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [modalView, setModalView] = useState<View>({ name: "" })
  const [isConnected, setIsConnected] = useState(false)
  const { address: account } = useAccount()

  useEffect(() => {
    setIsConnected(account && true)
  }, [account])

  return (
    <AppContext.Provider
      value={{
        isConnected,
        modalView,
        setModalView
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
