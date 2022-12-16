"use client"

import { useEffect, useState } from "react"

export default function PricingBackgroundDynamic() {
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    loaded && (
      <>
        <rect
          x="480"
          y="160"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
        />
        <rect
          x="320"
          y="800"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <rect
          x="800"
          y="640"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <rect
          x="1120"
          y="480"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <rect
          x="1440"
          y="640"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <rect
          x="1760"
          y="960"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <rect
          x="2400"
          y="960"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <rect
          x="2080"
          y="320"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
        <rect
          x="1600"
          y="160"
          width="160"
          height="160"
          fill={Math.random() < 0.7 ? "#E3E3E3" : "#FDE047"}
          className="animate-pulse"
          style={{ animationDelay: `${Math.random()}s` }}
        />
      </>
    )
  )
}
