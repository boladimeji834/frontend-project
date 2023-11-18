import React from 'react'
import { IChatComponentProp } from '@/data/data'

export default function Request(props: IChatComponentProp) {
  return (
    <div className='self-end justify-center flex items-center p-5 bg-primary' style={{
      minHeight: 54,
      maxWidth: 'calc(100% - 1.625rem)',
      minWidth: 54,
      borderRadius: '25px 0px 25px 25px'
    }}>
      <p className='text-sm font-medium text-light' style={{
        fontFamily: 'nunito'
      }}>
        {props.text}
      </p>
    </div>
  )
}
