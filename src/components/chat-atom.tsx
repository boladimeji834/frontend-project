import 'typeface-nunito'

interface prop {
  text: string
}

export default function ChatAtom({ text }: prop) {
  return (
    <button className="h-14 w-full flex justify-center items-center bg-light-70" style={{
        borderRadius: 30
    }}>
      <p className='text-base font-medium text-grey-text' style={{
        fontFamily: 'nunito'
      }}>{text}</p>
    </button>
  )
}
