"use client"

import { useEffect, useRef } from "react"
import { View, NETWORK_VIEW } from "@lib/content/modals"
import Cross from "@components/icons/Cross"
import { useAppContext } from "app/layout/context"

const Modal = () => {
  const { modalView, setModalView } = useAppContext()
  const { name, cross, params } = modalView
  let content: JSX.Element | undefined
  const modalRef = useRef<any>(null)

  switch (name) {
    case "NETWORK_VIEW":
      content = NETWORK_VIEW()
      break
  }

  useEffect(() => {
    function handleClick(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalView({ name: "" })
      }
    }

    if (cross) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClick)
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClick)
    }
  }, [cross, modalRef, setModalView])

  return (
    modalView.name && (
      <div className="fixed top-0 z-50 w-screen h-screen py-12 overflow-y-scroll sm:py-20 background-modal">
        <div className="absolute w-full h-full mt-[-3rem] sm:mt-[-5rem]" />
        <div
          className="flex items-center justify-center"
          style={{ minHeight: "100%" }}
        >
          <div
            className="relative w-full max-w-screen-md px-2 py-16 mx-2 bg-black border border-yellow-300 rounded-md shadow-xl sm:py-20 sm:px-8"
            ref={modalRef}
          >
            {cross && (
              <div className="absolute top-[24px] right-[24px]">
                <Cross
                  className="text-right cursor-pointer hover:text-red-500"
                  onClick={() => setModalView({ name: "" })}
                />
              </div>
            )}
            <div>{content}</div>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
