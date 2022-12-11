"use client"

import { useAppContext } from "app/layout/context"

export default function EditPing() {
  const { userData } = useAppContext()

  return (
    !userData && (
      <div className="relative pr-3">
        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
        <div className="absolute top-0 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
      </div>
    )
  )
}
