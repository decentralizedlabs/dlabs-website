"use client"

import { Button, Input } from "@components/ui"
import fetcher from "@utils/fetcher"
import { useAppContext } from "app/layout/context"
import { Container } from "app/layout/components"
import { useState } from "react"
import { useAccount } from "wagmi"

export default function ProfileForm() {
  const { address } = useAccount()
  const { userData, setUserData } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState("")

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const body = {
      body: JSON.stringify({ address, link }),
      method: "POST"
    }
    const newJob = await fetcher("/api/jobs", body)
    const newUserData = userData
    newUserData.notionData.push(newJob)
    setUserData({ ...newUserData })

    setLoading(false)
  }

  return (
    <Container page={true}>
      <form className="max-w-screen-sm mx-auto space-y-4" onSubmit={submit}>
        <h1 className="text-3xl">Work info</h1>
        <div>
          <Input label="Job link" value={link} onChange={setLink} />
        </div>
        <Button type="submit" label="Submit" loading={loading} />
      </form>
    </Container>
  )
}
