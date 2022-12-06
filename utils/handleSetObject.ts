import { Dispatch, SetStateAction } from "react"

export default function handleSetObject(
  key: string,
  value: any,
  object: object,
  setObject: Dispatch<SetStateAction<object>>
) {
  const data = { ...object }
  data[key] = value
  setObject(data)
}
