import { accounts } from "../Social/Social"

export const appName = "dlabs"
export const appTitle = `${appName} | Expert Web3 & Smart Contract Development Services`
export const appDescription =
  "dlabs offers web3 solutions, from smart contract development, to security audits, to dApp design. Elevate your protocol with our end-to-end blockchain services."
export const appUrl = process.env.NEXT_PUBLIC_APP_URL!
export const domain = appUrl.split("//").pop()
export const twitterAccount = accounts.twitter?.split("twitter.com/").pop()
