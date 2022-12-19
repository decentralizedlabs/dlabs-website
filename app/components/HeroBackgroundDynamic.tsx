"use client"

import { useEffect, useState } from "react"

export default function HeroBackgroundDynamic() {
  const [dynamicProps, setDynamicProps] = useState(
    Array(10)
      .fill(0)
      .map(() => ({
        fill: "transparent",
        animationDelay: "0s"
      }))
  )

  useEffect(() => {
    setDynamicProps(
      Array(10)
        .fill(0)
        .map(() => ({
          fill: Math.random() < 0.75 ? "#808080" : "#FDE047",
          animationDelay: `${Math.random()}s`
        }))
    )
  }, [])

  return (
    <g
      className={`transition-opacity duration-1000 ${
        dynamicProps[0].fill == "transparent" ? "opacity-0" : "opacity-100"
      }`}
    >
      <path
        d="M702 270L780.808 315.5V406.5L702 452L623.192 406.5V315.5L702 270Z"
        fill={dynamicProps[0].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[0].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M780 675L858.808 720.5V811.5L780 857L701.192 811.5V720.5L780 675Z"
        fill={dynamicProps[1].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[1].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M1872 135L1950.81 180.5V271.5L1872 317L1793.19 271.5V180.5L1872 135Z"
        fill={dynamicProps[2].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[2].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M2340 675L2418.81 720.5V811.5L2340 857L2261.19 811.5V720.5L2340 675Z"
        fill={dynamicProps[3].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[3].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M1404 945L1482.81 990.5V1081.5L1404 1127L1325.19 1081.5V990.5L1404 945Z"
        fill={dynamicProps[4].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[4].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M1248 405L1326.81 450.5V541.5L1248 587L1169.19 541.5V450.5L1248 405Z"
        fill={dynamicProps[5].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[5].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M468 945L546.808 990.5V1081.5L468 1127L389.192 1081.5V990.5L468 945Z"
        fill={dynamicProps[6].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[6].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M390 540L468.808 585.5V676.5L390 722L311.192 676.5V585.5L390 540Z"
        fill={dynamicProps[7].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[7].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M1794 810L1872.81 855.5V946.5L1794 992L1715.19 946.5V855.5L1794 810Z"
        fill={dynamicProps[8].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[8].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M2028 405L2106.81 450.5V541.5L2028 587L1949.19 541.5V450.5L2028 405Z"
        fill={dynamicProps[9].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[9].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <path
        d="M2496 135L2574.81 180.5V271.5L2496 317L2417.19 271.5V180.5L2496 135Z"
        fill={dynamicProps[0].fill}
        className="animate-pulse"
        style={{
          animationDelay: dynamicProps[0].animationDelay,
          transform: "translateZ(0)"
        }}
      />
    </g>
  )
}
