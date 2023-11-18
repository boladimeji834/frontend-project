import React, { useState } from 'react'
import Image from 'next/image'
import mic from '@/assets/microphone-2.png'
import send from '@/assets/send-1.svg'
import 'typeface-nunito'
import { useDispatch, useSelector } from 'react-redux'
import { setChatState, setChat } from '@/store/chatReducer'
import { IChatObject, IState } from '@/data/data'

export default function Input() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector((state: IState) => state.chat.chat)

  const sendChat = (content: string) => {

    const newChat: IChatObject = {
      chatCategory: 1,
      content: content
    }

    const defResponse: IChatObject = {
      chatCategory: 2,
      content: `Hello! I appreciate your message. Currently, I'm undergoing development and can't respond in real-time. Your inquiry is important, and I'll get back to you as soon as I'm fully operational. If you have immediate concerns, please check back later. Thank you for your understanding and patience!`
    }

    dispatch(setChat([...chats, newChat, defResponse ]))
    dispatch(setChatState(true))
    setText('')
  }
  return (
    <div className='w-full px-6' style={{
        height: 56,
        position: 'absolute',
        bottom: 36,
        transform: 'translateX(-50%)',
        left: '50%',
    }}>
      <div className='h-full bg-light flex justify-between items-center' style={{
        boxShadow: '5px 4px 20px 0px rgba(0, 0, 0, 0.13)',
        borderRadius: 30
      }}>
        <input value={text} onChange={({ target }) => setText(target.value)} placeholder='Message ChatGPT' className='pl-5 border-0 text-base font-medium w-full' style={{
            outline: 0,
            fontFamily: 'nunito',
            color: '#9ca3af'
        }} />
        <div className='flex px-3.5' style={{
            gap: 7
        }}>
            <i onClick={() => text.length > 0 ? sendChat(text) : null } className='icon-button cursor-pointer'>
                <Image alt='send' src={send} style={{
                    width: '1.5rem'
                }} />
            </i>
        </div>
      </div>
    </div>
  )
}
