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
import Logo from "@components/icons/Logo"
import { useState } from "react"

export default function CreditsCounter() {
  const { address: account } = useAccount()
  const { userData } = useAppContext()
  const [show, setShow] = useState(false)

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
    <a
      className="flex items-center gap-2 text-sm font-bold"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      href="https://slice.so"
      // TODO: Add slicer link
      target="_blank"
      rel="noreferrer"
    >
      {availableUnits}{" "}
      <span className="block w-3 h-3">
        <Logo />
      </span>
      <span
        className={`${
          !show ? "hidden " : ""
        }absolute p-5 w-80 z-10 bg-black text-center font-normal text-white shadow-xl top-[65px] right-0 mb-9 rounded-sm overflow-hidden border border-yellow-300 border-opacity-50`}
      >
        Get credits on the dlabs store
      </span>
    </a>
  ) : (
    <Spinner />
  )
}
