"use client"

import { useState } from "react"
import { useAppContext } from "app/layout/context"
import { useAccount } from "wagmi"
import { Button, Input } from "@components/ui"
import fetcher from "@utils/fetcher"

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
    <form className="space-y-12" onSubmit={submit}>
      <Input
        label="Job link"
        value={link}
        onChange={handleSetLink}
        disabled={loading}
        required
      />
      <Button type="submit" label="Submit" loading={loading} />
    </form>
  )
}
