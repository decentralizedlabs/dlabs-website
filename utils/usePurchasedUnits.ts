import { useAccount, useContractReads } from "wagmi"
import { getAvailableUnits, callParams } from "@lib/storeInfo"
import { BigNumber } from "ethers"
import { useEffect, useState } from "react"
import { useAppContext } from "app/layout/context/AppContext/AppContext"
import { envConstants } from "./constants"

export default function usePurchasedUnits() {
  const { userData } = useAppContext()
  const [availableUnits, setAvailableUnits] = useState<number>(0)

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

  const { data, isLoading } = useContractReads({
    contracts: envConstants.slicerProducts.map(({ productId }) => ({
      ...callParams,
      args: [address, envConstants.slicerId, productId]
    })),
    ...options
  })

  return { data, isLoading }
}
