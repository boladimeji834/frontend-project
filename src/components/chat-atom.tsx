import { useDispatch, useSelector } from "react-redux"
import { setChatState, setChat } from "@/store/chatReducer"
import { IState, IChatObject } from "@/data/data"
import 'typeface-nunito'

interface prop {
  text: string
}

export default function ChatAtom({ text }: prop) {
  const initChat = useSelector((state: IState) => state.chat)
  const dispatch = useDispatch()

  const request: IChatObject = {
    chatCategory: 1,
    content: text
  }

  const defResponse: IChatObject = {
    chatCategory: 2,
    content: `Hi, I can't repond at the moment as I am still under development.. \r\n Sorry for any inconviniencies caused.`
  }

  const initateConversation = () => {
    dispatch(setChatState(true))
    dispatch(setChat([...initChat.chat, request, defResponse]))
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
