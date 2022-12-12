import { Button } from "@components/ui"
import { Container } from "../layout/components"

export default function Homepage() {
  return (
    <Container page={true}>
      <main className="max-w-screen-lg mx-auto space-y-12 text-center">
        <div>
          <h1>Decentralized labs</h1>
          <p className="pt-6 text-xl font-bold text-gray-500 xs:text-lg">
            A nice subtitle
          </p>
        </div>
        <Button label="Submit work" href="/submit" />
      </main>
    </Container>
  )
}
