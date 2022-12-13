import { CollapsibleItem, NoteText } from "@components/ui"
import Logo from "@components/icons/Logo"
import { accounts } from "app/layout/components/Social/Social"
import { constants, envConstants } from "@utils/constants"

export default function SubmitFaqs() {
  return (
    <ul className="pt-12 space-y-6 text-left">
      <CollapsibleItem
        label="How many jobs can I request"
        detail={
          <>
            <p>
              As many as you want. Jobs are added to a queue and fulfilled based
              on submission order.
            </p>
            <p>
              Job requests cost 1{" "}
              <span className="inline-block w-2.5 h-2.5 mb-0">
                <Logo />
              </span>
              , so you just need enough credits to submit new ones (you can get
              more on the{" "}
              <a href={envConstants.slicerUrl} target="_blank" rel="noreferrer">
                dlabs store
              </a>
              ).
            </p>
            <p>
              The actual cost of each job will be calculated during the review
              stage.
            </p>
          </>
        }
      />
      <CollapsibleItem
        label="How do you calculate the cost of a job"
        detail={
          <>
            <p>
              Once submitted, we review jobs to estimate the time, effort and
              skills required to complete it.
            </p>
            <p>
              This estimate is to be considered indicative. We will periodically
              update it while working on it.
            </p>
            <p>
              Once completed, the finalized cost is communicated to you and
              credits are deducted from your account.
            </p>
            <NoteText
              text="You can get in touch with us anytime during the
                    process"
            />
          </>
        }
      />
      <CollapsibleItem
        label="Do I need to use Notion to fill in the job details"
        detail={
          <>
            <p>
              We suggest using the provided{" "}
              <a href={constants.template} target="_blank" rel="noreferrer">
                Notion document
              </a>{" "}
              to speed up the review phase. You can keep refining your request
              after submitting it, or ask us any question while filling it.
            </p>
            <p>
              However, if you wish to use another solution, you can also share
              the job details using a different link.
            </p>
          </>
        }
      />
      <CollapsibleItem
        label="I have a specific question"
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
