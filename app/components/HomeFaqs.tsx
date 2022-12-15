import Logo from "@components/icons/Logo"
import { CollapsibleItem, NoteText } from "@components/ui"
import { envConstants } from "@utils/constants"
import Link from "next/link"

export default function HomeFaqs() {
  return (
    <ul className="max-w-screen-sm pt-12 mx-auto space-y-6 text-left">
      <CollapsibleItem
        label="Why not just hire a full-time developer?"
        detail={
          <>
            <p>
              A full-time senior solidity developer can exceed $200,000 plus
              benefits. Aside from that, you may not always have enough work to
              keep them busy, so you're often paying for time you cannot
              utilize.
            </p>
            <p>
              Moreover, web3 development often requires knowledge of smart
              contracts, EVM, systems design, backend, frontend and more. It's
              hard to find someone who can take care of it all.
            </p>
            <p>
              <b>Dlabs is an all-in-one solution that scales with you.</b> Our
              flexible plans work regardless of the size of your business:{" "}
              <a
                href={envConstants.slicerUrl}
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
        label="How do I submit a job request?"
        detail={
          <>
            <p>
              Requests can be submitted <Link href="/submit">here</Link>.
            </p>
            <p>Before submitting a request, you need to:</p>
            <ul>
              <li>Complete your profile (billing and contact info)</li>
              <li>
                Get{" "}
                <span className="inline-block w-2.5 h-2.5 my-0">
                  <Logo />
                </span>{" "}
                credits on the{" "}
                <a
                  href={envConstants.slicerUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  dlabs store
                </a>
              </li>
              <li>Submit a link containing the request details</li>
            </ul>
          </>
        }
      />
      <CollapsibleItem
        label="What are credits and how do I get them?"
        detail={
          <>
            <p>
              Credits are the dlabs currency used to pay for request. Each
              request requires a number of credits{" "}
              <span className="inline-block w-2.5 h-2.5 my-0">
                <Logo />
              </span>{" "}
              depending on the time, effort and skills required to complete it.
            </p>
            <p>
              Credits can be purchased on the{" "}
              <a
                href={envConstants.slicerUrl}
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
              estimate of the credits required"
            />
          </>
        }
      />
      <CollapsibleItem
        label="How long does it take to complete a request?"
        detail={
          <>
            <p>
              Most requests are completed in five days or less. However, complex
              ones can take longer.
            </p>
          </>
        }
      />
      <CollapsibleItem
        label="Who is behind dlabs?"
        detail={
          <>
            <p>
              Decentralized labs was started by{" "}
              <a
                href="https://twitter.com/jj_ranalli"
                target="_blank"
                rel="noreferrer"
              >
                Jacopo
              </a>{" "}
              after working on several web3 projects.
            </p>
            <p>
              Most requests are directly completed by him, or alternatively by
              other dlabs collaborators. He will directly oversee development of
              all work to warrant the highest standard of the delivered work.
            </p>
          </>
        }
      />
      <CollapsibleItem
        label="Can I get a refund?"
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
  )
}
