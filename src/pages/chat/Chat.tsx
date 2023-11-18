import React, { useEffect, useState } from 'react'
import ChatHeader from '@/components/chat-header'
import { useSelector } from 'react-redux'
import Input from '@/components/input-field'
import ChatTemplate from '@/components/chat-template'
import Conversation from '@/components/conversation'
import useAI from '../../hooks/useAI'

export default function Chat() {
  const chatState = useSelector((state: any) => state.chat)
  // const res = useAI()
  console.log(chatState)
  // console.log(res)
  return (
    <main className="h-screen flex justify-center items-center p-md-5 my-md-16">
      <div className='mobile md:rounded-3xl h-screen bg-light'>
        <ChatHeader />
          { chatState.conversationInitiated ? <Conversation /> : <ChatTemplate /> }
        <Input />
      </div>
    </main>
  )
}
