import { Button } from "@components/ui"
import Link from "next/link"
import HeroBackground from "./HeroBackground"
import Work from "./Work"

export default function Hero() {
  return (
    <div className="relative pt-24 sm:pt-40">
      <div className="absolute top-0 -z-10 left-1/2 w-[1280px] -translate-x-1/2">
        <HeroBackground />
      </div>
      <div className="pb-10 sm:pb-12">
        <h1>Decentralized labs</h1>
        <p className="text-xl font-bold text-gray-400 sm:text-2xl">
          On-demand web3 development
        </p>
      </div>
      <Button label="See plans" href="/" external={true} />
      {/* TODO: Add link */}
      <Link
        href="/submit"
        className="inline-block mt-4 font-bold sm:mt-6 highlight"
      >
        Submit work
      </Link>
      <Work />
    </div>
  )
}
