"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { useAppContext } from "app/layout/context"
import { useAccount } from "wagmi"
import { Button, CustomConnectButton, Input } from "@components/ui"
import fetcher from "@utils/fetcher"
import usePurchasedUnits from "@utils/usePurchasedUnits"
import { slicerUrl } from "@utils/constants"
import getCreditsForRequest from "@utils/getCreditsForRequest"

type Props = {
  setSuccess: Dispatch<SetStateAction<boolean>>
  isRequiredDataFilled: boolean
}

export default function SubmitForm({
  setSuccess,
  isRequiredDataFilled
}: Props) {
  const { address } = useAccount()
  const { availableUnits } = usePurchasedUnits()
  const { userData, setUserData, isSigned } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState("")
  const creditsForRequest = 0 // getCreditsForRequest(userData)
  const userCanRequest = availableUnits >= creditsForRequest

  const handleSetLink = (value: string) => {
    setSuccess(false)
    setLink(value)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const body = {
        body: JSON.stringify({ address, link, creditsForRequest }),
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

  return (
    <form onSubmit={submit}>
      {isSigned ? (
        isRequiredDataFilled ? (
          <div className="space-y-12">
            <Input
              label="Job link"
              value={link}
              onChange={handleSetLink}
              disabled={loading}
              required
            />
            <Button
              type={userCanRequest ? "submit" : "button"}
              label="Submit"
              loading={loading}
              disabled={!userCanRequest}
            />
            {!userCanRequest && (
              <a
                href={slicerUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 text-sm highlight"
              >
                No credits available. Get some!
              </a>
            )}
          </div>
        ) : (
          <Button type="button" label="Go to profile" href="/profile/edit" />
        )
      ) : (
        <CustomConnectButton signable disconnectLabel />
      )}
    </form>
  )
}
