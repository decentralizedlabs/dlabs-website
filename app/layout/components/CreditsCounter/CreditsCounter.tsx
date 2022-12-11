"use client"

import { useAccount, useContractReads } from "wagmi"
import { BigNumber } from "ethers"
import Spinner from "@components/icons/Spinner"
import { useAppContext } from "app/layout/context"
import {
  getAvailableUnits,
  products,
  slicerId,
  validateUnits
} from "@lib/storeInfo"

export default function CreditsCounter() {
  const { address: account } = useAccount()
  const { userData } = useAppContext()

  const {
    data: purchasedData,
    isLoading
  }: { data: BigNumber[]; isLoading: boolean } = useContractReads({
    contracts: products.map(({ productId }) => ({
      ...validateUnits,
      args: [account, slicerId, productId]
    }))
  })

  const availableUnits = getAvailableUnits(purchasedData, userData?.notionData)

  return !isLoading && userData !== undefined ? (
    <p className="text-sm font-semibold">{availableUnits} lD</p>
  ) : (
    <Spinner />
  )
}
