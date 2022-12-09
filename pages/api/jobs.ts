export const runtime = "nodejs"

import { prisma } from "@lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import {
  chain,
  createClient,
  configureChains,
  readContracts
} from "@wagmi/core"
import { alchemyProvider } from "@wagmi/core/providers/alchemy"
import { publicProvider } from "@wagmi/core/providers/public"
import {
  dbId,
  getAvailableUnits,
  getNotionData,
  notionHeaders,
  products,
  slicerId,
  validateUnits
} from "@lib/storeInfo"
import { BigNumber } from "ethers"
import { Account } from "@prisma/client"
import fetcher from "@utils/fetcher"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { account, link } = JSON.parse(req.body)

      const env = String(process.env.NEXT_PUBLIC_ENV)
      const alchemyId = String(process.env.NEXT_PUBLIC_ALCHEMY_ID)

      const customChains = [chain[env]]
      const { provider } = configureChains(customChains, [
        alchemyProvider({ apiKey: alchemyId }),
        publicProvider()
      ])

      createClient({
        autoConnect: true,
        provider
      })

      const promises = [
        prisma.account.findFirst({
          where: { account: String(account) }
        }),
        readContracts({
          contracts: products.map(({ productId }) => ({
            ...validateUnits,
            args: [account, slicerId, productId]
          }))
        })
      ]

      const [accountData, purchasedData] = (await Promise.all(promises)) as [
        Account,
        BigNumber[]
      ]

      // Retrieve user ID from Account data in db
      const userId = accountData.id

      // Fetch jobs data fron Notion DB
      const notionData = await getNotionData(userId)

      const availableUnits = getAvailableUnits(purchasedData, notionData)

      if (availableUnits > 0) {
        // Handle notion update
        const body = {
          body: JSON.stringify({
            parent: {
              database_id: dbId
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: "New job"
                    }
                  }
                ]
              },
              Client: {
                rich_text: [
                  {
                    text: {
                      content: accountData.accountInfo["name"]
                    }
                  }
                ]
              },
              "Billing info": {
                rich_text: [
                  {
                    text: {
                      content: `Name: ${accountData.accountInfo["name"]}; Billing address: ${accountData.accountInfo["address"]};`
                    }
                  },
                  accountData.accountInfo["vat"] && {
                    text: {
                      content: ` VAT: ${accountData.accountInfo["vat"]};`
                    }
                  }
                ]
              },
              Credits: {
                number: 1
              },
              Status: {
                select: {
                  name: "To estimate"
                }
              },
              "Client ID": { number: accountData.id },
              Link: {
                url: link
              }
            }
          }),
          headers: notionHeaders,
          method: "POST"
        }
        const data = await fetcher("https://api.notion.com/v1/pages", body)

        res.status(200).json(data)
      } else {
        throw Error("No credits available")
      }
    }
  } catch (error) {
    console.log(error)

    res.status(500).json(error)
  }
}
