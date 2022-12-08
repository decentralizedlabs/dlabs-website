import Link from "next/link"
import { Container } from "../"
import Logo from "@components/icons/Logo"
import { appName } from "../DefaultHead/DefaultHead"
import NavbarSide from "./Navbar.Side"

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <Container>
        <nav className="relative px-3 sm:px-6 h-[4.25rem] items-center mx-auto flex justify-between">
          <div className="flex items-center space-x-7 sm:space-x-10">
            <Link href="/" className="w-7 h-7" aria-label={`${appName} logo`}>
              <Logo />
            </Link>
          </div>
          <NavbarSide />
        </nav>
      </Container>
      <hr className="w-full border-gray-200" />
    </header>
  )
}
