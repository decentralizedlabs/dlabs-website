import { Container } from "../layout/components"
import Hero from "./Hero"
import HomeFaqs from "./HomeFaqs"
import Pricing from "./Pricing"
import Services from "./Services"
import Technologies from "./Technologies"
import Work from "./Work"

export default function Homepage() {
  return (
    <>
      <Container page={true}>
        <main className="max-w-screen-lg mx-auto text-center">
          <div className="space-y-40">
            <Hero />
            <Work />
            <Services />
            <Technologies />
            <Pricing />
          </div>
        </main>
        <HomeFaqs />
      </Container>
    </>
  )
}
