export const runtime = "nodejs"

import { prisma } from "@lib/prisma"
import { getNotionData } from "@lib/storeInfo"
import {
  PageObjectResponse,
  PartialPageObjectResponse
} from "@notionhq/client/build/src/api-endpoints"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { address } = req.query
      let notionData:
        | (PageObjectResponse | PartialPageObjectResponse)[]
        | undefined

      const data = await prisma.user.findFirst({
        where: { address: String(address) }
      })

      if (data) {
        // Fetch jobs data fron Notion DB
        const userId = data.id
        notionData = await getNotionData(userId)
      }

      res.status(200).json({ data, notionData })
    }

    if (req.method === "POST") {
      const { address, name, physicalAddress, email, discord, taxId } =
        JSON.parse(req.body)

      const data = await prisma.user.upsert({
        where: { address: String(address) },
        create: {
          address: String(address),
          name,
          physicalAddress,
          email: email || null,
          discord: discord || null,
          taxId: taxId || null
        },
        update: {
          name,
          physicalAddress,
          email: email || null,
          discord: discord || null,
          taxId: taxId || null
        }
      })

      res.status(200).json(data)
    }
  } catch (error) {
    console.log(error)

    res.status(500).json(error)
  }
}
