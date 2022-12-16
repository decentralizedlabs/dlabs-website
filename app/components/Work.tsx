// "use client"

// import { LazyMotion, m, domAnimation } from "framer-motion"

export default function Work() {
  return (
    <div className="pt-24 opacity-60">
      <p className="pb-12 text-lg">Our work</p>

      {/* <LazyMotion features={domAnimation}>
        <m.div
          animate={{ x: [null, 100, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity
          }}
        > */}
      <div className="flex gap-8">
        <div className="p-4 bg-yellow-300" />
        <div className="p-4 bg-yellow-300" />
        <div className="p-4 bg-yellow-300" />
      </div>
      {/* </m.div>
      </LazyMotion> */}
    </div>
  )
}
