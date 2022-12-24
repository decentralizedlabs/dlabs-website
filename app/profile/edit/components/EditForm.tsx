"use client"

import { Button, DiscordAuthorizeButton, Input } from "@components/ui"
import { User } from "@prisma/client"
import fetcher from "@utils/fetcher"
import { getUserData } from "@utils/getUserData"
import handleSetObject from "@utils/handleSetObject"
import { useAppContext } from "app/layout/context"
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
        await getUserData(address, setUserData)
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
        taxId: userData?.taxId || ""
      })
    }
  }, [userData])

  return (
    <form className="space-y-12 text-left" onSubmit={submit}>
      <div className="space-y-8">
        <h2>Billing</h2>
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
      <div className="space-y-8">
        <h2>Contact</h2>
        <DiscordAuthorizeButton
          address={address}
          userData={userData}
          setUserData={setUserData}
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
        <div>
          <Button
            type="submit"
            label="Update"
            loading={loading}
            success={success}
          />
        </div>
      </div>
    </form>
  )
}

// TODO: Disallow edit billing info if ...
