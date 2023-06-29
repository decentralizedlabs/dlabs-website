import { CollapsibleItem, NoteText } from "@components/ui"
import Logo from "@components/icons/Logo"
import { accounts } from "app/layout/components/Social/Social"
import { constants, slicerUrl } from "@utils/constants"

export default function SubmitFaqs() {
  return (
    <ul className="pt-12 space-y-6 text-left">
      <CollapsibleItem
        label="How many jobs can I request"
        detail={
          <>
            <p>
              As many as you want. Requests are added to a queue and fulfilled
              based on submission order.
            </p>
            {/* <p>
              If you have no requests in progress,{" "}
              <b>the first request is free.</b>
            </p> */}
            {/* <p>
              If you want to submit multiple requests, excluding the first one
              each will cost 1 credit{" "}
              <span className="inline-block w-2.5 h-2.5 my-0">
                <Logo />
              </span>{" "}
              (you can get them on the{" "}
              <a href={slicerUrl} target="_blank" rel="noreferrer">
                dlabs store
              </a>
              ).
            </p> */}
            <p>
              Requests can be submitted for <b>free</b>. The actual cost of jobs
              is calculated during the review stage.
            </p>
          </>
        }
      />
      <CollapsibleItem
        label="How do you calculate the cost of requests"
        detail={
          <>
            <p>
              Once submitted, we review job requests to estimate their cost.
            </p>
            {/* <p>
              This estimate is to be considered indicative, and will be
              periodically updated while work is carried out.
            </p> */}
            <p>
              Once completed, the work is delivered and credits are deducted
              from your account.
            </p>
            <NoteText
              text={`You can get in touch with us anytime during the
                    process, via discord`}
            />
          </>
        }
      />
      <CollapsibleItem
        label="How do I provide the job details"
        detail={
          <>
            <p>
              We suggest using the provided{" "}
              <a href={constants.template} target="_blank" rel="noreferrer">
                template
              </a>{" "}
              to speed up the review phase. You can keep refining your request
              after submitting it.
            </p>
            <p>
              However, if you wish to use another solution, you can also share
              the job details using a different link.
            </p>
          </>
        }
      />
      {/* <CollapsibleItem
        label="How can I get a quote for a request"
        detail={
          <>
            <p>
              The credits{" "}
              <span className="inline-block w-2.5 h-2.5 my-0">
                <Logo />
              </span>{" "}
              necessary to complete a request are estimated after its
              submission. 
              We thus recommend to buy a credit package suitable to
              your needs on the{" "}
              <a href={slicerUrl} target="_blank" rel="noreferrer">
                dlabs store
              </a>{" "}
              and submit a request (if you have no requests in progress, the
              first one is free).
            </p>
            <p>
              Alternatively, for simple requests you can ask us directly on{" "}
              <a href={accounts.discord} target="_blank" rel="noreferrer">
                discord
              </a>
              .
            </p>
          </>
        }
      /> */}
      <CollapsibleItem
        label="I have a different question"
        detail={
          <>
            <p>
              Join the{" "}
              <a href={accounts.discord} target="_blank" rel="noreferrer">
                dlabs discord
              </a>{" "}
              and let&apos;s chat!
            </p>
          </>
        }
      />
    </ul>
  )
}
