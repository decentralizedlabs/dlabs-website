import { Button } from "@components/ui"
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
        <Button label="Submit work" href="/submit" />
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="inline-block pt-6 font-bold highlight"
        >
          {/* TODO: Add link */}
          Visit dlabs store
        </a>{" "}
      </main>
    </Container>
  )
}
