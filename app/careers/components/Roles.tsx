export const runtime = "nodejs"
import { bd, fullStack, smartContract } from "./positions"
import RolesRender from "./RolesRender"

const roles = [smartContract, fullStack, bd]

export default async function Roles() {
  return roles.map(({ label, isDev, content }, i) => (
    <RolesRender key={i} label={label} isDev={isDev} content={content} />
  ))
}
