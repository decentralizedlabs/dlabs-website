import Chevron from "@components/icons/Chevron"
import { Container } from "app/layout/components"
import Link from "next/link"
import ProfileEditPing from "./Profile.EditPing"

export default function ProfilePage() {
  return (
    <Container page={true} size="max-w-screen-sm">
      <h1>My profile</h1>
      <div className="text-right">
        <Link href="/profile/edit" className="inline-flex items-center group">
          <ProfileEditPing />
          <span>Edit account info</span>
          <div className="ml-1 w-5 h-5 duration-100 rotate-180 group-hover:translate-x-0.5">
            <Chevron />
          </div>
        </Link>
      </div>
      <h2>Past jobs</h2>
      {/* TODO: Add a "past jobs" section */}
    </Container>
  )
}
