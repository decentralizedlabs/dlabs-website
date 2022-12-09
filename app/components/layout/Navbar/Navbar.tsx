import Link from "next/link"
import { Container } from "../"
import Logo from "@components/icons/Logo"
import { appName } from "../DefaultHead/DefaultHead"
import NavbarConnected from "./Navbar.Connected"
import { CustomConnectButton } from "@components/ui"
// import Nightwind from "@components/icons/Nightwind"

export default function Navbar() {
  // const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="shadow-sm">
      <Container>
        <nav className="relative px-3 sm:px-6 h-[4.25rem] items-center mx-auto flex justify-between">
          <div className="flex items-center space-x-7 sm:space-x-10">
            <Link href="/" className="w-7 h-7" aria-label={`${appName} logo`}>
              <Logo />
            </Link>
          </div>

          <div className="relative z-10 flex items-center space-x-6 sm:space-x-8 xs:space-x-6">
            {/* <div className="hidden xs:block xs:mr-2">
              <Nightwind size="h-[24px]" />
            </div> */}
            <CustomConnectButton />
            <NavbarConnected />
          </div>
          {/* {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />} */}
        </nav>
      </Container>
      <hr className="w-full border-gray-200" />
    </header>
  )
}
