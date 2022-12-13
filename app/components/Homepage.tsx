import { Button } from "@components/ui"
import Link from "next/link"
import { Container } from "../layout/components"

export default function Homepage() {
  return (
    <Container page={true}>
      <main className="max-w-screen-lg mx-auto text-center">
        <div className="pb-12">
          <h1>Decentralized labs</h1>
          <p className="text-xl font-bold text-gray-400 sm:text-2xl">
            On-demand web3 development
          </p>
        </div>
        <Button label="See plans" href="/" external={true} />
        {/* TODO: Add link */}
        <Link href="/submit" className="inline-block mt-6 font-bold highlight">
          Submit work
        </Link>
      </main>
    </Container>
  )
}
