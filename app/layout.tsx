import { AppWrapper, WalletProvider } from "./components/context"
import { AppLayout } from "./components/layout"
import "../styles/global/styles.css"

import { Inter } from "@next/font/google"
import Script from "next/script"

import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

const font = Inter({ subsets: ["latin"] })

export default async function RootLayout({ children }) {
  const session = await unstable_getServerSession(authOptions)
  console.log(session)

  return (
    <html lang="en" className={font.className}>
      <head />
      <body>
        {/* <ThemeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="dark"
        > */}
        <WalletProvider>
          <AppWrapper>
            <AppLayout>{children}</AppLayout>
          </AppWrapper>
        </WalletProvider>
        {/* </ThemeProvider> */}

        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  )
}
