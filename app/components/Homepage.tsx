import { Container } from "../layout/components"
import Hero from "./Hero"
import HomeFaqs from "./HomeFaqs"
import Pricing from "./Pricing"
import Services from "./Services"
import SmartContracts from "./SmartContracts"
import Work from "./Work"

export default function Homepage() {
  return (
    <>
      <Container page={true}>
        <main className="max-w-screen-lg mx-auto text-center">
          <div className="space-y-32 sm:space-y-40">
            <Hero />
            <Work />
            <Services />
            <SmartContracts />
            <Pricing />
            <HomeFaqs />
          </div>
        </main>
      </Container>
    </>
  )
}
