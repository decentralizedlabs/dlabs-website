import { Container } from "../layout/components"
import Hero from "./Hero"
import HomeFaqs from "./HomeFaqs"

export default function Homepage() {
  return (
    <Container page={true}>
      <main className="max-w-screen-lg mx-auto text-center">
        <Hero />
        <HomeFaqs />
      </main>
    </Container>
  )
}
