"use client"

import { Button, Input } from "@components/ui"
import fetcher from "@utils/fetcher"
import { useAppContext } from "app/components/context"
import { Container } from "app/components/layout"
import { useState } from "react"
import { useAccount } from "wagmi"

export default function ProfileForm() {
  const { address: account } = useAccount()
  const { accountData, setAccountData } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState("")

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const body = {
      body: JSON.stringify({ account, link }),
      method: "POST"
    }
    const newJob = await fetcher("/api/jobs", body)
    const newAccountData = accountData
    newAccountData.notionData.push(newJob)
    setAccountData({ ...newAccountData })

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
