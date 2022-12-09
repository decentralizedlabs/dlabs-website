import { addresses } from "@utils/constants"
import fetcher from "@utils/fetcher"
import ProductsModule from "abi/ProductsModule.json"
import { NotionData } from "app/components/context/AppContext/AppContext"
import { BigNumber } from "ethers"

export const slicerId = 3
export const products = [
  { productId: 1, value: 10 },
  { productId: 3, value: 25 }
]
export const validateUnits = {
  address: addresses.ProductsModule,
  abi: ProductsModule.abi,
  functionName: "validatePurchaseUnits"
}

export const getAvailableUnits = (
  purchasedData: BigNumber[],
  notionData: NotionData
) => {
  const purchasedUnits = purchasedData?.reduce(
    (a, b, i) => Number(a) + Number(b) * products[i].value,
    0
  )

  const usedUnits = notionData?.reduce(
    (a, b) => a + b.properties.Credits.number,
    0
  )

  return purchasedUnits - usedUnits
}

export const getNotionData = async (userId: number) => {
  const dbUrl =
    "https://api.notion.com/v1/databases/12fca9a29d8841a99b35e4136978455c/query"

  const body = {
    body: JSON.stringify({
      filter: {
        property: "Client ID",
        number: {
          equals: userId
        }
      }
    }),
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    },
    method: "POST"
  }
  return (await fetcher(dbUrl, body)).results as NotionData
}
