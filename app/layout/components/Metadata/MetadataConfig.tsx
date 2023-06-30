import { accounts } from "../Social/Social"

export const appName = "dlabs"
export const appTitle = `${appName} – On-demand web3 development`
export const appDescription =
  "The all-in-one solution for web3 development: smart contracts, web and dApp development, blockchain strategy, UX/UI design and more."
export const appUrl = process.env.NEXT_PUBLIC_APP_URL!
export const domain = appUrl.split("//").pop()
export const twitterAccount = accounts.twitter?.split("twitter.com/").pop()
