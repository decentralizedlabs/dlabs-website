"use client"

import { Button, Input } from "@components/ui"
import fetcher from "@utils/fetcher"
import { useAppContext } from "app/layout/context"
import { Container } from "app/layout/components"
import { useState } from "react"
import { useAccount } from "wagmi"

export default function SubmitForm() {
  const { address } = useAccount()
  const { userData, setUserData } = useAppContext()
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
    <Container page={true}>
      {!success ? (
        <form className="max-w-screen-sm mx-auto space-y-8" onSubmit={submit}>
          <h2>Submit job</h2>
          <Input
            label="Job link"
            value={link}
            onChange={handleSetLink}
            disabled={loading}
            required
          />
          <Button type="submit" label="Submit" loading={loading} />
        </form>
      ) : (
        <div className="space-y-8">
          <p>Job submitted!</p>
          <p>List of things that will happen now...</p>
          <a
            className="block font-bold highlight"
            onClick={() => setSuccess(false)}
          >
            Submit a new job
          </a>
        </div>
      )}
    </Container>
  )
}
