import Link from "next/link"
import { Container, Social } from "../"

export default function Footer() {
  return (
    <footer className="relative z-20 pt-8 pb-8 text-center bg-black shadow-sm">
      <Container>
        <Social wrapperClassName="flex justify-center" />
        <div className="flex items-center justify-center gap-2 pt-4 mx-auto text-xs text-gray-600 max-w-[440px]">
          <Link href="/careers" className="text-gray-400">
            Careers
          </Link>
          <p>·</p>
          <Link href="/privacy" className="text-gray-400">
            Privacy policy
          </Link>
          <p>·</p>
          <Link href="/terms" className="text-gray-400">
            Terms of service
          </Link>
        </div>
      </Container>
    </footer>
  )
}

// TODO: Switch <a> to <Link> once scroll bug is fixed
