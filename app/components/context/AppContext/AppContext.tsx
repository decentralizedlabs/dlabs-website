"use client"

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react"
import { View } from "@lib/content/modals"
import { useAccount, useNetwork, useSigner, useSignMessage } from "wagmi"
import fetcher from "@utils/fetcher"
import { Account } from "@prisma/client"
import { messageToSign, signMessage } from "@utils/signMessage"

type Context = {
  isConnected: boolean
  isSigned: boolean
  setIsSigned: Dispatch<SetStateAction<boolean>>
  signMessageAction: (args?: any) => Promise<`0x${string}`>
  isSignatureLoading: boolean
  accountData: AccountData
  setAccountData: Dispatch<SetStateAction<Account>>
  modalView: View
  setModalView: Dispatch<SetStateAction<View>>
}

export type NotionData = any[]
// TODO: Define any

export type AccountData = Account & { notionData: NotionData }

const AppContext = createContext<Context>({
  isConnected: false,
  isSigned: false,
  setIsSigned: null,
  signMessageAction: null,
  isSignatureLoading: false,
  accountData: null,
  setAccountData: null,
  modalView: { name: "" },
  setModalView: null
})

export default function AppWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const { address: account } = useAccount()
  const { data: signer } = useSigner()
  const { chain } = useNetwork()
  const [modalView, setModalView] = useState<View>({ name: "" })
  const [isConnected, setIsConnected] = useState(false)
  const [isSigned, setIsSigned] = useState(false)
  const [accountData, setAccountData] = useState<AccountData>()
  const getAccountData = async (account: string) => {
    const { data, notionData }: { data: Account; notionData: object[] } =
      await fetcher(`/api/accounts?account=${account}`)

    setAccountData({ ...data, notionData })
  }

  const { signMessageAsync, isLoading: isSignatureLoading } = useSignMessage({
    message: messageToSign
  })

  useEffect(() => {
    if (!isSigned && account && signer && !isSignatureLoading) {
      signMessage(account, signMessageAsync, setIsSigned)
    }
  }, [account, signer])

  useEffect(() => {
    setIsSigned(localStorage.getItem("isSigned") && true)
  }, [])

  useEffect(() => {
    setIsConnected(account && true)
    setAccountData(undefined)

    if (account) {
      getAccountData(account)
    } else {
      setIsSigned(false)
      localStorage.removeItem("isSigned")
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
        isSigned,
        setIsSigned,
        signMessageAction: signMessageAsync,
        isSignatureLoading,
        accountData,
        setAccountData,
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
