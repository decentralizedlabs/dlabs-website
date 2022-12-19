"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { useAppContext } from "app/layout/context"
import { useAccount } from "wagmi"
import { Button, Input } from "@components/ui"
import fetcher from "@utils/fetcher"
import usePurchasedUnits from "@utils/usePurchasedUnits"
import { envConstants } from "@utils/constants"

type Props = {
  setSuccess: Dispatch<SetStateAction<boolean>>
}

export default function SubmitForm({ setSuccess }) {
  const { address } = useAccount()
  const { availableUnits } = usePurchasedUnits()
  const { userData, setUserData } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState("")
  const userCanRequest = availableUnits > 0

  const handleSetLink = (value: string) => {
    setSuccess(false)
    setLink(value)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const body = {
        body: JSON.stringify({ address, link }),
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
    <form className="space-y-12" onSubmit={submit}>
      <Input
        label="Job link"
        value={link}
        onChange={handleSetLink}
        disabled={loading}
        required
      />
      <div>
        <Button
          type={userCanRequest ? "submit" : "button"}
          label="Submit"
          loading={loading}
          disabled={!userCanRequest}
        />
        {!userCanRequest && (
          <a
            href={envConstants.slicerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sm highlight"
          >
            No credits available. Get some!
          </a>
        )}
      </div>
    </form>
  )
}
