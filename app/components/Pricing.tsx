import Logo from "@components/icons/Logo"
import { Button } from "@components/ui"
import formatNumber from "@utils/formatNumber"
import PricingBackground from "./PricingBackground"
import Estimates from "./Estimates"
import { slicerUrl } from "@utils/constants"

const costPerCredit = 750

const tiers = [
  {
    id: "tier-s",
    name: "Small",
    href: "#",
    priceMonthly: 1,
    discount: 0,
    description: "For single tasks",
    features: ["Small projects", "Project estimates"]
  },
  {
    id: "tier-m",
    name: "Medium",
    href: "#",
    priceMonthly: 20,
    discount: 0.1,
    description: "For single projects",
    features: []
  },
  {
    id: "tier-l",
    name: "Large",
    href: "#",
    priceMonthly: 100,
    discount: 0.2,
    description: "For complex projects or long-term involvement",
    features: []
  }
]

export default function Pricing() {
  return (
    <div className="relative" id="pricing">
      <div className="absolute top-0 -z-10 left-1/2 w-[1280px] max-w-none -translate-x-1/2">
        <PricingBackground />
      </div>
      <div className="pt-32 overflow-hidden pb-96 lg:pt-40">
        <div className="relative mx-auto text-center max-w-7xl">
          <p className="pb-2 custom-heading">Credit packages</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Development that scales with you
          </h3>
          <p className="mt-6 text-lg leading-8 opacity-60">
            Purchase packages to get credits, then spend them to get requests
            done
          </p>
        </div>
      </div>
      <div className="flow-root">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto">
            <div className="grid max-w-xl grid-cols-1 gap-6 mx-auto lg:px-4 lg:max-w-none lg:grid-cols-3 lg:gap-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="relative flex flex-col rounded-md shadow-xl bg-black/50 backdrop-blur-xl ring-1 ring-yellow-300/60"
                >
                  <div className="flex flex-col h-full p-6 sm:p-10">
                    <p
                      className="text-lg font-bold leading-8 tracking-tight text-yellow-300"
                      id={tier.id}
                    >
                      {tier.name}
                    </p>
                    <div className="relative">
                      <p className="mt-5 text-3xl font-bold sm:text-4xl">
                        $
                        {formatNumber(
                          Math.round(
                            tier.priceMonthly *
                              costPerCredit *
                              (1 - tier.discount)
                          )
                        )}
                      </p>
                      {tier.discount != 0 && (
                        <p className="absolute top-0 w-full mx-auto text-sm text-gray-400 line-through">
                          ${formatNumber(tier.priceMonthly * costPerCredit)}
                        </p>
                      )}
                    </div>
                    <p className="mt-2 text-lg">
                      {tier.priceMonthly}
                      <span className="inline-block w-3 h-3 mt-0 ml-2">
                        <Logo />
                      </span>
                    </p>
                    <p className="flex items-center justify-center h-full mt-4 leading-7 text-gray-300 sm:mt-6">
                      {tier.description}
                    </p>
                  </div>
                  {tier.discount != 0 && (
                    <p className="absolute bg-yellow-300 text-black text-sm font-bold px-2 py-1 rounded-sm top-[15px] right-[15px]">
                      {Math.round(tier.discount * 100)}% off
                    </p>
                  )}
                  {tier.discount == 0.1 && (
                    <p className="absolute top-0 px-3 py-1 text-xs font-bold -translate-y-1/2 bg-black rounded-full left-[20px] ring-1 ring-yellow-300/60 text-yellow-300">
                      Most popular
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

        <div className="my-16">
          <Button
            label="Purchase on dlabs store"
            customClassName="overflow-hidden sm:text-lg font-bold tracking-wide px-12 rounded-sm h-12 min-w-[250px]"
            href={slicerUrl}
            external
          />
        </div>

        <Estimates />
      </div>
    </div>
  )
}
