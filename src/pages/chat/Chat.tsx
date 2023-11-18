import React, { useEffect, useState } from 'react'
import ChatHeader from '@/components/chat-header'
import Input from '@/components/input-field'
import ChatTemplate from '@/components/chat-template'
import Conversation from '@/components/conversation'
import useAI from '../api/useAI'

export default function Chat() {
  const [chatStatus, setChatStatus] = useState(true)
  const res = useAI()
  console.log(res)
  return (
    <main className="h-screen flex justify-center items-center p-5 my-16">
      <div className='mobile bg-light'>
        <ChatHeader />
          { chatStatus ? <Conversation /> : <ChatTemplate /> }
        <Input />
      </div>
    </main>
  )
}
