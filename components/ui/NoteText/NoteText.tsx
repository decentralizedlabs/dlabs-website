import Info from "@components/icons/Info"

type Props = {
  text: string | JSX.Element
  error?: boolean
}

const NoteText = ({ text, error }: Props) => {
  return (
    <p className={error ? "text-red-500" : "text-yellow-300"}>
      <span className="inline-block w-[18px] h-[18px] mr-2 -mb-1">
        <Info />
      </span>
      {text}
    </p>
  )
}

export default NoteText
