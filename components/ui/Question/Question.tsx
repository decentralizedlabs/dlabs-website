"use client"

import { useState } from "react"
import QuestionMark from "@components/icons/QuestionMark"

type Props = {
  text: string | JSX.Element
  position?: string
  icon?: boolean
}

export default function Question({ text, position, icon = true }: Props) {
  const [show, setShow] = useState(false)

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <div
        className={`${
          !show ? "hidden " : ""
        }prose-sm prose text-left absolute p-5 w-[22rem] z-10 sm:w-96 bg-black shadow-xl ${
          position || "bottom-0 left-0"
        } mb-9 rounded-sm overflow-hidden border border-yellow-300 border-opacity-50`}
      >
        {text}
      </div>
      {icon && (
        <div className="p-2">
          <QuestionMark />
        </div>
      )}
    </div>
  )
}
