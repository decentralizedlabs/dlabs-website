export const runtime = "nodejs"

import { prisma } from "@lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import {
  getAvailableUnits,
  getNotionData,
  callParams,
  PurchasedData
} from "@lib/storeInfo"
import { User } from "@prisma/client"
import { formatNotionBody } from "@utils/formatNotionBody"
import { notion } from "@lib/notionClient"
import { envConstants } from "@utils/constants"
import { configureChains, createConfig, mainnet, readContracts } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { goerli } from "viem/chains"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { address, link, creditsForRequest } = JSON.parse(req.body)

      const env = String(process.env.NEXT_PUBLIC_ENV)
      const alchemyId = String(process.env.NEXT_PUBLIC_ALCHEMY_ID)

      const customChains = [env === "goerli" ? goerli : mainnet]
      const { publicClient, webSocketPublicClient } = configureChains(
        customChains,
        [alchemyProvider({ apiKey: alchemyId }), publicProvider()]
      )

      createConfig({
        autoConnect: true,
        publicClient,
        webSocketPublicClient
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
        PurchasedData
      ]

      // Retrieve user ID from Account data in db
      const userId = userData.id

      // Fetch jobs data fron Notion DB
      const notionData = await getNotionData(userId)

      const availableUnits = getAvailableUnits(purchasedData, notionData)

      if (availableUnits >= creditsForRequest) {
        // Handle notion update
        const data = await notion.pages.create(
          formatNotionBody(userData, link, creditsForRequest) as any
        )

        // Push notification to Discord webhook
        await fetch(
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
