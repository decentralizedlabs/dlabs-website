import Script from "next/script"
import { accounts } from "app/layout/components/Social/Social"

export const appName = "dlabs"
export const appTitle = "dlabs | On-demand web3 development"
export const appDescription =
  "The all-in-one solution for web3 development: smart contracts, web and dApp development, blockchain strategy, UX/UI design and more."
export const appUrl = process.env.NEXT_PUBLIC_APP_URL
export const twitterAccount = accounts.twitter.split("twitter.com/").pop()

export default function DefaultHead() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <meta property="og:site_name" content={appTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterAccount} />
      <meta name="twitter:creator" content={twitterAccount} />

      <Script
        id="sa_event"
        dangerouslySetInnerHTML={{
          __html: `window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};`
        }}
      />
    </>
  )
}
