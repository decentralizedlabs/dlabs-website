"use client"

// import Logo from "@components/icons/Logo"
import { NoteText } from "@components/ui"
import { constants, slicerUrl } from "@utils/constants"
// import getCreditsForRequest from "@utils/getCreditsForRequest"
// import usePurchasedUnits from "@utils/usePurchasedUnits"
import { accounts } from "app/layout/components/Social/Social"
import { useAppContext } from "app/layout/context"

type Props = {
  isRequiredDataFilled: boolean
}

export default function SubmitDescription({ isRequiredDataFilled }: Props) {
  // const { availableUnits } = usePurchasedUnits()
  const { isSigned } = useAppContext()
  // const creditsForRequest = 0 // getCreditsForRequest(userData)

  return (
    <div className="prose text-left">
      <p>
        Provide a link with details on your request, and we&apos;ll get back
        with a quote right away.
      </p>
      {/* {creditsForRequest == 0 && (
        <div className="text-sm">
          <NoteText
            text={
              "You have no requests in progress, so you can submit one for free"
            }
          />
        </div>
      )} */}
      {!isSigned ? (
        <div className="text-sm">
          <NoteText text="Connect your account to submit requests" />
        </div>
      ) : (
        !isRequiredDataFilled && (
          <div className="text-sm">
            <NoteText text="Complete your profile to submit requests" />
          </div>
        )
      )}
    </div>
  )
}
