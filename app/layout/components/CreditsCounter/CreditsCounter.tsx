"use client"

import Spinner from "@components/icons/Spinner"
import { useAppContext } from "app/layout/context"
import Logo from "@components/icons/Logo"
import { useState } from "react"

export default function CreditsCounter() {
  const { userData, availableUnits } = useAppContext()
  const [show, setShow] = useState(false)

  return availableUnits !== undefined && userData !== undefined ? (
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
        }absolute p-5 w-80 z-10 bg-black text-center font-normal text-white shadow-xl top-[68px] right-0 mb-9 rounded-sm overflow-hidden border border-yellow-300 border-opacity-50`}
      >
        Get credits on the dlabs store
      </span>
    </a>
  ) : (
    <Spinner />
  )
}
