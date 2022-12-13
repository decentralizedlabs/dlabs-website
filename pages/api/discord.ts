export const runtime = "nodejs"

import { prisma } from "@lib/prisma"
import { User } from "@prisma/client"
import fetcher from "@utils/fetcher"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { address, code } = JSON.parse(req.body)

      // Format body for Discord request
      const body = {
        body: new URLSearchParams({
          client_id: process.env.NEXT_PUBLIC_DISCORD_APP_ID,
          client_secret: process.env.DISCORD_APP_SECRET,
          code: String(code),
          grant_type: "authorization_code",
          redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/profile`,
          scope: "identify"
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      }

      // Get access token
      const tokenData = await fetcher(
        "https://discord.com/api/oauth2/token",
        body
      )
      const { token_type, access_token } = tokenData

      // Get Discord username
      let userData = await fetcher("https://discord.com/api/users/@me", {
        headers: {
          authorization: `${token_type} ${access_token}`
        }
      })

      let data: User
      if (userData?.username) {
        // Update user in db with Discord username
        data = await prisma.user.update({
          where: { address: String(address) },
          data: {
            discord: userData.username + "#" + userData.discriminator
          }
        })
      }

      res.status(200).json(data)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
