export const runtime = "nodejs"

import { prisma } from "@lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { account } = req.query

      const data = await prisma.accounts.findFirst({
        where: { account: String(account) }
      })

      res.status(200).json(data)
    }

    if (req.method === "POST") {
      const { account, name, country, fiscalCode } = JSON.parse(req.body)

      const data = await prisma.accounts.upsert({
        where: { account: String(account) },
        create: {
          account: String(account),
          accountInfo: { name, country, fiscalCode }
        },
        update: { accountInfo: { name, country, fiscalCode } }
      })

      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
