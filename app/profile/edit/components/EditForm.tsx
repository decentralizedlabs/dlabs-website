"use client"

import { Button, Input } from "@components/ui"
import { User } from "@prisma/client"
import fetcher from "@utils/fetcher"
import handleSetObject from "@utils/handleSetObject"
import { useAppContext } from "app/layout/context"
import { Container } from "app/layout/components"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAccount } from "wagmi"

export default function EditForm() {
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
      try {
        const body = {
          body: JSON.stringify({ address, ...formData }),
          method: "POST"
        }
        const newData: User = await fetcher("/api/accounts", body)

        setUserData({ ...newData, notionData: userData.notionData })
        setSuccess(true)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
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
          <Input
            label="Full Name*"
            value={formData.name}
            onChange={handleSetName}
            disabled={loading}
            placeholder="Decentralized Labs LTD"
            required
          />
          <Input
            label="Full address*"
            value={formData.physicalAddress}
            onChange={handleSetPhysicalAddress}
            disabled={loading}
            placeholder="1234 Main St, New York, USA"
            required
          />
          <Input
            label="VAT number"
            value={formData.taxId}
            onChange={handleSetTaxId}
            disabled={loading}
          />
        </div>
        <div className="space-y-6">
          <h2>Profile info</h2>
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
                  dlabs discord
                </a>
              </>
            }
            value={formData.discord}
            onChange={handleSetDiscord}
            disabled={loading}
            placeholder="dlabs#1234"
          />
          <Input
            label="Email"
            helpText="Used as alternative contact method"
            value={formData.email}
            onChange={handleSetEmail}
            disabled={loading}
            placeholder="gm@dlabs.app"
          />
        </div>
        <div className="text-center">
          <div className="pb-4">
            <Button
              type="submit"
              label="Update profile"
              loading={loading}
              success={success}
            />
          </div>
          {userData?.name && userData?.address && (
            <Link href="/submit" className="highlight">
              Submit job
            </Link>
          )}
        </div>
      </form>
    </Container>
  )
}
