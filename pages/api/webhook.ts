export const runtime = "nodejs"

import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { discord } = req.query

      if (process.env.NEXT_PUBLIC_ENV === "mainnet") {
        // Push notifiction to Discord
        await fetch(
          `https://discord.com/api/webhooks/${process.env.DISCORD_WEBHOOK_ID}/${process.env.DISCORD_WEBHOOK_TOKEN}`,
          {
            body: JSON.stringify({
              content: `New job submitted! ${
                discord ? `User: @${discord}` : ""
              }`
            }),
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST"
          }
        )
      }

      res.status(200).json({ success: true })
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
