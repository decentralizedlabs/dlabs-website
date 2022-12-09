"use client"

import UserIcon from "@components/icons/UserIcon"
import { useAppContext } from "app/components/context"
import { CreditsCounter } from ".."
import Link from "next/link"

export default function NavbarConnected() {
  const { isConnected, isSigned } = useAppContext()

  return (
    isConnected &&
    isSigned && (
      <>
        <CreditsCounter />
        <Link href="/profile">
          {/* <a
              className="cursor-pointer"
              onMouseDown={() => !showDropdown && setShowDropdown(true)}
            > */}
          <UserIcon />
          {/* </a> */}
        </Link>
      </>
    )
  )
}
