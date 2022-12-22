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
import { getAvailableUnits, getNotionData, callParams } from "@lib/storeInfo"
import { BigNumber } from "ethers"
import { User } from "@prisma/client"
import { formatNotionBody } from "@utils/formatNotionBody"
import { notion } from "@lib/notionClient"
import { envConstants } from "@utils/constants"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { address, link, creditsForRequest } = JSON.parse(req.body)

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
        prisma.user.findFirst({
          where: { address: String(address) }
        }),
        readContracts({
          contracts: envConstants.slicerProducts.map(({ productId }) => ({
            ...callParams,
            args: [address, envConstants.slicerId, productId]
          }))
        })
      ]

      const [userData, purchasedData] = (await Promise.all(promises)) as [
        User,
        BigNumber[]
      ]

      // Retrieve user ID from Account data in db
      const userId = userData.id

      // Fetch jobs data fron Notion DB
      const notionData = await getNotionData(userId)

      const availableUnits = getAvailableUnits(purchasedData, notionData)

      if (availableUnits >= creditsForRequest) {
        // Handle notion update
        const data = await notion.pages.create(
          formatNotionBody(userData, link, creditsForRequest)
        )

        // Push notification to Discord webhook
        fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/webhook?${
            userData.discord
              ? `discord=${encodeURIComponent(userData.discord)}`
              : ""
          }`
        )

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
