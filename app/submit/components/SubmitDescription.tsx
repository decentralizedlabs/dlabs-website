"use client"

import Logo from "@components/icons/Logo"
import { NoteText } from "@components/ui"
import { constants, slicerUrl } from "@utils/constants"
import getCreditsForRequest from "@utils/getCreditsForRequest"
import usePurchasedUnits from "@utils/usePurchasedUnits"
import { accounts } from "app/layout/components/Social/Social"
import { useAppContext } from "app/layout/context"

export default function SubmitDescription() {
  const { availableUnits } = usePurchasedUnits()
  const { userData } = useAppContext()
  const creditsForRequest = getCreditsForRequest(userData)

  return (
    <div className="prose text-left">
      <ol>
        {availableUnits == 0 && (
          <li>
            Visit the{" "}
            <a href={slicerUrl} target="_blank" rel="noreferrer">
              dlabs store
            </a>{" "}
            to get{" "}
            <span className="inline-block w-3 h-3 my-0">
              <Logo />
            </span>{" "}
            credits
          </li>
        )}
        <li>
          Join the{" "}
          <a href={accounts.discord} target="_blank" rel="noreferrer">
            dlabs discord
          </a>{" "}
          so we can get in touch
        </li>
        <li>
          Duplicate{" "}
          <a href={constants.template} target="_blank" rel="noreferrer">
            this Notion document
          </a>{" "}
          and fill in the job details
        </li>
        <li>Enable sharing, paste the document link below and submit</li>
      </ol>
      <p>
        Once we receive your request, we&apos;ll provide an estimate for the job
        and keep you updated on its progress.
      </p>
      {creditsForRequest == 0 && (
        <div className="text-sm">
          <NoteText
            text={
              "You have no requests in progress, so you can submit one for free"
            }
          />
        </div>
      )}
    </div>
  )
}
