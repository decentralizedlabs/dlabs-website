import Logo from "@components/icons/Logo"
import { accounts } from "app/layout/components/Social/Social"

type Props = {
  availableUnits: number
}

export default function SubmitDescription({ availableUnits }: Props) {
  return (
    <div className="prose text-left">
      <ol>
        {availableUnits == 0 && (
          <li>
            Visit the{" "}
            <a href="/" target="_blank" rel="noreferrer">
              {/* TODO: Add link */}
              dlabs store
            </a>{" "}
            to get{" "}
            <span className="inline-block w-3 h-3 mb-0">
              <Logo />
            </span>{" "}
            credits
          </li>
        )}
        <li>
          Join the{" "}
          <a href={accounts.discord} target="_blank" rel="noreferrer">
            dlabs discord
          </a>{" "}
          so we can get in touch
        </li>
        <li>
          Duplicate{" "}
          <a href="/" target="_blank" rel="noreferrer">
            {/* TODO: Add link */}
            this Notion document
          </a>{" "}
          and fill in the job details
        </li>
        <li>Enable sharing, paste the document link below and submit</li>
      </ol>
      <p>
        Once we receive your request, we&apos;ll provide an estimate for the job
        and keep you updated on its progress.
      </p>
    </div>
  )
}
