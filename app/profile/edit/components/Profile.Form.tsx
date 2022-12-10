"use client"

import { Button, Input } from "@components/ui"
import { User } from "@prisma/client"
import fetcher from "@utils/fetcher"
import handleSetObject from "@utils/handleSetObject"
import { useAppContext } from "app/components/context"
import { Container } from "app/components/layout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

export default function ProfileForm() {
  const { address } = useAccount()
  const { userData, setUserData } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    physicalAddress: userData?.physicalAddress || "",
    email: userData?.email || "",
    discord: userData?.discord || "",
    taxId: userData?.taxId || ""
  })

  const handleSetName = (value: string) => {
    handleSetObject("name", value, formData, setFormData, setSuccess)
  }
  const handleSetPhysicalAddress = (value: string) => {
    handleSetObject("physicalAddress", value, formData, setFormData, setSuccess)
  }
  const handleSetEmail = (value: string) => {
    handleSetObject("email", value, formData, setFormData, setSuccess)
  }
  const handleSetDiscord = (value: string) => {
    handleSetObject("discord", value, formData, setFormData, setSuccess)
  }
  const handleSetTaxId = (value: string) => {
    handleSetObject("taxId", value, formData, setFormData, setSuccess)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!success) {
      setLoading(true)
      const body = {
        body: JSON.stringify({ address, ...formData }),
        method: "POST"
      }
      const newData: User = await fetcher("/api/accounts", body)
      setUserData(newData)
      setLoading(false)
      setSuccess(true)
    }
  }

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData?.name || "",
        physicalAddress: userData?.physicalAddress || "",
        email: userData?.email || "",
        discord: userData?.discord || "",
        taxId: userData?.taxId || ""
      })
    }
  }, [userData])

  return (
    <Container page={true} size="max-w-screen-sm">
      <form className="space-y-12 text-left" onSubmit={submit}>
        <div className="space-y-6">
          <h2>Billing info</h2>
          <div>
            <Input
              label="Full Name*"
              value={formData.name}
              onChange={handleSetName}
              placeholder="Decentralized Labs LTD"
              required
            />
          </div>
          <div>
            <Input
              label="Full address*"
              value={formData.physicalAddress}
              onChange={handleSetPhysicalAddress}
              placeholder="1234 Main St, New York, USA"
              required
            />
          </div>
          <div>
            <Input
              label="VAT number"
              value={formData.taxId}
              onChange={handleSetTaxId}
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2>Profile info</h2>
          <div>
            <Input
              label="Discord username"
              helpText={
                <>
                  We&apos;ll use this to contact you about job requests, on the{" "}
                  <a
                    className="highlight"
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dlabs discord
                  </a>
                </>
              }
              value={formData.discord}
              onChange={handleSetDiscord}
              placeholder="Dlabs#1234"
            />
          </div>
          <div>
            <Input
              label="Email"
              helpText="Used as alternative contact method"
              value={formData.email}
              onChange={handleSetEmail}
              placeholder="gm@dlabs.app"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="pb-4">
            <Button
              type="submit"
              label="Submit"
              loading={loading}
              success={success}
            />
          </div>
          {userData?.name && userData?.address && (
            <Link href="/submit" className="highlight">
              Submit work
            </Link>
          )}
        </div>
      </form>
    </Container>
  )
}
