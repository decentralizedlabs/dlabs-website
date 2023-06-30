import Link from "next/link"
import { Container, CreditsCounter, appName } from "../"
import Logo from "@components/icons/Logo"
import { CustomConnectButton, IsSignedBlock } from "@components/ui"
import UserIcon from "@components/icons/UserIcon"
// import Nightwind from "@components/icons/Nightwind"

export default function Navbar() {
  // const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="shadow-sm">
      <Container>
        <nav className="relative sm:px-6 h-[4.25rem] items-center mx-auto flex justify-between">
          <div className="flex items-center space-x-7 sm:space-x-10">
            <Link href="/" className="w-6 h-6" aria-label={`${appName} logo`}>
              <Logo />
            </Link>
          </div>

          <div className="relative z-10 flex items-center space-x-6 sm:space-x-8">
            {/* <div className="hidden sm:block sm:mr-2">
              <Nightwind size="h-[24px]" />
            </div> */}
            <CustomConnectButton signable />
            <IsSignedBlock>
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
            </IsSignedBlock>
          </div>
          {/* {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />} */}
        </nav>
      </Container>
      <hr className="w-full border-gray-700" />
    </header>
  )
}
