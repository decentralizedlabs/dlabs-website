"use client"

import { Button, Input } from "@components/ui"
import handleSetObject from "@utils/handleSetObject"
import { Container } from "app/components/layout"
import { useState } from "react"
import { useAccount } from "wagmi"
import { MissingInfoBlock } from "./layout"

export const runtime = "nodejs"

export default function ProfileForm() {
  const { address: account } = useAccount()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    fiscalCode: ""
  })

  const handleSetName = (value: string) => {
    handleSetObject("name", value, formData, setFormData)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const body = {
      body: JSON.stringify({ account, ...formData }),
      method: "POST"
    }
    await fetch("/api/accounts", body)
    setLoading(false)
  }

  return (
    <MissingInfoBlock>
      <Container page={true}>
        <form className="max-w-screen-sm mx-auto space-y-4" onSubmit={submit}>
          <h1 className="text-3xl">Work info</h1>
          <div>
            <Input
              label="Work details"
              value={formData.name}
              onChange={handleSetName}
            />
          </div>
          <Button type="submit" label="Submit" loading={loading} />
        </form>
      </Container>
    </MissingInfoBlock>
  )
}
