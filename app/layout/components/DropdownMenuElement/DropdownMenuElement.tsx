"use client"

import Link from "next/link"

type Props = {
  image: JSX.Element
  label: string
  onClick?: () => void
  href?: string
}

export default function DropdownMenuElement({
  href,
  image,
  label,
  onClick
}: Props) {
  const className =
    "flex items-center py-3.5 group rounded-sm hover:bg-blue-600 hover:text-white"

  return (
    <div onClick={onClick}>
      {href ? (
        <Link href={href}>
          <div className={className}>
            <div className="ml-4">{image}</div>
            <p className="ml-4 font-semibold">{label}</p>
          </div>
        </Link>
      ) : (
        <div className={className + " cursor-pointer"}>
          <div className="ml-4">{image}</div>
          <p className="ml-4 font-semibold">{label}</p>
        </div>
      )}
    </div>
  )
}
