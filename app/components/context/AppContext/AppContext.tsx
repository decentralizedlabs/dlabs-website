"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { View } from "@lib/content/modals"
import { useAccount, useNetwork } from "wagmi"
import fetcher from "@utils/fetcher"
import { Accounts } from "@prisma/client"
import timeout from "@utils/timeout"

const AppContext = createContext<any>({
  isConnected: false,
  accountData: {},
  modalView: { name: "" },
  setModalView: () => null
})

export default function AppWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const { address: account } = useAccount()
  const { chain } = useNetwork()
  const [modalView, setModalView] = useState<View>({ name: "" })
  const [isConnected, setIsConnected] = useState(false)
  const [accountData, setAccountData] = useState<Accounts>()

  useEffect(() => {
    setIsConnected(account && true)

    if (account) {
      const getAccountData = async (account: string) => {
        const data: Accounts = await fetcher(`/api/accounts?account=${account}`)
        setAccountData(data)
      }

      getAccountData(account)
    }
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
        accountData,
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
