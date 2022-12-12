"use client"

import React, { InputHTMLAttributes } from "react"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onChange: (...args: any[]) => any
  label?: string
  className?: string
  labelClassName?: string
  id?: string
}

export default function InputCheckbox({
  checked,
  onChange,
  className,
  label,
  labelClassName,
  id,
  ...rest
}: Props) {
  const rootClassName = `w-4 h-4 rounded bg-black text-yellow-300 dark:text-yellow-300 shadow-sm focus:ring focus:ring-offset-0 focus:ring-yellow-300 focus:!ring-opacity-50 ${
    checked ? "bg-yellow-300 dark:bg-yellow-300" : "border-gray-300"
  }`

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className={className || rootClassName}
        checked={checked}
        onChange={onChange}
        id={id}
        {...rest}
      />
      {label && <p className={labelClassName || "pl-3"}>{label}</p>}
    </label>
  )
}
