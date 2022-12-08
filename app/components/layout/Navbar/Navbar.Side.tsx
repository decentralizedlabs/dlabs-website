"use client"

import { useState } from "react"
import { CustomConnectButton } from "@components/ui"
import UserIcon from "@components/icons/UserIcon"
import saEvent from "@utils/saEvent"
import { useAppContext } from "app/components/context"
import { CreditsCounter, DropdownMenu } from "../"
import Link from "next/link"
// import Nightwind from "@components/icons/Nightwind"

export default function NavbarSide() {
  const { isConnected } = useAppContext()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <div className="relative z-10 flex items-center space-x-6 sm:space-x-8 xs:space-x-6">
        {/* <div className="hidden xs:block xs:mr-2">
              <Nightwind size="h-[24px]" />
            </div> */}
        <div onClick={() => saEvent("connect_wallet_attempt")}>
          <CustomConnectButton />
        </div>

        {isConnected && (
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
        )}
      </div>
      {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />}
    </>
  )
}
