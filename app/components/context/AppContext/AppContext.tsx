"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { View } from "@lib/content/modals"
import { useAccount, useNetwork } from "wagmi"

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
  const { chain } = useNetwork()

  useEffect(() => {
    setIsConnected(account && true)
  }, [account])

  useEffect(() => {
    if (
      isConnected &&
      chain &&
      Number(chain.id).toString(16) !== process.env.NEXT_PUBLIC_CHAIN_ID
    ) {
      setModalView({ cross: false, name: "NETWORK_VIEW" })
    } else {
      if (modalView.name == "NETWORK_VIEW") {
        setModalView({ name: "" })
      }
    }
  }, [isConnected, chain])

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
