"use client"

import { useState } from "react"
import Link from "next/link"
import { Container, CreditsCounter, DropdownMenu } from "../"
import { CustomConnectButton } from "@components/ui"
import Logo from "@components/icons/Logo"
import UserIcon from "@components/icons/UserIcon"
import saEvent from "@utils/saEvent"
import { appName } from "../DefaultHead/DefaultHead"
import { useAppContext } from "app/components/context"
// import Nightwind from "@components/icons/Nightwind"

export default function Navbar() {
  const { isConnected } = useAppContext()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="shadow-sm">
      <Container>
        <nav className="relative px-3 sm:px-6 h-[4.25rem] items-center mx-auto flex justify-between">
          <div className="flex items-center space-x-7 sm:space-x-10">
            <Link href="/" className="w-7 h-7" aria-label={`${appName} logo`}>
              <Logo />
            </Link>
            <Link href="/" className="text-sm">
              Explore
            </Link>
          </div>
          <div className="relative z-10 flex items-center space-x-5 sm:space-x-7 xs:space-x-6">
            {/* <div className="hidden xs:block xs:mr-2">
              <Nightwind size="h-[24px]" />
            </div> */}
            <div onClick={() => saEvent("connect_wallet_attempt")}>
              <CustomConnectButton />
            </div>

            {isConnected && (
              <>
                <CreditsCounter />
                <a
                  className="cursor-pointer"
                  onMouseDown={() => !showDropdown && setShowDropdown(true)}
                >
                  <UserIcon />
                </a>
              </>
            )}
          </div>
          {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />}
        </nav>
      </Container>
      <hr className="w-full border-gray-200" />
    </header>
  )
}
