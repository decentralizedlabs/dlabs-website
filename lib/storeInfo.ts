import { addresses } from "@utils/constants"
import ProductsModule from "abi/ProductsModule.json"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { BigNumber } from "ethers"
import { notion } from "./notionClient"

// ONCHAIN
export const slicerId = 3
export const products = [
  { productId: 1, value: 10 },
  { productId: 3, value: 25 }
]
export const callParams = {
  address: addresses.ProductsModule,
  abi: ProductsModule.abi,
  functionName: "validatePurchaseUnits"
}

export const getAvailableUnits = (
  purchasedData: BigNumber[],
  notionData: PageObjectResponse[] | undefined
) => {
  const purchasedUnits = purchasedData?.reduce(
    (a, b, i) => Number(a) + Number(b) * products[i].value,
    0
  )

  const usedUnits =
    notionData?.reduce((a, b) => a + b.properties.Credits["number"], 0) || 0

  return purchasedUnits - usedUnits
}

// NOTION
export const dbId = "12fca9a29d8841a99b35e4136978455c"
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
