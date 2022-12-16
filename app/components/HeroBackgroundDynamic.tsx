"use client"

import { useEffect, useState } from "react"

export default function HeroBackgroundDynamic() {
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    loaded && (
      <>
        <path
          d="M702 270L780.808 315.5V406.5L702 452L623.192 406.5V315.5L702 270Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M780 675L858.808 720.5V811.5L780 857L701.192 811.5V720.5L780 675Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M1872 135L1950.81 180.5V271.5L1872 317L1793.19 271.5V180.5L1872 135Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M2340 675L2418.81 720.5V811.5L2340 857L2261.19 811.5V720.5L2340 675Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M1404 945L1482.81 990.5V1081.5L1404 1127L1325.19 1081.5V990.5L1404 945Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M1248 405L1326.81 450.5V541.5L1248 587L1169.19 541.5V450.5L1248 405Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M468 945L546.808 990.5V1081.5L468 1127L389.192 1081.5V990.5L468 945Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M403 540L481.808 585.5V676.5L403 722L324.192 676.5V585.5L403 540Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M1794 810L1872.81 855.5V946.5L1794 992L1715.19 946.5V855.5L1794 810Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M2028 405L2106.81 450.5V541.5L2028 587L1949.19 541.5V450.5L2028 405Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <path
          d="M2496 135L2574.81 180.5V271.5L2496 317L2417.19 271.5V180.5L2496 135Z"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
      </>
    )
  )
}
