import Link from "next/link"
import { Container, Social } from "../"

export default function Footer() {
  return (
    <footer className="relative z-20 pt-8 pb-4 text-center bg-black shadow-sm">
      <Container>
        <Social wrapperClassName="flex justify-center" />
        <div className="grid items-center justify-center grid-cols-9 pt-4 mx-auto text-xs text-gray-600 w-72">
          <Link href="/privacy" className="col-span-4 text-right text-gray-400">
            Privacy policy
          </Link>
          <p className="col-span-1">·</p>
          <Link href="/terms" className="col-span-4 text-left text-gray-400">
            Terms of service
          </Link>
        </div>
      </Container>
    </footer>
  )
}
