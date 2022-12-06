import { AppWrapper, WalletProvider } from "./components/context"
import { AppLayout } from "./components/layout"
import "../styles/global/styles.css"

import { Inter } from "@next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
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
