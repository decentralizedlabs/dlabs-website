import Check from "@components/icons/Check"

export default function Services() {
  const features = [
    {
      name: "Blockchain strategy and implementation consulting",
      description:
        "D-Labs could help organizations understand the potential uses and benefits of blockchain technology, and develop a tailored strategy for implementing it within their business. This could include identifying potential use cases, selecting the right blockchain platform, and developing a roadmap for implementation.",
      icon: Check
    },
    {
      name: "Smart contract development and auditing",
      description:
        "Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code. D-Labs could help organizations develop custom smart contracts for their specific needs, as well as audit existing contracts to ensure their security and functionality.",
      icon: Check
    },
    {
      name: "Decentralized application (dApp) development",
      description:
        "dApps are applications that run on a decentralized network, such as a blockchain. D-Labs could help organizations develop custom dApps that leverage the unique features and benefits of decentralized technology.",
      icon: Check
    },
    {
      name: "Training and workshops on web3 technologies",
      description:
        "D-Labs could offer training and workshops to help individuals and organizations understand the fundamentals of web3 technologies, including blockchain, smart contracts, and dApps. These workshops could be customized to the specific needs and goals of the participants.",
      icon: Check
    },
    {
      name: "UX and product research for web3 projects",
      description:
        "D-Labs could conduct user experience (UX) and product research to help organizations understand the needs and preferences of their target users, and design web3 products that are intuitive, user-friendly, and effective. This could include user interviews, usability testing, and other research methods to gather valuable insights and feedback.",
      icon: Check
    },
    {
      name: "Community management and growth strategy for web3 projects",
      description:
        "Building and engaging a community is crucial for the success of many web3 projects. D-Labs could help organizations develop and implement a community management and growth strategy, including tactics such as content creation, social media marketing, and event planning.",
      icon: Check
    }
  ]

  return (
    <div>
      <h2 className="custom-heading">Services</h2>
      <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        Not just devs, we&apos;re your partners
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-400">
        We don&apos;t just get the job done, we set you up for success.
      </p>

      <div className="grid grid-cols-1 mt-20 text-left gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div className="flex items-center justify-center w-12 h-12 text-yellow-300 bg-gray-900 rounded-md sm:shrink-0">
              <feature.icon className="w-8 h-8" aria-hidden="true" />
            </div>
            <div className="sm:min-w-0 sm:flex-1">
              <p className="text-lg font-semibold leading-8 text-white">
                {feature.name}
              </p>
              <p className="mt-2 text-sm leading-7 text-gray-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// TODO: Complete text
