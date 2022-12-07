"use client"

import { Button, Input } from "@components/ui"
import handleSetObject from "@utils/handleSetObject"
import { Container } from "app/components/layout"
import { useState } from "react"
import { useAccount } from "wagmi"

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
  const handleSetCountry = (value: string) => {
    handleSetObject("country", value, formData, setFormData)
  }
  const handleSetFiscalCode = (value: string) => {
    handleSetObject("fiscalCode", value, formData, setFormData)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const body = {
      body: JSON.stringify({ account, ...formData }),
      method: "POST"
    }
    await fetch("/api/credits", body)
    setLoading(false)
  }

  return (
    <Container page={true}>
      <form className="max-w-screen-sm mx-auto space-y-4" onSubmit={submit}>
        <h1 className="text-3xl">Billing info</h1>
        <div>
          <Input
            label="Full name*"
            value={formData.name}
            onChange={handleSetName}
          />
        </div>
        <div>
          <Input
            label="Country*"
            value={formData.country}
            onChange={handleSetCountry}
          />
        </div>
        <div>
          <Input
            label="VAT number / Fiscal code"
            value={formData.fiscalCode}
            onChange={handleSetFiscalCode}
          />
        </div>
        <Button type="submit" label="Submit" loading={loading} />
      </form>
    </Container>
  )
}
