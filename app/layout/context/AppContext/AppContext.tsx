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
import {
  useAccount,
  useContractReads,
  useNetwork,
  useSigner,
  useSignMessage
} from "wagmi"
import fetcher from "@utils/fetcher"
import { User } from "@prisma/client"
import { messageToSign } from "@utils/signMessage"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import {
  getAvailableUnits,
  products,
  slicerId,
  validateUnits
} from "@lib/storeInfo"
import { BigNumber } from "ethers"

type Context = {
  isConnected: boolean
  isSigned: boolean
  setIsSigned: Dispatch<SetStateAction<boolean>>
  signMessageAsync: (args?: any) => Promise<`0x${string}`>
  isSignatureLoading: boolean
  availableUnits: number
  userData: UserData
  setUserData: Dispatch<SetStateAction<UserData>>
  modalView: View
  setModalView: Dispatch<SetStateAction<View>>
}

export type UserData = User & {
  notionData: PageObjectResponse[]
}

const AppContext = createContext<Context>({
  isConnected: false,
  isSigned: false,
  setIsSigned: null,
  signMessageAsync: null,
  isSignatureLoading: false,
  availableUnits: 0,
  userData: null,
  setUserData: null,
  modalView: { name: "" },
  setModalView: null
})

export default function AppWrapper({
  children
}: {
  children: React.ReactNode
}) {
  // Hooks
  const { address: account } = useAccount()
  const { data: signer } = useSigner()
  const { chain } = useNetwork()

  // States
  const [modalView, setModalView] = useState<View>({ name: "" })
  const [isConnected, setIsConnected] = useState(false)
  const [isSigned, setIsSigned] = useState(false)
  const [userData, setUserData] = useState<UserData>()
  const [availableUnits, setAvailableUnits] = useState<number>()

  // Available units
  const { data: purchasedData }: { data: BigNumber[]; isLoading: boolean } =
    useContractReads({
      contracts: products.map(({ productId }) => ({
        ...validateUnits,
        args: [account, slicerId, productId]
      }))
    })

  useEffect(() => {
    setAvailableUnits(0)
    if (purchasedData && userData) {
      setAvailableUnits(getAvailableUnits(purchasedData, userData?.notionData))
    }
  }, [purchasedData, userData])

  // Signature authentication
  const { signMessageAsync, isLoading: isSignatureLoading } = useSignMessage({
    message: messageToSign
  })

  // User data
  async function getUserData(account: string) {
    const {
      data,
      notionData
    }: {
      data: User
      notionData: PageObjectResponse[]
    } = await fetcher(`/api/accounts?address=${account}`)

    setUserData({ ...data, notionData })
  }

  useEffect(() => {
    setIsConnected(account && true)
    setUserData(undefined)

    if (account) {
      getUserData(account)
      if (account && localStorage.getItem("isSigned") == account) {
        setIsSigned(true)
      } else {
        setIsSigned(false)
        localStorage.removeItem("isSigned")
      }
    } else {
      localStorage.removeItem("isSigned")
    }
  }, [account])

  // Network modal
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
        signMessageAsync,
        isSignatureLoading,
        availableUnits,
        userData,
        setUserData,
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
