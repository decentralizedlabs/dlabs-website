import Image from "next/image"
import { Button } from "@components/ui"
import Optimism from "./brandIcons/Optimism"
import Agora from "./brandIcons/Agora"
import Parcel from "./brandIcons/Parcel"
import astaria from "./brandIcons/astaria.png"
import olympus from "./brandIcons/olympus.png"
import slice from "./brandIcons/slice.png"
import blunt from "./brandIcons/blunt.png"
import polygon from "./brandIcons/polygon.png"

export default function SmartContracts() {
  const features = [
    {
      name: "Architecture design",
      description:
        "Whether starting from scratch or refining an existing contract, we ensure logic is optimal. This step also prepares your contract for audit, allowing the focus to be solely on security.",
      subText: "1-3 devs, including a lead protocol engineer",
      backgroundColor: "from-amber-900/30",
      textColor: "text-amber-300",
      color: "border-amber-300",
      colorFrom: "from-amber-300",
      colorTo: "to-amber-300"
    },
    {
      name: "Optimization",
      description:
        "We push your contract's efficiency to the limit, minimizing operational costs and gas fees for your users.",
      subText: "1-2 optimizoors",
      backgroundColor: "from-indigo-900/30",
      textColor: "text-indigo-300",
      color: "border-indigo-300",
      colorFrom: "from-indigo-300",
      colorTo: "to-indigo-300"
    },
    {
      name: "Security audit",
      description:
        "The audit process is aimed at identifying issues, and is carried out in collaboration with top security researchers. Includes a review of the implemented fixes and a detailed report.",
      subText: "at least 2 auditors, including a lead security researcher",
      backgroundColor: "from-emerald-900/30",
      textColor: "text-emerald-300",
      color: "border-emerald-300",
      colorFrom: "from-emerald-300",
      colorTo: "to-emerald-300"
    }
  ]

  return (
    <div>
      <p className="custom-heading">Smart contracts</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        Excellence from design to audit
      </h2>
      <p className="my-6 text-lg max-w-[560px] mx-auto leading-8 text-gray-400">
        Three packages suitable for any development stage, carried out by
        experienced solidity developers
      </p>

      <div className="mt-20 text-left max-w-screen-md mx-auto">
        {features.map((feature, i) => (
          <>
            <div
              key={feature.name}
              className={`relative px-6 py-8 border bg-gradient-to-br ${feature.color} ${feature.backgroundColor} to-black rounded-xl sm:items-center flex flex-col gap-6 sm:flex-row sm:px-8`}
            >
              <div className="sm:min-w-0 sm:flex-1">
                <h2 className={`text-2xl leading-8 ${feature.textColor}`}>
                  {i + 1 + ". " + feature.name}
                </h2>
                <p className="mt-2 leading-6 text-gray-300 text-sm sm:text-base sm:leading-7">
                  {feature.description}
                </p>
              </div>
              <p
                className={`text-gray-400 text-sm absolute text-right top-[100%] ${
                  i !== features.length - 1 ? "pl-14 " : ""
                }mt-2 right-0`}
              >
                Team: {feature.subText}
              </p>
            </div>
            {i !== features.length - 1 && (
              <div
                className={`h-20 w-[1px] ml-10 bg-gradient-to-b ${
                  feature.colorFrom
                } ${features[i + 1].colorTo}`}
              />
            )}
          </>
        ))}
      </div>

      <div className="mt-28 mb-20 max-w-screen-sm mx-auto">
        <h2 className="custom-heading text-gray-400">
          Protocols built / secured by our devs
        </h2>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 mx-4 sm:mx-0 gap-x-12 gap-y-12 opacity-40 pt-12">
          <div className="max-w-[140px] mx-auto">
            <Optimism />
          </div>
          <Image
            src={astaria}
            alt="astaria"
            className="object-contain w-full h-full px-4 mt-[1px] max-w-[140px] mx-auto"
          />
          <div className="pt-[3px] max-w-[140px] mx-auto">
            <Agora />
          </div>
          <Image
            src={olympus}
            alt="olympus"
            className="object-contain w-full h-full px-4 mt-[1px] max-w-[140px] mx-auto"
          />
          <Image
            src={slice}
            alt="slice"
            className="object-contain w-full h-full px-6 max-w-[140px] mx-auto mt-[1px]"
          />
          <Image
            src={blunt}
            alt="blunt"
            className="object-contain w-full h-full px-6 mt-0.5 max-w-[140px] mx-auto"
          />
          <Image
            src={polygon}
            alt="polygon"
            className="object-contain w-full h-full px-2 mt-1 hidden sm:block max-w-[140px] mx-auto"
          />
          <div className="max-w-[140px] mx-auto px-6 mt-2 hidden sm:block">
            <Parcel />
          </div>
        </div>
      </div>

      <div className="my-16">
        <Button
          label="Get a quote"
          customClassName="overflow-hidden sm:text-lg font-bold tracking-wide px-12 rounded-sm h-12 min-w-[250px]"
          href="/submit"
        />
      </div>
    </div>
  )
}
