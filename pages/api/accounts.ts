export const runtime = "nodejs"

import { prisma } from "@lib/prisma"
import { getNotionData } from "@lib/storeInfo"
import { NotionData } from "app/components/context/AppContext/AppContext"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { account } = req.query
      let notionData: NotionData

      const data = await prisma.account.findFirst({
        where: { account: String(account) }
      })

      if (data) {
        // Fetch jobs data fron Notion DB
        const userId = data.id
        notionData = await getNotionData(userId)
      }

      res.status(200).json({ data, notionData })
    }

    if (req.method === "POST") {
      const { account, name, address, discord, fiscalCode } = JSON.parse(
        req.body
      )

      const data = await prisma.account.upsert({
        where: { account: String(account) },
        create: {
          account: String(account),
          accountInfo: { name, address, discord, fiscalCode }
        },
        update: { accountInfo: { name, address, discord, fiscalCode } }
      })

      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
