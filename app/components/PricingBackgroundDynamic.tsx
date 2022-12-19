"use client"

import { useEffect, useState } from "react"

export default function PricingBackgroundDynamic() {
  const [dynamicProps, setDynamicProps] = useState(
    Array(9)
      .fill(0)
      .map(() => ({
        fill: "transparent",
        animationDelay: "0s"
      }))
  )

  useEffect(() => {
    setDynamicProps(
      Array(9)
        .fill(0)
        .map(() => ({
          fill: Math.random() < 0.75 ? "#808080" : "#FDE047",
          animationDelay: `${Math.random()}s`
        }))
    )
  }, [])

  return (
    <>
      <rect
        x="480"
        y="160"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[0].fill}
        style={{
          animationDelay: dynamicProps[0].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="320"
        y="800"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[1].fill}
        style={{
          animationDelay: dynamicProps[1].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="800"
        y="640"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[2].fill}
        style={{
          animationDelay: dynamicProps[2].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="1120"
        y="480"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[3].fill}
        style={{
          animationDelay: dynamicProps[3].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="1440"
        y="640"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[4].fill}
        style={{
          animationDelay: dynamicProps[4].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="1760"
        y="960"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[5].fill}
        style={{
          animationDelay: dynamicProps[5].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="2400"
        y="960"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[6].fill}
        style={{
          animationDelay: dynamicProps[6].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="2080"
        y="320"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[7].fill}
        style={{
          animationDelay: dynamicProps[7].animationDelay,
          transform: "translateZ(0)"
        }}
      />
      <rect
        x="1600"
        y="160"
        width="160"
        height="160"
        className="md:animate-pulse"
        fill={dynamicProps[8].fill}
        style={{
          animationDelay: dynamicProps[8].animationDelay,
          transform: "translateZ(0)"
        }}
      />
    </>
  )
}
