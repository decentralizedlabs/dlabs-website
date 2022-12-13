import { useAccount, useContractReads } from "wagmi"
import {
  getAvailableUnits,
  products,
  slicerId,
  callParams
} from "@lib/storeInfo"
import { BigNumber } from "ethers"
import { useEffect, useState } from "react"
import { useAppContext } from "app/layout/context/AppContext/AppContext"

export default function usePurchasedUnits() {
  const { userData } = useAppContext()
  const [availableUnits, setAvailableUnits] = useState<number>()

  const { data, isLoading } = useReadPurchasedUnits({ watch: true })

  useEffect(() => {
    if (data && userData) {
      setAvailableUnits(getAvailableUnits(data, userData?.notionData))
    }

    return () => {
      setAvailableUnits(0)
    }
  }, [data, userData])

  return { availableUnits, data, isLoading }
}

function useReadPurchasedUnits(options?: { watch?: boolean }) {
  const { address } = useAccount()

  const { data, isLoading }: { data: BigNumber[]; isLoading: boolean } =
    useContractReads({
      contracts: products.map(({ productId }) => ({
        ...callParams,
        args: [address, slicerId, productId]
      })),
      ...options
    })

  return { data, isLoading }
}
