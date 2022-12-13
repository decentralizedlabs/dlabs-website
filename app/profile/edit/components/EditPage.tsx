"use client"

import { useAppContext } from "app/layout/context"
import { Container } from "app/layout/components"
import Link from "next/link"
import Spinner from "@components/icons/Spinner"
import EditForm from "./EditForm"

export default function EditPage() {
  const { userData } = useAppContext()

  return userData !== undefined ? (
    <Container page={true} size="max-w-screen-sm">
      <EditForm />
      {userData?.name && userData?.address && (
        <Link href="/submit" className="block mt-6 font-bold highlight">
          Submit job
        </Link>
      )}
    </Container>
  ) : (
    <div className="flex justify-center">
      <Spinner size="h-12 w-12" />
    </div>
  )
}
