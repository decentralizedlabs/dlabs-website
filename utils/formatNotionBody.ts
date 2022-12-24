import { dbId } from "@lib/storeInfo"
import { User } from "@prisma/client"

export const formatNotionBody = (
  userData: User,
  link: string,
  creditsForRequest: number
) => ({
  parent: {
    database_id: dbId
  },
  properties: {
    Name: {
      title: [
        {
          text: {
            content: "New job"
          }
        }
      ]
    },
    Client: {
      rich_text: [
        {
          text: {
            content: userData.name
          }
        }
      ]
    },
    Credits: {
      number: creditsForRequest
    },
    Status: {
      select: {
        name: "To estimate"
      }
    },
    "Client ID": { number: userData.id },
    "Request link": {
      url: link
    }
  }
})
