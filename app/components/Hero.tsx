import { Button } from "@components/ui"
import Link from "next/link"

export default function Hero() {
  return (
    <>
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
    </>
  )
}
