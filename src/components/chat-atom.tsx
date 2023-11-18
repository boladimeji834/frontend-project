import { useDispatch, useSelector } from "react-redux"
import { setChatState, setChat } from "@/store/chatReducer"
import 'typeface-nunito'

interface prop {
  text: string
}

export default function ChatAtom({ text }: prop) {
  const initChat = useSelector((state: any) => state.chat.chat)
  const dispatch = useDispatch()

  const initateConversation = () => {
    dispatch(setChatState(true))
    dispatch(setChat([...initChat, text]))
  }
  return (
    <button onClick={() => initateConversation()} className="h-14 w-full flex justify-center items-center bg-light-70" style={{
        borderRadius: 30
    }}>
      <p className='text-base font-medium text-grey-text' style={{
        fontFamily: 'nunito'
      }}>{text}</p>
    </button>
  )
}
