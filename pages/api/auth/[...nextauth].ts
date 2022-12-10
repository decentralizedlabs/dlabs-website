export const runtime = "nodejs"

import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getCsrfToken } from "next-auth/react"
import { SiweMessage } from "siwe"
import { NextApiRequest, NextApiResponse } from "next"

const providers = [
  CredentialsProvider({
    name: "Ethereum",
    credentials: {
      message: {
        label: "Message",
        type: "text",
        placeholder: "0x0"
      },
      signature: {
        label: "Signature",
        type: "text",
        placeholder: "0x0"
      }
    },
    async authorize(credentials) {
      try {
        const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"))
        const nextAuthUrl = new URL(process.env.NEXTAUTH_URL)

        const result = await siwe.verify({
          signature: credentials?.signature || "",
          domain: nextAuthUrl.host,
          nonce: await getCsrfToken(/*{ req }*/)
          // TODO: Figure out how to send req from server components
        })

        if (result.success) {
          return {
            id: siwe.address
          }
        }
        return null
      } catch (e) {
        return null
      }
    }
  })
]

export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers,
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.address = token.sub
      session.user.name = token.sub
      session.user.image = "https://www.fillmurray.com/128/128"
      return session
    }
  }
} as AuthOptions

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const isDefaultSigninPage =
    req.method === "GET" && req.query.nextauth.includes("signin")

  // Hide Sign-In with Ethereum from default sign page
  if (isDefaultSigninPage) {
    providers.pop()
  }

  return await NextAuth(req, res, authOptions)
}
