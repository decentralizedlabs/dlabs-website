export const runtime = "nodejs"
import { Container } from "app/layout/components"
import Roles from "./Roles"

export default async function Careers() {
  return (
    <Container>
      <main className="pt-32 pb-20 text-center">
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Careers
        </h1>
        <div className="prose text-left mx-auto my-8">
          <p>
            We are always on the lookout for exceptional developers and
            candidates to join our team.
          </p>
          <p className="pt-6 text-lg font-bold opacity-60 mb-0">About us</p>
          <p>
            dlabs is an innovative and pioneering web3 development agency
            specialized in providing high-quality smart contract and full stack
            development. We work closely with exciting protocols and projects,
            pushing the boundaries of what is possible in web3.
          </p>
        </div>
        <div className="prose text-left mx-auto my-10">
          <h2 className="custom-heading mb-2">Open roles</h2>
          <p className="text-sm text-gray-300">
            All positions are fully remote
          </p>
          <ul className="list-none pl-0">
            <Roles />
          </ul>
        </div>
      </main>
    </Container>
  )
}
