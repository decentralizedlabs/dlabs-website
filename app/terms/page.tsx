import { markdownToHtml } from "@lib/markdownToHtml"
import { Container } from "app/layout/components"

export const runtime = "nodejs"
import { content } from "./content"

export default async function Page() {
  const html = await markdownToHtml(content)

  return (
    <Container>
      <main
        className="pt-32 pb-20 mx-auto prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  )
}
