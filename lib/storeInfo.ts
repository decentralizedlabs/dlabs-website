import { envConstants } from "@utils/constants"
import ProductsModule from "abi/ProductsModule.json"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { BigNumber } from "ethers"
import { notion } from "./notionClient"

export type PurchasedData = { result?: BigNumber | unknown; status: string }[]

// ONCHAIN
export const callParams = {
  address: envConstants.ProductsModule,
  abi: ProductsModule.abi,
  functionName: "validatePurchaseUnits"
}

export const getAvailableUnits = (
  purchasedData: PurchasedData,
  notionData: PageObjectResponse[] | undefined
) => {
  const purchasedUnits = purchasedData?.reduce(
    (a, b, i) => a + Number(b.result) * envConstants.slicerProducts[i].value,
    0
  )

  const usedUnits =
    notionData?.reduce((a, b) => a + b.properties.Credits["number"], 0) || 0

  return purchasedUnits - usedUnits
}

// NOTION
export const dbId = envConstants.notionDbId
export const getNotionData = async (userId: number) => {
  const data = await notion.databases.query({
    database_id: dbId,
    filter: {
      property: "Client ID",
      number: {
        equals: userId
      }
    }
  })
  return data?.results as PageObjectResponse[]
}
