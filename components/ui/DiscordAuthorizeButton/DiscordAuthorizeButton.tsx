"use client"

import { Discord } from "@components/icons/Social"
import fetcher from "@utils/fetcher"
import { accounts } from "app/layout/components/Social/Social"
import { UserData } from "app/layout/context/AppContext/AppContext"
import { useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction, useEffect } from "react"

type Props = {
  address: string
  userData: UserData
  setUserData: Dispatch<SetStateAction<UserData>>
}

export default function DiscordAuthorizeButton({
  address,
  userData,
  setUserData
}: Props) {
  const searchParams = useSearchParams()
  const codeParam = searchParams.get("code")
  const discordLink = `https://discord.com/oauth2/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_DISCORD_APP_ID}&scope=identify&state=1234&redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}/profile&prompt=consent`
  // TODO: Add CSRF protection by using session token as state param
  // TODO: Make sure callback url works in prod

  const getDiscordHandle = async (code: string) => {
    try {
      const body = {
        method: "POST",
        body: JSON.stringify({ code, address })
      }
      const newData = await fetcher("/api/discord", body)
      if (newData) {
        setUserData(newData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (codeParam) {
      getDiscordHandle(codeParam)
    }
  }, [codeParam])

  return (
    <div>
      <div className="relative flex items-center">
        <p className="pr-1 text-sm font-semibold text-gray-300">
          Discord username
        </p>
      </div>
      <p className="pb-4 text-sm text-gray-400">
        Used to contact you about job requests, on the{" "}
        <a
          className="highlight"
          href={accounts.discord}
          target="_blank"
          rel="noreferrer"
        >
          dlabs discord
        </a>
      </p>
      <div className="flex items-center gap-3">
        {userData?.discord && (
          <>
            <p className="text-sm font-bold">
              {userData.discord}{" "}
              <a
                href={discordLink}
                target="_blank"
                rel="noreferrer"
                className="ml-2 highlight"
              >
                update
              </a>
            </p>
          </>
        )}
        {!userData?.discord && (
          <button type="button">
            <a
              href={discordLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-2 font-bold text-white bg-indigo-500 rounded-sm hover:bg-indigo-700 hover:text-white"
            >
              Connect Discord
              <div className="w-5 h-5">
                <Discord />
              </div>
            </a>
          </button>
        )}
      </div>
    </div>
  )
}
