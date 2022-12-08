"use client"

import Spinner from "@components/icons/Spinner"
import { ActionScreen } from "@components/ui"
import { useAppContext } from "app/components/context"

export default function MissingInfoBlock({
  children
}: {
  children: JSX.Element
}) {
  const { accountData } = useAppContext()

  return accountData === undefined ? (
    <Spinner />
  ) : accountData?.accountInfo["name"] &&
    accountData?.accountInfo["address"] ? (
    children
  ) : (
    <ActionScreen
      text="Fill your billing info before requesting a job"
      buttonLabel="Go to profile"
      href="/profile"
    />
  )
}
