import { UserData } from "app/layout/context/AppContext/AppContext"

export default function getCreditsForRequest(userData: UserData) {
  const requestsInProgress = userData?.notionData.filter(
    (el) => el.properties.Status["select"].name !== "Completed"
  ).length

  return requestsInProgress != 0 ? 1 : 0
}
