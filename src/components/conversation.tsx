import React from 'react'
import Request from './request-text'
import Response from './response-text'

export default function Conversation() {
  return (
    <div className='flex flex-col text-grey px-7 pt-6 pb-24 gap-4'>
      <Request text='Hello ChatGPT, how are you doing today?' />
      <Response text='Hi, how can I help you?' />
      <Request text='What is the best programming language?' />
      <Response text='There are many programming languages in the market that are used in designing and building websites, various applications and other tasks. All these languages are popular in their place and in the way they are used, and many programmers learn and use them.' />
      <Request text='Okay, thank you' />
    </div>
  )
}
