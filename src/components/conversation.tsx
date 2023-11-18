import React from 'react'
import Request from './request-text'
import Response from './response-text'

export default function Conversation() {
  return (
    <div className='flex flex-col text-grey px-7 pt-6 pb-24 gap-4'>
      <Request text='Hello ChatGPT, how are you doing today?' />
      <Response text='Hi, how can I help you?' />
    </div>
  )
}
