import { Container } from "../layout/components"
import Hero from "./Hero"
import HomeFaqs from "./HomeFaqs"
import Pricing from "./Pricing"
import Work from "./Work"

export default function Homepage() {
  return (
    <>
      <Container page={true}>
        <main className="max-w-screen-lg mx-auto text-center">
          <div className="space-y-40">
            <Hero />
            <Work />
            <h2>Services</h2>
            <h3>Example costs</h3>
            <h2>Technologies</h2>
            <Pricing />
          </div>
        </main>
        <HomeFaqs />
      </Container>
    </>
  )
}
