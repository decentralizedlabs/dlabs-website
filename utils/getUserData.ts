import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { User } from "@prisma/client"
import { UserData } from "app/layout/context/AppContext/AppContext"
import { Dispatch, SetStateAction } from "react"
import fetcher from "./fetcher"

export async function getUserData(
  account: `0x${string}`,
  setUserData: Dispatch<SetStateAction<UserData>>
) {
  const {
    data,
    notionData
  }: {
    data: User
    notionData: PageObjectResponse[]
  } = await fetcher(`/api/accounts?address=${account}`)

  setUserData({ ...data, notionData })
}
