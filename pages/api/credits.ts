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
        where: { account: String(account) },
        select: { usedUnits: true }
      })

      res.status(200).json(data)
      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
