"use client"

import { useState } from "react"
import SubmitFaqs from "./SubmitFaqs"
import SubmitDescription from "./SubmitDescription"
import { Container } from "app/layout/components"
import SubmitForm from "./SubmitForm"

export default function SubmitPage() {
  const [success, setSuccess] = useState(false)

  return (
    <Container page={true} size="max-w-screen-sm">
      {!success ? (
        <div className="space-y-12">
          <h1>Submit job</h1>
          <SubmitDescription />
          <SubmitForm />
          <SubmitFaqs />
        </div>
      ) : (
        <div className="space-y-8 text-center">
          <h1>Job submitted</h1>
          <p>
            Thank you, we&apos;ll be in touch soon to provide an estimate for
            your request.
          </p>
          <a
            className="inline-block font-bold highlight"
            onClick={() => setSuccess(false)}
          >
            Submit a new job
          </a>
        </div>
      )}
    </Container>
  )
}
