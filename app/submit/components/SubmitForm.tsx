"use client"

import { useState } from "react"
import { useAppContext } from "app/layout/context"
import { useAccount } from "wagmi"
import SubmitFaqs from "./SubmitFaqs"
import SubmitDescription from "./SubmitDescription"
import { Container } from "app/layout/components"
import { Button, Input } from "@components/ui"
import fetcher from "@utils/fetcher"

export default function SubmitForm() {
  const { address } = useAccount()
  const { userData, setUserData, availableUnits } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [link, setLink] = useState("")

  const handleSetLink = (value: string) => {
    setSuccess(false)
    setLink(value)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!success) {
      setLoading(true)
      try {
        const body = {
          body: JSON.stringify({ address, link }),
          method: "POST"
        }
        const newJob = await fetcher("/api/jobs", body)
        const newUserData = userData
        newUserData.notionData.push(newJob)
        setUserData({ ...newUserData })
        setLink("")
        setSuccess(true)
      } catch (error) {
        console.log(error)
      }

      setLoading(false)
    }
  }

  return (
    <Container page={true} size="max-w-screen-sm">
      {!success ? (
        <form className="space-y-12" onSubmit={submit}>
          <h1>Submit job</h1>
          <SubmitDescription availableUnits={availableUnits} />
          <Input
            label="Job link"
            value={link}
            onChange={handleSetLink}
            disabled={loading}
            required
          />
          <Button type="submit" label="Submit" loading={loading} />
          <SubmitFaqs />
        </form>
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
