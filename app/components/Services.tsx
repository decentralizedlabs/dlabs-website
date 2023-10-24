import Blockchain from "@components/icons/Blockchain"
import Desktop from "@components/icons/Desktop"
import Development from "@components/icons/Development"
import Ethereum from "@components/icons/Ethereum"

export default function Services() {
  const features = [
    {
      name: "Smart contract dev & audit",
      description:
        "Our team has combined decades of experience in designing, optimizing, testing and auditing smart contracts.",
      icon: Ethereum
    },
    {
      name: "Web & dApp development",
      description:
        "We use cutting-edge frameworks and technologies to provide the best experience to your users.",
      icon: Development
    },
    {
      name: "UX / UI design",
      description:
        "We design the optimal user experience for your project, as well as make your brand stand out with clean and effective interfaces.",
      icon: Desktop
    },
    {
      name: "Blockchain strategy",
      description:
        "We provide custom strategy development for your project, with roadmaps for implementation and exploration of potential use cases.",
      icon: Blockchain
    }
    // {
    //   name: "Training and workshops on web3 technologies",
    //   description:
    //     "D-Labs could offer training and workshops to help individuals and organizations understand the fundamentals of web3 technologies, including blockchain, smart contracts, and dApps. These workshops could be customized to the specific needs and goals of the participants.",
    //   icon: Check
    // },
    // {
    //   name: "Community management and growth strategy for web3 projects",
    //   description:
    //     "Building and engaging a community is crucial for the success of many web3 projects. D-Labs could help organizations develop and implement a community management and growth strategy, including tactics such as content creation, social media marketing, and event planning.",
    //   icon: Check
    // }
  ]

  return (
    <div>
      <p className="pb-2 custom-heading">Services</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        Not just devs, we&apos;re your partners
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-400">
        We don&apos;t only get the job done, we set you up for success
      </p>

      <div className="grid grid-cols-1 mt-12 text-left sm:mt-20 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <div className="flex items-center justify-center w-12 h-12 text-yellow-300 bg-gray-900 rounded-md sm:shrink-0">
              <feature.icon className="w-8 h-8" aria-hidden="true" />
            </div>
            <div className="sm:min-w-0 sm:flex-1">
              <h2 className="text-lg font-semibold leading-8 text-white">
                {feature.name}
              </h2>
              <h3 className="mt-2 text-sm leading-7 text-gray-300">
                {feature.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
