export const runtime = "nodejs"
import { markdownToHtml } from "@lib/markdownToHtml"
import { Button, CollapsibleItem } from "@components/ui"

type Props = {
  label: string
  isDev: boolean
  content: string
}

export default async function RolesRender({ label, content, isDev }: Props) {
  const html = await markdownToHtml(content)

  return (
    <CollapsibleItem
      wrapperClassName="my-0"
      label={<b>{label}</b>}
      detail={
        <>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          <p>
            To apply send us:
            <ul>
              <li>
                A brief description of your interest in the role and your
                experience in the web3 space
              </li>
              {isDev && (
                <li>
                  Your github account, as well as any public codebase you have
                  contributed to which is relevant for the role
                </li>
              )}
              <li>Your resume (optional)</li>
            </ul>
          </p>
          <p>
            We are an equal opportunity employer and welcome applications from
            all qualified candidates.
          </p>
          <Button
            wrapperClassName="text-center mt-10 mb-6"
            label="Apply"
            href={`mailto:jobs@dlabs.app?subject=${label} application`}
          />
        </>
      }
    />
  )
}
