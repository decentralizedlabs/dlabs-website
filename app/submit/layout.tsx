"use client"

import Spinner from "@components/icons/Spinner"
import { ActionScreen, ConnectBlock } from "@components/ui"
import { useAppContext } from "app/layout/context"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userData } = useAppContext()
  const isRequiredDataFilled = userData?.name && userData?.address

  return (
    <ConnectBlock signable>
      <>
        {userData === undefined ? (
          <div className="flex justify-center">
            <Spinner size="h-12 w-12" />
          </div>
        ) : isRequiredDataFilled ? (
          children
        ) : (
          <ActionScreen
            text="Fill your billing info before requesting a job"
            buttonLabel="Go to profile"
            href="/profile/edit"
          />
        )}
      </>
    </ConnectBlock>
  )
}
