"use client"

import Logo from "@components/icons/Logo"
import { constants, envConstants } from "@utils/constants"
import usePurchasedUnits from "@utils/usePurchasedUnits"
import { accounts } from "app/layout/components/Social/Social"

export default function SubmitDescription() {
  const { availableUnits } = usePurchasedUnits()

  return (
    <div className="prose text-left">
      <ol>
        {availableUnits == 0 && (
          <li>
            Visit the{" "}
            <a href={envConstants.slicerUrl} target="_blank" rel="noreferrer">
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
    </div>
  )
}
