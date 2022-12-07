"use client"

import { useAccount, useContractReads } from "wagmi"
import { BigNumber } from "ethers"
import Spinner from "@components/icons/Spinner"
import { addresses } from "@utils/constants"
import ProductsModule from "abi/ProductsModule.json"
import { useEffect, useState } from "react"
import fetcher from "@utils/fetcher"

export default function CreditsCounter() {
  const { address: account } = useAccount()
  const [usedUnits, setUsedUnits] = useState<number>(null)

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

  useEffect(() => {
    if (account) {
      const getUsedUnits = async (account: string) => {
        const data = await fetcher(`/api/credits?account=${account}`)
        const usedUnits = data?.usedUnits
        setUsedUnits(Number(usedUnits) || 0)
      }

      getUsedUnits(account)
    }
  }, [])

  return !isLoading && usedUnits != undefined ? (
    <p className="text-sm font-semibold">{purchasedUnits - usedUnits} lD</p>
  ) : (
    <Spinner />
  )
}
