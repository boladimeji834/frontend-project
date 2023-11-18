import React from 'react'
import Request from './request-text'
import Response from './response-text'
import { useSelector } from 'react-redux'
import { IState } from '@/data/data'

export default function Conversation() {
  const chats = useSelector((state: IState) => state.chat)
  console.log(chats)
  return (
    <div className='flex flex-col text-grey px-7 pt-6 pb-32 gap-4' style={{ minHeight: '100vh'}}>
      {
        chats.chat.map(({ chatCategory, content }) => {
          if (chatCategory === 1) {
            return (
              <Request key={content} text={content} />
            ) 
          } else if (chatCategory === 2) {
            return (
              <Response key={content} text={content} />
            )
          }
        })
      }
    </div>
  )
}
