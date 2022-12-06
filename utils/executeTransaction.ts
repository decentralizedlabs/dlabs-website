import { NewTransaction } from "@rainbow-me/rainbowkit/dist/transactions/transactionStore"
import { Dispatch, SetStateAction } from "react"

export type TxData = {
  transactionHash?: string
}

const executeTransaction = async (
  promise: () => Promise<any>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  txDescription?: string,
  addRecentTransaction?: (transaction: NewTransaction) => void,
  settlementLogic?: (waitData: any) => Promise<any>,
  confetti?: boolean
) => {
  setLoading(true)

  try {
    const tx = await promise()

    if (addRecentTransaction) {
      addRecentTransaction({
        hash: tx.hash,
        description: txDescription || "Transaction executed"
      })
    }

    const waitData = await tx.wait()

    if (confetti) {
      // const launchConfetti = (await import("./launchConfetti")).default
      // launchConfetti()
    }

    if (settlementLogic) {
      return await settlementLogic(waitData)
    }
  } catch (err) {
    console.log(err)
  }
  setLoading(false)
}

export default executeTransaction
