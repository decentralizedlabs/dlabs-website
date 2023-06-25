export const runtime = "nodejs"

import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "lib/prisma"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: []
})
