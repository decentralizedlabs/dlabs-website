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

      const data = await prisma.account.findFirst({
        where: { account: String(account) }
      })

      res.status(200).json(data)
    }

    if (req.method === "POST") {
      const { account, name, address, fiscalCode } = JSON.parse(req.body)

      const data = await prisma.account.upsert({
        where: { account: String(account) },
        create: {
          account: String(account),
          accountInfo: { name, address, fiscalCode }
        },
        update: { accountInfo: { name, address, fiscalCode } }
      })

      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
