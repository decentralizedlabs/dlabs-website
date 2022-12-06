"use client"

import { useAppContext } from "../../context"
import { Footer, Modal, Navbar } from ".."
import { useNetwork } from "wagmi"
import { useEffect } from "react"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isConnected, modalView, setModalView } = useAppContext()
  const { chain } = useNetwork()

  useEffect(() => {
    if (
      isConnected &&
      chain &&
      Number(chain.id).toString(16) !== process.env.NEXT_PUBLIC_CHAIN_ID
    ) {
      setModalView({ cross: false, name: "NETWORK_VIEW" })
    } else {
      if (modalView.name == "NETWORK_VIEW") {
        setModalView({ name: "" })
      }
    }
  }, [isConnected, chain])

  return (
    <>
      <div className="relative flex flex-col justify-between min-h-screen">
        <Navbar />
        {children}
        <Footer />
        {modalView.name && (
          <Modal modalView={modalView} setModalView={setModalView} />
        )}
      </div>
    </>
  )
}
