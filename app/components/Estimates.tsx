import Logo from "@components/icons/Logo"

export default function Estimates() {
  const people = [
    {
      work: "Smart contract audit",
      cost: 20,
      notes: "Identify vulnerabilities, optimize gas, improve functionality"
    },
    {
      work: "Smart contract development",
      cost: 20,
      notes:
        "Architecture design, development, optimization, testing, deployment"
    },
    {
      work: "Blockchain strategy",
      cost: 15,
      notes: "Identify use cases, design smart contract / business logic"
    },
    {
      work: "Website / app",
      cost: 12,
      notes:
        "Frontend / backend, on-chain logic, design, content, SEO, deployment"
    },
    {
      work: "Event indexing / subgraph",
      cost: 10,
      notes: "Mappings and schema, deployment, frontend integration"
    },
    {
      work: "UX / UI design",
      cost: 8,
      notes: "Wireframes, mockups, branding, user experience"
    }
  ]
  return (
    <div>
      <h2 className="text-gray-400 custom-heading">Cost estimates</h2>
      <div className="flex flex-col my-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm text-left divide-y divide-gray-600 ">
                <thead>
                  <tr className="font-bold text-gray-400 divide-x divide-gray-600">
                    <th scope="col" className="py-3.5 px-4 sm:pl-6">
                      Work
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 whitespace-nowrap px-4 sm:pr-6"
                    >
                      Starting from
                    </th>
                    <th scope="col" className="px-4 py-3.5">
                      Includes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black">
                  {people.map((person) => (
                    <tr key={person.work} className="divide-x divide-gray-600">
                      <td className="p-4 whitespace-nowrap sm:pl-6">
                        {person.work}
                      </td>
                      <td className="p-4 text-right whitespace-nowrap sm:pr-6">
                        {person.cost}{" "}
                        <span className="inline-block w-2.5 h-2.5 my-0">
                          <Logo />
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 whitespace-nowrap">
                        {person.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p className="max-w-screen-sm mx-auto text-sm leading-6 text-gray-400">
        Cost estimates are indicative, as they vary significantly between
        projects
      </p>
    </div>
  )
}
