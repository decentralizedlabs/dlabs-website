import Logo from "@components/icons/Logo"
import { CollapsibleItem, NoteText } from "@components/ui"
import { constants, slicerUrl } from "@utils/constants"
import Link from "next/link"

export default function HomeFaqs() {
  return (
    <div>
      <h1>FAQs</h1>

      <ul className="max-w-screen-sm pt-12 mx-auto space-y-6 text-left">
        <CollapsibleItem
          label="Why not just hire a full-time developer"
          detail={
            <>
              <p>
                A full-time senior solidity developer can exceed $280,000 plus
                benefits. Aside from that, you may not always have enough work
                to keep them busy, so you&apos;re often paying for time you
                cannot utilize.
              </p>
              <p>
                In addition, web3 development often requires knowledge of smart
                contracts, EVM, systems design, backend, frontend and more.
                It&apos;s hard to find someone who can take care of it all.
              </p>
              <p>
                <b>dlabs is an all-in-one solution that scales with you.</b> Our
                flexible plans work regardless of the size of your business:{" "}
                <a
                  href={slicerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="highlight"
                >
                  get credits
                </a>{" "}
                based on your needs and submit requests anytime.
              </p>
            </>
          }
        />
        <CollapsibleItem
          label="How do I submit a job request"
          detail={
            <>
              <p>
                Requests can be submitted <Link href="/submit">here</Link>.
              </p>
              <p>To submit a request you will need to:</p>
              <ul>
                <li>
                  Complete your <Link href="/profile">profile</Link>
                </li>
                <li>
                  Prepare a document with the request details, for example on
                  Notion (you can use{" "}
                  <a href={constants.template} target="_blank" rel="noreferrer">
                    our template
                  </a>
                  )
                </li>
              </ul>
            </>
          }
        />
        <CollapsibleItem
          label="What are credits and how do I get them"
          detail={
            <>
              <p>
                dlabs credits{" "}
                <span className="inline-block w-2.5 h-2.5 my-0">
                  <Logo />
                </span>{" "}
                are used to pay for job requests. The amount of credits needed
                depends on the time, effort and skills required to complete each
                request.
              </p>
              <p>
                Credits can be purchased on the{" "}
                <a
                  href={slicerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="highlight"
                >
                  dlabs decentralized store on Slice
                </a>{" "}
                with different packages available.
              </p>
              <NoteText
                text="We review requests upon submission to provide an initial
              estimate of the credits required to complete them"
              />
            </>
          }
        />
        <CollapsibleItem
          label="How long does it take to complete a request"
          detail={
            <>
              <p>
                Most requests are completed in five days or less. However,
                complex ones can take longer.
              </p>
            </>
          }
        />
        <CollapsibleItem
          label="Who is behind dlabs"
          detail={
            <>
              <p>
                The project was started by{" "}
                <a
                  href="https://twitter.com/jj_ranalli"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jacopo
                </a>
                , a developer who has worked on several web3 projects.
              </p>
              <p>
                Most requests are directly completed by him or other dlabs
                collaborators. The development process is tailored to each
                request to ensure the highest standard of the delivered work.
              </p>
            </>
          }
        />
        <CollapsibleItem
          label="Can I get refunds"
          detail={
            <>
              <p>
                Due to the high-quality nature of the work, refunds are not
                possible.
              </p>
            </>
          }
        />
      </ul>
    </div>
  )
}
