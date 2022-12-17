// "use client"

// import { LazyMotion, m, domAnimation } from "framer-motion"

import Image from "next/image"
import slice from "public/works/slice.png"

const cardsList = [
  {
    name: "Slice",
    description: "Decentralized protocol for commerce and payments",
    type: "Protocol",
    image: slice,
    url: "https://slice.so"
  },
  {
    name: "Blunt Finance",
    description: "Fundraising solution built on Juicebox and Slice",
    type: "Protocol",
    image: slice,
    url: "https://dev.blunt.finance"
  },
  {
    name: "Merge to earn",
    description: "Reward system for open source development",
    type: "Github app",
    image: slice,
    url: "https://github.com/slice-so/merge-to-earn"
  },
  {
    name: "Uniswap Price Feed",
    description: "Price feed based on Uni V3 TWAP oracles",
    type: "Smart contract",
    image: slice,
    url: "https://github.com/slice-so/uniswap-v3-price-feed"
  }
]

export default function Work() {
  return (
    <div>
      <p className="py-10 text-lg font-bold opacity-60">Our works</p>

      {/* <LazyMotion features={domAnimation}>
        <m.div
          animate={{ x: [null, 100, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity
          }}
        > */}
      <div className="grid gap-4 lg:gap-8 sm:grid-cols-2">
        {cardsList.map((card) => (
          <a
            key={card.name}
            href={card.url}
            target="_blank"
            rel="noreferrer"
            className="relative rounded-sm group hover:text-white"
          >
            <Image
              src={card.image}
              fill={true}
              alt={card.name}
              className="z-[-10] object-contain"
            />
            <div className="flex items-end h-40 p-4 text-left duration-200 border border-gray-800 bg-black/70 group-hover:bg-black/50 sm:px-6 group-hover:backdrop-filter-none group-hover:border-yellow-300 backdrop-blur-[8px]">
              <div className="duration-200 group-hover:opacity-0">
                <div>
                  <p className="absolute top-[15px] right-[20px] font-bold text-xs text-yellow-300/80">
                    {card.type}
                  </p>
                  <p className="font-bold leading-8 lg:text-lg">{card.name}</p>
                  <p className="text-sm opacity-80">{card.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        className="inline-block mt-10 text-sm text-center text-gray-400 underline"
        href="https://github.com/slice-so"
        target="_blank"
        rel="noreferrer"
      >
        See more
      </a>
      {/* </m.div>
      </LazyMotion> */}
    </div>
  )
}

// TODO: Replace grid with framer-motion carousel
