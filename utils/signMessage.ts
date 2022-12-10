import { verifyMessage } from "ethers/lib/utils.js"
import { getCsrfToken } from "next-auth/react"
import { Dispatch, SetStateAction } from "react"
import { SiweMessage } from "siwe"

export const messageToSign = async (address: string) =>
  new SiweMessage({
    domain: window.location.host,
    address,
    statement: "Sign in with Ethereum to the app.",
    uri: window.location.origin,
    version: "1",
    nonce: await getCsrfToken()
  })
// export const messageToSign = `Sign this message to prove you have access to the connected wallet.

// This won't cost you any Ether.

// Timestamp: ${Date.now()}`

export const setMessageToSign = async (
  account: string,
  setMessage: Dispatch<SetStateAction<string>>
) => {
  setMessage((await messageToSign(account)).prepareMessage())
}

export async function signMessage(
  accountAddress: string,
  signMessageAction: (args?: any) => Promise<`0x${string}`>,
  setIsSigned: Dispatch<SetStateAction<boolean>>
) {
  if (accountAddress) {
    const signature = await signMessageAction()
    const message = (await messageToSign(accountAddress)).prepareMessage()

    if (verifyMessage(message, signature) == accountAddress) {
      setIsSigned(true)
      localStorage.setItem("isSigned", "true")
    }
    return { message, signature }
  }
}
