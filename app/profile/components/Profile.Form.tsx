"use client"

import { Button, Input } from "@components/ui"
import { Accounts } from "@prisma/client"
import fetcher from "@utils/fetcher"
import handleSetObject from "@utils/handleSetObject"
import { useAppContext } from "app/components/context"
import { Container } from "app/components/layout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

export const runtime = "nodejs"

export default function ProfileForm() {
  const { address: account } = useAccount()
  const { accountData, setAccountData } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: accountData?.accountInfo["name"] || "",
    address: accountData?.accountInfo["address"] || "",
    fiscalCode: accountData?.accountInfo["fiscalCode"] || ""
  })

  const handleSetName = (value: string) => {
    handleSetObject("name", value, formData, setFormData, setSuccess)
  }
  const handleSetAddress = (value: string) => {
    handleSetObject("address", value, formData, setFormData, setSuccess)
  }
  const handleSetFiscalCode = (value: string) => {
    handleSetObject("fiscalCode", value, formData, setFormData, setSuccess)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!success) {
      setLoading(true)
      const body = {
        body: JSON.stringify({ account, ...formData }),
        method: "POST"
      }
      const newData: Accounts = await fetcher("/api/accounts", body)
      setAccountData(newData)
      setLoading(false)
      setSuccess(true)
    }
  }

  useEffect(() => {
    if (accountData) {
      setFormData({
        name: accountData?.accountInfo["name"],
        address: accountData?.accountInfo["address"],
        fiscalCode: accountData?.accountInfo["fiscalCode"]
      })
    }
  }, [accountData])

  return (
    <Container page={true} size="max-w-screen-sm">
      <h1 className="pb-12">Billing info</h1>
      <form className="space-y-6" onSubmit={submit}>
        <div>
          <Input
            label="Name*"
            value={formData.name}
            onChange={handleSetName}
            required
          />
        </div>
        <div>
          <Input
            label="Full address*"
            value={formData.address}
            onChange={handleSetAddress}
            required
          />
        </div>
        <div>
          <Input
            label="VAT number / Fiscal code"
            value={formData.fiscalCode}
            onChange={handleSetFiscalCode}
          />
        </div>
        <div className="pb-4">
          <Button
            type="submit"
            label="Submit"
            loading={loading}
            success={success}
          />
        </div>
        {accountData?.accountInfo["name"] &&
          accountData?.accountInfo["address"] && (
            <Link href="/submit" className="highlight">
              Submit work
            </Link>
          )}
      </form>
    </Container>
  )
}
