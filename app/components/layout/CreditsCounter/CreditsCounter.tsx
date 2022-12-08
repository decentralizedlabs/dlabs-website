"use client"

import { useAccount, useContractReads } from "wagmi"
import { BigNumber } from "ethers"
import Spinner from "@components/icons/Spinner"
import { addresses } from "@utils/constants"
import ProductsModule from "abi/ProductsModule.json"
import { useAppContext } from "app/components/context"

export default function CreditsCounter() {
  const { address: account } = useAccount()
  const { accountData } = useAppContext()

  const slicerId = 3
  const products = [
    { productId: 1, value: 10 },
    { productId: 3, value: 25 }
  ]
  const validateUnits = {
    address: addresses.ProductsModule,
    abi: ProductsModule.abi,
    functionName: "validatePurchaseUnits"
  }

  const { data, isLoading }: { data: BigNumber[]; isLoading: boolean } =
    useContractReads({
      contracts: products.map(({ productId }) => ({
        ...validateUnits,
        args: [account, slicerId, productId]
      }))
    })

  const purchasedUnits = data?.reduce(
    (a, b, i) => Number(a) + Number(b) * products[i].value,
    0
  )

  const usedUnits = accountData?.usedUnits || 0

  const availableUnits = purchasedUnits - usedUnits

  return !isLoading && accountData !== undefined ? (
    <p className="text-sm font-semibold">{availableUnits} lD</p>
  ) : (
    <Spinner />
  )
}
