"use client"

import Spinner from "@components/icons/Spinner"
import { ActionScreen, ConnectBlock } from "@components/ui"
import { useAppContext } from "app/components/context"

export default function Layout({ children }: { children: JSX.Element }) {
  const { accountData } = useAppContext()

  return (
    <ConnectBlock>
      {accountData === undefined ? (
        <div className="flex justify-center">
          <Spinner size="h-12 w-12" />
        </div>
      ) : accountData?.accountInfo["name"] &&
        accountData?.accountInfo["address"] ? (
        children
      ) : (
        <ActionScreen
          text="Fill your billing info before requesting a job"
          buttonLabel="Go to profile"
          href="/profile/edit"
        />
      )}
    </ConnectBlock>
  )
}