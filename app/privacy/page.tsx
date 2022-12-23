export const runtime = "nodejs"

import { markdownToHtml } from "@lib/markdownToHtml"
import { Container } from "app/layout/components"
import { content } from "./content"

export default async function Page() {
  const html = await markdownToHtml(content)

  return (
    <Container>
      <main
        className="pt-32 pb-20 mx-auto prose-sm prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  )
}
