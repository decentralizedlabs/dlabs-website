import Logo from "@components/icons/Logo"
import { Button } from "@components/ui"
import formatNumber from "@utils/formatNumber"
import PricingBackground from "./PricingBackground"

const costPerCredit = 750

const tiers = [
  {
    id: "tier-s",
    name: "Small",
    href: "#",
    priceMonthly: 1,
    discount: 1,
    description: "For simple tasks",
    features: ["Small projects", "Project estimates"]
  },
  {
    id: "tier-m",
    name: "Medium",
    href: "#",
    priceMonthly: 20,
    discount: 0.9,
    description: "For small projects",
    features: []
  },
  {
    id: "tier-l",
    name: "Large",
    href: "#",
    priceMonthly: 100,
    discount: 0.8,
    description: "For complex projects or long-term involvement",
    features: []
  }
]

export default function Pricing() {
  return (
    <div className="relative">
      <div className="absolute top-0 -z-10 left-1/2 w-[1280px] max-w-none -translate-x-1/2">
        <PricingBackground />
      </div>
      <div className="pt-32 overflow-hidden pb-96 lg:pt-40">
        <div className="relative mx-auto text-center max-w-7xl">
          <div className="max-w-2xl mx-auto lg:max-w-4xl">
            <h2 className="text-lg font-bold leading-8 text-yellow-300">
              Credits packages
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Development that scales with you
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Purchase packages to get credits, then spend them to get requests
              done.
            </p>
          </div>
        </div>
      </div>
      <div className="flow-root pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto">
            <div className="grid max-w-xl grid-cols-1 gap-8 mx-auto lg:px-4 lg:max-w-none lg:grid-cols-3 lg:gap-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="relative flex flex-col rounded-md shadow-xl bg-black/50 backdrop-blur-xl ring-1 ring-yellow-300"
                >
                  <div className="p-8 sm:p-10">
                    <h3
                      className="text-lg font-bold leading-8 tracking-tight text-yellow-300"
                      id={tier.id}
                    >
                      {tier.name}
                    </h3>
                    <p className="mt-4 text-4xl font-bold">
                      $
                      {formatNumber(
                        Math.round(
                          tier.priceMonthly * costPerCredit * tier.discount
                        )
                      )}
                    </p>
                    <p className="mt-3 text-lg text-gray-300">
                      {tier.priceMonthly}
                      <span className="inline-block w-3 h-3 mt-0 ml-2">
                        <Logo />
                      </span>
                    </p>
                    <p className="h-full mt-6 text-base leading-7 text-gray-300">
                      {tier.description}
                    </p>
                  </div>
                  {tier.discount != 1 && (
                    <p className="absolute bg-yellow-300 text-black text-sm font-bold px-2 py-1 rounded-sm top-[15px] right-[15px]">
                      {Math.round((1 - tier.discount) * 100)}% off
                    </p>
                  )}
                  {/* <div className="flex flex-col flex-1 p-2">
                    <div className="flex flex-col justify-between flex-1 p-6 bg-gray-900 rounded-lg sm:p-8">
                      <ul role="list" className="space-y-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <Check
                                className="w-6 h-6 text-yellow-300"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-sm leading-6">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Button
            label="Purchase on dlabs store"
            customClassName="overflow-hidden sm:text-lg font-bold tracking-wide px-12 rounded-sm h-12 min-w-[250px]"
          />
        </div>
      </div>
    </div>
  )
}
