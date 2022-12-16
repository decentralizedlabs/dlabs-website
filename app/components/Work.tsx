// "use client"

// import { LazyMotion, m, domAnimation } from "framer-motion"

const cardsList = [
  {
    title: "Slice",
    name: "Slice",
    image: "https://picsum.photos/200/300",
    link: "https://google.com"
  },
  {
    title: "Blunt Finance",
    name: "Blunt Finance",
    image: "https://picsum.photos/200/300",
    link: "https://google.com"
  },
  {
    title: "Slice",
    name: "Slice",
    image: "https://picsum.photos/200/300",
    link: "https://google.com"
  },
  {
    title: "Blunt Finance",
    name: "Blunt Finance",
    image: "https://picsum.photos/200/300",
    link: "https://google.com"
  },
  {
    title: "Slice",
    name: "Slice",
    image: "https://picsum.photos/200/300",
    link: "https://google.com"
  },
  {
    title: "Blunt Finance",
    name: "Blunt Finance",
    image: "https://picsum.photos/200/300",
    link: "https://google.com"
  }
]

export default function Work() {
  return (
    <div className="pt-24">
      <p className="pb-8 text-lg font-bold text-gray-400">Some of our work</p>

      {/* <LazyMotion features={domAnimation}>
        <m.div
          animate={{ x: [null, 100, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity
          }}
        > */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cardsList.map((card) => (
          <a
            key={card.title}
            className="py-4 pl-8 text-left border border-gray-800 rounded-sm hover:bg-gray-900 hover:border-yellow-300/60"
            href={card.link}
            target="_blank"
            rel="noreferrer"
          >
            {card.name}
          </a>
        ))}
      </div>
      {/* </m.div>
      </LazyMotion> */}
    </div>
  )
}

// TODO: Replace grid with framer-motion carousel
