"use client"

import Spinner from "@components/icons/Spinner"
import saEvent from "@utils/saEvent"
import Link from "next/link"

interface Props {
  customClassName?: string
  customColor?: string
  wrapperClassName?: string
  type?: "button" | "submit" | "reset"
  label?: string | JSX.Element
  href?: string
  onClick?: any
  loading?: boolean
  external?: boolean
  targetBlank?: boolean
  secondary?: boolean
  disabled?: boolean
  saEventName?: string
}

export default function Button({
  customClassName,
  customColor,
  wrapperClassName,
  type,
  label,
  href,
  onClick,
  loading,
  external,
  targetBlank = true,
  secondary,
  disabled,
  saEventName
}: Props) {
  const className =
    customClassName ||
    "nightwind-prevent overflow-hidden text-sm sm:text-base font-bold tracking-wide px-7 rounded-sm h-[40px] min-w-[150px]"
  const color = !disabled
    ? customColor ||
      `hover:bg-blue-700 focus:bg-blue-700 ${
        secondary
          ? "text-blue-600 border-blue-600 border-2 hover:text-white"
          : "text-white bg-blue-600"
      }`
    : "bg-gray-400 dark:!bg-gray-500 cursor-not-allowed"

  const rootClassName = `focus:outline-none ${color} ${className}`

  return (
    <div
      className={wrapperClassName}
      onClick={() => (saEventName ? saEvent(saEventName) : null)}
    >
      {href ? (
        !external ? (
          <Link href={href}>
            <button className={rootClassName}>{label}</button>
          </Link>
        ) : targetBlank ? (
          <a href={href} target="_blank" rel="noreferrer">
            <button className={rootClassName}>{label}</button>
          </a>
        ) : (
          <a href={href}>
            <button className={rootClassName}>{label}</button>
          </a>
        )
      ) : (
        <button
          className={rootClassName}
          type={type}
          disabled={disabled}
          onClick={!disabled && !loading ? onClick : null}
        >
          <div className="flex items-center justify-center w-full">
            {loading ? <Spinner /> : <p>{label}</p>}
          </div>
        </button>
      )}
    </div>
  )
}
