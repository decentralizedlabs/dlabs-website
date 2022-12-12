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
import { useSearchParams } from "next/navigation"
import { Discord } from "@components/icons/Social"
import Spinner from "@components/icons/Spinner"

export default function EditForm() {
  const { address } = useAccount()
  const { userData, setUserData } = useAppContext()
  const searchParams = useSearchParams()
  const codeParam = searchParams.get("code")
  const discordLink = `https://discord.com/oauth2/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_DISCORD_APP_ID}&scope=identify&state=1234&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/profile&prompt=consent`

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

  const getDiscordHandle = async (code: string) => {
    try {
      const body = {
        method: "POST",
        body: JSON.stringify({ code, address })
      }
      const newData = await fetcher("/api/discord", body)
      if (newData) {
        setUserData(newData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (codeParam) {
      getDiscordHandle(codeParam)
    }
  }, [codeParam])

  return userData !== undefined ? (
    <Container page={true} size="max-w-screen-sm">
      <form className="space-y-12 text-left" onSubmit={submit}>
        <div className="space-y-6">
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
        <div className="space-y-6">
          <h2>Contact</h2>
          <div>
            <div className="relative flex items-center">
              <p className="pr-1 text-sm font-semibold text-gray-300">
                Discord username
              </p>
            </div>
            <p className="pb-4 text-sm text-gray-400">
              Used to contact you about job requests, on the{" "}
              <a
                className="highlight"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                dlabs discord
              </a>
            </p>
            <div className="flex items-center gap-3">
              {userData?.discord && (
                <>
                  <p className="text-sm font-bold">
                    @{userData.discord}{" "}
                    <a
                      href={discordLink}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-2 text-gray-400 highlight"
                    >
                      update
                    </a>
                  </p>
                </>
              )}
              {!userData?.discord && (
                <button type="button">
                  <a
                    href={discordLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-2 font-bold text-white bg-indigo-500 rounded-sm hover:bg-indigo-700 hover:text-white"
                  >
                    Connect Discord
                    <div className="w-5 h-5">
                      <Discord />
                    </div>
                  </a>
                </button>
              )}
            </div>
          </div>

          <Input
            label="Email"
            helpText="Used as alternative contact method"
            value={formData.email}
            onChange={handleSetEmail}
            disabled={loading}
            placeholder="gm@dlabs.app"
          />
        </div>
        <div className="space-y-6 text-center">
          <div>
            <Button
              type="submit"
              label="Update profile"
              loading={loading}
              success={success}
            />
          </div>
          {userData?.name && userData?.address && (
            <Link href="/submit" className="block font-bold highlight">
              Submit job
            </Link>
          )}
        </div>
      </form>
    </Container>
  ) : (
    <div className="flex justify-center">
      <Spinner size="h-12 w-12" />
    </div>
  )
}
