"use client"

import { useState } from "react"
import SubmitFaqs from "./SubmitFaqs"
import SubmitDescription from "./SubmitDescription"
import { Container } from "app/layout/components"
import SubmitForm from "./SubmitForm"
import { useAppContext } from "app/layout/context"
import { accounts } from "app/layout/components/Social/Social"
import { Button } from "@components/ui"

export default function SubmitPage() {
  const { userData } = useAppContext()
  const [success, setSuccess] = useState(false)
  const isRequiredDataFilled = userData?.name && userData?.address && true

  return (
    <Container page={true} size="max-w-screen-sm">
      {!success ? (
        <div className="space-y-12">
          <h1>Submit request</h1>
          <SubmitDescription isRequiredDataFilled={!!isRequiredDataFilled} />
          <SubmitForm
            setSuccess={setSuccess}
            isRequiredDataFilled={!!isRequiredDataFilled}
          />
          <SubmitFaqs />
        </div>
      ) : (
        <div className="space-y-8 text-center">
          <h1>Request submitted</h1>
          <p>
            Thank you! We&apos;ll be back soon with a quote for your request.
          </p>
          <p>
            Meanwhile, you can{" "}
            <a
              href={accounts.discord}
              target="_blank"
              rel="noreferrer"
              className="highlight font-bold"
            >
              join the dlabs discord
            </a>{" "}
            so we can keep in touch.
          </p>
          <Button
            label="Submit a new request"
            onClick={() => setSuccess(false)}
          />
        </div>
      )}
    </Container>
  )
}
