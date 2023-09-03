// "use client"

// import { LazyMotion, m, domAnimation } from "framer-motion"

import Image from "next/image"
import slice from "public/works/slice.png"
import agora from "public/works/agora.png"
import blunt from "public/works/blunt.png"
import mte from "public/works/mte.png"
import gh from "public/works/gh.png"
import op from "public/works/op.png"
// import dlabs from "public/og_image.png"

const cardsList = [
  {
    name: "Slice",
    description: "Decentralized protocol for commerce and payments",
    type: "Protocol | Application | Subgraph",
    image: slice,
    url: "https://slice.so"
  },
  {
    name: "Agora",
    description: "The home of governance participants",
    type: "Protocol | Application",
    image: agora,
    url: "https://nounsagora.com"
  },
  {
    name: "Optimism governor",
    description: "Onchain governance contracts for Optimism",
    type: "Protocol | Smart contract",
    image: op,
    url: "https://github.com/voteagora/optimism-gov/"
  },
  {
    name: "Alligator",
    description: "Liquid delegation protocol for onchain governance",
    type: "Protocol | Smart contract",
    image: gh,
    url: "https://github.com/voteagora/liquid-delegator/tree/main"
  },
  {
    name: "blunt",
    description: "Fundraising protocol based on Juicebox",
    type: "Protocol | Application",
    image: blunt,
    url: "https://blunt.fund"
  },
  {
    name: "Uniswap Price Feed",
    description: "Price feed based on Uni V3 TWAP oracles",
    type: "Smart contract",
    image: gh,
    url: "https://github.com/slice-so/uniswap-v3-price-feed"
  }
  // {
  //   name: "Merge to earn",
  //   description: "Reward system for open source development",
  //   type: "Github app",
  //   image: mte,
  //   url: "https://github.com/slice-so/merge-to-earn"
  // },
  // {
  //   name: "Slice subgraph",
  //   description: "Decentralized storage based on Slice on-chain events",
  //   type: "Subgraph",
  //   image: gh,
  //   url: "https://github.com/slice-so/subgraph"
  // },
  // {
  //   name: "dlabs",
  //   description: "The website you're on right now",
  //   type: "Website",
  //   image: dlabs,
  //   url: "https://github.com/decentralizedlabs/dlabs-website"
  // }
]

export default function Work() {
  return (
    <div>
      <p className="py-10 text-lg font-bold opacity-60">Some of our works</p>

      {/* <LazyMotion features={domAnimation}>
        <m.div
          animate={{ x: [null, 100, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity
          }}
        > */}
      <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardsList.map((card, i) => (
          <a
            key={card.name}
            href={card.url}
            target="_blank"
            rel="noreferrer"
            className={`${
              i > 3 ? "hidden lg:block" : ""
            } relative duration-200 border border-gray-800 rounded-sm group hover:text-white hover:border-yellow-300 bg-black/70 hover:bg-black/0`}
          >
            <Image
              src={card.image}
              fill={true}
              alt={card.name}
              className="z-[-10] object-contain"
            />
            <div className="flex items-end min-h-[6rem] sm:h-32 p-4 text-left duration-200 group-hover:opacity-0 backdrop-blur-[8px]">
              <div>
                <p className="absolute top-[15px] right-[20px] font-bold text-xs text-yellow-300/80">
                  {card.type}
                </p>
                <p className="font-bold leading-8">{card.name}</p>
                <p className="text-sm text-gray-400">{card.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* <a
        className="inline-block mt-10 text-sm text-center text-gray-400 underline"
        href="https://github.com/slice-so"
        target="_blank"
        rel="noreferrer"
      >
        See more
      </a> */}
      {/* </m.div>
      </LazyMotion> */}
    </div>
  )
}

// TODO: Replace grid with framer-motion carousel
